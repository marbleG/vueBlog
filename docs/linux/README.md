# linux学习

1. 磁盘管理

```shell
lsblk
blkid
parted /dev/sda print
fdisk /dev/sda
#1.d 2    --删除待扩容分区
#2.n 2    --重建待扩容分区
#3.2048   --重建待扩容分区开始大小
#4.+10G   --重建待扩容分区结束大小
#5.w
resize2fs /dev/sda2

parted /dev/sda
#resizepart 2 30G
resize2fs /dev/sda2

```
分区软件：GParted

```shell
用户权限
sudo su - root
passwd
#/etc/network/interfaces.d/setup
auto lo
iface lo inet loopback

auto eth0
iface eth0 inet dhcp

auto enp0s8
iface enp0s8 inet static
address 192.168.56.101
netmask 255.255.255.0
```