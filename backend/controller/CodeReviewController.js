import { getCodeReview } from "../service/AiCodeReviewService.js";

export const reviewCode = async (req,res) => {
  try {
    const {code} = req.body;
    const review = await getCodeReview(code)
    res.status(200).json({review})
  } catch (error) {
    
  }
}