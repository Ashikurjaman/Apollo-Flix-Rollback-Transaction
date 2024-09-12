import bcryptjs from "bcryptjs";

export const isPasswordMatch = async (
  plainPassword: string,
  hashPassword: string
) => {
  const isMatch = await bcryptjs.compare(plainPassword, hashPassword);
  return isMatch;
};
