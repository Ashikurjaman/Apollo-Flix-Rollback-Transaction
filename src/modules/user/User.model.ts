import { model, Schema } from "mongoose";
import { TUser } from "./User.interface";
import { User_role, User_Status } from "./User.constant";

const userSchema = new Schema<TUser>({
  name: {
    type: "string",
    required: true,
  },
  role: {
    type: "string",
    required: true,
    enum: Object.keys(User_role),
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
    enum: Object.keys(User_Status),
  },
  passwordAtChange: {
    type: "date",
  },
});

export const User = model<TUser>("User", userSchema);
