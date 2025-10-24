// mock/region.js
const Mock = require('mockjs');

// 模拟全国省市数据
const provinces = [
  {
    id: 1,
    name: '北京市',
    cities: [
      { id: 101, name: '北京市' },
    ],
  },
  {
    id: 2,
    name: '上海市',
    cities: [
      { id: 201, name: '上海市' },
    ],
  },
  {
    id: 3,
    name: '广东省',
    cities: [
      { id: 301, name: '广州市' },
      { id: 302, name: '深圳市' },
      { id: 303, name: '佛山市' },
      { id: 304, name: '东莞市' },
      { id: 305, name: '中山市' },
      { id: 306, name: '珠海市' },
    ],
  },
  {
    id: 4,
    name: '浙江省',
    cities: [
      { id: 401, name: '杭州市' },
      { id: 402, name: '宁波市' },
      { id: 403, name: '温州市' },
      { id: 404, name: '绍兴市' },
      { id: 405, name: '嘉兴市' },
    ],
  },
  {
    id: 5,
    name: '江苏省',
    cities: [
      { id: 501, name: '南京市' },
      { id: 502, name: '苏州市' },
      { id: 503, name: '无锡市' },
      { id: 504, name: '常州市' },
      { id: 505, name: '南通市' },
    ],
  },
  {
    id: 6,
    name: '四川省',
    cities: [
      { id: 601, name: '成都市' },
      { id: 602, name: '绵阳市' },
      { id: 603, name: '德阳市' },
      { id: 604, name: '乐山市' },
    ],
  },
  {
    id: 7,
    name: '湖北省',
    cities: [
      { id: 701, name: '武汉市' },
      { id: 702, name: '宜昌市' },
      { id: 703, name: '襄阳市' },
    ],
  },
  {
    id: 8,
    name: '山东省',
    cities: [
      { id: 801, name: '济南市' },
      { id: 802, name: '青岛市' },
      { id: 803, name: '烟台市' },
      { id: 804, name: '威海市' },
    ],
  },
  {
    id: 9,
    name: '湖南省',
    cities: [
      { id: 901, name: '长沙市' },
      { id: 902, name: '株洲市' },
      { id: 903, name: '湘潭市' },
      { id: 904, name: '岳阳市' },
    ],
  },
  {
    id: 10,
    name: '福建省',
    cities: [
      { id: 1001, name: '福州市' },
      { id: 1002, name: '厦门市' },
      { id: 1003, name: '泉州市' },
      { id: 1004, name: '漳州市' },
    ],
  },
];

// 定义 Mock 接口
module.exports = function (app) {
  app.get('/api/regions', (req, res) => {
    res.json({
      code: 200,
      message: 'success',
      data: provinces,
    });
  });
};
