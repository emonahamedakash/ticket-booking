const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  train_id: {
    type: String,
    required: true,
  },
  journey_date: {
    type: Date,
    required: true,
  },
  buyer_name: {
    type: String,
    required: true,
  },
});
const ticketModel = mongoose.model("Tickets", ticketSchema);

module.exports = ticketModel;
