---
title: 拓展chrome插件json-viewer
date: 2017-06-04
tags: [chrome,json]
---
### 前述
最近在学习维护学校iptv服务器时获得了电视墙缓存图片的json数据，chrome打开页面后jsonViewer无法格式化代码，
<!-- more -->
如图（jsonViewer此时并没有启动，它并不格式化本地文件）：

![json.png](/images/拓展chrome插件json-viewer/json.png)

google上找了一下，发现了 [ 网友自己拓展的json-viewer ](http://www.aneasystone.com/archives/2015/07/second-chrome-extension-jsonview-enhencement.html)，与 [http://www.jsonohyeah.com/](http://www.jsonohyeah.com/)上的效果相近，不过可以本地格式化，省去联网了，觉得很好用。
觉得样式丑的可以去github拉取代码自己改下样式（样式表在WebContent\viewer\index.html文件中），然后chrome打包拓展程序安装。

### 提醒
**注1：**打包目录选择WebContent，否则会报错“清单文件缺失或不可读”
**注2：**报错“指定扩展程序的私有密钥已存在。请重复使用该密钥，或者先删除它” 则删除 从github拉取得到的master分支下pem密钥文件即可。最终效果如图：
![效果图](/images/拓展chrome插件json-viewer/finish.png)

[本人已修改样式且打包了的拓展程序在此](https://github.com/VanjayDo/JSONView-for-Chrome) 
<br>
**注3：**直接安装crx包可能会在之后因为安全问题被chrome永久禁用，解决办法有二,1.可以开启开发者模式，选择“加载已解压的拓展程序”，从JSONView-for-Chrome-master\WebContent文件夹直接安装源码，<br> ![源码安装](/images/拓展chrome插件json-viewer/源码安装.png)
这样安装后就不会有这种问题,但是每次打开chrome都会提醒你禁用开发者模式下安装的拓展。2.按照 [该网址的方法二](http://www.9sep.org/chrome-install-third-party-extensions) 进行操作，方法一我测试过，在我电脑上（win10）是无效的，我不知道问题在哪，可能是注册表键值的有效位置在win10上改动了。但是法二有个局限就是自win8开始组策略只在专业版及以上版本才有。
以上。
