const mongoose = require('mongoose');
const bcrypt =require("bcryptjs")
const userSchema = mongoose.Schema(
  {
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phonenumber: { type: Number, required: true },
    confirm_code: { type: Number },
    bvn: { type: Number },
    city: { type: String },
    home_address: { type: String },
    tPin: { type: Number},
    nin: { type: Number},
    school: { type: String},
    state: { type: String},
    profile_pics: { type: String},
    accountNo:{type:Number},
    password:{type:String},
    history:Array,
    accountBalance:{type:Number},
    loan:Array,
    fundAmount:{type:Number},
    goal:{type:Array},
    totalSpending:{ type: Number},
  },
  {
    timestamps: true,
  }
);
userSchema.methods.validatePassword= function(password, callback){
  bcrypt.compare(password, this.password,(err,same)=>{
    if(!err){
      callback(err,same)
    }else{
      next()
    }
  })
}
const userModel = mongoose.model('pennywise_tb', userSchema);

module.exports = userModel;


