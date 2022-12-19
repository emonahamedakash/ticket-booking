const { bookTicket } = require("../controllers/ticket.controller");

const router = require("express").Router();

router.post("/book", bookTicket);

module.exports = router;
