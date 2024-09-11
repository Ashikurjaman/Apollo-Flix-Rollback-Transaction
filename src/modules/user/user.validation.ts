import z from "zod";
import { User_role, User_Status } from "./User.constant";

const userCreateValidate = z.object({
  body: z.object({
    name: z.string(),
    role: z.nativeEnum(User_role).default(User_role.Admin),
    email: z.string().email(),
    password: z.string().min(8),
    status: z.nativeEnum(User_Status).default(User_Status.Active),
  }),
});
const userUpdateValidate = z.object({
  body: z.object({
    name: z.string().optional(),
    role: z.nativeEnum(User_role).optional(),
    status: z.nativeEnum(User_Status).optional(),
  }),
});
export const userValidations = {
  userCreateValidate,
  userUpdateValidate,
};
