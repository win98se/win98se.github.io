---
layout: post
title: 干净升级 Windows 10 最快的方法 Clean upgrading to Windows 10 - the fastest way
date: 2016-07-17 22:03:00 +0800
description: 有些人想升级到 Windows 10，同时想重装系统，所以这里提供一个方法。Some people desire to upgrade to Windows 10, but they want to reinstall their operating system as well. So here, I provide a way.
---
各位好。在不到两个礼拜以内，Windows 10 的免费升级优惠就要结束了，有免费的，不拿白不拿啊！

Hello everyone. Windows 10 free upgrade offer will end in less than 2 weeks. It's pity if you don't get your free copy!

升级到 Windows 10 有几种方法，其中包括 GWX 还有媒体创建工具。还有一种，干净升级。

There are few ways to upgrade to Windows 10, including GWX and Media Creation Tool. In addition, clean upgrade.

干净升级是什么？有些人想升级到 Windows 10，同时因为电脑太 lag 等因素想重装系统，所以这里提供一个方法，让这种人鱼与熊掌兼得。

What is clean upgrade? Some people desire to upgrade to Windows 10, but they want to reinstall their operating system as well because there are issues such as lag, etc. So here, I provide a way to achieve both.

> 置入性广告：在 2016 年 7 月 29 日之后，Windows 10 家庭版的价格是 119 美元，约合 480 马币；Windows 10 专业版的价格是 199 美元，约合 800 马币。
>
> Inserted ad - After 29 July 2016, Windows 10 Home will host 119 USD, equivalent to RM 480; Windows 10 Pro will cost 199 USD, equivalent to RM 800.

以下引述两个网页的内容：

Below contents are referring to these two web pages -

1. <https://www.facebook.com/notes/nawzil-najeeb/how-to-upgrade-your-pc-to-windows-10-for-free/899880470105968>
2. <http://www.ithome.com/html/win10/172955.htm>

开始，我们首先来检查电脑。

Let's start with checking PC.

在你的电脑上打开“系统属性”(按 WinKey+X，接着按 Y，或是在 Windows 7 上右键单击“计算机”，点击“属性”)，然后查看 **Windows 版本**和**系统类型**。

Open System Properties on your PC (press Windows + X, and then press Y, or on Windows 7 right click on Computer and click on Properties) and check the **Windows edition** and **System type**.

![](https://user-images.githubusercontent.com/11819816/161263881-22be4fe2-0d2e-49b7-9d4d-e52ed65611ec.png)

接下来，我们下载 ISO 文件。

Next, we download the ISO file.

1. 打开 Tech Bench 页面 / Open the Tech Bench page -

   <https://www.microsoft.com/software-download/techbench>

2. 接着，选择你要的版本，然后点击 Confirm。

   Afterwards, select your desired edition, and click Confirm.

   如果你有 Windows 7、Windows 8.0、Windows 8 专业版 (Pro)、Windows 8.1 或 Windows 8.1 专业版 (Pro)，选择 **Windows 10**。

   If you have Windows 7, Windows 8, Windows 8 Pro, Windows 8.1, Windows 8.1 Pro, select **Windows 10**.

   如果你有 Windows 8 单语言版 (Single Language) 或 Windows 8.1 单语言版 (Single Language)，选择 **Windows 10 Single Language**。

   If you have Windows 8 Single Language, Windows 8.1 Single Language, select **Windows 10 Single Language**.

3. 之后，选择产品语言，然后点击 Confirm。

   Then, select the product language, and click Confirm.

   通常我们会选择 **English**、**Chinese Simplified**、**Chinese Traditional** 或 **Chinese Traditional Hong Kong**，可是，Windows 10 单语言版 (Single Language) 不提供繁体中文版。

   Typically, we will select **English**, **Chinese Simplified**, **Chinese Traditional** or **Chinese Traditional Hong Kong**. But, Windows 10 Single Language doesn't provide Traditional Chinese editions.

4. 如果你的系统类型是 32 位，点击 **32-bit Download**；如果你的系统类型是 64 位，点击 **64-bit Download**。

   If your system type is 32-bit, click on **32-bit Download**; If your system type is 64-bit, click on **64-bit Download**.

   32 位的 ISO 大小是约 3.0 到 3.3 GB，而 64 位的是约 4.0 到 4.4 GB。

   The size of 32-bit ISO files are between 3.0 to 3.3 GB, and of 64-bit are between 4.0 to 4.4 GB.

   你必须在开始下载后的 24 小时以内完成下载。

   You must finish your download in 24 hours since it's started.

5. 下载完毕，打开那个 ISO，在 `sources` 文件夹中找到 `gatherosstate.exe`，把它复制到桌面。

   After finish downloading, open the ISO, find `gatherosstate.exe` in the `sources` folder, then copy it to Desktop.

6. 双击 `gatherosstate.exe`，稍后会在桌面生成名为 `GenuineTicket.xml` 的文件，将其另外保存。

   Double click on `gatherosstate.exe`, and it will produce a file named as `GenuineTicket.xml` on the desktop. Save it elsewhere.

重点来了，我们要进行干净安装，打开 `sources` 文件夹中的 `setup.exe` (**不是根目录的 `setup.exe`**)，在其中一个步骤会有 Upgrade 和 Custom 两个选项，选择 Custom，继续。

Here comes the point. We want to have a clean install. Open `setup.exe` in the `sources` folder (**not the one in root directory**), during one step with two options, Upgrade and Custom, select Custom and continue.

不要忘记跳过所有的产品秘钥画面，还有，一定要[选对对应的版本](https://www.microsoft.com/zh-cn/windows/windows-10-specifications#upgrade)。

Don't forget to skip all product key screens, and you must [select the correct corresponding edition](https://www.microsoft.com/en-us/windows/windows-10-specifications#upgrade).

安装完成后，打开 C:\ProgramData\Microsoft\Windows\ClipSVC\GenuineTicket 文件夹 (注意 `ProgramData` 为隐藏文件夹)，然后把先前保存的 `GenuineTicket.xml` 文件复制到这个目录中。

After the installation has completed, open  C:\ProgramData\Microsoft\Windows\ClipSVC\GenuineTicket (caution that the `ProgramData` folder is hidden), then copy the `GenuineTicket.xml` you saved earlier into this folder.

重启电脑，联网激活 Windows 副本。

Restart computer, then connect to the Internet to activate your Windows copy.

![](https://user-images.githubusercontent.com/11819816/161263887-24c0c583-4ab1-4d92-89b8-01b6966934b4.png)

以上的步骤只需进行一次，以后再重装 Windows 10，你就不用再进行那样繁琐的操作了，只需联网激活即可。

Just run the above steps once, if you reinstall Windows 10 in the future, you won't need to finish those complicated actions again. You will only need to connect to the Internet to activate Windows.

好了，Windows 10 周年更新将在 8 月 2 日发布，让我们敬请期待，再会。

OK. Windows 10 Anniversary Update will be published on 2 August, let us expect new things! See you.