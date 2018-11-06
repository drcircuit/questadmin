const express = require("express");
var bodyParser = require('body-parser')
const api = express();
const store = require("./store");
const router = require("./router")(express,store("rooms"));
api.use(bodyParser.urlencoded({ extended: false }))
api.use(bodyParser.json())
api.use(router);
api.use("/",express.static(__dirname+"/wwwroot"));
api.listen(80);

