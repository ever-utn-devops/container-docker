'use strict';
const axios = require('axios');

const container_url = `http://localhost:3000/containers`;
const user_url = `http://localhost:3001/users`;

exports.container_get_all = function(req, res){
    let url = container_url;
    axios({
        method:'get',
        url
    })
    .then(function (response) {
        res.send(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });
};

exports.container_get_by_id = function(req, res){
    let url = container_url + '/' + req.params.id;
    axios({
        method:'get',
        url
    })
    .then(function (response) {
        res.send(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });
};

exports.users_get_all = function(req, res){
    let url = user_url;
    axios({
        method:'get',
        url
    })
    .then(function (response) {
        res.send(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });
};

exports.users_get_by_id = function(req, res){
    let url = user_url + '/' + req.params.id;
    axios({
        method:'get',
        url
    })
    .then(function (response) {
        res.send(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });
};

exports.status = function(req, res){
    res.send('Proxy is running');
}; 