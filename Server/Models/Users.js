const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["admin", "customer", "superAdmin"],
    default: "customer",
  },
  phone: {
    type: String,
    trim: true,
  },
  orders: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Reservation", // Assuming you have an Reservation model
    },
  ],
});

module.exports = mongoose.model("User", userSchema);
