const express = require('express')
const userCtrl = require('../controllers/userControllers')
    //const multer = require('../multer-config')
    //const validator = require('../validationsCheck/validationFilesRequire')
const router = express.Router();
//  const verifyToken = require('../accessControl/verifyToken')
//const verifyToken = require('../accessControl/authToken')



//User routes

const userRouter = new express.Router();

userRouter.get('/users/', userCtrl.getUsers);

module.exports = userRouter