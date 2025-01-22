const express = require("express");
const routes = require("./middleware/routes");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

mongoose
  .connect("mongodb://localhost:27017/cartero")
  .then((res) => console.log("Connected to Database"));

// JSON Converter
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Cors Config
app.use(cors());
app.use(routes);

app.listen(3000, () => console.log("Server is active on port 3000"));
