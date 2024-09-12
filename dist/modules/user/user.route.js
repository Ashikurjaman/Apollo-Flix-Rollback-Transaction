"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = __importDefault(require("express"));
const User_controller_1 = require("./User.controller");
const validateRequest_1 = require("../../middleware/validateRequest");
const user_validation_1 = require("./user.validation");
const router = express_1.default.Router();
router.post("/create-admin", (0, validateRequest_1.validateRequest)(user_validation_1.userValidations.userCreateValidate), User_controller_1.UserController.createAdmin);
router.post("/:userId", (0, validateRequest_1.validateRequest)(user_validation_1.userValidations.userUpdateValidate), User_controller_1.UserController.updateUser);
exports.userRouter = router;
