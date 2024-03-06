---
layout: post
title: IE 变成 Chrome 大法 IE to Chrome
date: 2016-04-02 01:09:00 +0800
description: IE 是可以转型成 Google Chrome 的哦！IE can be transformed to Google Chrome!
---
你好，我回来了。

Hi, I'm back.

最近脑里太多 troll 的东西，都无法认真起来了。

Nowadays my brain is stuck with too many troll things, until I can't be serious.

而且，上个月 assignment 赶完之后，反而没有东西可以用来给我做发文题材。

And then, after finishing my assignment last month, I don't have anything to be made my posting materials.

直到今天……我才找到了一个不错的题材，xd。

Until today...... Only then I found a quite good one. xd

好，正题开始，如各位所知道的，Internet Explorer (以下简称 IE) 最好的用法呢，就是用来下载别的浏览器………… xdd (被殴)

OK, let's start. Everyone should know that, Internet Explorer (IE) is best used to download another browser............ xd (GET PUNCHED)

其实，IE 是可以转型成 Google Chrome 的哦！(纳尼？)

Actually, IE can be transformed to Google Chrome! (Nani?)

首先，[下载 Google Chrome Frame](https://dl.google.com/chrome/install/GoogleChromeframeStandaloneEnterprise.msi) (简称 GCF，中文叫谷歌浏览器内嵌框架)，它其实是一个已经过时的软件，支持也已经在 2014 年 2 月 25 日结束，最后一个版本是 32.0.1700.107。

First, [download Google Chrome Frame (GCF)](https://dl.google.com/chrome/install/GoogleChromeframeStandaloneEnterprise.msi). It is a obsolete software, and support ended on 25 February 2014. The last version is 32.0.1700.107.

不过不用紧，虽说过时，版本号也跟现时的版本 49 差很远，可是还是可以用滴，下载之后，装上去。

Never mind. Although it's treated as obsolete, and the version number is quite far from the current version 49, but we can still use it. After downloading, install it.

装完之后，浏览某些网页，就会调用 GCF 来浏览了。浏览这些网页时，HTTP 头会传发 `X-UA-Compatible: chrome=1`，这时就会自动调用 GCF 来浏览，以达到最佳化。

After installing, when we browse some web pages, it will use GCF to render it. When browsing such web pages, the HTTP headers sent includes `X-UA-Compatible: chrome=1`, which means automatically using GCF for rendering.

![](https://user-images.githubusercontent.com/11819816/161262933-0562d130-ccb6-4d0a-89f2-e2b0756fbc17.png)

接下来，就是替换。

So next, replacing.

在注册表中，在 HKCU\Software\Google 键值下建立 ChromeFrame 键值，接着在该键值下，右边新建一个 DWORD 值，取名 IsDefaultRenderer，然后调为 1。

In registry, navigate to HKCU\Software\Google, create a key named as ChromeFrame, then under this key, create a DWORD value named as IsDefaultRenderer, and set the value to 1.

![](https://user-images.githubusercontent.com/11819816/161262938-a817b7ea-efa7-4e43-bbd5-37d5c14ae06f.png)

重开 IE 之后，看看打开谷歌的效果：

Restart IE, then see the results when browsing Google -

![](https://user-images.githubusercontent.com/11819816/161262935-cf8bafa8-7077-470a-aada-45ddda4b0f04.png)

不错，哈哈哈哈。

Nice, hahahahah.

想要挖掘更多 GCF 的功能吗？看这里：

Want to know more GCF features? See here -

<https://web.archive.org/web/20150307203054if_/http://www.chromium.org/developers/how-tos/chrome-frame-getting-started>

祝大家，愚人节快乐！

Happy April Fools' Day!

![](https://user-images.githubusercontent.com/11819816/161262926-638174e1-60ee-4663-be9b-310b9fb9e39e.png){:style="width: 400px"}
<p class="imgcaption">Lel.</p>