const config = require("config");
const jwt = require("jsonwebtoken");
const router = require("express").Router();

const UserController = require("./user.controller");

router.post("/", async (req, res, next) => {
  let payload = req.body;
  const data = await UserController.create(payload);
  try {
    res.json(data);
  } catch (e) {
    return e;
  }
});
router.post("/login", async (req, res, next) => {
  let payload = req.body;

  let data = await UserController.find(payload);
  if (data.email) {
    try {
      const token = await jwt.sign(
        {
          email: data.email,
          userId: data._id
        },
        config.get("app.secret"),
        {
          expiresIn: "24h"
        }
      );
      res
        .cookie("token", token)
        .status(200)
        .json({ message: "Login Successfull", token: token });
    } catch (e) {
      return e;
    }
  } else if (!data.email) {
    res.status(401).json(data);
  }
});
router.get("/", async (req, res, next) => {
  res.sendStatus(200);
});

module.exports = router;
