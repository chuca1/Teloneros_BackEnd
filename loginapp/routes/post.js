const express = require("express");
const router = express.Router();
const Post = require("../models/post");
const { ensureLoggedIn, ensureLoggedOut } = require("connect-ensure-login");

router.post(
  "/profile",
  [ensureLoggedIn(), uploadCloudinary.single("photo")],
  (req, res) => {
    //console.log(req.body)
    console.log(req);
    const content = req.body.content;
    const creatorId = req.user.id;
    const picUrl = req.file.url;
    const picName = req.file.originalname;

    const newPost = new Post({ content, creatorId });
    console.log("este es el session id ===>" + req.session.passport.user);
    console.log("este es el user id ===>" + req.user.id);
    newPost
      .save()
      .then(x => {
        res.redirect("/profile");
      })
      .catch(err => console.log("Error!:", err));
  }
);

module.exports = router;
