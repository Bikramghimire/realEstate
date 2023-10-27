import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("the mongo db is connected");
  })
  .catch((err) => console.log(err));
const app = express();

app.listen(
  (3000,
  () => {
    console.log("the server is running at the port 3000 !!");
  })
);
