const express = require("express");
const bodyparser = require("body-parser");
const { urlencoded } = require("body-parser");

const app = express();
app.use(bodyparser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));

var items = ["apple", "orange"];
app.get("/", function (req, res) {
  res.render("home", { itemArray: items });
});
app.post("/", function (req, res) {
  var item = req.body.item;
  items.push(item);
  res.redirect("/");
});

app.listen(3000, function () {
  console.log("Server is Up and Running");
});
