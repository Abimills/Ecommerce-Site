import Review from "../models/Review.js"


export const getReviews = async(req,res) => {
      try {
            const reviews = await Review.find();
            res.status(200).json({success: true,count : reviews.length,msg:"list of all the reviews",reviews})
      } catch (error) {
            console.log({msg: "error while getting all reviews",error})
            
      }

      
}
export const getSingleReview = async(req,res) => {
      const {id}=req.params;
      try {
            const review = await Review.findById(id);
            res.status(200).json({success: true,msg:"single review fetched successfully",review})
      } catch (error) {
            console.log({msg: "error while getting single review",error})
            
      }

      
}

export const createReview = async(req,res) => {
     
      try {
           

            const review = await Review.create(req.body);
            res.status(201).json({success: true,msg:"single review created successfully",review})
      } catch (error) {
            console.log({msg: "error while creating single review",error})
            
      }

      
}
export const deleteReview =async(req,res) => {
      const {id} = req.params;
      try {
           await Review.findByIdAndDelete(id);
            res.status(201).json({success: true,msg:`A review by the id of ${id} was deleted`})
      } catch (error) {
            console.log({msg: "error while deleting a review",error})
            
      }

      
}