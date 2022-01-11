'use strict';

let model = require('../models/containersModel');

exports.get_all = function(req, res){
    res.json(model.get_all());
};

exports.create = function(req, res){
    res.json(model.create(req.body));
};

exports.remove = function(req, res){
    res.json(model.remove(req.body.id));
};

exports.get_by_id = function(req, res){
    res.json(model.get_by_id(req.params.id));
};