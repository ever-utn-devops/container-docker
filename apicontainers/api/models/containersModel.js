'use strict';

const fs = require('fs');

let rawdata = fs.readFileSync('./api/data/containers.json');
let containersdata = JSON.parse(rawdata);
console.log(containersdata);

exports.get_all = function(re, res){
    return containersdata;
};