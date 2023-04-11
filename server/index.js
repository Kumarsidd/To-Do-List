const express = require("express");
const connectDB = require("./config/database.js");
const app = express();

app.use(express.json({ extended: false }));

app.get("/", (req, res) => {
  res.send("server is running");
});

connectDB();
app.listen(8008, () => {
  console.log("server is listening to 8008");
});
