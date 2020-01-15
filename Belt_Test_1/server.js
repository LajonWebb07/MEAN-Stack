const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

let app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "./public/dist/public")));

require("./server/config/mongoose.js");
require("./server/config/routes.js")(app);

app.listen(8000, function() {
  console.log("Listening on port 8000");
});
