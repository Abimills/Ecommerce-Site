import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
      name:{
            type: String,
            required:[true,"Please add a  product's Name"]
      },
      price:{
            type: String,
            required:[true,"Please add a  product's Price"]
      },
      description:{
            type: String,
            required:[true,"Please add a  product's description"]
      },
      img: {
            type :String ,
            require: [true, "Please provide product's image"]
      },
      category:{
            type :String ,
            require: [true, "Please provide product's category"]
            
      },
      discount:{
      type :Number ,
      default: 0

      },
      timeRanges:{
            type: Array,
            

      },
      colors:{
            type: Array,   

      },
      rating:{
            type: Number,
      },
      stock:{
            type: Number,
      },
      comments:{
            type: Array,
      }
},
{timestamps: true},
)

const Product = mongoose.model("Product",productSchema);
export default Product;