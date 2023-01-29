# 测试
#### 开发本地启动
1. 将 VuePress 安装为本地依赖 `yarn add -D vuepress#npm install -D vuepress`
2. 启动本地服务器 `yarn docs:dev # npm run docs:dev` 
   1. 如果报错：Error: error:0308010C:digital envelope routines::unsupported
   2. `export NODE_OPTIONS=--openssl-legacy-provider`

#### 部署流程梳理：
1. 本地书写blog后推送至远程的的main分支
2. github actions 触发，校验代码，并生成dist文件
  1. 注意密钥是否过期，通过setting可更新
3. 将dist文件夹下的内容推送至另一个部署分支gh_pages上，触发github pages，后更新生产blog
