const express = require("express");
const router = express.Router();
const movieController = require("../controllers/movieController");
//Customer routes to get all movies
//Admin must be able to Add / Update / Delete Movies.
// Get all movies
router.get("/", movieController.getAllMovies);

// Get a specific movie by ID
router.get("/:id", movieController.getMovieById);

// Create a new movie
router.post("/", movieController.createMovie);

// Update a movie
router.put("/:id", movieController.updateMovie);

// Delete a movie
router.delete("/:id", movieController.deleteMovie);

module.exports = router;
