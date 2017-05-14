---
layout: post
title: 防御 WannaCrypt 勒索软件
date: 2017-05-15 02:34:56
---
各位，隔了这么久，我终于回来了。

这次主要是针对紧急的情况，来为大家提供一个较为完整的方法，以防御 WannaCrypt 勒索软件。

WannaCrypt，又称 WannaCry，不久前发现了变种，也就是 2.0 版。

在前勒索软件就已经大行其道，可是 WannaCrypt 却是目前史上最为严重的一个，被发现的第一天，就有 90 多个国家受到了影响，一天之后，受影响的国家数增加到约 150 个。

这个威胁主要是通过 Windows 的某个漏洞来执行的，广传速度非常快，而微软其实在 3 月中旬就已经发布补丁修复这个漏洞。

近期它更是大费周章，让 Windows XP、Windows Server 2003 和 Windows 8.0 这三个已经完全结束支持的操作系统“复活”，可见这个威胁不容小觑。

<table width="100%" bgcolor="#f7f7f7" bordercolor="#ffffff">
<tr>
<th>操作系统</th>
<th>架构</th>
<th>语言</th>
<th>下载链接</th>
<th>补丁大小</th>
</tr>
<tr>
<td rowspan="3">Windows XP</td>
<td rowspan="3">x86</td>
<td>英文</td>
<td><a href="http://download.windowsupdate.com/d/csa/csa/secu/2017/02/windowsxp-kb4012598-x86-custom-enu_eceb7d5023bbb23c0dc633e46b9c2f14fa6ee9dd.exe">特制安全补丁</a></td>
<td>665.23 KB</td>
</tr>
<tr>
<td>简体中文</td>
<td><a href="https://download.microsoft.com/download/4/1/B/41B4AFF6-C3BC-48E6-9A99-4C483BD098D5/WindowsXP-KB4012598-x86-Embedded-Custom-CHS.exe">特制安全补丁</a></td>
<td>667.23 KB</td>
</tr>
<tr>
<td>繁体中文</td>
<td><a href="https://download.microsoft.com/download/2/1/6/21640763-50A9-496F-ADB0-7577AE11490A/WindowsXP-KB4012598-x86-Embedded-Custom-CHT.exe">特制安全补丁</a></td>
<td>667.73 KB</td>
</tr>
<tr>
<td rowspan="2">Windows Vista</td>
<td>x86</td>
<td>全部语言</td>
<td><a href="http://download.windowsupdate.com/d/msdownload/update/software/secu/2017/02/windows6.0-kb4012598-x86_13e9b3d77ba5599764c296075a796c16a85c745c.msu">安全补丁</a></td>
<td>1.17 MB</td>
</tr>
<tr>
<td>x64</td>
<td>全部语言</td>
<td><a href="http://download.windowsupdate.com/d/msdownload/update/software/secu/2017/02/windows6.0-kb4012598-x64_6a186ba2b2b98b2144b50f88baf33a5fa53b5d76.msu">安全补丁</a></td>
<td>1.32 MB</td>
</tr>
<tr>
<td rowspan="2">Windows 7</td>
<td>x86</td>
<td>全部语言</td>
<td><a href="http://download.windowsupdate.com/c/msdownload/update/software/secu/2017/05/windows6.1-kb4019264-x86_aaf785b1697982cfdbe4a39c1aabd727d510c6a7.msu">累积更新 (2017 年 5 月)</a></td>
<td>99.25 MB</td>
</tr>
<tr>
<td>x64</td>
<td>全部语言</td>
<td><a href="http://download.windowsupdate.com/c/msdownload/update/software/secu/2017/05/windows6.1-kb4019264-x64_c2d1cef74d6cb2278e3b2234c124b207d0d0540f.msu">累积更新 (2017 年 5 月)</a></td>
<td>162.9 MB</td>
</tr>
<tr>
<td rowspan="2">Windows 8.0</td>
<td>x86</td>
<td>全部语言</td>
<td><a href="http://download.windowsupdate.com/c/msdownload/update/software/secu/2017/05/windows8-rt-kb4012598-x86_a0f1c953a24dd042acc540c59b339f55fb18f594.msu">特制安全补丁</a></td>
<td>872.55 KB</td>
</tr>
<tr>
<td>x64</td>
<td>全部语言</td>
<td><a href="http://download.windowsupdate.com/c/msdownload/update/software/secu/2017/05/windows8-rt-kb4012598-x64_f05841d2e94197c2dca4457f1b895e8f632b7f8e.msu">特制安全补丁</a></td>
<td>984.92 KB</td>
</tr>
<tr>
<td rowspan="2">Windows 8.1</td>
<td>x86</td>
<td>全部语言</td>
<td><a href="http://download.windowsupdate.com/c/msdownload/update/software/secu/2017/05/windows8.1-kb4019215-x86_fe1cafb988ae5db6046d6e389345faf7bac587d7.msu">累积更新 (2017 年 5 月)</a></td>
<td>126.35 MB</td>
</tr>
<tr>
<td>x64</td>
<td>全部语言</td>
<td><a href="http://download.windowsupdate.com/c/msdownload/update/software/secu/2017/05/windows8.1-kb4019215-x64_d06fa047afc97c445c69181599e3a66568964b23.msu">累积更新 (2017 年 5 月)</a></td>
<td>227.84 MB</td>
</tr>
<tr>
<td rowspan="2">Windows 10 版本 1507</td>
<td>x86</td>
<td>全部语言</td>
<td><a href="http://download.windowsupdate.com/c/msdownload/update/software/secu/2017/05/windows10.0-kb4019474-x86_259adeed4a4037f749afab211ff1bc6a771ff7f6.msu">累积更新 (2017 年 5 月)</a></td>
<td>505.59 MB</td>
</tr>
<tr>
<td>x64</td>
<td>全部语言</td>
<td><a href="http://download.windowsupdate.com/c/msdownload/update/software/secu/2017/05/windows10.0-kb4019474-x64_4ed033d1c2af2daea1298d10da1fad15a482f726.msu">累积更新 (2017 年 5 月)</a></td>
<td>1.05 GB</td>
</tr>
<tr>
<td rowspan="2">Windows 10 版本 1511</td>
<td>x86</td>
<td>全部语言</td>
<td><a href="http://download.windowsupdate.com/c/msdownload/update/software/secu/2017/05/windows10.0-kb4019473-x86_5e2b7bce2f1b116288b4f1f78449c66ecc7c7a53.msu">累积更新 (2017 年 5 月)</a></td>
<td>571.78 MB</td>
</tr>
<tr>
<td>x64</td>
<td>全部语言</td>
<td><a href="http://download.windowsupdate.com/c/msdownload/update/software/secu/2017/05/windows10.0-kb4019473-x64_c23b6f55caf1b9d6c14161b66fe9c9dfb4ad475c.msu">累积更新 (2017 年 5 月)</a></td>
<td>1.05 GB</td>
</tr>
<tr>
<td rowspan="4">Windows 10 版本 1607</td>
<td rowspan="2">x86</td>
<td rowspan="2">全部语言</td>
<td><a href="http://download.windowsupdate.com/c/msdownload/update/software/secu/2017/05/windows10.0-kb4019472-x86_9bf106e898b57c20917cd98fd8b8d250333015a5.msu">累积更新 (2017 年 5 月)</a></td>
<td>561.29 MB</td>
</tr>
<tr>
<td><a href="http://download.windowsupdate.com/c/msdownload/update/software/secu/2017/05/windows10.0-kb4019472-x86_delta_41ac83f39210a06fea3e06b87bcdce522da8bfd5.msu"> Delta 更新 (2017 年 5 月)</a></td>
<td>230.68 MB</td>
</tr>
<tr>
<td rowspan="2">x64</td>
<td rowspan="2">全部语言</td>
<td><a href="http://download.windowsupdate.com/c/msdownload/update/software/secu/2017/05/windows10.0-kb4019472-x64_dda304140351259fcf15ca7b1f5b51cb60445a0a.msu">累积更新 (2017 年 5 月)</a></td>
<td>1.05 GB</td>
</tr>
<tr>
<td><a href="http://download.windowsupdate.com/c/msdownload/update/software/secu/2017/05/windows10.0-kb4019472-x64_delta_c876f9bcf50eeec4520534e69c0b9a227c29f57c.msu"> Delta 更新 (2017 年 5 月)</a></td>
<td>511.93 MB</td>
</tr>
</table>

