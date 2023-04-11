const express = require("express");
const connectDB = require("./config/database.js");
const todoRoutes = require("./routes/toDoRoute.js");
const cors = require("cors");
const app = express();

//data transfering and middlewaEre setup
app.use(cors({ origin: true, credentials: true }))
app.use(express.json({ extended: false }));

//server check
app.get("/", (req, res) => {
  res.send("server is running");
});

//routes setup
app.use('/api/todo', todoRoutes);

//db setup
connectDB();
app.listen(8008, () => {
  console.log("server is listening to 8008");
});
