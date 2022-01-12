'use strict';

let model = require('../models/userModel');

exports.get_all = function(req, res){
    res.json(model.get_all());
};

exports.get_by_id = function(req, res){
    res.json(model.get_by_id(req.params.id));
};

exports.validateAuth = function(req, res){
    res.json(model.authenticate(req.body.id, req.body.password));
}; 

exports.create = function(req, res){
    res.json(model.create(req.body));
};

exports.remove = function(req, res){
    res.json(model.remove(req.body.id));
};