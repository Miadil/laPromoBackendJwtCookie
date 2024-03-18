const express = require("express");

const router = express.Router();

const { getAll, getOne } = require("../controller/movieController");
// http://localhost:4000/api/movie/
router.get("/", getAll);
// http://localhost:4000/api/movie/1
router.get("/:id", getOne);

module.exports = router;
