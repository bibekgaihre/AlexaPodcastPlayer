const UserModel = require("./user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

class Controller {
  async create(payload) {
    const email = await UserModel.findOne({ email: payload.email }).exec();
    if (email) {
      return Promise.resolve("User Already Exists");
    }
    let salt = await bcrypt.genSalt(10);
    let hash = await bcrypt.hash(payload.password, salt);
    payload.password = hash;
    let data = await UserModel.create(payload);
    return data;
  }
}

module.exports = new Controller();
