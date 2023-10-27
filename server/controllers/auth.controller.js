import User from "../models/user.model.js";
import bcrypt from "bcrypt";
const saltRounds = 10;

export const signup = async (req, res) => {
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
    res.status(500).send(error.message);
  }
};
