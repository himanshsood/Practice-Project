const express = require ("express")
const connectDb = require("./config/dbConnection")
const mongoose=require("mongoose")
const errorHandler = require("./middleware/errorHandler")

const cors = require("cors")

//env file config
const dotenv=require("dotenv")
dotenv.config();



// connectDb()


const app = express()
const port = process.env.PORT || 5000

app.use(express.json())
app.use(cors())
app.set("view engine", "hbs");

app.use(errorHandler)







mongoose.connect('mongodb://127.0.0.1:27017/HealthCare System', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


const mySchema=new mongoose.Schema({
    name:String,
    age:Number
})

const User= mongoose.model('User',mySchema)



















app.get("/", (req,res)=>{
    res.send("Hello World")
})

app.get("/home",(req,res)=>{

    res.render("home",{

    })
})

app.get("/users",(req,res)=>{
    res.render("users",{

        people:[
            {
                username:"himansh",
                age:20
            },
            {
                username:"mahajan",
                age:21
            }
        ]
        
        
    })
})


app.listen(port, ()=>{
    console.log("Server is running on port 3001")
})