const express = require("express");
const bodyParser = require("body-parser");
const app = express();
require("./database");
const cors = require("cors");

const postRouter = require("./routes/post.routes");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use("cors");

app.get("/", (req, res) => {
  res.status(200).send("Hello");
});

const port = 5050;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

app.use("/posts", postRouter);
