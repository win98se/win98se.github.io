---
layout: post
title: 防御 Spectre 和 Meltdown 处理器漏洞
date: 2018-01-06 15:21:00 +0800
description: 最近爆出的处理器漏洞，提供各操作系统的解决方法。
zh_only: true
---
最近爆出 Spectre 和 Meltdown 处理器漏洞，基本上，大家手上的所有电脑和手机都会中招，无一幸免；但是 [Raspberry Pi 是免疫的](https://www.raspberrypi.org/blog/why-raspberry-pi-isnt-vulnerable-to-spectre-or-meltdown/)哦，啾咪。

详情可以看[这里](https://www.infoq.com/news/2018/01/meltdown-spectre-deep-dive)。

这里来说 Windows、Debian 和 Ubuntu 的解决方法，其它系统的相应补丁会由各自的软件公司 和/或 硬件厂商推出。

注意：安装这里的安全补丁可能导致性能骤降高达 30%，在 Intel 第 6 代或以上的处理器系统，性能降低不会太明显。

### Windows

电脑版建议通过 Windows Update 进行升级；以下更新文件供离线安装用途。

移动版仅能通过 Windows Update 进行升级。

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
<td><a href="http://download.windowsupdate.com/d/msdownload/update/software/updt/2018/04/windows6.1-kb4093113-x86_72c9cf4bb3cf668ad1efdfa24c129f455f678aad.msu">下载预览累积更新 (23/4)</a></td>
<td>130.54 MB</td>
</tr>
<tr>
<td>x64</td>
<td><a href="http://download.windowsupdate.com/c/msdownload/update/software/updt/2018/04/windows6.1-kb4093113-x64_ab0588663c236e5a1d8935fd9d3ca9fac1fa7ac9.msu">下载预览累积更新 (23/4)</a></td>
<td>218.76 MB</td>
</tr>
<tr>
<td rowspan="2">Windows 8.0</td>
<td>x86</td>
<td><a href="http://download.windowsupdate.com/c/msdownload/update/software/updt/2018/04/windows8-rt-kb4093116-x86_b70ca33134dc51f3bef88623a7e0f174bc881c86.msu">下载预览累积更新 (16/4)</a></td>
<td>124.2 MB</td>
</tr>
<tr>
<td>x64</td>
<td><a href="http://download.windowsupdate.com/c/msdownload/update/software/updt/2018/04/windows8-rt-kb4093116-x64_c5dd665413a87d03c58038d8c2428cc15095f8c1.msu">下载预览累积更新 (16/4)</a></td>
<td>199.78 MB</td>
</tr>
<tr>
<td rowspan="2">Windows 8.1</td>
<td>x86</td>
<td><a href="http://download.windowsupdate.com/d/msdownload/update/software/updt/2018/04/windows8.1-kb4093121-x86_249d3d5ff37376b9419ece3566e61fe42e33bff2.msu">下载预览累积更新 (13/4)</a></td>
<td>181.02 MB</td>
</tr>
<tr>
<td>x64</td>
<td><a href="http://download.windowsupdate.com/d/msdownload/update/software/updt/2018/04/windows8.1-kb4093121-x64_4e8483bcb4ad56a5b63959af8c3fc0dba9f93d48.msu">下载预览累积更新 (13/4)</a></td>
<td>328.76 MB</td>
</tr>
<tr>
<td rowspan="4">Windows 10 版本 1507</td>
<td rowspan="2">x86</td>
<td><a href="http://download.windowsupdate.com/c/msdownload/update/software/secu/2018/03/windows10.0-kb4093111-x86_a56930ba6dd1a1c575184f193740d44b0fcb2e9c.msu">下载累积更新 (7/4)</a></td>
<td>484.62 MB</td>
</tr>
<tr>
<td><a href="http://download.windowsupdate.com/d/msdownload/update/software/crup/2018/03/windows10.0-kb4091666-x86_b9760edb4c566a16d23102ad5a070b660ecb90a3.msu">下载 Intel 处理器微代码更新 (24/4)</a></td>
<td>975.17 KB</td>
</tr>
<tr>
<td rowspan="2">x64</td>
<td><a href="http://download.windowsupdate.com/c/msdownload/update/software/secu/2018/03/windows10.0-kb4093111-x64_4dddf49fcd4d0f2023aec04e2fe76415bc957ebf.msu">下载累积更新 (7/4)</a></td>
<td>901.1 MB</td>
</tr>
<tr>
<td><a href="http://download.windowsupdate.com/d/msdownload/update/software/crup/2018/03/windows10.0-kb4091666-x64_cc926ca5f1cad7f257f06f8fadf4f6d5e8a41142.msu">下载 Intel 处理器微代码更新 (24/4)</a></td>
<td>961.84 KB</td>
</tr>
<tr>
<td rowspan="2">Windows 10 版本 1511</td>
<td>x86</td>
<td><a href="http://download.windowsupdate.com/d/msdownload/update/software/secu/2018/03/windows10.0-kb4093109-x86_deb386b092c264b58b17961ad359f1dd8ae6c793.msu">下载累积更新 (7/4)</a></td>
<td>519.72 MB</td>
</tr>
<tr>
<td>x64</td>
<td><a href="http://download.windowsupdate.com/d/msdownload/update/software/secu/2018/03/windows10.0-kb4093109-x64_23878b35ac2f25483092cd28fb75b5c75b5d4ae1.msu">下载累积更新 (7/4)</a></td>
<td>919.85 MB</td>
</tr>
<tr>
<td rowspan="4">Windows 10 版本 1607</td>
<td rowspan="2">x86</td>
<td><a href="http://download.windowsupdate.com/c/msdownload/update/software/updt/2018/04/windows10.0-kb4093120-x86_444f087a3f42e7b5c13ffafd5eace2df0d21be8a.msu">下载累积更新 (17/4)</a></td>
<td>650.15 MB</td>
</tr>
<tr>
<td><a href="http://download.windowsupdate.com/c/msdownload/update/software/crup/2018/03/windows10.0-kb4091664-v2-x86_ebc7f6f66aae9f36f34a726c01a80bf10059c955.msu">下载 Intel 处理器微代码更新 (24/4)</a></td>
<td>1.2 MB</td>
</tr>
<tr>
<td rowspan="2">x64</td>
<td><a href="http://download.windowsupdate.com/c/msdownload/update/software/updt/2018/04/windows10.0-kb4093120-x64_72c7d6ce20eb42c0df760cd13a917bbc1e57c0b7.msu">下载累积更新 (17/4)</a></td>
<td>1.2 GB</td>
</tr>
<tr>
<td><a href="http://download.windowsupdate.com/c/msdownload/update/software/crup/2018/03/windows10.0-kb4091664-v2-x64_d66063ae7693e8212120aec056917f6d7c54ca41.msu">下载 Intel 处理器微代码更新 (24/4)</a></td>
<td>1.18 MB</td>
</tr>
<tr>
<td>Windows 10 移动版<br>版本 1607</td>
<td>ARM</td>
<td><a href="https://support.microsoft.com/help/4093119">累积更新说明网页 (10/4)</a></td>
<td>不可用</td>
</tr>
<tr>
<td rowspan="4">Windows 10 版本 1703</td>
<td rowspan="2">x86</td>
<td><a href="http://download.windowsupdate.com/d/msdownload/update/software/updt/2018/04/windows10.0-kb4093117-x86_c7ccadf3107f9210f49d9605c0c34bf1a2530ac3.msu">下载累积更新 (16/4)</a></td>
<td>634.73 MB</td>
</tr>
<tr>
<td><a href="http://download.windowsupdate.com/c/msdownload/update/software/crup/2018/03/windows10.0-kb4091663-v2-x86_be946e4a37f4019bc6908cd1ce2b6a6a4693fea3.msu">下载 Intel 处理器微代码更新 (24/4)</a></td>
<td>1.2 MB</td>
</tr>
<tr>
<td rowspan="2">x64</td>
<td><a href="http://download.windowsupdate.com/d/msdownload/update/software/updt/2018/04/windows10.0-kb4093117-x64_e91aa7f9c9af0ab25cc98787d5e3244b0e292f59.msu">下载累积更新 (16/4)</a></td>
<td>1.06 GB</td>
</tr>
<tr>
<td><a href="http://download.windowsupdate.com/c/msdownload/update/software/crup/2018/03/windows10.0-kb4091663-v2-x64_a7a24a577ceef86a1cbd35dec80f1509773b4a0b.msu">下载 Intel 处理器微代码更新 (24/4)</a></td>
<td>1.18 MB</td>
</tr>
<tr>
<td>Windows 10 移动版<br>版本 1703</td>
<td>ARM</td>
<td><a href="https://support.microsoft.com/help/4093107">累积更新说明网页 (10/4)</a></td>
<td>不可用</td>
</tr>
<tr>
<td rowspan="5">Windows 10 版本 1709</td>
<td rowspan="2">x86</td>
<td><a href="http://download.windowsupdate.com/c/msdownload/update/software/updt/2018/04/windows10.0-kb4093105-x86_cef5097297464049c0043fec31b1fed4d5715dfe.msu">下载累积更新 (23/4)</a></td>
<td>416.69 MB</td>
</tr>
<tr>
<td><a href="http://download.windowsupdate.com/c/msdownload/update/software/crup/2018/03/windows10.0-kb4090007-v2-x86_d69060312f689ceb5d5a93eb931d080123be9255.msu">下载 Intel 处理器微代码更新 (24/4)</a></td>
<td>1.19 MB</td>
</tr>
<tr>
<td rowspan="2">x64</td>
<td><a href="http://download.windowsupdate.com/c/msdownload/update/software/updt/2018/04/windows10.0-kb4093105-x64_34cd83487c317ce53f547e3e4848ec0f22cb7b14.msu">下载累积更新 (23/4)</a></td>
<td>760.56 MB</td>
</tr>
<tr>
<td><a href="http://download.windowsupdate.com/c/msdownload/update/software/crup/2018/03/windows10.0-kb4090007-v2-x64_c1c938143bce4d0939b9cbe3a19d0e4f9ef6d896.msu">下载 Intel 处理器微代码更新 (24/4)</a></td>
<td>1.18 MB</td>
</tr>
<tr>
<td>ARM64</td>
<td><a href="http://download.windowsupdate.com/d/msdownload/update/software/updt/2018/04/windows10.0-kb4093105-arm64_b28514cee2ec8e7c6105f7edf98047f9171da912.msu">下载累积更新 (23/4)</a></td>
<td>767.1 MB</td>
</tr>
<tr>
<td>Windows 10 移动版<br>版本 1709</td>
<td>ARM</td>
<td><a href="https://support.microsoft.com/help/4099572">累积更新说明网页 (10/4)</a></td>
<td>不可用</td>
</tr>
</table>

最新的 Windows 10 版本 1803 预计默认防范这两个漏洞。

除了以上这些，也建议所有 Windows 10 用户下载并运行<a href="http://download.windowsupdate.com/d/msdownload/update/software/crup/2018/04/kb4078407_34d9cffcab2d46044e625484085ca7c6c3888396.exe">该程序</a> (24.63 KB)，以完全启用漏洞修复措施。

更新完成后，可以下载并运行<a href="https://www.grc.com/files/InSpectre.exe">该程序</a> (125.14 KB)，确认漏洞已被修复。

### Debian 和 Ubuntu

Debian 和 Ubuntu 官方目前已经将两个漏洞都修复，但是：

* 其中 Spectre 漏洞需要更新后的韧件或微代码 (以 Intel 处理器而言，微代码的软件包为 `intel-microcode`) 才能完全修复；
* 这两个发行版的 i386 版本都没有修复 Meltdown 漏洞，两者的开发公司都已表示，建议用户转为使用 64 位内核。

请进行系统更新 (若当前用户非 `root`，请在每一行命令之前加上 `sudo` 指令)：

    apt update
    apt upgrade

并重新启动。

更新完成后，可以安装 `spectre-meltdown-checker` 软件包，并运行 `spectre-meltdown-checker`，确认漏洞已被修复。

----

该文章会根据改动，做出相应更新。

P/S: 我不代表或隶属于 Windows、Debian 或 Ubuntu 任一安全组，仅收集各方消息后进行整理。

### 参考

* [伯谅 LCw 面簿专页新闻](https://www.facebook.com/win98selcwpage/posts/1530150040367394)
* [微软安全公告](https://portal.msrc.microsoft.com/en-US/security-guidance/advisory/ADV180002)
* [Windows 官网说明网页](https://support.microsoft.com/en-us/help/4073757)
* [Debian 官网说明网页](https://wiki.debian.org/DebianSecurity/SpectreMeltdown)
* [Ubuntu 官网说明网页](https://wiki.ubuntu.com/SecurityTeam/KnowledgeBase/SpectreAndMeltdown)
* [InSpectre](https://www.grc.com/inspectre.htm)
* [Spectre &amp; Meltdown Checker](https://github.com/speed47/spectre-meltdown-checker)

版本：12<br>
最后更新：05/12/2020