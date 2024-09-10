import { ErrorRequestHandler } from "express";
import { handelValidationError } from "../Error/handelValidationError";
import { TErrorResources } from "../interface/error.interface";

export const globalErrorHandler: ErrorRequestHandler = (
  err,
  req,
  res,
  next
) => {
  const statusCode = 500;

  let errorResources: TErrorResources = [
    {
      path: "",
      message: "something went wrong",
    },
  ];
  if (err.name === "ValidationError") {
    const simplified = handelValidationError(err);
    errorResources = simplified.errorSource;
    console.log(simplified);
  }
  res.status(statusCode).json({
    success: false,
    message: err.name,
    errorResources,
  });
};
