"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieRoutes = void 0;
const express_1 = __importDefault(require("express"));
const movie_controller_1 = require("./movie.controller");
const reviews_controller_1 = require("../reviews/reviews.controller");
const validateRequest_1 = require("../../middleware/validateRequest");
const movie_validate_1 = require("./movie.validate");
const router = express_1.default.Router();
router.post("/", (0, validateRequest_1.validateRequest)(movie_validate_1.zodMovieSchema.createZodMovieSchema), movie_controller_1.MovieControllers.createMovie);
// router.get("/:slug", MovieControllers.getMovieBySlug);
router.get("/:id", movie_controller_1.MovieControllers.getMovieById);
router.get("/", movie_controller_1.MovieControllers.getAllMovies);
// Review Route
router.post("/:slug/review", reviews_controller_1.ReviewControllers.addReview);
// router.get("/:slug/review", ReviewControllers.getAllReviews);
// router.put("/:slug/review", ReviewControllers.updateReview);
// router.delete("/:slug/review", ReviewControllers.deleteReview);
exports.MovieRoutes = router;
