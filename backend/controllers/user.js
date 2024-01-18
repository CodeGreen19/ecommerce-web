const User = require("../models/user");
const tryCatchHandler = require("../middlewares/tryCatchHandler.js");
const ErrorHandler = require("../middlewares/error.js");

exports.logout = (req, res, next) => {
  req.session.destroy((err) => {
    if (err) return next(err);
    res.clearCookie("connect.sid", {
      secure: false,
      httpOnly: false,
      sameSite: false,
    });
    res.status(200).json({
      success: true,
      message: "Logged out successfully",
    });
  });
};

// for admin
exports.allUser = tryCatchHandler(async (req, res) => {
  const users = await User.find();

  res.status(200).json({
    success: true,
    users,
    user: req.user,
  });
});
// for admin
exports.addAndRemoveFavourite = tryCatchHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  const i = user.favourite.indexOf(req.params.id);

  if (i > -1) {
    user.favourite.splice(i, 1);
    await user.save();
    res.status(200).json({
      success: true,
      message: "Favourite Removed",
    });
  } else {
    user.favourite.push(req.params.id);
    await user.save();
    res.status(200).json({
      success: true,
      message: "Favourite Added",
    });
  }
});
// for admin
exports.getFavourite = tryCatchHandler(async (req, res) => {
  const user = await User.findById(req.user._id).populate("favourite");

  let info = [];
  user.favourite.forEach((item) => {
    info.push({
      _id: item._id,
      img: item.images[0].url,
      price: item.price,
    });
  });

  res.status(200).json({
    success: true,
    info,
  });
});

// store in data
exports.updateUserRole = tryCatchHandler(async (req, res, next) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    next(new ErrorHandler("order not found", 401));
  }
  if (req.body.role === "" || req.body.role === "role") {
    next(new ErrorHandler("please change role", 401));
  }
  user.role = req.body.role;
  await user.save();
  res.status(200).json({
    success: true,
    message: "Role updated",
  });
});
// store in data
exports.deleteUser = tryCatchHandler(async (req, res, next) => {
  await User.findByIdAndDelete(req.params.id);

  res.status(200).json({
    success: true,
    message: "User Deleted",
  });
});
