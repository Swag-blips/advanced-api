import { Request, Response } from "express";
import { createUser } from "../service/user.service";
import { createUserInput } from "../schema/user.schema";

export async function createUserHandler(
  req: Request<{}, {}, createUserInput["body"]>,
  res: Response
) {
  try {
    const user = await createUser(req.body); // call create user service
    return user;
  } catch (error: any) {
    console.log(error);
    res.status(500).send(error.message);
  }
}
