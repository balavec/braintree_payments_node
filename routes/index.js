var express = require('express');
var dotenv = require('dotenv').config()
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Braintree Payments in Node', tokenization_key: process.env.TOKENIZATION_KEY });
});

module.exports = router;
