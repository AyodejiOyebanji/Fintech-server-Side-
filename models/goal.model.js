const mongoose = require('mongoose');
const goalSchema= mongoose.Schema(
    {
      goal:{ type: String, required: true},
      goalAmount:{ type: Number, required: true},
      goalsavedamount:{type: Number, required: true},
      deadline:{ type: String, required: true},
      goalId:{type: Number,},
      userId:{type:String},
      userEmail:{type:String},
      
  
  
    },
    {
      timestamps: true,
    }
  )
  const goalModel = mongoose.model('goal_tb', goalSchema);
  module.exports = goalModel;