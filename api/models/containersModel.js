'use strict';

const fs = require('fs');
var _ = require('underscore');

let rawdata = fs.readFileSync('./api/data/containers.json');
let containersdata = JSON.parse(rawdata);

exports.get_all = function(re, res){
    return containersdata;
};

exports.get_by_id = function(conId, res){
    var filtered = _.where(containersdata, {id: conId});
    console.log(filtered);
    return filtered;
};

exports.create = function(re, res){
    console.log(re);
    return re;
};