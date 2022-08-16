const express = require("express");
const mongoose = require("mongoose");

const pageRouter = require("./router/pageRoute");
const courseRouter = require("./router/courseRoute");
const categoryRouter = require("./router/categoryRoute");

const app = express();

//Connect db to mongoose
mongoose
  .connect("mongodb://localhost:27017/smartedu-db")
  .then((response) => {
    console.log("Connected to mongoDB == ", response);
  })
  .catch((error) => {
    console.log("Error not connecting to mongoDB == ", error);
  });

//Template Engine
app.set("view engine", "ejs");

//Middleware
app.use(express.static("public"));
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing

//Routes
app.use("/", pageRouter);
app.use("/courses", courseRouter);
app.use("/categories", categoryRouter);

const port = 3000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
