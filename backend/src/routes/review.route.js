import { Router } from "express";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = Router();

router.post("/", protectRoute, createReview);
router.post("/:reviewId", protectRoute, deleteReview);

export default router;
