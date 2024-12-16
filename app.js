const express = require("express");
const app = express();
const PORT = 3000;

const path = require("node:path");
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/new", (req, res) => {
  res.render("new");
});

app.listen(PORT, () => {
  console.log("Mini Message Board");
});
