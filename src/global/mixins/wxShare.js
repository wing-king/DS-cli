import {
    browerEnv
} from '@/utils/tool/wxTool';

import {
    setWechatConfig,
    updateTimelineShareData,
    updateAppMessageShareData,
    onMenuShareTimeline,
    onMenuShareAppMessage,
    onMenuShareQQ,
    onMenuShareWeibo,
    onMenuShareQZone
} from '@/utils/tool/wxShare.js';
import {wxChat} from '@config'
const {appId,share} = wxChat
export default {
    data() {
        const isInWeChat = browerEnv() === '1';
        return {
            isInWeChat,
        };
    },
    methods: {
         // 静默授权
        silentAuthorization(wxUrl) {  // wxUrl 为当前路径 
            location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appId}&redirect_uri=${wxUrl}&response_type=code&scope=snsapi_base&state=123#wechat_redirect`;
        },

        // 主动授权
        activeAuthorization(wxUrl) { // wxUrl 为当前路径 
            location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appId}&redirect_uri=${wxUrl}&response_type=code&scope=snsapi_userinfo&state=authorization#wechat_redirect`;
        },
        setWeixinShare(config = {}) {
            if (!(config && typeof config === 'object')) {
                console.error('setWeixinShare()不能获取微信配置信息');
                return false;
            }
            const shareMessage = {
                title: share.name, // 分享标题
                desc: share.desc, // 分享描述
                link: `${location.protocol}//${location.host}${location.pathname}`, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                imgUrl: share.imgUrl, // 分享图标
            };
            setWechatConfig(Object.assign({
                appId: '',
                timestamp: '',
                nonceStr: '',
                signature: '',
            }, config)).then(() => {
                onMenuShareTimeline(shareMessage.title, shareMessage.desc, shareMessage.link, shareMessage.imgUrl);
                onMenuShareAppMessage(shareMessage.title, shareMessage.desc, shareMessage.link, shareMessage.imgUrl);
                onMenuShareQQ(shareMessage.title, shareMessage.desc, shareMessage.link, shareMessage.imgUrl);
                onMenuShareWeibo(shareMessage.title, shareMessage.desc, shareMessage.link, shareMessage.imgUrl);
                onMenuShareQZone(shareMessage.title, shareMessage.desc, shareMessage.link, shareMessage.imgUrl);
            }).catch(err => {
                console.error(err);
            })
        }
    },
    created() {
        if (this.isInWeChat) {
           
        }
    }
}
