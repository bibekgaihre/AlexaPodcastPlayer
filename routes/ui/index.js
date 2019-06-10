const router = require("express").Router();
const { SecureUI } = require("../../utils/secure");
const PodcastRouter = require("../../modules/podcast/podcast.routes.ui.js");

// router.use("/podcast", PodcastRouter);

router.get("/", SecureUI(), (req, res, next) => {
  res.render("index", {
    title: "Podmio"
  });
});

module.exports = router;
