import express from "express";
import mongoose from "mongoose";
import routes from "./shared/routes/index"
import cors from "cors";

const app = express();

app.use(cors());
mongoose.connect(
  `
  mongodb+srv://luancma_admin:nasa@cluster-test-imbnp.mongodb.net/test?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true }
);

app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 8080, () => {
  console.log("App runing on port 8080");
});
