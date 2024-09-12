import { model, Schema } from "mongoose";
import { TUser } from "./User.interface";
import { User_role, User_Status } from "./User.constant";
import bcryptjs from "bcryptjs";

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
    select: 0,
  },
  status: {
    type: "string",
    required: true,
    enum: Object.keys(User_Status),
    default: User_Status.Active,
  },
  passwordAtChange: {
    type: "date",
  },
});

userSchema.pre("save", async function (next) {
  const user = this;
  user.password = await bcryptjs.hash(this.password, Number(8));
  next();
});
userSchema.post("save", function (doc, next) {
  doc = this;
  doc.password = "";
  next();
});

export const User = model<TUser>("User", userSchema);
