import User from "../models/Users.js"
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
export const getUsers = async(req,res) => {
      try {
            const users = await User.find();
            res.status(200).json({success: true,count : users.length,msg:"list of all the users",users})
      } catch (error) {
            console.log({msg: "error while getting all users",error})
            
      }

      
}
export const getSingleUser = async(req,res) => {
      const {id}=req.params;
      try {
            const user = await User.findById(id);
            res.status(200).json({success: true,msg:"single user fetched successfully",user})
      } catch (error) {
            console.log({msg: "error while getting single user",error})
            
      }

      
}
export const signInUser = async(req,res) => {
      const {password, email} = req.body
      try {
            const user = await User.findOne({email}) ;
            if(!user){
             return   res.status(401).json({error:'Invalid email or password'})

            }
          
            const isValid = await bcrypt.compare(password,user.password);

            if(!isValid){
                  return res.status(401).json({error:'Invalid email or password'})
            }
            const token = jwt.sign({id:user._id}, 'thisismyseceret3d', {expiresIn:'1h'})
                const dataToClient = {
                  email:user.email,
                  role: user.role ,
                  name : user.name,
                  token,
                }
            res.status(201).json({success: true,msg:"successfully signed in ",dataToClient})
      } catch (error) {
            console.log({msg: "error while creating single user",error})
            
      }

      
}
export const createUser = async(req,res) => {
      const {password} = req.body
      try {
            const hashedPassword = await bcrypt.hash(password,10);

            const user = await User.create({...req.body, password:hashedPassword});
            res.status(201).json({success: true,msg:"single user created successfully"})
      } catch (error) {
            console.log({msg: "error while creating single user",error})
            
      }

      
}
export const deleteUser =async(req,res) => {
      const {id} = req.params;
      try {
           await User.findByIdAndDelete(id);
            res.status(201).json({success: true,msg:`A user by the id of ${id} was deleted`})
      } catch (error) {
            console.log({msg: "error while deleting a user",error})
            
      }

      
}