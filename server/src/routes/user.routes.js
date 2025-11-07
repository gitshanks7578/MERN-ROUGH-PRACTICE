import express from "express"
import {forgetPassword, login, logout, post, registerUser, removeUser } from "../controllers/user.controller.js"
// import { createUser, deleteUser, getSpecifcUser, getUsers, updateUser } from "../controllers/array_user.js"
import { verifyJwt } from "../middlewares/auth.middleware.js"
import {sendEmail,verifyToken} from "../middlewares/sendEmail.js"
const router = express.Router()

// router.get("/",getUsers)
// router.get("/:id",getSpecificUser)
// router.post("/",createUser)
// router.put("/:id",updateUser)
// router.delete('/:id',deleteUser)

// router.post("/veriyEmail",verify_email)
router.post("/register",registerUser)
router.post("/login",login)
router.post("/logout",verifyJwt,logout)

//this way we'll need to type email each time
//in next project we'll introduce sessiotoken
router.post("/forgetPassword/send", sendEmail);          // Step 1
router.post("/forgetPassword/verify", verifyToken);      // Step 2
router.post("/forgetPassword/reset", forgetPassword);    //step 3

router.post("/removeUser",verifyJwt,removeUser)


router.post("/post",verifyJwt,post)

export default router