import { Router, Response, Request } from "express";
import Todo from "./todo.models";

const router = Router();

router.get("/", (req: Request, res: Response<Todo[]>) => {
  res.json([
    {
      conent: "Learn Typescript",
      done: false,
    },
  ]);
});

export default router;
