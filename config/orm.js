const connection = require('./connection');

let orm = {
    selectAll: function(table, cb) {
        connection.query(`SELECT * FROM ${table}`, (err, res) => {
            if (err) throw err;
            cb(res);
        });
    },

    insertOne: function(table, colName, value, cb) {
        connection.query(`INSERT INTO ${table} (${colName}) VALUES ('${value}')`, (err, res) => {
            if (err) throw err;
            cb(res);
        });
    },

    updateOne: function(table, colName, value, id, cb) {
        connection.query(`UPDATE ${table} SET ${colName}=${value} WHERE id=${id}`, (err, res) => {
            if (err) throw err;
            cb(res);
        });
    }
}

module.exports = orm;