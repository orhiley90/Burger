var orm = require('../config/orm.js');

const burger = {
    selectAll: function (cb) {
        orm.selectAll('burgers', function (res) {
            cb(res);
        });
    },

    insertOne: function (columns, values, cb) {
        orm.insertOne("burgers",columns, values, function (res) {
            cb(res);
        });
    },

    updateOne: function (objValues, condition, cb) {
        orm.updateOne('burgers', objValues, condition, function (res) {
            cb(res)
        });
    },

    delete: function (condition, cb) {
        orm.delete("burgers", condition, function (res) {
            cb(res);
        });
    }
};

$('#submit-button').on('click', function (e) {
    insertOne("burgers",["burger_name", "devoured"],[$('#new_burger').value, 0], cb);
  });


module.exports = burger;