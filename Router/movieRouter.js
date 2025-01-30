const { createMovies, getAllMovies, getMoviesByName, getMoviesById, getMoviesByGenre }
 = require("../controller/movieController");

const router = require("express").Router();

router.post("/movies", createMovies);
router.get("/movies", getAllMovies);
router.get("/movies-name/:movieName", getMoviesByName);
router.get("/movies-id/:id", getMoviesById);
router.get("/movies-genre/:genre", getMoviesByGenre)


module.exports = router;