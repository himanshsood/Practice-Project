const mongoose=require("mongoose")

const userSchema=mongoose.Schema(

    {
        email:{
            type:String,
            require:[true,"please add your email"]
        },
        firstname:{
            type:String,
            require:[true,"please add your name"]
        },
        lastname:{
            type:String,
            require:[true,"please add your lastname"]
        },
        age:{
            type:Number,
            require:[true,"please add your age"]
        },
        bloodgroup:{
            type:String,
            require:[true,"please add your bloodgroup"]
        },
        gender:{
            type:String,
            require:[true,"please add your gender"]
        },
        phonenumber:{
            type:Number,
            require:[true,"please add your phonenumber"]
        },
        password:{
            type:String,
            require:[true,"please add your password"]
        }
    


    },
    {
        timestamps:true,
    }

)

const User=mongoose.model('User',userSchema)