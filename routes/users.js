var express = require('express');
var router = express.Router();
let Mock = require('mockjs');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/test', (req, res) => {
  
});
module.exports = router;
