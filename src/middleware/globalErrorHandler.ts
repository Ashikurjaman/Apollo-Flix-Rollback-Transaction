import { ErrorRequestHandler } from "express";
import { handelValidationError } from "../Error/handelValidationError";
import { TErrorResources } from "../interface/error.interface";
import { handelCastError } from "../Error/handelCastError";
import { handelDuplicateError } from "../Error/handelDuplicateError";
import { ZodError } from "zod";
import { handelZodError } from "../Error/handelZodError";

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
  } else if (err.name === "CastError") {
    const simplified = handelCastError(err);
    errorResources = simplified.errorResource;
  } else if (err.code === 11000) {
    const simplified = handelDuplicateError(err);
    errorResources = simplified.errorSource;
  } else if (err instanceof ZodError) {
    const simplified = handelZodError(err);
    errorResources = simplified.errorSource;
  }
  res.status(statusCode).json({
    success: false,
    message: err.name,
    errorResources,
    // err,
  });
};
