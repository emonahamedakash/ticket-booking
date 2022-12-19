const mongoose = require("mongoose");
const userModel = require("../models/user.model.js");

exports.addUser = async (req, res) => {
  const users = await userModel.find();
  let length = users.length;

  const newUser = new userModel({
    id: length + 1,
    name: req.query.name,
    email: req.query.email,
    mobile: req.query.mobile,
    password: req.query.password,
  });
  newUser.save((err, result) => {
    if (err) {
      res.status(500);
    } else {
      res
        .status(201)
        .json({ success: true, message: "Registered Successfully", result });
      // res.send("<h1>Registered Successfully✅</h1>" + result);
    }
  });
};

exports.allUser = async (req, res) => {
  const users = await userModel.find();
  res.status(200).send(users);
};

exports.singleUser = async (req, res) => {
  const id = req.params.id;
  const user = await userModel.findOne({ id: id });
  res.status(200).send(user);
};

exports.login = async (req, res) => {
  const mail = req.query.email;
  const password = req.query.password;

  const user = await userModel.findOne({ email: mail });
  if (user) {
    if (user.password === password) {
      res.status(200).json({ success: true, message: user });
    } else {
      res.status(403).json({ success: false, message: "Incorrect Password" });
    }
  } else {
    res.status(404).json({ success: false, message: "User not Found" });
  }
};
