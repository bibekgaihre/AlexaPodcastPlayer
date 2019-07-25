const mongoose = require("mongoose");
const { objectId } = mongoose.Schema;

const podcastSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    album: {
      type: objectId,
      ref: "Album"
    },
    track: {
      type: String,
      required: true
    },
    genre: {
      type: objectId,
      ref: "Genre"
    },
    copyright: {
      type: String,
      required: true
    },
    album_art: {
      type: String,
      required: true
    },
    audio_url: {
      type: String,
      required: true
    },
    user: {
      type: objectId,
      ref: "User"
    }
  },
  {
    collection: "podcats",
    timeStamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    },
    toObject: {
      virtuals: true
    },
    toJson: {
      virtuals: true
    }
  }
);
module.exports = mongoose.model("Podcast", podcastSchema);
