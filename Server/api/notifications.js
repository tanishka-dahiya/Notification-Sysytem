const path = require("path");
const multer = require("multer");
const express = require("express");
const fs = require('fs');
const { check, validationResult } = require("express-validator/check");
const auth = require("../middleware/auth");
var nodemailer = require("nodemailer");
const Post = require("../models/Notification");
const User = require("../models/User");


const storage = multer.diskStorage({
  destination: "./public/uploads/",
  filename: function (req, file, cb) {
    cb(null, "IMAGE-" + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 },
}).single("image");
const router = express.Router();
router.post("/", auth, async (req, res) => {

  upload(req, res, err => {

    if (!err) {
      if (req.file == undefined) {
        saveNotification(req.body, null, null, req.user.id, res)

      }
      else {
        saveNotification(req.body, req.file.path, req.file.filename, req.user.id, res)
      }


    }
    else {
      console.log(err)
    }
  });
});
async function saveNotification(detail, path = null, filename = null, userId, res) {

  try {
    if (detail.RecipientType == 'Email') {
      var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "notificationswithyou@gmail.com",
          pass: "26120303Sudesh@@"
        }
      });

      var mailOptions = {
        from: "notificationswithyou@gmail.com",
        to: detail.RecipientAddress,
        subject: detail.title,
        text: detail.Description,
        html: `<h3>${detail.title}</h3><br></br><h5>${detail.Description}</h5> <img src="cid:unique@kreata.ee"/>`,
        attachments: [{
          filename: filename,
          path: path,
          cid: 'unique@kreata.ee' //same cid value as in the html img src
        }]
      };

      transporter.sendMail(mailOptions, function (error, info) {
        console.log(error);

      });

    }
    const str = detail.RecipientAddress;
    const Recipients = str.split(',');
    const newNotification = new Post({
      title: detail.title,
      user: userId,
      Description: detail.Description,
      image: path,
      RecipientType: detail.RecipientType,
      RecipientAddress: Recipients

    });

    const post = await newNotification.save();

    res.json(post);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }

}




// @route    GET api/notifications
// @desc     Get post by ID
// @access   Private
router.get("/your-created-notification", auth, async (req, res) => {
  try {
    var query = { user: req.user.id };
    const post = Post.find(query, function (err, result) {
      if (err) { console.log(err) }
      res.json(result);

    });


  } catch (err) {
    console.error(err.message);

  }
});
// @route    GET api/notifications/get-yours-notification
// @desc     Get post by ID
// @access   Private
router.get("/get-yours-notification", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);

    const post = Post.find({ RecipientAddress: user.email }, function (err, result) {
      if (err) { console.log(err) }



      result.forEach((data) => {
        if (data.image != null) {
          var image = fs.readFileSync(
            data.image,
            {
              encoding: null
            }
          );
          const base64String = image.toString('base64');
          data.image = base64String;
        }
      })
      res.json(result);

    });


  } catch (err) {
    console.error(err.message);

  }
});



module.exports = router;
