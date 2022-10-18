# 测试
#### 部署流程梳理：
1. 本地书写blog后推送至远程的的main分支
2. github actions 触发，校验代码，并生成dist文件
  1. 注意密钥是否过期，通过setting可更新
3. 将dist文件夹下的内容推送至另一个部署分支gh_pages上，触发github pages，后更新生产blog
