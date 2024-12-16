// App setup
const express = require("express");
const path = require("node:path");
const app = express();
const assetsPath = path.join(__dirname, "public");
const newMessageRouter=require("./routes/newMessage");

app.use(express.static(assetsPath));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use("/new",newMessageRouter)

const PORT = 3000;

const messages = [
  {
    text: "Hi there!",
    user: "Maverick",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
  {
    text: "Welcome to Melbourne !",
    user: "Albanese",
    added: new Date(),
  },
];

app.get("/", (req, res) => {
  res.render("index", { messages: messages });
});

// app.get("/new", (req, res) => {
//   res.render("new");
// });

app.listen(PORT, () => {
  console.log("Mini Message Board");
});
