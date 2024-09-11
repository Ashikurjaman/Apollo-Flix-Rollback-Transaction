import express from "express";
import { UserController } from "./User.controller";
import { validateRequest } from "../../middleware/validateRequest";
import { userValidations } from "./user.validation";

const router = express.Router();

router.post(
  "/create-admin",
  validateRequest(userValidations.userCreateValidate),
  UserController.createAdmin
);
router.post(
  "/:userId",
  validateRequest(userValidations.userUpdateValidate),
  UserController.updateUser
);

export const userRouter = router;
