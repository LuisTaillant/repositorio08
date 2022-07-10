import express from 'express'
import * as userController from '../controllers/user.controller.js'



const userRouter = express.Router();

userRouter.post('/login', userController.login) //  api/user/login
userRouter.get('/logout', userController.logout)
userRouter.post('/signUp', userController.signUp)
userRouter.post('/verify', userController.verifyToken)


export default userRouter
