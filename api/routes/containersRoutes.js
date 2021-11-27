'use strict';
module.exports = function (app){
    var containers = require('../controllers/ContainerController');
    var technicians = require('../controllers/TechnicianController');

    app.route('/containers')
        .get(containers.get_all);

     app.route('/containers')
        .post(containers.create);

   app.route('/containers/:id')
        .get(containers.get_by_id);

   app.route('/technicians')
        .get(technicians.get_all);

   app.route('/technicians')
        .post(technicians.validateAuth);
};