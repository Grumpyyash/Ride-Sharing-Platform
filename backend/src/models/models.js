import mongoose from "mongoose";

const rideSchema = new mongoose.Schema({
  tripId: {
    type: String,
    required: true,
    unique: true,
  },
  driverName: {
    type: String,
    required: true,
  },
  driverPhoneNumber: {
    type: String,
    required: true,
  },
  cabNumber: {
    type: String,
    required: true,
  },
  startLatitude: {
    type: Number,
    required: true,
  },
  startLongitude: {
    type: Number,
    required: true,
  },
  endLatitude: {
    type: Number,
    required: true,
  },
  endLongitude: {
    type: Number,
    required: true,
  },
  customerId: {
    type: String,
    require: true,
  },
  // You can add more fields as needed for your trip model
  // For example: startLocation, endLocation, startTime, endTime, etc.
});

const Ride = mongoose.model("Ride", rideSchema);

export { Ride };
