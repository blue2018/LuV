const CUSTOMER_SITES = {
    qiqi: {
        api: 'https://www.qiqidys.com/api.php/provide/vod',
        name: '七七资源',
    },
    "api_1": {
            "name": "TV-1080资源",
            "api": "https://api.1080zyku.com/inc/api_mac10.php",
            "detail": "https://api.1080zyku.com"
    },
    "api_2": {
            "name": "AV-155资源",
            "api": "https://155api.com/api.php/provide/vod",
            "detail": "https://155api.com"
    }
};

// 调用全局方法合并
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
