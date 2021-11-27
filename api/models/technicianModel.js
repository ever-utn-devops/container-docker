'use strict';

const fs = require('fs');
var _ = require('underscore');

let rawdata = fs.readFileSync('./api/data/technicians.json');
let containersdata = JSON.parse(rawdata);
console.log(containersdata);

exports.get_all = function(re, res){
    return containersdata;
};

exports.get_by_id = function(user, pass, res){
    var code=0;
    var message= '';
    var data=null;
    var filtered = _.where(containersdata, {id: user, password: pass});
    if (filtered.length > 0){
        if (filtered[0].isActive){
            data = filtered[0];
        }else{
            message = 'The user is inactivated.';
            code = -1;
        }
    }else{
        message = 'Incorrect code or password.';
        code = -1;
    }
    return {
        data: data,
        responseCode: code,
        message: message
    };
};