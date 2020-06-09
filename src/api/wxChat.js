import http from '@/utils/http';
// 获取微信网络授权 openid  
export function postGetopenidH5 (data){
    return http({
        url: '/activation/activecode/getopenid',
        method: 'post',
        type:"", // 后端服务类型 默认值host
        data
    });
}
