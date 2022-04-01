---
layout: post
title: Windows 10 强制获得功能更新推送
date: 2020-11-18 11:06:00 +0800
description: 收不到功能更新吗？这个问题有解决方案了。
zh_only: true
---
众所周知，微软每次发布 Windows 10 的功能更新，推送都是分阶段进行。

不少用户迫不及待地想要尽快安装到最新的功能更新，尽情享用最新的功能们。

然而对某些人而言，却是事与愿违…………那个“检查更新”按多少次都是然并卵，你还是收不到日思夜盼的那个功能更新。

现在这个严重 (?) 的问题有解决方案了。

不需要安装“易升”，也不必特地下载庞大的 ISO 文件来升级，一个注册表就轻易解决。

注：以下注册表键值仅在 Windows 10 版本 1809 或以上，并且安装了 2020 年 10 月或更新的例常累积更新才有效。

### 最快的方法

<a download="Win10_ForceFeatureUpdates.reg" href="data:;base64,//5XAGkAbgBkAG8AdwBzACAAUgBlAGcAaQBzAHQAcgB5ACAARQBkAGkAdABvAHIAIABWAGUAcgBzAGkAbwBuACAANQAuADAAMAANAAoADQAKAFsASABLAEUAWQBfAEwATwBDAEEATABfAE0AQQBDAEgASQBOAEUAXABTAE8ARgBUAFcAQQBSAEUAXABQAG8AbABpAGMAaQBlAHMAXABNAGkAYwByAG8AcwBvAGYAdABcAFcAaQBuAGQAbwB3AHMAXABXAGkAbgBkAG8AdwBzAFUAcABkAGEAdABlAF0ADQAKACIARABpAHMAYQBiAGwAZQBXAFUAZgBCAFMAYQBmAGUAZwB1AGEAcgBkAHMAIgA9AGQAdwBvAHIAZAA6ADAAMAAwADAAMAAwADAAMQANAAoADQAKAA==">下载这个</a>，双击导入，完成。

### 自己动手才安心 (?) 的方法

1. [打开注册表编辑器](https://support.microsoft.com/zh-cn/windows/%E5%9C%A8-windows-10-%E4%B8%AD%E5%A6%82%E4%BD%95%E6%89%93%E5%BC%80%E6%B3%A8%E5%86%8C%E8%A1%A8%E7%BC%96%E8%BE%91%E5%99%A8-deab38e6-91d6-e0aa-4b7c-8878d9e07b11) (按 WinKey+R，输入 `regedit`，回车，接着在 UAC 窗口中点“是”)；
2. 导向到 `HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Microsoft\Windows\WindowsUpdate` (如果文件夹不存在，就需要新建它们)；
3. 右边增加一个 DWORD 值 (注意建立后，类型需显示为 `REG_DWORD`，而不是别的，否则需把该值删除重建)，命名为 `DisableWUfBSafeguards`，并赋值 `1`。

完成以上步骤后，所显示的值必须与以下截图相同：

![](https://user-images.githubusercontent.com/11819816/161272815-1ea107a8-1910-423e-a4a0-0de7798e94b3.png)

最后，关掉注册表编辑器和其它所有开着的程序，重新启动 Windows，再打开设置检查更新，照理来讲你应该就能收到升级了。

### 敬告

需要留意的是，这个方法虽然可以让你的电脑尽可能最快 (?) 收到功能更新，但是微软有这个考量不是没有原因的。

你之前收不到升级，很大可能就是因为被“保护措施”顶掉了，换句话讲，就是你的电脑跟更新版的 Windows 10 还不够兼容，具体原因都能在[这里](https://aka.ms/windowsreleasehealth)看到。

而且不排除的是，通过以上方法获得的升级，有可能升级失败，这就不在我范围以内了，坐等解决吧。

所以，以上这些做法，如果你不是 IT 人 (gou?)，还是建议你别这样玩，然后尤其你是在追求绝对稳定的工作环境的话，麻烦不要手痒这样搞哦，劳资是没有负责任的，TQVM。

此外，每次升级之后，上面的注册表键值都会被清零，所以升级过后，以上步骤都要重做一次。

无论如何，祝各位升级愉快！

### 参考

* [AskVG 教学](https://www.askvg.com/tip-force-windows-10-to-upgrade-to-new-feature-update-versions-via-windows-update/)
* [微软官网说明网页](https://docs.microsoft.com/en-us/windows/deployment/update/safeguard-opt-out)