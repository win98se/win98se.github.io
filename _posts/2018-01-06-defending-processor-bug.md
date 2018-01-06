---
layout: post
title: 防御 Spectre 和 Meltdown 处理器漏洞
date: 2018-01-06 15:21:00
---
各位。

最近爆出 Spectre 和 Meltdown 处理器漏洞，基本上，大家手上的所有电脑和手机都会中招，无一幸免。

这里来说 Windows、Debian 和 Ubuntu 的解决方法，其它系统会由各自硬件或软件公司推出对应的修复。

注意：安装这里的安全补丁可能导致性能骤降高达 30%，在 Intel 第 6 代或以上的处理器系统，性能降低不会太明显。

### Windows 电脑版

<table>
<tr>
<th>操作系统</th>
<th>架构</th>
<th>下载链接</th>
<th>补丁大小</th>
</tr>
<tr>
<td rowspan="2">Windows 7</td>
<td>x86</td>
<td><a href="http://download.windowsupdate.com/c/msdownload/update/software/secu/2018/01/windows6.1-kb4056894-x86_c4ea3ab351b1edb45c0977e0e2e4607b17eeaba7.msu">累积更新 (2018 年 1 月 4 日)</a></td>
<td>135.76 MB</td>
</tr>
<tr>
<td>x64</td>
<td><a href="http://download.windowsupdate.com/d/msdownload/update/software/secu/2018/01/windows6.1-kb4056894-x64_4ddb21dbf40b3a7c41e17b4bf04242d8b48a5ac3.msu">累积更新 (2018 年 1 月 4 日)</a></td>
<td>231.1 MB</td>
</tr>
<tr>
<td rowspan="2">Windows 8.1</td>
<td>x86</td>
<td>当前不可用</td>
<td>当前不可用</td>
</tr>
<tr>
<td>x64</td>
<td>当前不可用</td>
<td>当前不可用</td>
</tr>
<tr>
<td rowspan="2">Windows 10 版本 1507</td>
<td>x86</td>
<td><a href="http://download.windowsupdate.com/c/msdownload/update/software/secu/2018/01/windows10.0-kb4056893-x86_b2a28dc6845c85fd32dcd511e3f73f82e46d355f.msu">累积更新 (2018 年 1 月 3 日)</a></td>
<td>480.29 MB</td>
</tr>
<tr>
<td>x64</td>
<td><a href="http://download.windowsupdate.com/d/msdownload/update/software/secu/2018/01/windows10.0-kb4056893-x64_d2873bb43413d31871ccb8fea213a96a714a6f87.msu">累积更新 (2018 年 1 月 3 日)</a></td>
<td>894.75 GB</td>
</tr>
<tr>
<td rowspan="2">Windows 10 版本 1511</td>
<td>x86</td>
<td><a href="http://download.windowsupdate.com/c/msdownload/update/software/secu/2018/01/windows10.0-kb4056888-x86_0493b29664aec0bfe7b934479afb45fe83c59cbe.msu">累积更新 (2018 年 1 月 3 日)</a></td>
<td>535.96 MB</td>
</tr>
<tr>
<td>x64</td>
<td><a href="http://download.windowsupdate.com/d/msdownload/update/software/secu/2018/01/windows10.0-kb4056888-x64_4477b9725a819afd8abc3e5b1f6302361005908d.msu">累积更新 (2018 年 1 月 3 日)</a></td>
<td>916.52 MB</td>
</tr>
<tr>
<td rowspan="4">Windows 10 版本 1607</td>
<td rowspan="2">x86</td>
<td><a href="http://download.windowsupdate.com/c/msdownload/update/software/secu/2018/01/windows10.0-kb4056890-x86_078b34bfdc198bee26c4f13e2e45cb231ba0d843.msu">累积更新 (2018 年 1 月 3 日)</a></td>
<td>630.79 MB</td>
</tr>
<tr>
<td><a href="http://download.windowsupdate.com/d/msdownload/update/software/secu/2018/01/windows10.0-kb4056890-x86_delta_ae277fcd1c944c58250231266a9a5d73ea5a6114.msu">Delta 更新 (2018 年 1 月 3 日)</a></td>
<td>90.39 MB</td>
</tr>
<tr>
<td rowspan="2">x64</td>
<td><a href="http://download.windowsupdate.com/c/msdownload/update/software/secu/2018/01/windows10.0-kb4056890-x64_1d0f5115833be3d736caeba63c97cfa42cae8c47.msu">累积更新 (2018 年 1 月 3 日)</a></td>
<td>1.17 GB</td>
</tr>
<tr>
<td><a href="http://download.windowsupdate.com/d/msdownload/update/software/secu/2018/01/windows10.0-kb4056890-x64_delta_dedf5675b6667189ac8445cdf062abe866c68435.msu">Delta 更新 (2018 年 1 月 3 日)</a></td>
<td>184.8 MB</td>
</tr>
<tr>
<td rowspan="4">Windows 10 版本 1703</td>
<td rowspan="2">x86</td>
<td><a href="http://download.windowsupdate.com/c/msdownload/update/software/secu/2018/01/windows10.0-kb4056891-x86_5e2d98a5cc9d8369a4acd3b3115789a6b1342159.msu">累积更新 (2018 年 1 月 3 日)</a></td>
<td>594.08 MB</td>
</tr>
<tr>
<td><a href="http://download.windowsupdate.com/d/msdownload/update/software/secu/2018/01/windows10.0-kb4056891-x86_delta_1c6394809de6e722740f3acb3a0f70ac2f869c6f.msu">Delta 更新 (2018 年 1 月 3 日)</a></td>
<td>99.18 MB</td>
</tr>
<tr>
<td rowspan="2">x64</td>
<td><a href="http://download.windowsupdate.com/c/msdownload/update/software/secu/2018/01/windows10.0-kb4056891-x64_59726a743b65a221849572757d660f624ed6ca9e.msu">累积更新 (2018 年 1 月 3 日)</a></td>
<td>1 GB</td>
</tr>
<tr>
<td><a href="http://download.windowsupdate.com/c/msdownload/update/software/secu/2018/01/windows10.0-kb4056891-x64_delta_05c9afc1e5b900a635775c8d41a3d0d3ef0a3b1f.msu">Delta 更新 (2018 年 1 月 3 日)</a></td>
<td>185.39 MB</td>
</tr>
<tr>
<td rowspan="6">Windows 10 版本 1709</td>
<td rowspan="2">x86</td>
<td><a href="http://download.windowsupdate.com/d/msdownload/update/software/secu/2018/01/windows10.0-kb4056892-x86_d3aaf1048d6f314240b8c6fe27932aa52a5e6733.msu">累积更新 (2018 年 1 月 3 日)</a></td>
<td>329.43 MB</td>
</tr>
<tr>
<td><a href="http://download.windowsupdate.com/d/msdownload/update/software/secu/2018/01/windows10.0-kb4056892-x86_delta_45f3a157eb4b4ced11044f6c462f21ec74287cb5.msu">Delta 更新 (2018 年 1 月 3 日)</a></td>
<td>152.08 MB</td>
</tr>
<tr>
<td rowspan="2">x64</td>
<td><a href="http://download.windowsupdate.com/c/msdownload/update/software/secu/2018/01/windows10.0-kb4056892-x64_a41a378cf9ae609152b505c40e691ca1228e28ea.msu">累积更新 (2018 年 1 月 3 日)</a></td>
<td>601.77 MB</td>
</tr>
<tr>
<td><a href="http://download.windowsupdate.com/c/msdownload/update/software/secu/2018/01/windows10.0-kb4056892-x64_delta_d810a354692261ccaef351e06ba0bdecd194013d.msu">Delta 更新 (2018 年 1 月 3 日)</a></td>
<td>315.54 MB</td>
</tr>
<tr>
<td rowspan="2">ARM64</td>
<td><a href="http://download.windowsupdate.com/d/msdownload/update/software/secu/2018/01/windows10.0-kb4056892-arm64_028810421e6036f439add546e189219649140f4b.msu">累积更新 (2018 年 1 月 3 日)</a></td>
<td>566.95 MB</td>
</tr>
<tr>
<td><a href="http://download.windowsupdate.com/d/msdownload/update/software/secu/2018/01/windows10.0-kb4056892-arm64_delta_201d66e2a6863a9705c84527b44f159cbbb84224.msu">Delta 更新 (2018 年 1 月 3 日)</a></td>
<td>354.78 MB</td>
</tr>
</table>

