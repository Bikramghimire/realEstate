import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import { errorHandler } from "../utils/error.js";
const saltRounds = 10;

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  const salt = bcrypt.genSaltSync(saltRounds);
  const hash = bcrypt.hashSync(password, salt);

  try {
    const newUser = new User({
      username,
      email,
      password: hash,
    });
    await newUser.save();
    res.status(200).json("User created successfully !");
  } catch (error) {
    next(error);
  }
};
