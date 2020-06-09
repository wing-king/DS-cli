import http from '@/utils/http/index';
export function list (params){
    return http({
        url: '/archives/search/main',
        method: 'get',
        type:"archives",
        params
    });
}