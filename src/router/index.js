const express = require("express");

const router = express.Router();

const movieRoutes = require("./movieRouter");
const userRoutes = require("./userRouter");

router.use("/movie", movieRoutes);
router.use("/user", userRoutes);

module.exports = router;