P/S: Windows 10 版本 1703 是在 3 月 17 日编译的，而微软在 3 月 14 日就发布了可以阻挡这个漏洞的累积更新，所以自然不受影响，可是为了防范，还是必须进行以下操作。

安装上述对应更新之后，主要是去除了 WannaCrypt 可以使用的漏洞，可这其实远远不够。

未来不排除变种还是可以通过一个漏洞来入侵，所以我们要尽可能将其关闭。这个漏洞，就是已经过时的 SMBv1。

### Windows 8.0/8.1/10

1. 用管理员权限打开 PowerShell。

2. 输入以下命令，接着回车并确认操作：

    `Set-SmbServerConfiguration -EnableSMB1Protocol $false`

3. 为确保 SMBv1 服务器端已经禁用，运行以下命令：

    `Get-SmbServerConfiguration | Select EnableSMB1Protocol`

4. 若你看到 `EnableSMB1Protocol` 为 `False`，表示上述操作成功，继续接下来的步骤。

5. 运行这两个命令：

    `sc.exe config lanmanworkstation depend= bowser/mrxsmb20/nsi`  
    `sc.exe config mrxsmb10 start= disabled`

6. 如果你是 Windows 8.0 用户，到这里重启 Windows，结束；否则继续操作。

7. 运行以下命令：

    `Disable-WindowsOptionalFeature -Online -FeatureName smb1protocol`

8. 提示重启 Windows 时，确认操作，重启后，SMBv1 就完全禁用。

### Windows Vista/7

1. 打开注册表编辑器，然后打开 HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\LanmanServer\Parameters 目录。

2. 增加名为 SMB1 的 DWORD 值，并赋值为 0。

3. 关闭注册表编辑器，接着用管理员权限打开命令提示符。

4. 运行这两个命令：

    `sc.exe config lanmanworkstation depend= bowser/mrxsmb20/nsi`  
    `sc.exe config mrxsmb10 start= disabled`

5. 重启 Windows。

所以基本防范完成了，与此同时，请务必更新和升级杀毒软件及防火墙，以有效防御这个恶意软件。

往后技术文章会陆续有来，敬请期待。