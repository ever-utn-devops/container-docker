'use strict';

exports.get_all = function(req, res){
    var model = require('../models/containersModel');
    res.json(model.get_all());
};

exports.create = function(req, res){
    var model = require('../models/containersModel');
    res.json(model.create(req.body));
};

exports.get_by_id = function(req, res){
    var model = require('../models/containersModel');
    res.json(model.get_by_id(req.params.id));
};