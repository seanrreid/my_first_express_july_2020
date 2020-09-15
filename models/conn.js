const host = "lallah.db.elephantsql.com";
const database = "wyynaqgo";
const user = "wyynaqgo";
const password = "P2v-4H5OMWvr9JCA4olV0vqrreTq_fAv";

const pgp = require('pg-promise')({
    query: function (event) {
        console.log("QUERY:", event.query);
    }
});

const options = {
    host: host,
    database: database,
    user: user,
    password: password,
}

const db = pgp(options);

module.exports = db;