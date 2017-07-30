---
title: xrdp+vnc远程桌面linux
date: 2017-06-15 13:37:36
tags: [linux] 
---
### 前述
相信大家桌面远程linux服务器大多用的都是vnc（虽然对于linux系统桌面远程用的确实很少），这里提一下xrdp的优势，1.加密，vcn本身的传输是不加密的（可以借助于SSL实现）；2.因为xrdp本质就是一个[ rdp ](https://zh.wikipedia.org/wiki/%E9%81%A0%E7%AB%AF%E6%A1%8C%E9%9D%A2%E5%8D%94%E5%AE%9A) 服务器，所以我们在windows上只需要借助自带的mstsc就可以直连linxu桌面系统（因为都使用了rdp协议），很方便；3. 支持多用户登录；4.第四个优势…要说第四个优势的话……开源算么？（逃...


### 安装xrdp+vncserver：

```bash
#CentOS
yum install epel-release
yum update
yum install xrdp tigervnc-server
#Ubuntu
apt-get update
apt-get install xrdp tigervnc-server
```
如果服务器桌面系统都没装的话，建议选择xfce一类轻量型桌面

```bash
#CentOS
yum groupinstall xfce4
#Ubuntu
apt-get install xubuntu-desktop
#安装完成后运行
systemctl set-default graphical.target #使系统默认从GUI启动
#如果要恢复默认从CLI启动
systemctl set-default multi-user.target #使系统默认从CLI启动
```

### 设置xrdp开机自启：
```bash
systemctl enable xrdp.service
#启动xrdp服务
systemctl start xrdp
```
如果xrdp报错的话可以参考 [ 该链接 ](https://www.centos.org/forums/viewtopic.php?t=51875)，运行：<br>

```bash
#Allow SElinux to allow:
chcon --type=bin_t /usr/sbin/xrdp
chcon --type=bin_t /usr/sbin/xrdp-sesman
Start it systemctl start xrdp
```
### 运行"vncserver"命令在用户家目录实例化vnc配置
```bash
vncserver
```

### 配置vncserver服务：
```bash
cp /lib/systemd/system/vncserver@.service /etc/systemd/system/vncserver@:1.service
#将/etc/systemd/system/vncserver@:1.service中的<USER>替换为你的用户名
```
### Centos7及以上上需要配置firewall允许xrdp和vnc:
```bash
firewall-cmd --permanent --zone=public --add-port=3389/tcp #允许xrdp（默认端口为3389）
firewall-cmd --permanent --zone=public --add-service=vnc-server
firewall-cmd --reload
```
### 赘述

Windows上mstsc直连session需要选择xvnc
![注意选择](/images/xrdp+vnc/vnc-login.png)

{% asset_img source/images/xrdp+vnc/vnc-login.png This is an example image %}


如果需要以root身份登录，则需要以root身份运行vncserver,配置vncserver@:{n}.service文件后，在/home目录创建root文件夹，将其链接到/root目录即可


若使用vnc客户端连接的话，分辨率可能会导致无法满屏显示，这时可以直接修改vnc的分辨率([ 参考链接 ](https://wiki.ubuntu.com/X/Config/Resolution))：<br>

如果要使用的分辨率在现有的模式中没有的话，我们可以自己手动添加<br>
1.首先查询所需要参数，cvt 加分辨率
例如我需要1366*768的分辨率，则输入“cvt 1366 768”，查询该分辨率的有效扫描频率是多少
将Modeline "1368x768_60.00" 后面的“85.25  1368 1440 1576 1784  768 771 781 798 -hsync +vsync”参数复制
![图1](/images/xrdp+vnc/1cvt参数.png)<br>
2.创建所需的模式

```bash
xrandr --newmode "模式名"  + 上一步复制的参数
```
![图2](/images/xrdp+vnc/2创建新模式.png)<br>
3.这时接使用刚刚创建的模式会提示找不到模式，需要手动添加一下<br>

```bash
xrandr --addmode 显示器名 "模式名"
```
创建成功：
![图3](/images/xrdp+vnc/3创建新模式成功.png)<br>
添加成功：
![图3](/images/xrdp+vnc/3添加模式成功.png)<br>
4.使用新建模式

```bash
xrandr --output 显示器名 --mode "模式名"
```

![使用](/images/xrdp+vnc/修改vnc分辨率.png)
当前设置在重启后失效，可以将其写入配置文件保证设置永久有效

分辨率也可以通过vnc客户端设置，但是画质会受影响
本文部分参考[ 该博文 ](http://misliang.blog.51cto.com/6973084/1533172)