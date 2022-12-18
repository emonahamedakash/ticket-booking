const router = require("express").Router();
const {
  addUser,
  allUser,
  singleUser,
} = require("../controllers/user.controller.js");

router.get("/user", allUser);
router.get("/user/:id", singleUser);
router.post("/register", addUser);

module.exports = router;
