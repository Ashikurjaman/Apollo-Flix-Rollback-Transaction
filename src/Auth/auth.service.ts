import { TUser } from "../modules/user/User.interface";
import { User } from "../modules/user/User.model";
import { User_role } from "../modules/user/User.constant";
import { TLoginUser } from "./auth.interface";
import { isPasswordMatch } from "./auth.util";
import { Jwt } from "jsonwebtoken";

const register = async (payload: TUser) => {
  const user = await User.find({ email: payload.email }).select("+password");
  if (user) {
    throw new Error("Email Already use");
  }
  payload.role = User_role.User;
};
const login = async (payload: TLoginUser) => {
  const user = await User.findOne({ email: payload.email });
  if (!user) {
    throw new Error("Email doesn't exists");
  }
  if (user.status === "Blocked") {
    throw new Error("User is Blocked");
  }

  const passwordMatch = await isPasswordMatch(payload.password, user.password);

  if (!passwordMatch) {
    throw new Error("Password not match");
  }
  const jwtPayload = {
    email: user.email,
    role: user.role,
  };
  const accessToken = Jwt.sign(jwtPayload);
};
