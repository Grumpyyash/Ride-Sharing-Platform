import express from "express";
import {
  getHomeController,
  createRideController,
  getRidesController,
  getRideWithIdController,
} from "../controllers/rideController.js";

const router = express.Router();

router.get("/", getHomeController);
router.get("/getRides", getRidesController);
router.get("/getRideWithId/:id", getRideWithIdController);
router.post("/createRide", createRideController);

export { router };
