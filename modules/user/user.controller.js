const UserModel = require("./user.model");
const bcrypt = require("bcryptjs");

const create = async payload => {
  const email = await UserModel.findOne({ email: payload.email }).exec();
  if (email) {
    return Promise.resolve({ message: "User Already Exists" });
  }
  let salt = await bcrypt.genSalt(10);
  let hash = await bcrypt.hash(payload.password, salt);
  payload.password = hash;
  let data = await UserModel.create(payload);
  return data;
};
const find = async payload => {
  let user = await UserModel.findOne({ email: payload.email }).exec();
  if (!user) {
    return Promise.resolve({ message: "Email or Password is incorrect. Please try again" });
  }
  let chkPass = await bcrypt.compare(payload.password, user.password);
  if (chkPass) {
    return user;
  }
  return Promise.resolve({ message: "Email or Password is incorrect. Please try again" });
};

module.exports = { create, find };
