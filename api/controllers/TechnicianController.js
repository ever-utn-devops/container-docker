'use strict';

exports.get_all = function(req, res){
    var model = require('../models/technicianModel');
    res.json(model.get_all());
};