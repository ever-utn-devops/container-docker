var express = require('express'),
    app = express(),
    port = 3000, 
    bodyParser = require('body-parser');
    // process.env.PORT || 
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());

    var routes = require('./container/routes/containersRoutes');
    routes(app);

    app.listen(port);

    
/*const fs = require('fs');
let rawdata = fs.readFileSync('api/data/containers.json');
let containersdata = JSON.parse(rawdata);
console.log(containersdata);*/

 console.log('Restful API server started on: ' + port);
