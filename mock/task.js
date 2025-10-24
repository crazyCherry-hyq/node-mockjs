const Mock = require('mockjs')
module.exports = (app) => {
  const Mock = require('mockjs');
  // 获取关于 我的任务数据
  app.get('/api/task/list', (req, res) => {
    const data = Mock.mock({
      'list|10': [
        {
          'id|+1': 1,
          companyName: '@ctitle(3, 12)', // 中文酒店名
          position: '@pick(["前台接待", "客房服务员", "清洁员", "厨房帮工", "保安员"， “销售员”, "咨客", "切菜员"])',
          region: '@pick(["天河区", "越秀区", "荔湾区", "白云区", "海珠区"])',
          salary: '@integer(18, 35)', // 每小时工资
          unit: '元/小时',
          dateRange: () => {
            // 随机生成起止日期
            const start = Mock.Random.date('2025-10-dd');
            const endDay = parseInt(start.slice(-2)) + Mock.Random.integer(1, 3);
            return `${start} 至 2025-10-${endDay.toString().padStart(2, '0')} 共 ${endDay - parseInt(start.slice(-2)) + 1} 天`;
          },
          workTime: '@pick(["08:00-11:00", "09:00-12:00", "13:00-18:00", "18:00-22:00"])',
          address: '广州市@pick(["天河区", "越秀区", "白云区", "海珠区"])@ctitle(2, 4)路@integer(1,200)号',
          distance: () => {
            return `${Mock.Random.float(0.5, 8, 1, 1)} 公里`;
          },
          isFull: '@boolean', // 是否已满员
          status: '@pick(["IN_SERVICE", "SETTLED", "NOT_STARTED", "IN_CANCEL"])', // 服务中、已完成、未开始
        }
      ],
    });
    res.json({
      code: 200,
      message: 'ok',
      data: data.list,
    });
  });

 // 获取所有的任务数据
  app.get('/api/all/task/list', (req, res) => {
    const data = Mock.mock({
      'list|10': [
        {
          'id|+1': 1,
          companyName: '@ctitle(6, 12)', // 中文酒店名
          position: '@pick(["前台接待", "客房服务员", "清洁员", "厨房帮工", "保安员"， “销售员”, "咨客", "切菜员"])',
          region: '@pick(["天河区", "越秀区", "荔湾区", "白云区", "海珠区"])',
          salary: '@integer(18, 35)', // 每小时工资
          unit: '元/小时',
          dateRange: () => {
            // 随机生成起止日期
            const start = Mock.Random.date('2025-10-dd');
            const endDay = parseInt(start.slice(-2)) + Mock.Random.integer(1, 3);
            return `${start} 至 2025-10-${endDay.toString().padStart(2, '0')} 共 ${endDay - parseInt(start.slice(-2)) + 1} 天`;
          },
          workTime: '@pick(["08:00-11:00", "09:00-12:00", "13:00-18:00", "18:00-22:00"])',
          address: '广州市@pick(["天河区", "越秀区", "白云区", "海珠区"])@ctitle(2, 4)路@integer(1,200)号',
          distance: () => {
            return `${Mock.Random.float(0.5, 8, 1, 1)} 公里`;
          },
          isFull: '@boolean', // 是否已满员
        }
      ],
    });
    res.json({
      code: 200,
      message: 'ok',
      data: data.list,
    });
  });


  // ✅ 任务详情接口
  app.get('/api/task/detail/:id', (req, res) => {
    const { id } = req.params;

    const data = Mock.mock({
      companyName: '@ctitle(6, 12)',
      position: '@pick(["前台接待", "客房服务员", "清洁员", "厨房帮工", "保安员"， “销售员”, "咨客", "切菜员"])',
      region: '@pick(["天河区", "越秀区", "白云区", "海珠区"])',
      revenueTotal: '@integer(500, 800)',
      dateRange: '2025-10-20 至 2025-10-22 共 3 天',
      workTime: '08:00-11:00',
      address: '广州市天河区林和西路88号',
      distance: '2.3 公里',
      leadTime: '2025-10-19 17:00',
      status: '@pick(["IN_SERVICE", "NOT_STARTED", "FINISHED"])',
      'recentWorkRecord|6': [
        {
          title: function (_, idx) {
            const day = 20 + idx;
            const week = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'][idx % 7];
            const money = 66;
            return `10月${day}日 ${week} 08:00-11:00 ￥${money}`;
          },
          status: {
            label: '@pick(["进行中", "未开始"])',
            value: '@pick(["IN_SERVICE", "NOT_STARTED"])',
          },
        },
      ],
      description: `
        <p><strong>基本要求：</strong><br>
        男女不限，18-45岁，初中以上学历，经验不限
        </p>
        
        <p><strong>任务内容：</strong></p>
        <ol>
          <li>开自助餐档口包括亚房、冷房、西餐热房；</li>
          <li>在餐厅运营期间热情对客，面带微笑礼貌问候需要点什么（热房需要会煎蛋、看切肉档和烧烤，亚房需要会包馄饨、做煎饼果子和下面条，冷房需要会加菜）；</li>
          <li>用餐结束需要协助收档、清洁和更换厨具；</li>
          <li>负责将当天收货干货拉至指定区域，协助备下一餐食材料，正确填写食品标签；</li>
          <li>帮主管完成自助餐出档和宴会出菜，协助主管准备第二天宴会的准备工作。</li>
        </ol>
        
        <p><strong>取消任务提示：</strong></p>
        <p>请确认是否取消任务</p>
        <p>任务开始时间24小时前取消提示：<br>
        任务在24小时内即将开始，取消任务不退回履约金。
        </p>
        <p>任务开始时间24小时内取消提示：<br>
        取消后可退回履约金。
        </p>
        
        <p><strong>需求说明：</strong></p>
        <p>一、未开始状态任务详情</p>
        <ol>
          <li>工单日志：记录接单、取消、结算等关键状态变更的日期时间；</li>
          <li>取消任务：根据任务开始时间判断是否可退履约金；</li>
          <ol type="a">
            <li>当前时间在任务开始时间之前24小时以外时，提示可退履约金；</li>
            <ol type="i">
              <li>确定取消后，此工单变更为已取消状态；</li>
              <li>原路退回履约金；</li>
              <li>任务已接单人数 - 1；</li>
            </ol>
            <li>当前时间在任务开始时间之前24小时以内时，提示不可退履约金；</li>
            <ol type="i">
              <li>确定取消后，此工单变更为已取消状态；</li>
              <li>不执行退回履约金；</li>
              <li>任务已接单人数 - 1。</li>
            </ol>
          </ol>
        </ol>
      `,
    });

    res.json({
      code: 200,
      message: 'ok',
      data: { id, ...data },
    });
  });
}
