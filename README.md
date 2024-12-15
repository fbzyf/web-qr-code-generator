# Web QR Code Generator

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![Version](https://img.shields.io/badge/version-1.0.0-blue)
![Platform](https://img.shields.io/badge/platform-Chrome%20|%20Firefox%20|%20Edge-lightgrey)

一个轻量级的网页二维码生成器浏览器插件，可以为任意网页快速生成带有网站图标的二维码，方便用户在移动设备上快速访问当前页面。

<div align="center">
  <img src="preview.png" alt="插件预览" width="300"/>
</div>

## 🌟 功能特点

- 🚀 即时生成：自动为当前页面生成二维码
- 🎯 智能定位：固定在页面右下角，不影响正常浏览
- 🖼 美观设计：集成网站favicon作为二维码中心图标
- 📱 响应式布局：适配各种屏幕尺寸
- 🔄 实时更新：检测URL变化自动更新二维码
- 👆 交互友好：点击图标显示/隐藏二维码，点击页面空白处自动隐藏
- 📋 页面信息：显示当前网站域名和页面标题
- ⚡ 轻量级：无需依赖任何第三方库

## 🚀 快速开始

### 在线安装
1. [Chrome Web Store](#) (即将上线)
2. [Firefox Add-ons](#) (即将上线)
3. [Edge Add-ons](#) (即将上线)

### 本地开发安装

1. 克隆仓库
```bash
git clone https://github.com/your-username/web-qr-code-generator.git
cd web-qr-code-generator
```

2. 修改代码后在浏览器中重新加载插件即可看到效果

## 🛠️ 开发指南

### 项目结构
```
qr-code-extension/
├── manifest.json        # 插件配置文件
├── content.js          # 主要功能实现
├── styles.css          # 样式文件
├── icon48.png         # 插件图标
├── icon128.png        # 插件图标
└── README.md          # 项目文档
```

### 构建发布
```bash
# 打包插件
zip -r web-qr-code-generator.zip * -x "*.git*" -x "screenshots/*"
```

## 📝 更新日志

### v1.0.0 (2024-03-xx)
- 🎉 首次发布
- ✨ 支持自动生成当前页面二维码
- 🎨 支持网站图标集成
- 📱 响应式布局适配

## 🤝 贡献指南

1. Fork 本仓库
2. 创建你的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交你的改动 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启一个 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情

## 📧 联系方式

项目作者 - [@fbzyf](https://github.com/fbzyf)

项目链接: [https://github.com/fbzyf/web-qr-code-generator](https://github.com/fbzyf/web-qr-code-generator) 
