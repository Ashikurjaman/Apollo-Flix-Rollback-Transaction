/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../../Utility/catchAsync";
import { userService } from "./User.service";

const createAdmin = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await userService.createInsertIntoDb(req.body);
    res.status(200).json({
      success: true,
      message: "Admin created successfully",
      data: result,
    });
  }
);
const updateUser = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { userId } = req.params;
    const result = await userService.updateUser(userId, req.body);
    res.status(200).json({
      success: true,
      message: "Admin created successfully",
      data: result,
    });
  }
);

export const UserController = {
  createAdmin,
  updateUser,
};
