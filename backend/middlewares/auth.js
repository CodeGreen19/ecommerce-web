// const User = require("../models/user");
const ErrorHandler = require("./error");

exports.isUserExist = async (req, res, next) => {
  // const user = await User.findById("659d08a6c335bb1a86962f0d");
  // req.user = user;
  if (!req.user) {
    return next(new ErrorHandler("please login first", 401));
  }
  next();
};
