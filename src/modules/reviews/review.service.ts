import { TReview } from "./reviews.interface";
import { Movie } from "../movies/movie.model";
import { Reviews } from "./reviews.model";

const addReview = async (
  slug: string,
  reviewData: Partial<TReview>
): Promise<TReview> => {
  const movie = await Movie.findOne({ slug });
  if (!movie) {
    throw new Error("Movie not found");
  }
  const review = await Reviews.create({
    movieId: movie._id,
    ...reviewData,
  });
  const reviewCount = await Reviews.countDocuments({ movieId: movie._id });
  await Movie.updateOne({ slug }, { totalRating: reviewCount }, { new: true });
  return review;
};
const getAllReview = () => {};
const getReviewById = () => {};
const updateReview = () => {};
const deleteReview = () => {};

export const ReviewServices = {
  addReview,
  getAllReview,
  getReviewById,
  updateReview,
  deleteReview,
};
