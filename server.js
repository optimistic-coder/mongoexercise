const express = require("express");
const app = express();
const post = require("./module/Post");
const db = require("./config/keys").mongoURI;
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
mongoose
  .connect(db)
  .then(() => console.log("connect"))
  .catch(err => console.log(err));
app.get("/", (req, res) => {
  res.json("hello world");
});
var cors = require("cors"); //this for “No Access-Control-Allow-Origin header” problems error . use this library
app.use(cors()); //

app.use("/feed", post);
app.listen(4000, () => console.log("server runnig.."));
