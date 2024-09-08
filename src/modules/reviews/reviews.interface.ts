import { ObjectId } from "mongoose";

export type TReview = {
  movieId: ObjectId;
  email: string;
  rating: number;
  comment: string;
};
