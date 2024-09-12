"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewServices = void 0;
const movie_model_1 = require("../movies/movie.model");
const reviews_model_1 = require("./reviews.model");
const addReview = (slug, reviewData) => __awaiter(void 0, void 0, void 0, function* () {
    const session = yield reviews_model_1.Reviews.startSession();
    const movie = yield movie_model_1.Movie.findOne({ slug });
    if (!movie) {
        throw new Error("Movie not found");
    }
    try {
        session.startTransaction();
        const review = yield reviews_model_1.Reviews.create([
            Object.assign({ movieId: movie._id }, reviewData),
        ], { session });
        // throw new Error("Movie not found");
        const reviewCount = yield reviews_model_1.Reviews.countDocuments({ movieId: movie._id });
        yield movie_model_1.Movie.updateOne({ slug }, { totalRating: reviewCount }, { session });
        yield session.commitTransaction();
        return review[0];
    }
    catch (error) {
        session.abortTransaction();
        throw new Error("Movie not Found");
    }
    session.endSession();
});
// const getAllReview = () => {};
// const getReviewById = () => {};
// const updateReview = () => {};
// const deleteReview = () => {};
exports.ReviewServices = {
    addReview,
    //   getAllReview,
    //   getReviewById,
    //   updateReview,
    //   deleteReview,
};
