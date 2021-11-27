'use strict';

exports.get_all = function(req, res){
    var model = require('../models/technicianModel');
    res.json(model.get_all());
};

exports.get_all = function(req, res){
    var model = require('../models/technicianModel');
    res.json(model.get_all());
};

exports.validateAuth = function(req, res){
    var model = require('../models/technicianModel');
    console.log(req.body);
    res.json(model.get_by_id(req.body.user, req.body.password));
}; 