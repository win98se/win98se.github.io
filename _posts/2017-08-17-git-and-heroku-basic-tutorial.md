---
layout: post
title: Git 和 Heroku 基本教程
date: 2017-08-17 02:35:00 +0800
description: 给各位尝试在命令行中使用 Git，并利用 Heroku 来运行网络应用。
zh_only: true
---
几百万年没有发文，这网站都要发霉了。

90 年代，电脑的操作系统只有 DOS，要用电脑，就得学会使用 DOS 的指令。

现今，电脑的操作系统都是以图形用户界面 (GUI) 为主，命令行界面 (CLI) 的应用越来越少。

许多程序员还是不懂得使用 CLI，要知道，CLI 的作用其实不小，可是还有人觉得很难使用 (\*facepalm\*)，跟 20 多年前相比，我们这一代真的太好命了…………

言归正传，我参加了一个工作坊 (workshop)，学到了在命令行中使用 Git，并利用 Heroku 来运行网络应用 (web app)。这里提供两种方法，给各位去尝试。

## 准备工作

你需要准备几个软件，并注册一个 Heroku 账户。

* PHP (5.3.2 或以上，推荐最新版本 7.1)
* Composer
* Heroku CLI (前称 Heroku Toolbelt，包含 Git)

准备过程全程必须联网，以下使用 Windows 10 版本 1607 和 PHP 7.0.11 作为示范。

### 安装 PHP

在 Windows 下，你需要到 <http://windows.php.net/download> 下载程序。

