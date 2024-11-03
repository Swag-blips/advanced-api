import express from "express";
import config from "config";
import connect from "./utils/connect";
import routes from "./routes/routes";
const app = express();

const port = config.get<number>("port");

app.listen(port, () => {
  console.log("App is running");
  connect();
  routes(app);
});
