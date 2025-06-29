import mongoose from "mongoose";
import validator from "validator"
const messageSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, "Name Required"],
        minLength:[3,"Name must contain at least 3 characters!"]
    },
    email:{
        type:String,
        required:[true, "Email Required"],
        validate:[validator.isEmail, "Please provide Valid Email"]
    },
    subject:{
        type:String,
        required:[true, "Subject Required"],
        minLength:[5, "Subject must be contain atleast 5 charecters."]
    },
    message:{
        type:String,
        required:[true, "Message Required"],
        minLength:[10, "Message must be contain atleast 10 charecters."]
    }
})
export const Message = mongoose.model("Message", messageSchema)