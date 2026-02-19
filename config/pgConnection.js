const pg = require('pg');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({
    path: path.resolve(__dirname, '../.env')
})

let { host, user, password, database } = process.env;

const pool = new pg.Pool({
    host,
    user,
    password,
    database
});

module.exports = pool;

