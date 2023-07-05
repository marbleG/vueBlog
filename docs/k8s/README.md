# k8s 
### 1. 安装
1. 使用minikube 安装
```shell
1. `minikube start --force --image-mirror-country='cn'`
2. `minikube dashboard`
3. `kubectl proxy --port=8001 --address='192.168.122.143' --accept-hosts='^.*' &`


```  

### 2. 概念
1. pod的生命周期
```shell
Pending: Pod 已被 Kubernetes 系统接受，但有一个或者多个容器尚未创建亦未运行。此阶段包括等待 Pod 被调度的时间和通过网络下载镜像的时间。
Running: Pod 已经绑定到了某个节点，Pod 中所有的容器都已被创建。至少有一个容器仍在运行，或者正处于启动或重启状态。
Succeeded: Pod 中的所有容器都已成功终止，并且不会再重启。
Failed: Pod 中的所有容器都已终止，并且至少有一个容器是因为失败终止。也就是说，容器以非 0 状态退出或者被系统终止。
Unknown: 因为某些原因无法取得 Pod 的状态。这种情况通常是因为与 Pod 所在主机通信失败。
注意：Terminating（被删除时）不是阶段之一
```    
1. 容器的生命周期
```shell
Waiting: 运行它完成启动所需要的操作
Running: 容器正在执行状态并且没有问题发生
Terminated: 已经开始执行并且或者正常结束或者因为某些原因失败
```  