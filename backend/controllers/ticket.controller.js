const ticketModel = require("../models/ticket.model.js");

exports.bookTicket = async (req, res) => {
  const tickets = await ticketModel.find();

  const newTicket = new ticketModel({
    id: tickets.length + 1,
    train_id: req.query.train_id,
    date: req.query.date,
    no_of_seat: req.query.no_of_seat,
    total_price: req.query.total_price,
    buyer_email: req.query.buyer_email,
    passanger_name: req.query.passanger_name,
    passanger_mobile: req.query.passanger_mobile,
  });
  newTicket.save((err, result) => {
    if (err) {
      res.status(500).json({ success: false, err });
    } else {
      res.status(201).json({ success: true });
    }
  });
};
