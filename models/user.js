import {Schema,model,models} from "mongoose";
import { stringify } from "postcss";

const userSchema = new Schema({
    email : {
        type : String,
        required : [true,"email is required"],
        unique : [true,"user already exists"]
    },
    name : {
        type : String,
        required : [true,"name is required"]

    },
    image :{
        type : String,
    }
})

const User = models.User || model('User',userSchema);
export default User;
