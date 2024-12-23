#! /us/bin/env node

const { Client } = require("pg");

require("dotenv").config();

const SQL = `
CREATE TABLE IF NOT EXISTS messages(
id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
text VARCHAR(1024),
users VARCHAR(256),
added TIMESTAMP DEFAULT NOW()
);

INSERT INTO messages (text,users,added)
VALUES
('Welcome to Star Trek Next Generation!','Captain Picard',NOW()),
('Thanks captain !','Geordi La Forge',NOW()),
('Take charge of the Ships Engineering and report back to me on the status of all systems!', 'Captain Picard',NOW()),
('Yes Captain !','Geordi La Forge',NOW())

`;

async function main() {
  console.log("Seeding....");
  const client = new Client({
    connectionString: `postgresql://amal:20242024@localhost:5432/messages`,
  });

  try {
    await client.connect();
    await client.query(SQL);
    console.log("Database seeded successfully!");
  } catch (err) {
    console.error("Error seeding the database:", err);
  } finally {
    await client.end();
    console.log("Database connection closed.");
  }
}

main();