### Windows 10 移动版

仅能通过 Windows Update 进行升级。

<table>
<tr>
<th>版本 (制版号)</th>
<th>链接</th>
</tr>
<tr>
<td>版本 1607 (制版号 14393.2007)</td>
<td><a href="https://support.microsoft.com/help/4056890">累积更新 (2018 年 1 月 5 日)</a></td>
</tr>
<tr>
<td>版本 1703 (制版号 15063.850)</td>
<td><a href="https://support.microsoft.com/help/4056891">累积更新 (2018 年 1 月 5 日)</a></td>
</tr>
<tr>
<td>版本 1709 (制版号 15254.158)</td>
<td><a href="https://support.microsoft.com/help/4073117">累积更新 (2018 年 1 月 5 日)</a></td>
</tr>
</table>

### Debian

Debian 官方目前已经修复 Meltdown 漏洞，Spectre 漏洞尚未修复。

请进行系统更新 (若当前用户非 `root`，请在每一行命令之前加上 `sudo` 指令)：

    `apt update`  
    `apt upgrade`

并重新启动。

### Ubuntu

Ubuntu 官方尚未修复这两个漏洞。

---

该文章会根据改动，做出相应更新。

### 参考

* [伯谅 LCw 专页新闻](https://www.facebook.com/win98selcwpage/posts/1530150040367394)