const express = require('express')
const user_statutCtrl = require('../controllers/user_statutControllers')
const router = express.Router();

//User_Statut routes

const userRouter = new express.Router();

userRouter.get('/users-statuts/', user_statutCtrl.getAllUsers_Statuts);

module.exports = userRouter