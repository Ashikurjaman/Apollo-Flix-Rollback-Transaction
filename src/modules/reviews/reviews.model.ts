import { model, Schema } from "mongoose";
import { TReview } from "./reviews.interface";

const reviewSchema = new Schema<TReview>({
  movieId: {
    type: Schema.Types.ObjectId,
    ref: "Movie",
    required: true,
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

export const Reviews = model<TReview>("Review", reviewSchema);
