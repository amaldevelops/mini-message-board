const pool = require("./pool");

async function SQLGetAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}

async function SQLPostMessage(messageText, authorName) {
  const { rows } = await pool.query(
    "INSERT INTO messages(text,users) VALUES ($1,$2)",
    [messageText, authorName]
  );
}

async function SQLGetMessageByID(messageID) {
  const { rows } = await pool.query(
    "SELECT users,text,added FROM messages WHERE id=$1",
    [messageID]
  );
  return rows;
}

module.exports = {
  SQLGetAllMessages,
  SQLPostMessage,
  SQLGetMessageByID,
};
