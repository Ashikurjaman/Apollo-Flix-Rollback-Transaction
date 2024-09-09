import { NextFunction, Request, Response } from "express";
import { ReviewServices } from "./review.service";
import { catchAsync } from "../../Utility/catchAsync";

const addReviews = catchAsync(async (req: Request, res: Response,next:NextFunction) => {
  const { slug } = req.params;
  const reviewData = req.body;
  const result = await ReviewServices.addReview(slug, reviewData);

  res.json({
    success: true,
    message: "Review is created successfully !",
    data: result,
  });
});
// const getAllReviews = async (req: Request, res: Response) => {
//   try {
//     const result = await ReviewServices.getAllReviews();

//     res.status(200).json({
//       success: true,
//       message: "Reviews are fetched successfully !",
//       data: result,
//     });
//   } catch (err: any) {
//     res.status(500).json({
//       success: false,
//       message: "Could not fetch reviews!",
//       error: err,
//     });
//   }
// };

// const getReviewById = async (req: Request, res: Response) => {
//   try {
//     const { slug } = req.params;
//     const result = await ReviewServices.getReviewById;

//     res.status(200).json({
//       success: true,
//       message: "Reviews are fetched successfully !",
//       data: result,
//     });
//   } catch (err: any) {
//     res.status(500).json({
//       success: false,
//       message: "Could not fetch reviews!",
//       error: err,
//     });
//   }
// };

// const updateReview = async (req: Request, res: Response) => {
//   try {
//     const { slug } = req.params;
//     const result = await ReviewServices.getReviewBySlug(slug);

//     res.status(200).json({
//       success: true,
//       message: "Reviews are fetched successfully !",
//       data: result,
//     });
//   } catch (err: any) {
//     res.status(500).json({
//       success: false,
//       message: "Could not fetch reviews!",
//       error: err,
//     });
//   }
// };

// const deleteReview = async (req: Request, res: Response) => {
//   try {
//     const { slug } = req.params;
//     const result = await ReviewServices.getReviewBySlug(slug);

//     res.status(200).json({
//       success: true,
//       message: "Reviews are fetched successfully !",
//       data: result,
//     });
//   } catch (err: any) {
//     res.status(500).json({
//       success: false,
//       message: "Could not fetch reviews!",
//       error: err,
//     });
//   }
// };

export const ReviewControllers = {
  addReview: addReviews,
  //   getAllReviews,
  //   getReviewById,
  //   updateReview,
  //   deleteReview,
};
