const database = require('./database_credentials');
const mysql = require('mysql2');

const db = mysql.createConnection({
    host: database.host,
    user: database.user,
    password: database.password
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('mysql connected');
});

module.exports = db;