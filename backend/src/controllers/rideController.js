import { Ride } from "../models/models.js";

const getHomeController = (req, res) => {
  res.status(200).send("Hello from home route");
};

const createRideController = async (req, res) => {
  const {
    tripId,
    driverName,
    driverPhoneNumber,
    cabNumber,
    startLatitude,
    startLongitude,
    endLatitude,
    endLongitude,
    customerId,
  } = req.body;
  const newRide = new Ride({
    tripId,
    driverName,
    driverPhoneNumber,
    cabNumber,
    startLatitude,
    startLongitude,
    endLatitude,
    endLongitude,
    customerId,
  });
  await newRide.save();
  res.json(newRide);
};

export { getHomeController, createRideController };
