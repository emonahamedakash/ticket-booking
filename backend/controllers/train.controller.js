const mongoose = require("mongoose");
const trainModel = require("../models/train.model");

//Show all trains
exports.getTrain = async (req, res) => {
  const trains = await trainModel.find();
  res.status(200);
  res.send(trains);
};
//Show one train
exports.getOneTrain = async (req, res) => {
  const id = req.params.id;
  const train = await trainModel.findOne({ id: id });
  res.status(200);
  res.send(train);
};
//Search Train
exports.searchTrain = async (req, res) => {
  const trains = await trainModel.find({
    $and: [{ from: { $eq: req.query.from } }, { to: { $eq: req.query.to } }],
  });
  if (trains.length === 0) {
    res.status(404);
    res.json({ success: false, message: "No Train found" });
  } else {
    res.status(200);
    res.send(trains);
  }
};
//add new train
exports.addTrain = async (req, res) => {
  const trains = await trainModel.find();
  let length = trains.length;
  const newTrain = new trainModel({
    id: length + 1,
    name: req.body.name,
    from: req.body.from,
    startTime: req.body.startTime,
    to: req.body.to,
    endTime: req.body.endTime,
    seat: req.body.seat,
    ticketPrice: req.body.ticketPrice,
  });
  // trains.push(newTrain);
  newTrain.save((err, result) => {
    if (err) {
      console.log(err);
      res.status(500);
    } else {
      res
        .status(201)
        .json({ success: true, message: "Train added Successfully", result });
      // res.send("<h1>Train Added Successfully✅</h1>" + result);
    }
  });
};

//Delete train
exports.deleteTrain = async (req, res) => {
  const id = req.params.id;
  await trainModel.deleteOne({ id: id });
  res.status(202).json({
    success: true,
    message: "Train is deleted",
  });
};
