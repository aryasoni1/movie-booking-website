const mongoose = require("mongoose");

const showtimeSchema = new mongoose.Schema({
  ticketPrice: {
    type: Number,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
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
});

module.exports = mongoose.model("Showtime", showtimeSchema);
