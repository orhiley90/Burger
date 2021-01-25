var connection = require('./connection.js');

const orm = {
    selectAll: function (tableName, cb) {
        const queryString = "SELECT * FROM " + tableName + ";";{
            connection.query(queryString, function (err, result){
            if (err) {
                throw err;
            }
            cb(result);
        })
    }
    },
    insertOne: function (table,columns, values, cb) {
        const queryString = "INSERT INTO " + table;

        queryString += "(";
        queryString += columns.toString();
        queryString += ")";
        queryString += " VALUES (";
        queryString += "?";
        queryString += ")";

        connection.query(queryString,values, function (err, result){
            if (err) throw err;

            cb(result);
         });

    },

    updateOne: function (tablename, colname, devoured, id, cb) {

        connection.query("UPDATE ?? SET ?? = ? WHERE id = ?", [tablename, colname, devoured, id], function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
};


module.exports = orm;