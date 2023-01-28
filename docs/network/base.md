### 网络基础知识

1. 连接网线后就可以上网？
    1. DHCP（Dynamic Host Configuration Protocol，动态主机配置协议） 
#### DHCP
1. DHCP（Dynamic Host Configuration Protocol，动态主机配置协议）
1. DHCP 服务器：管理ip分配的服务器
   2. 阶段1：DHCP Discover: client广播询问dhcp server
   2. 阶段2：DHCP Offer: dhcp server 提供ip 和子网掩码
   2. 阶段3：DHCP Request: client 广播确认使用ip
   2. 阶段4：DHCP ACK: server 确认可以使用
1. 使用udp传输