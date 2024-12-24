const { Router } = require("express");

const messageController = require("../controllers/messageController");

const messagesRouter = Router();

messagesRouter.get("/", messageController.displayAllMessages);

messagesRouter.get("/new", messageController.displayForm);

messagesRouter.post("/new", messageController.postForm);

messagesRouter.get("/:messageID", messageController.getMessagesByID);

module.exports = messagesRouter;
