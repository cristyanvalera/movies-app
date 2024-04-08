const express = require('express');
const { index, create, show, destroy, update, setGenresToMovies } = require('../controllers/movie.controller');

const movieRouter = express.Router();

movieRouter.route('/')
    .get(index)
    .post(create);

movieRouter.route('/:id/genres')
    .post(setGenresToMovies);

movieRouter.route('/:id')
    .get(show)
    .delete(destroy)
    .put(update);

module.exports = movieRouter;