# ceph

### 分布式文件系统
#### 1.快速入门
    


#### 4. 实战
1. 可视化工具
   1. calamari
   2. VSM
   3. Inksope
   4. dashboard python 开发的监控页面，安装在mgr节点上
2. dashboard
```shell

```
3. tls
对dashboard 提供证书访问
```shell
```
4. rgw
默认dashboard未开启
```shell
radosgw-admin user create --uid=rgw --display-name=rgw --lsb_release -a
echo access_key/secret_key > 1/2.file
ceph dashboard set-rgw-api-access-key -i 1.file
ceph dashboard set-rgw-api-secret-key -i 1.file
```

1. 监控  
prometheus  
架构



