// Setup Express
const express = require("express");
const app = express();

// Setup Router
const { Router } = require("express");
const newMessageRouter = Router();

// Set Static asset path for serving images, css, etc.
const path = require("node:path");
const assetsPath=path.join(__dirname,"public");
app.use(express.static(assetsPath));

// Set view Engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Setup app level Express middleware called express.urlencoded() to parse the form data into req.body
app.use(express.urlencoded({ extended: true }));

// Set Application port ie. localhost:3000
const PORT = 3000;

const messages = [
  {
    text: "Welcome to Star Trek Next Generation!",
    user: "Captain Picard",
    added: new Date(),
  },
  {
    text: "Thanks captain !",
    user: "Jodie",
    added: new Date(),
  },
  {
    text: "Take charge of the Ships Engineering and report back to me on the status of all systems!",
    user: "Captain Picard",
    added: new Date(),
  },
  {
    text: "Yes Captain !",
    user: "Jodie",
    added: new Date(),
  },
];

app.get("/", (req, res) => {
  res.render("index", { messages: messages });
});

app.get("/new", (req, res) => {
  res.render("form");
});

app.post("/new", (req, res) => {
  const { messageText, authorName } = req.body;
  messages.push({ text: messageText, user: authorName, added: new Date() });

  res.redirect("/");
});

app.listen(PORT, () => {
  console.log("Mini Message Board");
});
