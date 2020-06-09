// 判断当前环境 1:微信 2:H5 3:小程序
export const browerEnv = function () {
    var ua = window.navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == 'micromessenger') {
        return '1'; // 微信环境
    }  else{
        return  '2'
    }
};
