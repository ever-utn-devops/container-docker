'use strict';
module.exports = function (app){
    var proxy = require('../controllers/ProxyController');

   app.route('/containers')
        .get(proxy.container_get_all);

   app.route('/containers/:id')
        .get(proxy.container_get_by_id);

   app.route('/users/')
        .get(proxy.users_get_all);

   app.route('/users/:id')
        .get(proxy.users_get_by_id);

   app.route('/status')
        .get(proxy.status);

   /*app.route('/users/validateAuth')
        .post(proxy.validateAuth);

   app.route('/users')
        .post(proxy.create);

   app.route('/users')
        .delete(proxy.remove);*/
};