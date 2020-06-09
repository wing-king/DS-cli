# 1. 说明文档
## 1.1. 目录结构
## 1.2. 命令介绍
## 1.3. 引用说明

### 1.1 目录结构
```
vue-cli
├─ .babelrc    //js支持
├─ .eslintignore // eslint忽略的文件
├─ .postcssrc.js  // 移动端适配
├─ .vscode
│  └─ settings.json
├─ README.md   // 说明文档
├─ build
│  ├─ .DS_Store
│  ├─ webpack.config.js  // 工程基础配配置
│  ├─ webpack.dev.js   // 开发环境配置
│  └─ webpack.prod.js  // 生产环境配置
├─ config
│  ├─ index.js   // 项目配置生成
│  ├─ project.js  // 项目配置
│  ├─ proxy.js  // 代理配置
│  └─ wx
│     └─ wxChat.js // 微信配追
├─ dist
├─ eslintrc.js  // eslint
├─ package-lock.json
├─ package.json  // 项目命令
├─ postcsPxtoViewport.js  // 移动端自适应配置
├─ public
│  ├─ favicon.ico  // icon
│  ├─ index.html
│  └─ static   // 静态资源放在这里（字体图标，图片，js等）
│     ├─ css
│     │  └─ index.css
│     ├─ hrfonts
│     │  ├─ demo.css
│     │  ├─ demo_index.html
│     │  ├─ iconfont.css
│     │  ├─ iconfont.eot
│     │  ├─ iconfont.js
│     │  ├─ iconfont.json
│     │  ├─ iconfont.svg
│     │  ├─ iconfont.ttf
│     │  ├─ iconfont.woff
│     │  └─ iconfont.woff2
│     └─ img
│        ├─ timg.jpeg
│        └─ xiao.jpeg
└─ src
   ├─ api   // api 设置
   │  ├─ index.js
   ├─ app.vue
   ├─ components  // 单独组件
   │  ├─ dsBtn.vue
   │  └─ index.js
   ├─ global   // 全局设置
   │  ├─ components   // 组件
   │  │  ├─ Button
   │  │  │  ├─ Button.js
   │  │  │  └─ Button.vue
   │  │  ├─ MessBox
   │  │  │  ├─ MessBox.js
   │  │  │  └─ MessBox.vue
   │  │  └─ index.js
   │  ├─ directives  // 指令
   │  │  ├─ index.js
   │  │  └─ loading
   │  │     ├─ loading.js
   │  │     └─ loading.vue
   │  ├─ filters // 过滤器
   │  └─ mixins   // 混入
   │     ├─ index.js
   │     ├─ pay.js
   │     └─ wxShare.js
   ├─ main.js
   ├─ router   // 路由函数
   │  ├─ example
   │  │  └─ example.js
   │  └─ index.js
   ├─ store    // vuex 函数
   │  ├─ common
   │  │  └─ common.js
   │  └─ index.js
   ├─ utils
   │  ├─ http   //  请求函数封装
   │  │  └─ index.js
   │  └─ tool   //工具函数
   │     ├─ element.js
   │     ├─ index.js
   │     ├─ wxShare.js
   │     └─ wxTool.js
   └─ views      // vue页面文件
      ├─ 404.vue
      └─ Home.vue

```
### 1.2 命令介绍
```
   npm run 
   dev 开发环境
   dev:test 开发测试环境
   dev:local 开发本地环境
   dev:online 开发线上环境
   build 线上打包
   build:test 测试打包
```

### 1.3 引用介绍
```
//别名引用
   '@': src,
   '@config': config,
   '@tools': ../src/utils/tool/,
   '@components': ../src/components/,
   '@global': ../src/global/,
   '@static': ../public/static/
//全局变量
__NODE_ENV__: 当前模式（development/production）,
__PROJECT_ENV__: 当前环境（test,local,development,production）,
```