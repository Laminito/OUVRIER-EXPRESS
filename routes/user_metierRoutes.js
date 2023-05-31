const express = require('express')
const user_metierCtrl = require('../controllers/user_metierControllers')
const router = express.Router();

//User_Metier routes

const userRouter = new express.Router();

userRouter.get('/users/metiers/', user_metierCtrl.getAllUsers_Metiers);

module.exports = userRouter