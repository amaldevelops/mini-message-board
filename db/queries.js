const pool =require("./pool");

async function SQLGetAllMessages()
{
    const {rows} = await pool.query("SELECT * FROM messages");
    return rows;
}


module.exports={
    SQLGetAllMessages
}