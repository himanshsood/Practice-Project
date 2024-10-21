const express=require("express")
const mongoose=require("mongoose")

const app=express();


mongoose.connect('mongodb://127.0.0.1:27017/practice-project', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


app.use(express.json())

const schema=new mongoose.Schema({
    name:String,
    age:Number
})

const User=mongoose.model('User',schema)


app.get("/",(req,res)=>{
    res.send("hello world");
})

app.post("/addUser",(req,res)=>{
    const newUser=new User({
        name:req.body.name,
        age:req.body.age
    })

    newUser.save().then(()=>{
        console.log("User has been saved")
    })
})

app.delete("/deleteUser/:id", (req, res) => {
    const id = req.params.id;

    User.findByIdAndDelete(id)
        .then((result) => {
            if (result) {
                res.status(200).send(`User with id ${id} deleted successfully`);
            } else {
                res.status(404).send(`User with id ${id} not found`);
            }
        })
        .catch((error) => {
            console.log("Error deleting user", error);
            res.status(500).send("Error deleting user");
        });
});





app.listen(3000,()=>{
    console.log("Server has started on port 3000")
})