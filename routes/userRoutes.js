const express = require('express')
const userCtrl = require('../controllers/userControllers')
const router = express.Router();

//User routes

const userRouter = new express.Router();

userRouter.get('/users/', userCtrl.getUsers);
userRouter.get('/users/:id', userCtrl.getUserById);

module.exports = userRouter