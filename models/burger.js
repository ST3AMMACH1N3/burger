const orm = require('../config/orm');

let burger = {
    selectAll: function(cb) {
        orm.selectAll('burgers', res => {
            cb(res);
        });
    },

    create: function(name, cb) {
        orm.insertOne('burgers', 'burger_name', name, res => {
            cb(res);
        });
    },

    devour: function(id, cb) {
        orm.updateOne('burgers', 'devoured', true, id, res => {
            cb(res);
        });
    }
}

module.exports = burger;