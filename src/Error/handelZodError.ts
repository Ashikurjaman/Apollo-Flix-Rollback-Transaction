import { ZodError } from "zod";
import { TErrorResources } from "../interface/error.interface";

export const handelZodError = (err: ZodError) => {
  const errorSource: TErrorResources = err.issues.map((error) => {
    return {
      path: error.path[error.path.length - 1],
      message: error.message,
    };
  });
  return {
    message: "Zod Error",
    errorSource,
  };
};
