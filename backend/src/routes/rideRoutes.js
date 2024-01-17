import express from "express";
import {
  getHomeController,
  createRideController,
} from "../controllers/rideController.js";

const router = express.Router();

router.get("/", getHomeController);
router.post("/createRide", createRideController);

export { router };
