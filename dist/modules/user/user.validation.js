"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userValidations = void 0;
const zod_1 = __importDefault(require("zod"));
const User_constant_1 = require("./User.constant");
const userCreateValidate = zod_1.default.object({
    body: zod_1.default.object({
        name: zod_1.default.string(),
        role: zod_1.default.nativeEnum(User_constant_1.User_role).default(User_constant_1.User_role.Admin),
        email: zod_1.default.string().email(),
        password: zod_1.default.string().min(8),
        status: zod_1.default.nativeEnum(User_constant_1.User_Status).default(User_constant_1.User_Status.Active),
    }),
});
const userUpdateValidate = zod_1.default.object({
    body: zod_1.default.object({
        name: zod_1.default.string().optional(),
        role: zod_1.default.nativeEnum(User_constant_1.User_role).optional(),
        status: zod_1.default.nativeEnum(User_constant_1.User_Status).optional(),
    }),
});
exports.userValidations = {
    userCreateValidate,
    userUpdateValidate,
};
