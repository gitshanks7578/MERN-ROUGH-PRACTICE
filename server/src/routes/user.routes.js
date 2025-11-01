import express from "express"
import { createUser, deleteUser, getSpecificUser, getUsers, login, logout, post, registerUser, updateUser } from "../controllers/user.controller.js"
// import { createUser, deleteUser, getSpecifcUser, getUsers, updateUser } from "../controllers/array_user.js"
import { verifyJwt } from "../middlewares/auth.middleware.js"

const router = express.Router()

router.get("/",getUsers)
router.get("/:id",getSpecificUser)
router.post("/",createUser)
router.put("/:id",updateUser)
router.delete('/:id',deleteUser)

router.post("/register",registerUser)
router.post("/login",login)
router.post("/logout",verifyJwt,logout)
router.post("/post",verifyJwt,post)
export default router