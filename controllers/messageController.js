const db = require("../db/queries");

async function displayAllMessages(req, res) {
  const messages = await db.SQLGetAllMessages();
  res.render("index", { messages: messages });
}

async function displayForm(req, res) {
  res.render("form");
}

async function postForm(req, res) {
  const { messageText, authorName } = req.body;
  db.SQLPostMessage(messageText, authorName);

  res.redirect("/");
}

async function getMessagesByID(req, res) {
  const { messageID } = req.params;
  let messages = await db.SQLGetMessageByID(messageID);
  console.log(messages);
  res.send(`Author: ${messages[0]["users"]} <br>
          Message: ${messages[0]["text"]} <br>
          Time: ${messages[0]["added"]} <br>
          <-- Click the browser Back button to go back`);
}

module.exports = {
  displayAllMessages,
  displayForm,
  postForm,
  getMessagesByID,
};
