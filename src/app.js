const express = require("express");
const router = require("./router");

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("on est la  sur le '/' ");
});

app.use("/api", router);

module.exports = app;
