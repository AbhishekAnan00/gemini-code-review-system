import express from "express";
import { reviewCode } from "../controller/CodeReviewController.js";


const router = express.Router();

router.post("/review",reviewCode)

export default router;