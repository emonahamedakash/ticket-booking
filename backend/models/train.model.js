const mongoose = require("mongoose");

const trainSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  from: {
    type: String,
    required: true,
  },
  startTime: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
  endTime: {
    type: String,
    required: true,
  },
  seat: [{}],
  // [
  //   {
  //     total: {
  //       type: Number,
  //       required: true,
  //     },
  //     booked: {
  //       type: Number,
  //       required: false,
  //     },
  //     available: {
  //       type: Number,
  //       required: false,
  //     },
  //   },
  // ],
  ticketPrice: {
    type: Number,
    required: true,
  },
});
//mongoose Model
const trainModel = mongoose.model("Trains", trainSchema);

module.exports = trainModel;
