import { User_role, User_Status } from "./User.constant";
export type TUser = {
  name: string;
  role: keyof typeof User_role;
  email: string;
  password: string;
  status: keyof typeof User_Status;
  passwordAtChange: Date;
};
