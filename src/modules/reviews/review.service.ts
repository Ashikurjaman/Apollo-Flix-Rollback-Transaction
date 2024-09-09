import { TReview } from "./reviews.interface";
import { Movie } from "../movies/movie.model";
import { Reviews } from "./reviews.model";

const addReview = async (
  slug: string,
  reviewData: Partial<TReview>
): Promise<TReview> => {
  const session = await Reviews.startSession();
  const movie = await Movie.findOne({ slug });
  if (!movie) {
    throw new Error("Movie not found");
  }
  try {
    session.startTransaction();

    const review = await Reviews.create(
      [
        {
          movieId: movie._id,
          ...reviewData,
        },
      ],
      { session }
    );
    // throw new Error("Movie not found");

    const reviewCount = await Reviews.countDocuments({ movieId: movie._id });
    await Movie.updateOne({ slug }, { totalRating: reviewCount }, { session });
    await session.commitTransaction();
    return review[0];
  } catch (error) {
    session.abortTransaction();
    throw new Error("Movie not Found");
  }
  session.endSession();
};
// const getAllReview = () => {};
// const getReviewById = () => {};
// const updateReview = () => {};
// const deleteReview = () => {};

export const ReviewServices = {
  addReview,
  //   getAllReview,
  //   getReviewById,
  //   updateReview,
  //   deleteReview,
};
