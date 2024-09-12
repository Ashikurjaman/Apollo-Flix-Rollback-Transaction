"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalErrorHandler = void 0;
const handelValidationError_1 = require("../Error/handelValidationError");
const handelCastError_1 = require("../Error/handelCastError");
const handelDuplicateError_1 = require("../Error/handelDuplicateError");
const zod_1 = require("zod");
const handelZodError_1 = require("../Error/handelZodError");
const globalErrorHandler = (err, req, res, next) => {
    const statusCode = 500;
    let errorResources = [
        {
            path: "",
            message: "something went wrong",
        },
    ];
    if (err.name === "ValidationError") {
        const simplified = (0, handelValidationError_1.handelValidationError)(err);
        errorResources = simplified.errorSource;
    }
    else if (err.name === "CastError") {
        const simplified = (0, handelCastError_1.handelCastError)(err);
        errorResources = simplified.errorResource;
    }
    else if (err.code === 11000) {
        const simplified = (0, handelDuplicateError_1.handelDuplicateError)(err);
        errorResources = simplified.errorSource;
    }
    else if (err instanceof zod_1.ZodError) {
        const simplified = (0, handelZodError_1.handelZodError)(err);
        errorResources = simplified.errorSource;
    }
    res.status(statusCode).json({
        success: false,
        message: err.name,
        errorResources,
        // err,
    });
};
exports.globalErrorHandler = globalErrorHandler;
