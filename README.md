### ChatGpt 客户端

#### 环境准备

1. 需要安装`nodejs`，版本最好在 `18` 以上，请到[nodejs连接](https://nodejs.org/zh-cn)下载安装

 #### 运行

```
cd client
// 执行
1. npm i
2. npm run dev
```

#### 部署

```
// 先打包，执行
npm run build
```

结束之后，在 `dist`文件夹中生成最终的需要部署的文件，在服务器上使用`nginx`部署即可

