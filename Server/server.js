const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

// Load environment variables
dotenv.config();

// Create Express app
const app = express();

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

// Middleware
app.use(express.json());
app.use(cors());

// Mount routes
app.use("/api/movies", require("./routes/movies"));
// app.use("/api/theatres", require("./routes/theatres"));
// app.use("/api/showtimes", require("./routes/showtimes"));
// app.use("/api/reservations", require("./routes/reservations"));
// app.use("/api/users", require("./routes/users"));

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
