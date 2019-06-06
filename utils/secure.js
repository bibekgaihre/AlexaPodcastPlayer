const jwt = require("jsonwebtoken");
const config = require("config");

const SecureUI = () => {
  return (req, res, next) => {
    try {
      const tok = req.cookies.token;
      const decoded = jwt.verify(tok, config.get("app.secret"));
      req.userData = decoded;
      next();
    } catch (err) {
      res.redirect("/login");
      res.end();
    }
  };
};

const SecureAPI = () => {
  return (req, res, next) => {
    try {
      const tok = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(tok, config.get("app.secret"));
      req.userData = decoded;
      next();
    } catch (err) {
      return res.status(401).json({ message: "Auth Failed. Must send Valid token" });
    }
  };
};

module.exports = { SecureUI, SecureAPI };
