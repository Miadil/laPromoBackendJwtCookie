const { findAll, findOne } = require("../model/movieModel");

const getAll = async (req, res) => {
  try {
    const movies = await findAll();
    res.json(movies);
  } catch (error) {
    res.sendStatus(500);
  }
};

const getOne = async (req, res) => {
  const movieId = parseInt(req.params.id);
  console.log(movieId);
  try {
    if (isNaN(movieId)) {
      throw new Error();
    }
    const [movie] = await findOne(movieId);
    res.json(movie);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

module.exports = { getAll, getOne };
