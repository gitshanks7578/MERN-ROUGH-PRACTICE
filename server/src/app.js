import mongoose from "mongoose"
import express, { urlencoded } from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import router from "./routes/user.routes.js"
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())
app.use(cookieParser())

app.get("/",(req,res)=>{
    res.send("hello")
})

// app.get("api/v1/users",router) wrong
// mounts a router object on a base path 
app.use("/api/v1/users",router) 
export default app