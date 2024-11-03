import { Express, Request, Response } from "express";

function routes(app: Express) {
  app.get("/healthcheck", (req: Request, res: Response) => {
    res.status(200).send("Hello");
  });
}

export default routes;