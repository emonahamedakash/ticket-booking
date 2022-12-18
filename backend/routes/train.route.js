const router = require("express").Router();

const {
  addTrain,
  getTrain,
  getOneTrain,
  deleteTrain,
  searchTrain,
} = require("../controllers/train.controller");

// router.get("/trains", getTrain);
router.post("/train", addTrain);
router.get("/train", getTrain);
router.get("/train/:id", getOneTrain);
router.get("/search", searchTrain);
router.delete("/train/:id", deleteTrain);

module.exports = router;
