const db = require("./db");

// async function findAll() {
const findAll = async () => {
  try {
    const [movies] = await db.query("select * from movie");
    return movies;
  } catch (error) {
    console.error(error);
  }
};

const findOne = async (id) => {
  try {
    const [movie] = await db.query("select * from `movie` where id = ?", [id]);
    return movie;
  } catch (error) {
    console.error(error);
  }
};
module.exports = { findAll, findOne };
