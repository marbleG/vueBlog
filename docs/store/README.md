# 存储
### 1. 集中式存储
1. DAS
2. NAS
3. SAN:SCSI
### 2. 分布式存储
1. 块存储  磁盘（未格式化）,性能要求高
2. 文件系统存储  （NAS），文本编辑
3. 对象存储  上传 下载 备份
    4.  2006 亚马逊 s3

#### 2.1 ceph
    软件定义的开源文件解决方案，对象存储重点（s3,swift）
版本：
```shell
#相关操作
#部署
#1.ceph-deploy方式
#主机名 不能更改
#主机名解析

/etc/hosts
#yum ceph安装
#ssh免密

ceph-deploy new ceph1 ceph2 ceph3
yum install ceph
ceph-deploy mon create-initial
ceph-deploy admin ceph1 ceph2 ceph3
ceph-deploy mgr create ceph1 ceph2 ceph3

ceph-deploy osd create --data /dev/sdb ceph1_osd

lsblk
#ceph 相关命令
ceph --version
ceph osd tree
ceph osd pool create mypool 8
ceph pg dump pgs_brief
ceph osd pool get mypool all

#块存储
ceph osd pool application enable mypool rbd
rbd create mypool/disk01 --size 1G
rbd map mypool/disk01
ll /dev/rbd0
mkfs.ext4 /dev/rbd0

#2.cephadm

#3.手动

#4.ceph-ansible
```

架构
1. 服务
   1. mon 集群所有信息,状态，入口
   2. mgr 监控，收集所有信息,查询操作
   3. mds 元数据
2. osd 磁盘
3. pool 存储池 逻辑概念 ，先创建 
   1. `ceph osd pool ls detail`
   2. pg: 归置组，看不见，对象名hash计算后存到PG上（crush1），PG根据pool的类型和副本数放到对应的osd( crush2)
   3. pgp: 
4. rdb 块

rados是对象数据的底层存储服务由多个主机组成的存储集群
librados 是rados的api 可以使用java

ceph通过crush 计算后存储在对应的服务器上  

访问方式 基于librados api提供接口
1. cephfs 挂载后访问
2. rbd 块，相当于提供的磁盘
3. RadosGW 

底层rados  
1. FileStore BlueStore
POSIX



![img.png](img.png)  

对象存储
1. 副本，故障域（osd，host）

