const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  train_id: {
    type: Number,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  no_of_seat: {
    type: Number,
    required: true,
  },
  total_price: {
    type: Number,
  },

  buyer_email: {
    type: String,
    required: true,
  },
  passanger_name: {
    type: String,
    required: true,
  },
  passanger_mobile: {
    type: String,
    required: true,
  },
});
const ticketModel = mongoose.model("Tickets", ticketSchema);

module.exports = ticketModel;
