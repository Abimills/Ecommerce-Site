import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
      name:{
            type: String,
            required:[true,"Please add a Name"]
      },
      role:{
            type: String,
            default: 'user'
      },
      email:{
           unique : true,
            type: String,
            required:[true,"Please add an email"]
      },
      password:{
            type: String,
            required:[true,"Please add a password"]
      },
      
},
{timestamps: true},
)

const User = mongoose.model("User",userSchema);
export default User;