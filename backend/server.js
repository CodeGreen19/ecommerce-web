const app = require("./app");
const express = require("express");

const path = require("path");

const connectDB = require("./config/database.js");
// connenct database
connectDB();

//// delployment code ................................

const __dirname1 = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname1, "/frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname1, "frontend", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running..");
  });
}
//// delployment code ................................

app.listen(process.env.PORT || 8000, () => {
  console.log(`Server Is Running Port ${process.env.PORT || 8000}`);
});