![](https://user-images.githubusercontent.com/11819816/161272504-1e29a59b-4570-4482-ab17-e70c1c3638cf.png)

你应下载 Non Thread Safe 版本以取得最佳效果，并安装 Microsoft Visual C++ Redistributable for Visual Studio 2017 的 x86 (<https://go.microsoft.com/fwlink/?LinkId=746571>) 或 x64 (<https://go.microsoft.com/fwlink/?LinkId=746572>) 版。

对于 Windows XP，可用的最高版本是 5.4.45 (<http://windows.php.net/downloads/releases/archives/php-5.4.45-nts-Win32-VC9-x86.zip>)，你也需要安装 Microsoft Visual C++ 2008 Service Pack 1 Redistributable Package (<http://www.microsoft.com/zh-cn/download/details.aspx?id=26368>)。

下载下来的是 ZIP 格式压缩文件，解压到一个适合的地方。

![](https://user-images.githubusercontent.com/11819816/161272515-fb2d4372-4c8e-4d12-8f9a-0244553eba6c.png)

接着在解压后的目录中，将 php.ini-production 复制一份，并改名为 php.ini。打开 php.ini，寻找以下两行并 uncomment：

    extension_dir = "ext"
    extension=php_openssl.dll

P/S: 针对其它操作系统，包括 Linux 和 macOS (前称 Mac OS X)，安装方法请查阅 <http://php.net/manual/zh/install.php>；你也需要在 php.ini 中做出相应修改。

### 安装 Composer

你可以在这里获得安装 Composer 的指示：<http://getcomposer.org/download/>

对于 Windows，下载并运行 Composer-Setup.exe 会让安装方便很多。

安装期间，你需要指向你刚才解压出来的 PHP 程序。

![](https://user-images.githubusercontent.com/11819816/161272517-ae000bcd-9a2a-4b99-9aa9-9043ce7ccdb8.png)

之后如常安装即可。

### 安装 Heroku CLI

Windows 和 macOS 用户，可以下载安装包并运行，安装时请选择 Full Installation，以安装所有组件，包括 Ruby、Heroku CLI 本体、Git 和 SSH。

可提的是以上都是 CLI 程序，由此可见 CLI 其实还是很重要的。

安装包的运行过程可达 20 分钟，请耐心等待；完成之后请打开命令行 (例如 cmd 或 bash)，输入 heroku，回车，Heroku 的 CLI 程序会进行下载，过程可达 15 分钟。

![](https://user-images.githubusercontent.com/11819816/161272521-ceca6dfa-606d-4704-968c-b08cbcc9bf7a.png)

下载完毕之后，会提示你进行登录，输入你的 Heroku 账号，照做就是了。

Linux 用户可以在这里获得安装指示：<https://devcenter.heroku.com/articles/heroku-command-line>

### 验证安装

为确保安装顺利，你需要运行下列命令：

    heroku --version
    git --version
    composer --version

正常的输出会和下图相似：

![](https://user-images.githubusercontent.com/11819816/161272524-e4e72fd7-bf60-4507-a497-2ff896d13bb3.png)

## 第一个方法：完全使用 CLI

使用这个方法可以减少带宽的使用，可是会用到很多 CLI 的指令。

### Git 配置

首先下载这个文件：<https://github.com/teohm/simple-heroku-webapp/archive/master.zip>

接着，解压到你要的目录，解压之后，你会看到 5 个文件。

然后，在命令行 (cmd 或 bash) 中进入该目录。

运行以下命令：

    git init

让当前目录成为一个 Git repository。

然后，设置你要显示的姓名和电邮地址 (请对应修改值)：

    git config --global user.name "Lim Chunwei"
    git config --global user.email "lcw@ggwp.com.my"

之后开始提交第一份修改。

### 提交修改

先添加当前目录的所有文件：

    git add .

注意 `add` 和 `.` 之间有一个空格。

然后，做出提交动作：

    git commit -m "配置新应用"

上面的“配置新应用”是描述，你也可以随意修改，反正只是给自己看的，呵呵。

### 建立应用

在部署之前，我们需要在 Heroku 上建立一个应用，并在该应用中部署一个数据库。

首先登录 Heroku：

    heroku login

接着创建一个应用：

    heroku create

Heroku 会随机分配应用名。

最后给应用分配一个数据库，以下以 PostgreSQL 为例：

    heroku addons:create heroku-postgresql:hobby-dev

要注意的一点是，`hobby-dev` 并不是可以自定义的名字，请不要胡乱更改，否则后果自负。

### 完成部署

运行如下命令，推送修改：

    git push heroku master

为了让网络应用可以正常运作，我们会在应用服务器上运行准备好的数据库设置脚本，命令如下：

    heroku run php dbsetup.php

最后，输入以下命令，该命令会调用默认浏览器打开网络应用：

    heroku open

### 设置 PHP 版本要求

Heroku 默认使用 PHP 5.6 的最新版本来运行应用，你不爽的话，可以改为使用 PHP 7.x。

在应用的目录有一个 composer-example.json 文件，改名为 composer.json。

然后，运行：

    composer update

你会在应用目录看到多一个名为 composer.lock 的文件。

composer.json 的内容是这样的：

    {
      "require": {
        "php": "^7.0"
      }
    }

你应该一看就懂了吧。

然后，重复以上“提交修改”一节的操作：

    git add .
    git commit -m "配置应用使用 PHP7"

最后，推送修改：

    git push heroku master

然后看看成果吧！虽然没多大差别…… (被围殴)

## 第二个方法：利用网络界面进行部署

这个方法在使用上会较为简便，不怎么喜欢用 CLI 的人可以考虑下。

进入 <https://dashboard.heroku.com> 并登录，你会看到这个美丽的界面：

![](https://user-images.githubusercontent.com/11819816/161272526-94ee4b92-5f1e-4eba-9f7d-fb636199b1ea.png)

为了习惯，我们点左上方的 New，然后选择 Create new app。

![](https://user-images.githubusercontent.com/11819816/161272529-9d75a186-d4dd-43c1-a6ab-718ead6e652a.png)

这里你可以什么都不动，直接按 Create App。

![](https://user-images.githubusercontent.com/11819816/161272531-ea1e8ca6-0ff5-4bef-a874-22505043e7c9.png)

这个就是你新应用的管理界面了。如果你没有输入应用名，Heroku 会随机分配，记下它，之后是要用到的。

我们去 Resources 选项卡：

![](https://user-images.githubusercontent.com/11819816/161272535-d466d11c-092b-453a-a2e7-f980de26a3ea.png)

在这里可以分配数据库，在 Add-ons 的搜索栏输入并选择 Heroku Postgres，Plan name 选择 Hobby Dev — Free，按 Provision 就好了。

当然，你也可以分配 MySQL，有 ClearDB 和 JawsDB 两种供选择，都有免费的方案给你用。

### 后续操作

呃，其实用 CLI，到最后你还是跑不掉的啦。

在命令行 (cmd 或 bash) 中进入你想要的目录，运行以下命令：

    git remote add <remote name> https://git.heroku.com/<app name>.git

这里，`<remote name>` 通常是 heroku，而 `<app name>` 则是你刚才创建的应用名。

上面应用名以 shielded-sierra-55504 为例，所以运行的命令如下 (拜托，真的不要全抄，pls)：

    git remote add heroku https://git.heroku.com/shielded-sierra-55504.git

把文件放进应用目录，然后看回第一个方法的“提交修改”、“完成部署”和“设置 PHP 版本要求”这三节。

如果你真的是厌恶 CLI 的话，那我推荐你用 SourceTree (<https://www.sourcetreeapp.com>)。

## 总结和后话

个人觉得 Heroku 是不错好用啦，可以说是给人们多一个不错的选择，不过很多东西都要收钱，我是怕掉了，科科。

想深入学习 Git、Heroku 和 Composer 相关使用吗？这里有几个链接，可以去看看：

* PHP on Heroku - <https://devcenter.heroku.com/categories/php>
* Try Git - <https://try.github.io>
* Git 文档 - <https://git-scm.com/doc>
* Pro Git 第二版简体中文译本 - <https://www.gitbook.com/book/bingohuang/progit2>
* Composer 英文文档 - <https://getcomposer.org/doc>
* Composer 中文文档 - <http://docs.phpcomposer.com>

其实这篇教程去年 10 月底就开始写了 (也就是说，这个工作坊也是同一个时候的)，到现在才写完…………这期间真的是又忙又累，还有很多该做的东西没做，都堆积如山了呢。

嗯，差不多就是酱。

## 鸣谢

张辉明先生和沈秀梅博士提供工作坊教材