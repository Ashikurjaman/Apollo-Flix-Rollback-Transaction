import { Request, Response } from "express";
import { ReviewServices } from "./review.service";

const addReview = async (req: Request, res: Response) => {
  const reviewData = req.body;
  const result = await ReviewServices.createReview(reviewData);

  res.json({
    success: true,
    message: "Review is created successfully !",
    data: result,
  });
};

const getAllReviews = async (req: Request, res: Response) => {
  try {
    const result = await ReviewServices.getAllReviews();

    res.status(200).json({
      success: true,
      message: "Reviews are fetched successfully !",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: "Could not fetch reviews!",
      error: err,
    });
  }
};

const getReviewById = async (req: Request, res: Response) => {
  try {
    const { slug } = req.params;
    const result = await ReviewServices.getReviewBySlug(slug);

    res.status(200).json({
      success: true,
      message: "Reviews are fetched successfully !",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: "Could not fetch reviews!",
      error: err,
    });
  }
};

const updateReview = async (req: Request, res: Response) => {
  try {
    const { slug } = req.params;
    const result = await ReviewServices.getReviewBySlug(slug);

    res.status(200).json({
      success: true,
      message: "Reviews are fetched successfully !",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: "Could not fetch reviews!",
      error: err,
    });
  }
};

const deleteReview = async (req: Request, res: Response) => {
  try {
    const { slug } = req.params;
    const result = await ReviewServices.getReviewBySlug(slug);

    res.status(200).json({
      success: true,
      message: "Reviews are fetched successfully !",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: "Could not fetch reviews!",
      error: err,
    });
  }
};

export const ReviewControllers = {
  addReview,
  getAllReviews,
  getReviewById,
  updateReview,
  deleteReview,
};
