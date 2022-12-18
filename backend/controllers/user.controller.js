const mongoose = require("mongoose");
const userModel = require("../models/user.model.js");
const bcrypt = require("bcryptjs");

exports.addUser = async (req, res) => {
  const users = await userModel.find();
  let length = users.length;
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(req.body.password, salt);
  const newUser = new userModel({
    id: length + 1,
    name: req.body.name,
    email: req.body.email,
    mobile: req.body.mobile,
    password: hash,
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
