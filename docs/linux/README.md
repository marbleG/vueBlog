# linux学习

1. 磁盘管理

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