import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email : {
        type : String,
        required : true,
        unique : true
    },

    firstName : {
        type : String,
        required : true
    },

    lastName : {
        type : String,
        required : true
    },

    role : {
        type : String,
        required : false,
        default : "user"
    },

    password : {
        type : String,
        required : true
    },

    phone : {
        type : String,
        required : false,
        defualt : "Not given"
    },

    isDisabled : {
        type : Boolean,
        required : false,
        defualt :  false
    },

    isEmailVerifid : {
        type : Boolean,
        required : false,
        defualt : false
    }
})

const User = mongoose.model("users",userSchema)

export default User;