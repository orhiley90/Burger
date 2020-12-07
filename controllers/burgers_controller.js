var express = require('express')
var router = express.Router()
var burger = require('../models/burger.js');

router.get('/', function (req, res) {

  burger.selectAll(function (data) {
   var handlebarObject = { burgers: data };
   console.log(handlebarObject);
   res.render('index', handlebarObject);

   });

});

router.post('/burger/create', function (req, res) {
 burger.insertOne(req.body.burger_name, function() {
   res.redirect('/');
 });
});


router.post('/burger/eat', function (req, res) {
 burger.updateOne(req.body.id, function() {
   res.redirect('/');
 });
});
router.post('/burger/restore', function (req, res) {
 burger.restoreOne(req.body.id, function() {
   res.redirect('/');
 });
});

module.exports = router;
