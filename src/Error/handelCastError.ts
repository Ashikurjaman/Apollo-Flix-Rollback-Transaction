import mongoose from "mongoose";
import { TErrorResources } from "../interface/error.interface";

export const handelCastError = (err: mongoose.Error.CastError) => {
  const errorResource: TErrorResources = [
    {
      path: err.path,
      message: err.message,
    },
  ];
  return {
    message: "CastError",
    errorResource,
  };
};
