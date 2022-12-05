import express from "express";
import mongoose from "mongoose";
import cors from "cors";
const config = require("config");
import UserRoute from "./routes/routes";

const app = express();

const db = config.get("mongoURI");

mongoose
  .connect(db)
  .then(() => console.log("MongoDB Terkoneksi..."))
  .catch((err) => console.log(err));

app.use(cors());
app.use(express.json());
app.use(UserRoute);

app.listen(6000, () => console.log("Server up and running..."));
