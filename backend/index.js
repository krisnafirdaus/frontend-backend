const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const config = require("config");
const UserRoute = require("./routes/routes");

const app = express();

const db = config.get("mongoURI");

mongoose
  .connect(db)
  .then(() => console.log("MongoDB Terkoneksi..."))
  .catch((err) => console.log(err));

app.use(cors());
app.use(express.json());
app.use(UserRoute);

app.listen(8000, () => console.log("Server up and running..."));
