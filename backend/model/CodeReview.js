import mongoose from "mongoose";

const CodeReviewSchema = new mongoose.Schema({
  codeSnippet: { type: String, required: true },
  review: { type: String },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("CodeReview", CodeReviewSchema);
