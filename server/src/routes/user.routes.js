import express from "express"
import { createUser, deleteUser, getSpecificUser, getUsers, updateUser } from "../controllers/user.controller.js"
// import { createUser, deleteUser, getSpecifcUser, getUsers, updateUser } from "../controllers/array_user.js"


const router = express.Router()

router.get("/",getUsers)
router.get("/:id",getSpecificUser)
router.post("/",createUser)
router.put("/:id",updateUser)
router.delete('/:id',deleteUser)

export default router