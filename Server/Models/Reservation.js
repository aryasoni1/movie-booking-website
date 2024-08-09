const mongoose = require("mongoose");

const reservationSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  startAt: {
    type: Date,
    required: true,
  },
  seats: {
    type: Number,
    required: true,
  },
  orderId: {
    type: String,
    required: true,
    unique: true,
  },
  ticketPrice: {
    type: Number,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
  movieId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Movie", // Assuming you have a Movie model
    required: true,
  },
  theatreId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Theatre", // Assuming you have a Theatre model
    required: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  phone: {
    type: String,
    required: true,
    trim: true,
  },
});

module.exports = mongoose.model("Reservation", reservationSchema);
