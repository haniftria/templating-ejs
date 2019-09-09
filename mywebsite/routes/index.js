var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {page: 'Home', menuId: 'home'});
});
router.get('/about', function(req, res, next) {
  res.render('index', {page: 'About', menuId: 'about'});
});
router.get('/contact', function(req, res, next) {
  res.render('index', {page: 'contact', menuId: 'contact'});
});

module.exports = router;
