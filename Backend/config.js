const PORT = 5000;
const DB_NAME = "Auth";
const db_url = "mongodb://localhost:27017/";

const mongo_url = db_url + DB_NAME;

module.exports = {PORT, mongo_url};