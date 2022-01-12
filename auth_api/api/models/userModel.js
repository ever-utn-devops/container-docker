'use strict';

var _ = require('underscore');
var util = require('../util/util');
var jsonFile = './api/data/users.json';

let techsData = JSON.parse(util.readFile(jsonFile));

exports.get_all = function(re, res){
    return techsData;
};

exports.get_by_id = function(conId, res){
    var filtered = _.where(techsData, {id: conId});
    return filtered;
};

exports.authenticate = function(user, pass, res){
    var code=0;
    var message= '';
    var data=null;
    var filtered = _.where(techsData, {id: user, password: pass});
    if (filtered.length > 0){
        if (filtered[0].isActive){
            data = filtered[0];
        }else{
            message = 'The user is inactivated.';
            code = -1;
        }
    }else{
        message = 'Incorrect user or password.';
        code = -1;
    }
    return {
        data: data,
        responseCode: code,
        message: message
    };
};

exports.create = function(re, res){
    var code=0;
    var message= '';
    var data=null;
    var list = this.get_by_id(re.id);
    if (list.length > 0){
        message = 'Duplicate data is not allowed. The user is already stored. Try to insert another one.';
        code = -1;
    }else{
        techsData.push(re);        
        util.writeFile(JSON.stringify(techsData), jsonFile);
        data = re;
    }
    return {
        data: data,
        responseCode: code,
        message: message
    };
};

exports.remove = function(conId, res){
    var code=0;
    var message= '';
    var data = null;
    var list = this.get_by_id(conId);
    if (list.length > 0){
        techsData = techsData.filter((el) => {
            return el.id !== list[0].id;
          });
        util.writeFile(JSON.stringify(techsData), jsonFile);
        data = list[0];
    }else{        
        message = 'The information was not found to be removed.';
        code = -1;
    }
    return {
        data: data,
        responseCode: code,
        message: message
    };
};