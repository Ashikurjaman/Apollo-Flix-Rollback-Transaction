import mongoose from "mongoose";

export const handelValidationError = (err: mongoose.Error.ValidationError) => {
  const errorSource:TErrorResources = Object.values(err).map(
    (val: mongoose.Error.ValidatorError | mongoose.Error.CastError) => {
      return {
        path: val.path,
        message: val.message,
      };
    }
  );
  return { message: "Validation error",errorSource };
};
