const router = require("express").Router();
const UserController = require("./user.controller");
const config = require("config");

router.post("/", async (req, res, next) => {
  payload = req.body;
  const data = await UserController.create(payload);
  try {
    res.json(data);
  } catch (e) {
    return e;
  }
});
router.get("/", async (req, res, next) => {
  res.sendStatus(200);
});

module.exports = router;
