// mock/user.js
const Mock = require('mockjs');

module.exports = (app) => {
  /**
   * 模拟登录接口
   * 前端传入 code（wx.login 获取）和 userInfo（wx.getUserProfile 获取）
   */
  app.post('/api/login', (req, res) => {
    const { code, userInfo } = req.body;

    // 模拟通过 code 换取 openid、session_key
    const openid = Mock.Random.guid();
    const session_key = Mock.Random.string(24);

    // 模拟生成登录 token
    const token = Mock.Random.string('lower', 32);

    // 模拟返回的用户数据
    const mockUser = Mock.mock({
      openid,
      session_key,
      token,
      userInfo: {
        nickName: userInfo?.nickName || '@cname()',
        avatarUrl:
          userInfo?.avatarUrl || Mock.Random.image('100x100', '#50B347', '#FFF', 'U'),
        gender: userInfo?.gender || '@pick([0,1,2])', // 0未知 1男 2女
        province: userInfo?.province || '@province()',
        city: userInfo?.city || '@city()',
        country: userInfo?.country || '中国',
      },
    });

    res.json({
      code: 200,
      message: '登录成功',
      data: mockUser,
    });
  });

  /**
   * 模拟获取用户详细信息接口
   */
  app.get('/api/user/info', (req, res) => {
    res.json(
      Mock.mock({
        code: 200,
        message: 'ok',
        data: {
          openid: Mock.Random.guid(),
          nickName: '@cname()',
          avatarUrl: Mock.Random.image('100x100', '#02adea', '#FFF', 'A'),
          gender: '@pick([0,1,2])',
          phoneNumber: /^1[3-9]\d{9}$/, // 模拟手机号
          city: '@city()',
          province: '@province()',
        },
      }),
    );
  });
};
