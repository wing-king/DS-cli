import wx from 'weixin-js-sdk';

export function setWechatConfig(options) {
    wx.config({
        debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
        appId: options.appId, // 必填，公众号的唯一标识
        timestamp: options.timestamp, // 必填，生成签名的时间戳
        nonceStr: options.nonceStr, // 必填，生成签名的随机串
        signature: options.signature,// 必填，签名
        jsApiList: [
            'updateAppMessageShareData',
            'updateAppMessageShareData',
            'onMenuShareTimeline',
            'onMenuShareAppMessage',
            'onMenuShareQQ',
            'onMenuShareWeibo',
            'onMenuShareQZone',
            'checkJsApi'
        ] // 必填，需要使用的JS接口列表
    });

    return new Promise((resolve, reject) => {
        wx.ready(function () {   //需在用户可能点击分享按钮前就先调用
            resolve(true);
            wx.error(function(res){
                // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
                console.error("errorMSG:"+JSON.stringify(res));
                reject(res);
            });
        });
    });
}

export function updateTimelineShareData(title = '', desc = '', link = '', imgUrl = '') {
    // console.log('updateTimelineShareData():', title, desc, link, imgUrl);
    return new Promise((resolve, reject) => {
        wx.updateTimelineShareData({
            title: title, // 分享标题
            desc: desc, // 分享描述
            link: link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
            imgUrl: imgUrl, // 分享图标
            success: function () {
                resolve(true)// 设置成功
                console.log('设置updateTimelineShareData()成功!');
            },
            fail: function(err) {
                reject(err);
                console.error(err);
                console.log('设置updateTimelineShareData()失败!');
            }
        });
    })
}

export function updateAppMessageShareData(title = '', desc = '', link = '', imgUrl = '') {
    // console.log('updateAppMessageShareData():', title, desc, link, imgUrl);
    return new Promise((resolve, reject) => {
        wx.updateAppMessageShareData({
            title: title, // 分享标题
            desc: desc, // 分享描述
            link: link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
            imgUrl: imgUrl, // 分享图标
            success: function () {
                resolve(true)// 设置成功
                console.log('设置updateAppMessageShareData()成功!');
            },
            fail: function(err) {
                reject(err);
                console.error(err);
                console.log('设置updateAppMessageShareData()失败!');
            }
        });
    })
}

export function onMenuShareTimeline(title = '', desc = '', link = '', imgUrl = '') {
    // console.log('onMenuShareTimeline():', title, desc, link, imgUrl);
    return new Promise((resolve, reject) => {
        wx.onMenuShareTimeline({
            title: title, // 分享标题
            // desc: desc, // 分享描述
            link: link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
            imgUrl: imgUrl, // 分享图标
            success: function () {
                resolve(true)// 设置成功
                console.log('设置onMenuShareTimeline()成功!');
            },
            fail: function(err) {
                reject(err);
                console.error(err);
                console.log('设置onMenuShareTimeline()失败!');
            }
        });
    })
}

export function onMenuShareAppMessage(title = '', desc = '', link = '', imgUrl = '') {
    // console.log('onMenuShareAppMessage():', title, desc, link, imgUrl);
    return new Promise((resolve, reject) => {
        wx.onMenuShareAppMessage({
            title: title, // 分享标题
            desc: desc, // 分享描述
            link: link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
            imgUrl: imgUrl, // 分享图标
            success: function () {
                resolve(true)// 设置成功
                console.log('设置onMenuShareAppMessage()成功!');
            },
            fail: function(err) {
                reject(err);
                console.error(err);
                console.log('设置onMenuShareAppMessage()失败!');
            }
        });
    })
}

export function onMenuShareQQ(title = '', desc = '', link = '', imgUrl = '') {
    // console.log('onMenuShareQQ():', title, desc, link, imgUrl);
    return new Promise((resolve, reject) => {
        wx.onMenuShareQQ({
            title: title, // 分享标题
            desc: desc, // 分享描述
            link: link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
            imgUrl: imgUrl, // 分享图标
            success: function () {
                resolve(true)// 设置成功
                console.log('设置onMenuShareQQ()成功!');
            },
            fail: function(err) {
                reject(err);
                console.error(err);
                console.log('设置onMenuShareQQ()失败!');
            }
        });
    })
}

export function onMenuShareWeibo(title = '', desc = '', link = '', imgUrl = '') {
    // console.log('onMenuShareWeibo():', title, desc, link, imgUrl);
    return new Promise((resolve, reject) => {
        wx.onMenuShareWeibo({
            title: title, // 分享标题
            desc: desc, // 分享描述
            link: link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
            imgUrl: imgUrl, // 分享图标
            success: function () {
                resolve(true)// 设置成功
                console.log('设置onMenuShareWeibo()成功!');
            },
            fail: function(err) {
                reject(err);
                console.error(err);
                console.log('设置onMenuShareWeibo()失败!');
            }
        });
    })
}

export function onMenuShareQZone(title = '', desc = '', link = '', imgUrl = '') {
    // console.log('onMenuShareQZone():', title, desc, link, imgUrl);
    return new Promise((resolve, reject) => {
        wx.onMenuShareQZone({
            title: title, // 分享标题
            desc: desc, // 分享描述
            link: link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
            imgUrl: imgUrl, // 分享图标
            success: function () {
                resolve(true)// 设置成功
                console.log('设置onMenuShareQZone()成功!');
            },
            fail: function(err) {
                reject(err);
                console.error(err);
                console.log('设置onMenuShareQZone()失败!');
            }
        });
    })
}
