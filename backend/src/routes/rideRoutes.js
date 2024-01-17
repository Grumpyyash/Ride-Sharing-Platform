import express from "express";
import {
  getHomeController,
  createRideController,
  getRidesController,
} from "../controllers/rideController.js";

const router = express.Router();

router.get("/", getHomeController);
router.get("/getRides", getRidesController);
router.post("/createRide", createRideController);

export { router };
