const fs = require("fs");
const mongoose = require("mongoose");
const path = require("path");
const reg = new RegExp("\\.js$", "i");
const modelsPath = path.resolve("server", "models");
const db = "commerce";

mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost/commerce", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.on("connected", () => {
  console.log("connected to MongoDB");
});

const models_path = path.join(__dirname, "./../models");

fs.readdirSync(models_path).forEach(function(file) {
  if (file.indexOf(".js") >= 0) {
    require(models_path + "/" + file);
  }
});
