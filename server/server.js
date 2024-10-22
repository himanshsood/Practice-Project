const express = require ("express")
const connectDb = require("./config/dbConnection")
// const errorHandler = require("./middleware/errorHandler")

const cors = require("cors")

//env file config
const dotenv=require("dotenv")
dotenv.config();



connectDb()
const app = express()
const port = process.env.PORT || 5000

app.use(express.json())
app.use(cors())
// app.use(errorHandler)

app.get("/", (req,res)=>{
    res.send("Hello World")
})


app.listen(port, ()=>{
    console.log("Server is running on port 5000")
})