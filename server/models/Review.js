import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
      name:{
            type: String,
            required:[true,"Please add a Name"]
      },
      location:{
            type: String,
            default: 'unknown'
      },
      email:{
            type: String,
            default: ''
      },
      review:{
            type: String,
            required:[true,"Please add a review"]
      },
      rating:{
            type: Number,
            required:[true,"Please provide your rating"],
            default: 0,
            max: 5,
            min:0
      },
     
      
},
{timestamps: true},
)

const Review = mongoose.model("Review",reviewSchema);
export default Review;