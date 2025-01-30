const movies = require("../models/movies")
const { v4: uuidv4 } = require("uuid");

exports.createMovies = async (req, res) => {
    try {
        const { movieName, genre, releaseDate } = req.body;
        const movieExist = await movies.findOne({ where: { movieName: movieName.toLowerCase() } });
        console.log("exists", movieExist);

        if (movieExist) {
            return res.status(401).json({
                message: `movie with name ${movieName} already exists`
            })
        }
        const newMovie = await movies.create({
            id: uuidv4(),
            movieName: movieName.toLowerCase(),
            genre: genre.toLowerCase(),
            releaseDate
        })
        console.log("final", newMovie);
        res.status(201).json({
            message: "new movie created successfully",
            data: newMovie
        })
    } catch (error) {
        res.status(500).json({
            message: "internal server error",
            error: error.message
        })
    }
}

exports.getAllMovies = async (req, res) => {
    try {
        const allMovies = await movies.findAll();
        res.status(200).json({
            message: `all movies available`,
            data: allMovies
        })
    } catch (error) {
        res.status(500).json({
            message: "internal server error",
            error: error.message
        })
    }
}

exports.getMoviesByName = async (req, res) => {
    try {
        const { movieName } = req.params;
        const findMovie = await movies.findOne({ where: { movieName: movieName.toLowerCase() } })

        if (!findMovie) {
            return res.status(404).json("movie not found")
        }
        res.status(200).json({
            message: "movie found",
            date: findMovie
        })
    } catch (error) {
        res.status(500).json({
            message: "internal server error",
            error: error.message
        })
    }
}

exports.getMoviesById = async (req, res) => {
    try {
        const { id } = req.params;
        const findMovie = await movies.findAll({ where: { id: id } })
        
        if (!findMovie) {
            return res.status(404).json("movie not found")
        }
        res.status(200).json({
            message: "movie found",
            date: findMovie
        })
    } catch (error) {
        res.status(500).json({
            message: "internal server error",
            error: error.message
        })
    }
}

exports.getMoviesByGenre = async (req, res) => {
    try {
        const { genre } = req.params;

        const findMovie = await movies.findAll({ where: { genre: genre } })

        if (!findMovie) {
            return res.status(404).json("movie")
        }
        res.status(200).json({
            message: "movie found",
            date: findMovie
        })
    } catch (error) {
        res.status(500).json({
            message: "internal server error",
            error: error.message
        })
    }
}