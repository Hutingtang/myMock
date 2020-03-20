var express = require('express');
var router = express.Router();
var Mock = require('mockjs');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});


/* 模拟数据 siteList */
router.post('/company/hasLogin/ajaxSite/QuerySiteList', (req, res) => {
  var MockData = Mock.mock({
    "code": 0,
    "info": {
      "page_no": 1,
      "page_size": 10,
      "total_count": 32,
      "items|1-10": [{
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
    }
  })
  res.send(MockData);
});


/* 模拟数据 siteList */
router.post('/company/hasLogin/ajaxBottomBase/QueryLibraryList', (req, res) => {
  var MockData = Mock.mock({
    "code": 0,
    "info": {
      "page_no": 1,
      "page_size": 10,
      "total_count": 32,
      "items|1-10": [{
        "lib_id|1-99": 1, // 底库ID
        "name": "@cname", // 底库名称
        "type": 2, // 底库人员类型
        "site_list": "1,2", // 关联店铺id列表,ALL表示所有店铺
        "number|1-99": 100, // 人数
        "remark|3-8": "xx", // 备注
        "create_time": "@datetime"
      }]
    }
  })
  res.send(MockData);
});


/* 模拟数据 siteList */
router.post('/company/hasLogin/ajaxBottomBase/QueryPeopleList', (req, res) => {
  var MockData = Mock.mock({
    "code": 0,
    "info": {
      "page_no": 1,
      "page_size": 10,
      "total_count": 32,
      "items|1-10": [{
        "people_id|1-10": 1, // 人员ID
        "name": "@cname", // 姓名
        "sex|0-2": 1, // 性别，参见《SexType》
        "credential_no": "@id", // 证件号
        "group|1-3": 1, // 黑白名单类型，参见《BlackWhiteList》
        "birthday": "@date", // 出生日期
        "mobile": "@id", // 手机号
        "company": "@cname", // 所在单位
        "position": "@cname", // 职位
        "effective": "@datetime", // 有效时间-开始时间（生效）
        "expire": "@datetime", // 有效时间-结束时间（到期）
        "speech|1-3": "xx", // 迎宾语
        "photo_url": "@image", // 照片URL
        "property": {
          "level|1-2": "1", // string,VIP等级
          "expire_date": "@date" // string,到期时间
        },
      }]
    }
  })
  res.send(MockData);
});
module.exports = router;