const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
router.post('/signup/infostone', userController.signUpStOne);
router.post('/verifycode', userController.confirmCode);
router.post('/personalDetails/:currentUser', userController.personalDetails);
router.post('/uploadimage/:currentUser', userController.uploadImage);
router.post('/genaccountno/:currentUser', userController.genAccountNo);
router.get('/getuser/:currentUser', userController.getUser);
router.post('/setpassword/:currentUser', userController.setPassword)
router.post('/login',userController.login);
router.get('/dashboard',userController.dashboard)
router.post("/fundaccount/:currentUser", userController.fundAccount)
router.get("/getAllUsers/:currentUser", userController.getAllUser)
router.post("/transfer/:userId", userController.transfer)
router.post("/setgoal/:currentUser", userController.setGoal)
router.get("/getAllGoal/:currentUser", userController.getAllGoal)
router.post("/fundgoal/:currentUser", userController.fundGoal)

module.exports = router;
