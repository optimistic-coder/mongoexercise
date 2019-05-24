const express = require("express");
const router = express.Router();
const Post = require("../schema/Post");
//put data in database
router.post("/post", (req, res) => {
  const newPost = new Post({
    name: req.body.name
  });
  newPost.save().then(post => res.json(post));
});
//get all name from database
router.get("/posts", (req, res) => {
  Post.find()
    .then(posts => res.json(posts))
    .catch(err => {
      res.json(err);
    });
});

//update the name
router.post("/update/:id", (req, res) => {
  Post.findByIdAndUpdate(req.params.id, { $set: req.body })
    .then(post => {
      res.json(post);
    })
    .catch(err => {
      res.json(err);
    });
});

//Delete name from database
router.delete("/:id", (req, res) => {
  Post.findById(req.params.id).then(post => {
    post.remove().then(() => {
      res.json({ msg: "post remove" });
    });
  });
});
module.exports = router;
