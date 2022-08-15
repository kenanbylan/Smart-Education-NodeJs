const express = require("express");
const fs = require("fs");

const pageRouter = require("./router/index");

const app = express();

//Template Engine
app.set("view engine", "ejs");

//Middleware
app.use(express.static("public"));

//Routes
app.get("/", pageRouter);

const port = 3000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
