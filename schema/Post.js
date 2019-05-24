const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const postSchema = new Schema({
  name: {
    type: String,
    required: true
  }
});

module.exports = Post = mongoose.model("post", postSchema);
