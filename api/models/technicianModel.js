'use strict';

const fs = require('fs');

let rawdata = fs.readFileSync('./api/data/technicians.json');
let containersdata = JSON.parse(rawdata);
console.log(containersdata);

exports.get_all = function(re, res){
    return containersdata;
};

exports.get_by_id = function(conId, pass, res){
    var filtered = _.where(containersdata, {id: conId, password: pass});
    return filtered;
};