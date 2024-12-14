// 创建二维码
function createQRCode() {
    try {
        // 移除已存在的容器和按钮
        const existingContainer = document.getElementById('qrcode-container');
        const existingToggle = document.getElementById('qrcode-toggle');
        if (existingContainer) {
            existingContainer.remove();
        }
        if (existingToggle) {
            existingToggle.remove();
        }

        // 创建二维码容器
        const container = document.createElement('div');
        container.id = 'qrcode-container';
        
        // 设置初始样式
        Object.assign(container.style, {
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            zIndex: '2147483647',
            transform: 'none',
            margin: '0',
            padding: '6px'
        });

        // 创建切换按钮
        const toggleButton = document.createElement('div');
        toggleButton.id = 'qrcode-toggle';
        
        // 获取网站favicon作为按钮图标
        let iconUrl = '';
        const faviconLink = document.querySelector("link[rel*='icon']");
        if (faviconLink) {
            iconUrl = faviconLink.href;
        } else {
            const appleTouchIcon = document.querySelector("link[rel='apple-touch-icon']");
            if (appleTouchIcon) {
                iconUrl = appleTouchIcon.href;
            } else {
                iconUrl = new URL('/favicon.ico', window.location.origin).href;
            }
        }

        // 创建图标
        const iconImg = document.createElement('img');
        iconImg.src = iconUrl;
        iconImg.onerror = () => {
            // 如果图标加载失败，使用默认的二维码图标
            iconImg.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxyZWN0IHg9IjMiIHk9IjMiIHdpZHRoPSI3IiBoZWlnaHQ9IjciPjwvcmVjdD48cmVjdCB4PSIxNCIgeT0iMyIgd2lkdGg9IjciIGhlaWdodD0iNyI+PC9yZWN0PjxyZWN0IHg9IjMiIHk9IjE0IiB3aWR0aD0iNyIgaGVpZ2h0PSI3Ij48L3JlY3Q+PGxpbmUgeDE9IjE0IiB5MT0iMTQiIHgyPSIyMSIgeTI9IjE0Ij48L2xpbmU+PGxpbmUgeDE9IjE0IiB5MT0iMjAiIHgyPSIyMSIgeTI9IjIwIj48L2xpbmU+PGxpbmUgeDE9IjE3IiB5MT0iMTQiIHgyPSIxNyIgeTI9IjIwIj48L2xpbmU+PC9zdmc+';
        };
        toggleButton.appendChild(iconImg);

        // 确保容器和按钮添加到body
        if (document.body) {
            document.body.appendChild(container);
            document.body.appendChild(toggleButton);
        } else {
            document.documentElement.appendChild(container);
            document.documentElement.appendChild(toggleButton);
        }

        // 创建QR码容器
        const qrcodeDiv = document.createElement('div');
        qrcodeDiv.id = 'qrcode';
        Object.assign(qrcodeDiv.style, {
            width: '120px',
            height: '120px',
            margin: '0',
            padding: '0'
        });
        container.appendChild(qrcodeDiv);

        // 创建QR码图像
        const qrImage = document.createElement('img');
        qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=${encodeURIComponent(window.location.href)}&margin=1&color=0-0-0&bgcolor=255-255-255&qzone=5`;
        Object.assign(qrImage.style, {
            width: '120px',
            height: '120px',
            display: 'block',
            margin: '0',
            padding: '0',
            border: 'none'
        });
        qrcodeDiv.appendChild(qrImage);

        // 创建LOGO容器和图像
        const logoContainer = document.createElement('div');
        logoContainer.className = 'qr-logo';
        const logoImg = document.createElement('img');
        logoImg.src = iconUrl;
        logoImg.onerror = () => {
            logoContainer.style.display = 'none';
        };
        logoImg.onload = () => {
            // 检查图片是否加载成功且尺寸合适
            if (logoImg.naturalWidth > 0 && logoImg.naturalHeight > 0) {
                logoContainer.style.display = 'flex';
            } else {
                logoContainer.style.display = 'none';
            }
        };
        logoContainer.appendChild(logoImg);
        qrcodeDiv.appendChild(logoContainer);

        // 添加网页信息
        const pageInfo = document.createElement('div');
        pageInfo.className = 'page-info';
        
        // 添加网页名称（域名）
        const pageName = document.createElement('div');
        pageName.className = 'page-name';
        const hostname = window.location.hostname;
        pageName.textContent = hostname.length > 12 
            ? hostname.substring(0, 12) + '...' 
            : hostname;
        pageInfo.appendChild(pageName);
        
        // 添加网页标题
        const pageTitle = document.createElement('div');
        pageTitle.className = 'page-title';
        const title = document.title || hostname;
        pageTitle.textContent = title.length > 12 
            ? title.substring(0, 12) + '...' 
            : title;
        pageInfo.appendChild(pageTitle);
        
        container.appendChild(pageInfo);

        // 添加点击事件处理
        toggleButton.addEventListener('click', () => {
            container.classList.toggle('show');
        });

        // 点击其他地方关闭二维码
        document.addEventListener('click', (event) => {
            if (!container.contains(event.target) && !toggleButton.contains(event.target)) {
                container.classList.remove('show');
            }
        });

    } catch (error) {
        console.error('QR码生成错误:', error);
        console.error(error.stack);
    }
}

// 在页面加载完成后创建二维码
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createQRCode);
} else {
    createQRCode();
}

// 监听URL变化
let lastUrl = window.location.href;
setInterval(() => {
    if (lastUrl !== window.location.href) {
        lastUrl = window.location.href;
        createQRCode();
    }
}, 1000); 