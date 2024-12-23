// Setup Express
const express = require("express");
const app = express();

// Setup Router
const messagesRouter = require ("./routes/messagesRouter");

// Set Static asset path for serving images, css, etc.
const path = require("node:path");
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

// Set view Engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Setup app level Express middleware called express.urlencoded() to parse the form data into req.body
app.use(express.urlencoded({ extended: true }));

// Set Application port ie. localhost:3000
const PORT = 3000;

app.use("/", messagesRouter)



// app.get("/", (req, res) => {
//   res.render("index", { messages: messages });
// });

// app.get("/new", (req, res) => {
//   res.render("form");
// });

// app.post("/new", (req, res) => {
//   const { messageText, authorName } = req.body;
//   messages.push({ text: messageText, user: authorName, added: new Date() });

//   res.redirect("/");
// });

// app.get("/:messageID", (req, res) => {
//   const { messageID } = req.params;
//   res.send(`Author: ${messages[messageID]["user"]} <br>
//         Message: ${messages[messageID]["text"]} <br>
//         Time: ${messages[messageID]["added"]} <br>
//         <-- Click the browser Back button to go back`);
// });

app.listen(PORT, () => {
  console.log(
    "USS Enterprise (NCC-1701-D) - LCARS (Library Computer Access/Retrieval System) Message and Command Log"
  );
});

app.use((err, req, res, next) => {
  console.error(err);
  // We can now specify the `err.statusCode` that exists in our custom error class and if it does not exist it's probably an internal server error
  res.status(err.statusCode || 500).send(err.message);
});
