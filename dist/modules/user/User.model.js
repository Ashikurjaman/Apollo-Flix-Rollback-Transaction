"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const User_constant_1 = require("./User.constant");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const userSchema = new mongoose_1.Schema({
    name: {
        type: "string",
        required: true,
    },
    role: {
        type: "string",
        required: true,
        enum: Object.keys(User_constant_1.User_role),
    },
    email: {
        type: "string",
        required: [true, "Email is required"],
        unique: true,
    },
    password: {
        type: "string",
        required: true,
    },
    status: {
        type: "string",
        required: true,
        enum: Object.keys(User_constant_1.User_Status),
    },
    passwordAtChange: {
        type: "date",
    },
});
userSchema.pre("save", function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = this;
        user.password = yield bcryptjs_1.default.hash(this.password, 8);
        next();
    });
});
exports.User = (0, mongoose_1.model)("User", userSchema);
