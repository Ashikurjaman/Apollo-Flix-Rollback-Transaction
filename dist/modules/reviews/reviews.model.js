"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reviews = void 0;
const mongoose_1 = require("mongoose");
const reviewSchema = new mongoose_1.Schema({
    movieId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Movie",
    },
    email: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
    comment: {
        type: String,
        required: true,
    },
});
exports.Reviews = (0, mongoose_1.model)("Review", reviewSchema);
