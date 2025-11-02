const CUSTOMER_SITES = {
    "360ziyuan": {
        "name": "360资源",
        "api": "https://360zy.com/api.php/provide/vod",
        "detail": "https://360zy.com"
    },
    "api_13": {
        "name": "卧龙资源",
        "api": "https://wolongzyw.com/api.php/provide/vod",
        "detail": "https://wolongzyw.com"
    },
    "api_14": {
        "name": "天涯资源",
        "api": "https://tyyszy.com/api.php/provide/vod",
        "detail": "https://tyyszy.com"
    },
    "api_15": {
        "name": "如意资源",
        "api": "https://cj.rycjapi.com/api.php/provide/vod",
        "detail": ""
    },
    "api_16": {
        "name": "小猫咪资源",
        "api": "https://zy.xmm.hk/api.php/provide/vod",
        "detail": "https://zy.xmm.hk"
    },
    "api_18": {
        "name": "无尽资源",
        "api": "https://api.wujinapi.com/api.php/provide/vod",
        "detail": ""
    },
    "api_23": {
        "name": "暴风资源",
        "api": "https://bfzyapi.com/api.php/provide/vod",
        "detail": ""
    },
    "api_29": {
        "name": "电影天堂资源",
        "api": "http://caiji.dyttzyapi.com/api.php/provide/vod",
        "detail": "http://caiji.dyttzyapi.com"
    },
    "api_45": {
        "name": "非凡资源",
        "api": "https://cj.ffzyapi.com/api.php/provide/vod",
        "detail": "https://cj.ffzyapi.com"
    },
    "api_48": {
        "name": "魔都动漫",
        "api": "https://caiji.moduapi.cc/api.php/provide/vod",
        "detail": "https://caiji.moduapi.cc"
    },
    "api_49": {
        "name": "魔都资源",
        "api": "https://www.mdzyapi.com/api.php/provide/vod",
        "detail": "https://www.mdzyapi.com"
    },
    "api_50": {
        "name": "黑木耳",
        "api": "https://json.heimuer.xyz/api.php/provide/vod",
        "detail": "https://json.heimuer.xyz"
    },
    "jisu": {
        "api": "https://jszyapi.com/api.php/provide/vod",
        "name": "极速资源",
        "detail": "https://jszyapi.com"
    },
    "mozhua": {
        "api": "https://mozhuazy.com/api.php/provide/vod",
        "name": "魔爪资源"
    },
    "mdzy": {
        "api": "https://www.mdzyapi.com/api.php/provide/vod",
        "name": "魔都资源"
    },
    "iqiyi": {
        "api": "https://www.iqiyizyapi.com/api.php/provide/vod",
        "name": "iqiyi资源"
    },
    "fantuanyingshi": {
        "api": "https://www.fantuan.tv/api.php/provide/vod/",
        "name": "饭团影视"
    }
};

// 调用全局方法合并
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
