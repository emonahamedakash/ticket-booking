require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const userRoute = require("./routes/user.route.js");
const trainRoute = require("./routes/train.route.js");

const app = express();

//Connecting to db
const mongodbUri = process.env.MONGODB_URI;
mongoose.set("strictQuery", false);
mongoose.connect(mongodbUri, (err) => {
  if (err) {
    console.log("Database connect Error...!");
  } else {
    console.log("Connected to Database...");
  }
});

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/home.html");
});
app.use("/api/", userRoute);
app.use("/api/", trainRoute);

module.exports = app;
