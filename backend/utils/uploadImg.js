const cloudinary = require("cloudinary");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

exports.uploadImage = async (imagePath) => {
  const data = await cloudinary.v2.uploader.upload(imagePath, {
    folder: "product_img",
  });
  return data;
};

// delete image from cloudinary
exports.deleteImage = async (publicId) => {
  const result = await cloudinary.v2.uploader.destroy(publicId);
  if (result.result === "ok") {
    return result.secure_url;
  } else {
    throw new Error("Failed to delete image.");
  }
};
