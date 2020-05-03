# swift-http

使用typescript编写，支持Promise的http客户端 

### 安装

```shell
$ npm i swift-http
```

### 引包

```javascript
import shttp from 'swift-http'

const shttp = require('swift-http');
```

示例

```javascript
const shttp = require('swift-http');
//发送一个post请求
shttp({
  method: 'post',
  url: '/blog/1',
  data: {
    describe: 'vue',
  }
}).then(response=>{
    console.log(response)
});
```

