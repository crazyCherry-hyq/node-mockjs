
## node + mockjs

项目搭建步骤【模拟后端环境】

```angular2html
// 第一步 创建文件夹 进入文件夹init
mkdir mock-server
cd mock-server
npm init -y

// 第二步 安装依赖
npm install express mockjs cors

// 编写 根目录创建index.js

const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); // 允许跨域
app.use(express.json());

// 在mock文件夹下按模块划分 然后这里是引入注册
require('./mock/user')(app);
require('./mock/task')(app);

// 启动服务
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`✅ Mock server running at http://localhost:${PORT}`);
});

// 启动mock服务 命令
node index.js

```
