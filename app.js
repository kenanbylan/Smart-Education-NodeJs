const express = require("express");

const app = express();

app.get("/", (req, res, next) => {
  res.status(200).send("Hello World");
});

const port = 3000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
