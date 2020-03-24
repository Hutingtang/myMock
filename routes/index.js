var express = require('express');
var router = express.Router();
let Mock = require('mockjs');
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});
/* 模拟数据 siteList */
router.post('/company/hasLogin/ajaxSite/QuerySiteList', (req, res) => {
  let body = req.body || {};
  const {
    page_no,
    page_size
  } = body;
  const total_count = (page_no * 5) + page_size;
  let option = {
    "code": 0,
  }
  option.info = {
    "page_no": page_no * 5,
    "page_size": page_size,
    "total_count": total_count,
  }
  option.info['items|' + total_count] = [{
    "site_id|1-999": 1,
    "name": "@cname()",
    "abbreviate": "@cname()",
    "province": 100000,
    "city": 100100,
    "region": 100101,
    "address": "@county()",
    "full_address": "@county()",
    "industry|1-10": 1,
    "staff_size|1-10": 1,
    "flow_scale|1-10": 1,
    "leader": "@cname()",
    "phone": "123333312",
    "resource": {
      "camera_count|1-999": 0,
    }
  }]
  let MockData = Mock.mock(option)
  res.send(MockData);
});

module.exports = router;