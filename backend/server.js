import express from "express"
import cors from "cors"
import { connectDb } from "./config/db.js"
import userRouter from "./routes/userRoute.js"
import 'dotenv/config'


//app config
const app = express()
const port = 5000

//middleware
app.use(express.json())
app.use(cors())
//db connection
connectDb();

//api endpoints
app.use("/api/user",userRouter)

app.get("/",(req,res)=>{
    res.send("Api working")
})

app.listen(port,()=>{
console.log(`Server is running on port https://localhost:${port}`)
})