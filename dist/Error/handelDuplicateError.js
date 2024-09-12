"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handelDuplicateError = void 0;
const handelDuplicateError = (err) => {
    const match = err.message.match(/"([^"]*)"/);
    console.log(match);
    const extractedMessage = match && match[1];
    const errorSource = [
        {
            path: "",
            message: `${extractedMessage} already exists`,
        },
    ];
    return {
        errorSource,
    };
};
exports.handelDuplicateError = handelDuplicateError;
