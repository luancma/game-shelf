import express from "express";
import cors from "cors";

import routes from "./routes/index"
import MongooseConnect from "../mogoose/index";

const app = express();

app.use(cors());

MongooseConnect();

app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 8080, () => {
  console.log("App runing on port 8080");
});
