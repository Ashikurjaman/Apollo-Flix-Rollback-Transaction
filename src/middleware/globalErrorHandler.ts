import { ErrorRequestHandler, NextFunction, Request, Response } from "express";
import { handelValidationError } from "../Error/handelValidationError";

export const globalErrorHandler: ErrorRequestHandler = (
  err,
  req,
  res,
  next
) => {
  let statusCode = 500;
  let message = "Something Went Wrong";
  let errorResources: TErrorResources = [
    {
      path: "",
      message: "something went wrong",
    },
  ];
  if ((err.name = "ValidationError")) {
    const simplified = handelValidationError(err);
    res.status(statusCode).json({
      success: false,
      message: err.message,
      errorResources,
    });
  }
};
