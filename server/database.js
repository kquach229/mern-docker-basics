const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connectionUri = process.env.connectionUri;

mongoose.connect(connectionUri, {
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useNewUrlParser: true,
});

const db = mongoose.connection;

db.on("error", () => {
  console.log("Mongo error");
});

db.once("open", () => {
  console.log("Mongo db connection successful");
});
