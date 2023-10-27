import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import signupRouter from "./routes/auth.route.js";
dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("the mongo db is connected");
  })
  .catch((err) => console.log(err));
const app = express();
app.use(express.json());
app.listen(3000, () => {
  console.log("the server is running at the port 3000 !!");
});

app.use("/api/user", signupRouter);
