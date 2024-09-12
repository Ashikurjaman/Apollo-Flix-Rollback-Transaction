"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handelCastError = void 0;
const handelCastError = (err) => {
    const errorResource = [
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
exports.handelCastError = handelCastError;
