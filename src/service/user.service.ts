import User, { UserInput } from "../models/user.model";

export async function createUser(input: UserInput) {
  try {
    await User.create(input);
    return;
  } catch (error: any) {
    throw new Error(error);
  }
}
