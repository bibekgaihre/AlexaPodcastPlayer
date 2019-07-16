const router = require("express").Router();

const apiRouter = require("./api");
const botRouter = require("./bot/alexa");
const uiRouter = require("./ui");

router.use("/api/v1", apiRouter);
// router.use("/bot", botRouter);
router.use("/", uiRouter);

router.get("/login", (req, res, next) => {
  res.render("login", { title: "Podmio" });
});

router.get("/logout", (req, res, next) => {
  res.clearCookie("token");
  res.redirect("/login");
});

module.exports = router;
