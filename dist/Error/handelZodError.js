"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handelZodError = void 0;
const handelZodError = (err) => {
    const errorSource = err.issues.map((error) => {
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
exports.handelZodError = handelZodError;
