import Product from "../models/Products.js"
export const getProducts = async(req,res) => {
      try {
            const products = await Product.find();
            res.status(200).json({success: true,count : products.length,msg:"list of all the products",products})
      } catch (error) {
            console.log({msg: "error while getting all products",error})
            
      }

      
}
export const getSingleProducts = async(req,res) => {
      const {id}=req.params;
      try {
            const product = await Product.findById(id);
            res.status(200).json({success: true,msg:"single product fetched successfully",product})
      } catch (error) {
            console.log({msg: "error while getting single product",error})
            
      }

      
}
export const createProduct = async(req,res) => {
      
      try {
            const product = await Product.create(req.body);
            res.status(201).json({success: true,msg:"single product created successfully",product})
      } catch (error) {
            console.log({msg: "error while creating single product",error})
            
      }

      
}
export const deleteProduct =async(req,res) => {
      const {id} = req.params;
      try {
           await Product.findByIdAndDelete(id);
            res.status(201).json({success: true,msg:`A product by the id of ${id} was deleted`})
      } catch (error) {
            console.log({msg: "error while deleting a product",error})
            
      }

      
}