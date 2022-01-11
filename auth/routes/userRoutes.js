'use strict';
module.exports = function (app){
    var users = require('../controllers/UserController');

   app.route('/users')
        .get(users.get_all);

   app.route('/users/:id')
        .get(users.get_by_id);

   app.route('/users/validateAuth')
        .post(users.validateAuth);

   app.route('/users')
        .post(users.create);

   app.route('/users')
        .delete(users.remove);
};