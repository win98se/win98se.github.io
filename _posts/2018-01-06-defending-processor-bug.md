---
layout: post
title: 防御 Spectre 和 Meltdown 处理器漏洞
date: 2018-01-06 15:21:00
---
最近爆出 Spectre 和 Meltdown 处理器漏洞，基本上，大家手上的所有电脑和手机都会中招，无一幸免；但是 [Raspberry Pi 是免疫的](https://www.raspberrypi.org/blog/why-raspberry-pi-isnt-vulnerable-to-spectre-or-meltdown/)哦，啾咪。

详情可以看[这里](https://www.infoq.com/news/2018/01/meltdown-spectre-deep-dive)。

这里来说 Windows、Debian 和 Ubuntu 的解决方法，其它系统的相应补丁会由各自的软件公司 和/或 硬件厂商推出。

注意：安装这里的安全补丁可能导致性能骤降高达 30%，在 Intel 第 6 代或以上的处理器系统，性能降低不会太明显。

### Windows

电脑版建议通过 Windows Update 进行升级；以下更新文件供离线安装用途。

移动版仅能通过 Windows Update 进行升级。

经过测试，安装下列补丁后的系统尚未修复 Spectre 漏洞。

<table>
<tr>
<th>操作系统</th>
<th>架构</th>
<th>链接</th>
<th>补丁大小</th>
</tr>
<tr>
<td rowspan="2">Windows 7</td>
<td>x86</td>
<td><a href="http://download.windowsupdate.com/c/msdownload/update/software/secu/2018/01/windows6.1-kb4056894-x86_c4ea3ab351b1edb45c0977e0e2e4607b17eeaba7.msu">下载累积更新 (04/01/2018)</a></td>
<td>135.76 MB</td>
</tr>
<tr>
<td>x64</td>
<td><a href="http://download.windowsupdate.com/d/msdownload/update/software/secu/2018/01/windows6.1-kb4056894-x64_4ddb21dbf40b3a7c41e17b4bf04242d8b48a5ac3.msu">下载累积更新 (04/01/2018)</a></td>
<td>231.1 MB</td>
</tr>
<tr>
<td rowspan="2">Windows 8.0</td>
<td>x86</td>
<td><a href="http://download.windowsupdate.com/c/msdownload/update/software/updt/2018/01/windows8-rt-kb4057402-x86_46120f31a158f1ecda48f454f87d7cc16a0dea5f.msu">下载预览累积更新 (17/01/2018)</a></td>
<td>117.14 MB</td>
</tr>
<tr>
<td>x64</td>
<td><a href="http://download.windowsupdate.com/c/msdownload/update/software/updt/2018/01/windows8-rt-kb4057402-x64_e007e9a6470b5ddda2dc1cc427155fd0f6e14c67.msu">下载预览累积更新 (17/01/2018)</a></td>
<td>186.63 MB</td>
</tr>
<tr>
<td rowspan="2">Windows 8.1</td>
<td>x86</td>
<td><a href="http://download.windowsupdate.com/c/msdownload/update/software/updt/2018/01/windows8.1-kb4057401-x86_aef2450759323ea59bbf903706acb08e229cdaa4.msu">下载预览累积更新 (17/01/2018)</a></td>
<td>169.83 MB</td>
</tr>
<tr>
<td>x64</td>
<td><a href="http://download.windowsupdate.com/c/msdownload/update/software/updt/2018/01/windows8.1-kb4057401-x64_8d29b472be5466788675ee257355773a4fb4cbff.msu">下载预览累积更新 (17/01/2018)</a></td>
<td>307.48 MB</td>
</tr>
<tr>
<td rowspan="2">Windows 10 (版本 1507)</td>
<td>x86</td>
<td><a href="http://download.windowsupdate.com/c/msdownload/update/software/secu/2018/01/windows10.0-kb4056893-x86_b2a28dc6845c85fd32dcd511e3f73f82e46d355f.msu">下载累积更新 (03/01/2018)</a></td>
<td>480.29 MB</td>
</tr>
<tr>
<td>x64</td>
<td><a href="http://download.windowsupdate.com/d/msdownload/update/software/secu/2018/01/windows10.0-kb4056893-x64_d2873bb43413d31871ccb8fea213a96a714a6f87.msu">下载累积更新 (03/01/2018)</a></td>
<td>894.75 GB</td>
</tr>
<tr>
<td rowspan="2">Windows 10 (版本 1511)</td>
<td>x86</td>
<td><a href="http://download.windowsupdate.com/c/msdownload/update/software/secu/2018/01/windows10.0-kb4056888-x86_0493b29664aec0bfe7b934479afb45fe83c59cbe.msu">下载累积更新 (03/01/2018)</a></td>
<td>535.96 MB</td>
</tr>
<tr>
<td>x64</td>
<td><a href="http://download.windowsupdate.com/d/msdownload/update/software/secu/2018/01/windows10.0-kb4056888-x64_4477b9725a819afd8abc3e5b1f6302361005908d.msu">下载累积更新 (03/01/2018)</a></td>
<td>916.52 MB</td>
</tr>
<tr>
<td rowspan="2">Windows 10 (版本 1607)</td>
<td>x86</td>
<td><a href="http://download.windowsupdate.com/d/msdownload/update/software/updt/2018/01/windows10.0-kb4057142-x86_431d123099d6f8d3bd06802950ab4899640a6bb6.msu">下载累积更新 (17/01/2018)</a></td>
<td>632.21 MB</td>
</tr>
<tr>
<td>x64</td>
<td><a href="http://download.windowsupdate.com/d/msdownload/update/software/updt/2018/01/windows10.0-kb4057142-x64_0a8e8c498fbfa742048e911fa9c20bb33844c4c4.msu">下载累积更新 (17/01/2018)</a></td>
<td>1.17 GB</td>
</tr>
<tr>
<td>Windows 10 移动版 (版本 1607)</td>
<td>ARM</td>
<td><a href="https://support.microsoft.com/help/4056890">累积更新说明网页 (05/01/2018)</a></td>
<td>不可用</td>
</tr>
<tr>
<td rowspan="2">Windows 10 (版本 1703)</td>
<td>x86</td>
<td><a href="http://download.windowsupdate.com/d/msdownload/update/software/updt/2018/01/windows10.0-kb4057144-x86_29f31e7a92f7f1c971418d44989331374d98c02c.msu">下载累积更新 (17/01/2018)</a></td>
<td>596.17 MB</td>
</tr>
<tr>
<td>x64</td>
<td><a href="http://download.windowsupdate.com/c/msdownload/update/software/updt/2018/01/windows10.0-kb4057144-x64_7d8b395bfe62bd9961489763c15ba097ff296432.msu">下载累积更新 (17/01/2018)</a></td>
<td>1 GB</td>
</tr>
<tr>
<td>Windows 10 移动版 (版本 1703)</td>
<td>ARM</td>
<td><a href="https://support.microsoft.com/help/4056891">累积更新说明网页 (05/01/2018)</a></td>
<td>不可用</td>
</tr>
<tr>
<td rowspan="5">Windows 10 (版本 1709)</td>
<td rowspan="2">x86</td>
<td><a href="http://download.windowsupdate.com/d/msdownload/update/software/secu/2018/01/windows10.0-kb4056892-x86_d3aaf1048d6f314240b8c6fe27932aa52a5e6733.msu">下载累积更新 (03/01/2018)</a></td>
<td>329.43 MB</td>
</tr>
<tr>
<td><a href="http://download.windowsupdate.com/d/msdownload/update/software/secu/2018/01/windows10.0-kb4056892-x86_delta_45f3a157eb4b4ced11044f6c462f21ec74287cb5.msu">下载 Delta 更新 (03/01/2018)</a></td>
<td>152.08 MB</td>
</tr>
<tr>
<td>x64</td>
<td><a href="http://download.windowsupdate.com/c/msdownload/update/software/updt/2018/01/windows10.0-kb4073290-x64_5119daced3c80d539e79cf52a5fb5bc9cea61eb8.msu">下载累积更新 (17/01/2018)</a></td>
<td>602.85 MB</td>
</tr>
<tr>
<td rowspan="2">ARM64</td>
<td><a href="http://download.windowsupdate.com/d/msdownload/update/software/secu/2018/01/windows10.0-kb4056892-arm64_028810421e6036f439add546e189219649140f4b.msu">下载累积更新 (03/01/2018)</a></td>
<td>566.95 MB</td>
</tr>
<tr>
<td><a href="http://download.windowsupdate.com/d/msdownload/update/software/secu/2018/01/windows10.0-kb4056892-arm64_delta_201d66e2a6863a9705c84527b44f159cbbb84224.msu">下载 Delta 更新 (03/01/2018)</a></td>
<td>354.78 MB</td>
</tr>
<tr>
<td>Windows 10 移动版 (版本 1709)</td>
<td>ARM</td>
<td><a href="https://support.microsoft.com/help/4073117">累积更新说明网页 (05/01/2018)</a></td>
<td>不可用</td>
</tr>
</table>

### Debian 和 Ubuntu

Debian 和 Ubuntu 官方目前已经修复 Meltdown 漏洞，Spectre 漏洞尚未修复。

请进行系统更新 (若当前用户非 `root`，请在每一行命令之前加上 `sudo` 指令)：

    apt update
    apt upgrade

并重新启动。

---

该文章会根据改动，做出相应更新。

P/S: 我不代表或隶属于 Windows、Debian 或 Ubuntu 任一安全组，仅收集各方消息后进行整理。

### 参考

* [伯谅 LCw 面簿专页新闻](https://www.facebook.com/win98selcwpage/posts/1530150040367394)
* [Spectre 攻击演示](https://github.com/Pl4gue/spectre-attack-demo)
* [Ubuntu 官网说明网页](https://wiki.ubuntu.com/SecurityTeam/KnowledgeBase/SpectreAndMeltdown)

版本：7

最后更新：18/01/2018