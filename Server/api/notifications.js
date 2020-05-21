const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator/check");
const auth = require("../middleware/auth");
var nodemailer = require("nodemailer");
const Post = require("../models/Notification");
const User = require("../models/User");

// @route    POST api/notifications
// @desc     Create a Notification
// @access   Private
//for sending email enable this--> https://www.google.com/settings/security/lesssecureapps 
router.post(
  "/",
  [
    auth,
    [
      check("title", "Title is required")
        .not()
        .isEmpty(), check("RecipientType", "RecipientType is required")
          .not()
          .isEmpty(), check("RecipientAddress", "RecipientAddress is required")
            .not()
            .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const user = await User.findById(req.user.id).select("-password");
      if (req.body.RecipientType == "email") {

        var transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: "notificationswithyou@gmail.com",
            pass: "26120303Sudesh@@"
          }
        });

        var mailOptions = {
          from: "notificationswithyou@gmail.com",
          to: req.body.RecipientAddress,
          subject: req.body.title,
          text: req.body.Description
        };

        transporter.sendMail(mailOptions, function (error, info) {
          console.log(error)

        });

      }
      const newNotification = new Post({
        title: req.body.title,
        user: req.user.id,
        Description: req.body.Description,
        image: req.body.image,
        RecipientType: req.body.RecipientType,
        RecipientAddress: req.body.RecipientAddress

      });

      const post = await newNotification.save();

      res.json(post);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);



// @route    GET api/notifications
// @desc     Get post by ID
// @access   Private
router.get("your-notification", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    var query = { user: user };
    const post = await Post.find(query).toArray(function (err, result) {
      if (err) throw err;
      console.log(result);
    });
    res.json(post);
  } catch (err) {
    console.error(err.message);

    res.status(500).send("Server Error");
  }
});
// @route    GET api/notifications/get-yours-notification
// @desc     Get post by ID
// @access   Private
router.get("get-yours-notification", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    var query = { RecipientAddress: user.email };
    const post = await Post.find(query).toArray(function (err, result) {
      if (err) throw err;
      console.log(result);
    });
    res.json(post);
  } catch (err) {
    console.error(err.message);

    res.status(500).send("Server Error");
  }
});

// @route    DELETE api/notifications/:id
// @desc     Delete a post
// @access   Private
router.delete("/:id", auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    // Check for ObjectId format and post
    if (!req.params.id.match(/^[0-9a-fA-F]{24}$/) || !post) {
      return res.status(404).json({ msg: "Post not found" });
    }

    // Check user
    if (post.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "User not authorized" });
    }

    await post.remove();

    res.json({ msg: "Post removed" });
  } catch (err) {
    console.error(err.message);

    res.status(500).send("Server Error");
  }
});


module.exports = router;
