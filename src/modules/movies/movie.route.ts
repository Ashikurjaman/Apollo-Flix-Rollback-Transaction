import express from "express";
import { MovieControllers } from "./movie.controller";
import { ReviewControllers } from "../reviews/reviews.controller";
import { validateRequest } from "../../middleware/validateRequest";
import { zodMovieSchema } from "./movie.validate";

const router = express.Router();

router.post(
  "/",
  validateRequest(zodMovieSchema.createZodMovieSchema),
  MovieControllers.createMovie
);
// router.get("/:slug", MovieControllers.getMovieBySlug);
router.get("/:id", MovieControllers.getMovieById);
router.get("/", MovieControllers.getAllMovies);

// Review Route

router.post("/:slug/review", ReviewControllers.addReview);
// router.get("/:slug/review", ReviewControllers.getAllReviews);
// router.put("/:slug/review", ReviewControllers.updateReview);
// router.delete("/:slug/review", ReviewControllers.deleteReview);

export const MovieRoutes = router;
