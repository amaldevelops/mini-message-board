const {Router} = require("express");

const messagesRouter = Router();

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

messagesRouter.get("/", (req, res) => {
    res.render("index", { messages: messages });
  });
  
  messagesRouter.get("/new", (req, res) => {
    res.render("form");
  });
  
  messagesRouter.post("/new", (req, res) => {
    const { messageText, authorName } = req.body;
    messages.push({ text: messageText, user: authorName, added: new Date() });
  
    res.redirect("/");
  });
  
  messagesRouter.get("/:messageID", (req, res) => {
    const { messageID } = req.params;
    res.send(`Author: ${messages[messageID]["user"]} <br>
          Message: ${messages[messageID]["text"]} <br>
          Time: ${messages[messageID]["added"]} <br>
          <-- Click the browser Back button to go back`);
  });
  
module.exports=messagesRouter;