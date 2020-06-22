const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NotificationSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  title: {
    type: String,
    required: true
  },
  Description: {
    type: String
  },
  image: { type: String },
  RecipientType: {
    type: String,
    required: true

  },
  RecipientAddress: {
    type: [String],
    required: true
  },

  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Post = mongoose.model("NotificationSchema", NotificationSchema);
