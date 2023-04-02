import { user } from "../models/user.js";

export const save = async (req, res) => {
  const student = await user.findOne({ email: req.body.email });

  if (student) {
    return res.status(409).send({
      message: "User with given email already Exist!",
    });
  }

  const use = req.body;
  const newUser = new user(use);
  newUser.save();
  res.status(201).send({
    message: "User created successfully",
    user: newUser,
  });
  return res;
};

export const login = async (req, res) => {
  console.log(req.body);
  const student = await user.findOne({ email: req.body.email }).exec();

  if (!student) {
    return res.status(401);
  }

  if (req.body.password != student.password) {
    return res.status(401);
  }

  //res.status(200).send({ message: "Flat user login successfully" });
  return student;
};
