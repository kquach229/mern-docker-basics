const express = require("express");
const router = express.Router();
const Post = require("../models/post.model");

router.get("/", (req, res, next) => {
  Post.find({}, function (err, result) {
    if (err) {
      res.status(400).send({
        success: false,
        error: err.message,
      });
    }
    res.status(200).send({
      success: true,
      data: result,
    });
  });
});

router.get("/:post_id", (req, res, next) => {
  Post.findById(req.params.post_id, function (err, result) {
    if (err) {
      res.status(400).send({
        success: false,
        error: err.message,
      });
    }
    res.status(200).send({
      success: true,
      data: result,
    });
  });
});

router.post("/", (req, res, next) => {
  let newPost = {
    title: req.body.title,
    body: req.body.body,
    author: req.body.author,
  };
  Post.create(newPost, function (err, result) {
    if (err) {
      res.status(400).send({
        success: false,
        error: err.message,
      });
    }
    res.status(201).send({
      success: true,
      data: result,
      message: "Post created successfully",
    });
  });
});

router.put("/:post_id", (req, res, next) => {
  let fieldsToUpdate = req.body;
  Post.findByIdAndUpdate(
    req.params.post_id,
    fieldsToUpdate,
    { new: true },
    function (err, result) {
      if (err) {
        res.status(400).send({
          success: false,
          error: err.message,
        });
      }
      res.status(200).send({
        success: true,
        data: result,
        message: "Post updated successfully",
      });
    }
  );
});

router.delete("/:post_id", (req, res, next) => {
  Post.findByIdAndDelete(req.params.post_id, function (err, result) {
    if (err) {
      res.status(400).send({
        success: false,
        error: err.message,
      });
    }
    res.status(200).send({
      success: true,
      data: result,
      message: "Post deleted successfully",
    });
  });
});

module.exports = router;
