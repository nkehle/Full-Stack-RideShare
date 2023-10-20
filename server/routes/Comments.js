// route for 
const express = require("express");
const router = express.Router();
const { Comments } = require("../models");

// creating the endpoints for the comments for each post 
router.get("/:postId", async (req, res) => {
    const postId = req.params.postId;
    const comments = await Comments.findAll( { where: { PostId: postId }});  // find all comments where the post id mathces the post
    res.json(comments);
});

// express function basic post 
router.post("/", async (req, res) => {
    const comment = req.body;
    await Comments.create(comment);
    res.json(comment);       // returns the comment
});

module.exports = router;