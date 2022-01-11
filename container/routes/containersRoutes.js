'use strict';
module.exports = function (app){
    var containers = require('../controllers/ContainerController');

    app.route('/containers')
        .get(containers.get_all);

     app.route('/containers')
        .post(containers.create);

     app.route('/containers')
        .delete(containers.remove);        

   app.route('/containers/:id')
        .get(containers.get_by_id);

};