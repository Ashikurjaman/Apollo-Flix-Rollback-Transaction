import express from "express";
import { MovieControllers } from "./movie.controller";

const router = express.Router();

router.post("/", MovieControllers.createMovie);
router.get("/:slug", MovieControllers.getMovieBySlug);
router.get("/", MovieControllers.getAllMovies);

// Review Route

router.post("/:slug/review", ReviewControllers.getMovieBySlug);
router.get("/:slug/review", ReviewControllers.getMovieBySlug);
router.put("/:slug/review", ReviewControllers.getMovieBySlug);
router.delete("/:slug/review", ReviewControllers.getMovieBySlug);

export const MovieRoutes = router;
