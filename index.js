// index.js
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); // 允许跨域
app.use(express.json());

require('./mock/user')(app);
require('./mock/task')(app);
require('./mock/region')(app);

// 启动服务
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ Mock server running at http://localhost:${PORT}`);
});
