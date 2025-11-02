const CUSTOMER_SITES = {
    qiqi: {
        api: 'https://www.qiqidys.com/api.php/provide/vod',
        name: '七七资源',
    },
    "api_13": {
        "name": "TV-卧龙资源",
        "api": "https://wolongzyw.com/api.php/provide/vod",
        "detail": "https://wolongzyw.com"
    },
    "api_14": {
        "name": "TV-天涯资源",
        "api": "https://tyyszy.com/api.php/provide/vod",
        "detail": "https://tyyszy.com"
    },
    "api_15": {
        "name": "TV-如意资源",
        "api": "https://cj.rycjapi.com/api.php/provide/vod",
        "detail": ""
    },
    "api_16": {
        "name": "TV-小猫咪资源",
        "api": "https://zy.xmm.hk/api.php/provide/vod",
        "detail": "https://zy.xmm.hk"
    },
    "api_20": {
        "name": "TV-无尽资源",
        "api": "https://api.wujinapi.net/api.php/provide/vod",
        "detail": ""
    },
    "api_23": {
        "name": "TV-暴风资源",
        "api": "https://bfzyapi.com/api.php/provide/vod",
        "detail": ""
    },
    "api_29": {
        "name": "TV-电影天堂资源",
        "api": "http://caiji.dyttzyapi.com/api.php/provide/vod",
        "detail": "http://caiji.dyttzyapi.com"
    },
    "api_30": {
        "name": "AV-百万资源",
        "api": "https://api.bwzyz.com/api.php/provide/vod",
        "detail": "https://api.bwzyz.com"
    },
    "api_31": {
        "name": "TV-百度云资源",
        "api": "https://api.apibdzy.com/api.php/provide/vod",
        "detail": "https://api.apibdzy.com"
    },
    "api_45": {
        "name": "TV-非凡资源",
        "api": "https://cj.ffzyapi.com/api.php/provide/vod",
        "detail": "https://cj.ffzyapi.com"
    },
    "api_48": {
        "name": "TV-魔都动漫",
        "api": "https://caiji.moduapi.cc/api.php/provide/vod",
        "detail": "https://caiji.moduapi.cc"
    },
    "api_49": {
        "name": "TV-魔都资源",
        "api": "https://www.mdzyapi.com/api.php/provide/vod",
        "detail": "https://www.mdzyapi.com"
    },
    "api_50": {
        "name": "TV-黑木耳",
        "api": "https://json.heimuer.xyz/api.php/provide/vod",
        "detail": "https://json.heimuer.xyz"
    },
    "api_52": {
        "name": "AV-91麻豆",
        "api": "https://91md.me/api.php/provide/vod",
        "detail": "https://91md.me"
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
    "yingshigongchang": {
        "api": "https://cj.lziapi.com/api.php/provide/vod/",
        "name": "影视工厂"
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
