'use strict';
module.exports = function (app){
    var containers = require('../controllers/ContainerController');

    app.route('/recipients')
        .get(containers.get_all);

     app.route('/recipients')
        .post(containers.create);

     app.route('/recipients')
        .delete(containers.remove);        

   app.route('/recipients/:id')
        .get(containers.get_by_id);

};