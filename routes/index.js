var express = require('express');
var router = express.Router();
var http = require('http');
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hourai', installerLink: process.env["houraiDlLink"] });
});

module.exports = router;
