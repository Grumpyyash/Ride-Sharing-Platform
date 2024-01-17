import { Ride } from "../models/models.js";

const getHomeController = (req, res) => {
  res.status(200).send("Hello from home route");
};

const createRideController = async (req, res) => {
  const {
    tripId,
    customerId,
    driverName,
    driverPhoneNumber,
    cabNumber,
    startLatitude,
    startLongitude,
    endLatitude,
    endLongitude,
    isActive,
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
    isActive,
  });
  await newRide.save();
  res.json(newRide);
};

const getRidesController = async (req, res) => {
  const allRides = await Ride.find({});

  res.json(allRides);
};

export { getHomeController, createRideController, getRidesController };
