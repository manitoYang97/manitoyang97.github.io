  XiaoQi's Blog

  基于 Hexo + Matery 主题搭建的个人博客，托管于 GitHub Pages

  预览地址

  - GitHub Pages: https://manitoyang97.github.io

  ---
  一、项目简介

  技术栈

  ┌──────────┬──────────────┐
  │   技术   │  版本/说明   │
  ├──────────┼──────────────┤
  │ Hexo     │ 4.2.1        │
  ├──────────┼──────────────┤
  │ 主题     │ Matery       │
  ├──────────┼──────────────┤
  │ 托管平台 │ GitHub Pages │
  ├──────────┼──────────────┤
  │ Node.js  │ 建议 12.x+   │
  └──────────┴──────────────┘

  功能特性

  - 响应式设计，适配移动端
  - Live2D 看板娘
  - 文章目录、代码高亮
  - 搜索功能
  - 文章分类与标签
  - Google Analytics 统计
  - Sitemap 站点地图
  - 百度搜索收录支持

  ---
  二、快速开始（从零搭建）

  2.1 环境准备

  # 安装 Node.js（建议使用 nvm 管理）
  # macOS
  brew install node

  # 或使用 nvm
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
  nvm install --lts

  # 安装 Hexo CLI
  npm install -g hexo-cli

  # 验证安装
  node -v
  hexo -v

  2.2 初始化博客

  # 创建博客目录
  hexo init my-blog
  cd my-blog

  # 安装依赖
  npm install

  # 安装 Matery 主题
  git clone https://github.com/blinkfox/hexo-theme-matery.git themes/matery

  # 修改 _config.yml，将主题改为 matery
  # theme: matery

  2.3 本地预览

  # 生成静态文件
  hexo generate  # 或 hexo g

  # 启动本地服务器
  hexo server    # 或 hexo s

  # 访问 http://localhost:4000 预览

  ---
  三、写作与发布流程

  3.1 新建文章

  # 新建文章
  hexo new "文章标题"

  # 新建页面
  hexo new page "about"

  文章源文件位于 source/_posts/ 目录，使用 Markdown 格式。

  3.2 文章 Front-matter 模板

  ---
  title: 文章标题
  date: 2026-03-30 10:00:00
  categories:
    - 前端开发
  tags:
    - JavaScript
    - Vue
  keywords:
    - 关键词1
    - 关键词2
  description: 文章摘要描述
  top: false  # 是否置顶
  cover: /medias/featureimages/cover.jpg  # 封面图片
  ---

  3.3 本地预览与调试

  # 清除缓存和已生成的文件
  hexo clean

  # 重新生成
  hexo generate

  # 本地预览
  hexo server

  3.4 部署到 GitHub Pages

  方式一：手动部署

  # 生成静态文件
  hexo generate

  # 将 public 目录内容推送到 GitHub
  cd public
  git init
  git add .
  git commit -m "Site updated: $(date)"
  git remote add origin https://github.com/你的用户名/你的用户名.github.io.git
  git push -f origin master

  方式二：使用 hexo-deployer-git（推荐）

  # 安装部署插件
  npm install hexo-deployer-git --save

  # 修改 _config.yml
  # deploy:
  #   type: git
  #   repository: https://github.com/你的用户名/你的用户名.github.io.git
  #   branch: master

  # 一键部署
  hexo deploy  # 或 hexo d

  ---
  四、GitHub Pages 配置详解

  4.1 创建仓库

  仓库名称必须是 <用户名>.github.io，例如：manitoyang97.github.io

  4.2 开启 GitHub Pages

  1. 进入仓库 Settings → Pages
  2. Source 选择 Deploy from a branch
  3. Branch 选择 master 分支，目录选择 /(root)
  4. 点击 Save

  等待 1-2 分钟后，访问 https://<用户名>.github.io 即可看到博客。

  4.3 自定义域名绑定（可选）

  步骤：

  1. 在仓库根目录创建 CNAME 文件，内容为你的域名：
  www.example.com
  2. 在域名服务商处配置 DNS：
    - A 记录（指向 GitHub Pages IP）：
        - 185.199.108.153
      - 185.199.109.153
      - 185.199.110.153
      - 185.199.111.153
    - 或 CNAME 记录：指向 <用户名>.github.io
  3. 在 GitHub Pages 设置中填入自定义域名
  4. 等待 DNS 生效（最长 24 小时）

  ⚠️ 注意：如果域名过期或 DNS 失效，会导致网站无法访问。此时应删除 CNAME 文件，恢复使用
  *.github.io 默认域名。

  ---
  五、主题配置指南

  5.1 基础配置

  修改 themes/matery/_config.yml：

  # 网站信息
  menu:
    Home: /
    Archives: /archives
    Categories: /categories
    Tags: /tags
    About: /about
    Contact: /contact
    Friends: /friends

  # 社交链接
  socialLink:
    github: https://github.com/yourusername
    email: mailto:your@email.com
    # weibo:
    # zhihu:
    # qq:

  5.2 Live2D 看板娘

  # 安装 Live2D 插件
  npm install --save hexo-helper-live2d

  # 在 _config.yml 中配置
  live2d:
    enable: true
    scriptFrom: local
    model:
      use: live2d-widget-model-koharu  # 模型名称
    display:
      position: right
      width: 150
      height: 300
    mobile:
      show: true

  5.3 搜索功能

  # 安装搜索插件
  npm install hexo-generator-search --save

  # _config.yml 配置
  search:
    path: search.xml
    field: post

  5.4 Google Analytics

  在主题配置中填入你的追踪 ID：

  google_analytics: UA-XXXXXXXXX-X

  ---
  六、运维与备份策略 ⚠️

  6.1 问题背景

  本仓库曾因以下原因导致维护困难：
  - Hexo 源码丢失
  - 文章 Markdown 源文件丢失
  - 自定义域名过期后未及时处理，导致网站无法访问

  教训：必须建立完善的备份机制！

  6.2 推荐备份方案

  方案一：双分支管理（推荐）

  仓库结构：
  ├── master 分支    → 存放生成的静态文件（GitHub Pages 部署）
  └── hexo 分支      → 存放 Hexo 源码、文章 Markdown

  操作步骤：

  # 在 Hexo 源码目录
  git init
  git checkout -b hexo
  git add .
  git commit -m "Initial hexo source"
  git remote add origin https://github.com/你的用户名/你的用户名.github.io.git
  git push -u origin hexo

  # 以后每次更新
  git add .
  git commit -m "Update source"
  git push origin hexo
  hexo generate
  hexo deploy

  方案二：独立仓库备份

  创建两个仓库：
  - <用户名>.github.io → 静态文件
  - blog-source → Hexo 源码

  6.3 文章备份建议

  - 使用云盘同步 source/_posts 目录
  - 或使用 Git 管理，定期推送
  - 重要文章建议多处备份

  6.4 从 HTML 恢复内容（应急方案）

  如果源文件丢失，可从线上 HTML 反向提取：

  # 使用工具提取 HTML 内容
  # 例如：pup、htmlq 或手动复制

  # 重新创建 Markdown 文件
  hexo new "文章标题"
  # 将提取的内容填入

  ---
  七、常见问题排查

  7.1 网站无法访问

  检查清单：

  1. GitHub Pages 是否正常开启
    - Settings → Pages → 检查状态
  2. 是否配置了自定义域名但域名已失效
    - 检查 CNAME 文件是否存在
    - 删除 CNAME 文件，恢复默认域名访问
  3. 检查 DNS 配置
  # 检查域名解析
  dig yourdomain.com
  nslookup yourdomain.com

  7.2 部署失败

  # 清除缓存重试
  hexo clean
  hexo generate
  hexo deploy

  # 检查 _config.yml 配置是否正确
  # 检查 deploy 插件是否安装
  npm list hexo-deployer-git

  7.3 样式/资源加载失败

  - 检查 _config.yml 中的 url 和 root 配置
  - 检查主题文件是否完整
  - 清除浏览器缓存重试

  7.4 GitHub Pages 构建错误

  1. 检查仓库 Settings → Pages → 查看构建日志
  2. 常见原因：
    - 文件名包含特殊字符
    - 文件编码问题
    - 超出文件大小限制

  7.5 域名重定向问题

  现象：访问 *.github.io 自动跳转到自定义域名

  解决方案：
  1. 删除仓库中的 CNAME 文件
  2. 在 Settings → Pages → Custom domain 中清空自定义域名
  3. 等待 1-2 分钟生效

  ---
  八、项目结构说明

  manitoyang97.github.io/
  ├── 2020/                    # 2020年文章归档
  ├── 2021/                    # 2021年文章归档
  ├── about/                   # 关于页面
  ├── archives/                # 归档页面
  ├── categories/              # 分类页面
  ├── contact/                 # 联系页面
  ├── css/                     # 样式文件
  ├── friends/                 # 友链页面
  ├── js/                      # JavaScript 文件
  ├── libs/                    # 第三方库
  ├── live2dw/                 # Live2D 看板娘资源
  ├── medias/                  # 媒体资源（图片等）
  ├── page/                    # 分页文件
  ├── tags/                    # 标签页面
  ├── content.json             # 文章内容索引
  ├── favicon.png              # 网站图标
  ├── index.html               # 首页
  ├── sitemap.xml              # 站点地图
  ├── baidusitemap.xml         # 百度站点地图
  └── Staticfile               # 静态文件标识

  ---
  九、参考资源

  - Hexo 官方文档
  - Matery 主题文档
  - GitHub Pages 文档

  ---
  License

  MIT License

  ---
  最后更新: 2026-03-30
