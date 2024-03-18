const express = require("express");

const router = express.Router();

const { getOne } = require("../controller/userController");
// http://localhost:4000/api/user/
// router.get("/", getAll);

// http://localhost:4000/api/user/1
router.get("/:id", getOne);

module.exports = router;
