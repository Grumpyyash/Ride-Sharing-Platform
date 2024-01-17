import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { router } from "./routes/rideRoutes.js";

const app = express();
app.use(express.json());
dotenv.config();

app.use(router);

mongoose.connect(process.env.MONGO_URI);
const db = mongoose.connection;

db.on("error", (err) => {
  console.log("Error connecting to MongoDB Atlas:", err);
});

db.on("open", () => {
  console.log("DB is connected to atlas");
  app.listen(5000, () => {
    console.log("server has started running on port 5000");
  });
});
