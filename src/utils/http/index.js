import axios from 'axios'
import { stringify } from 'qs'
import store from '@/store'
import config from '@config'
const { proxy } = config
const URL = proxy(__PROJECT_ENV__)
const http = axios.create({
    timeout: 10000,
    baseURL:URL.host,
    transformRequest: [data => stringify(data)],
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
})
// request拦截器
http.interceptors.request.use(
    config => {
        if (store.getters.token) {
            config.headers.Authorization = `${store.getters.token}`;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

// response拦截器
http.interceptors.response.use(
    response => { 
        const { code, data, err_msg, tips, statusCode } = response.data;
        if (code === 0 || code === 200 || statusCode === 0 || statusCode === 200) {
            return data;
        }else {
            let msg = tips || err_msg;
            return Promise.reject(msg);
        }
     },
    error => {
        const { response, code } = error
        if (code === 'ECONNABORTED') {
            console.log("请求超时");
        } else
            if (response) {
                errorHandle(response.status, response.data)
            } else {
                // 关于断网组件中的刷新重新获取数据，会在断网组件中说明
                if (!window.navigator.onLine) {
                    console.log('网路异常')
                } else {
                    return Promise.reject(error);
                }
            }
    }
)


/** 
 * 请求失败后的错误统一处理 
 * @param {Number} status 请求失败的状态码
 */
const errorHandle = (status, other) => {
    // 状态码判断
    switch (status) {
        // 401: 未登录状态，跳转登录页
        case 401:
            // toLogin();
            break;
        // 403 token过期
        // 清除token并跳转登录页
        case 403:
            console.log('登录过期，请重新登录');
            // localStorage.removeItem('token');
            // store.commit('loginSuccess', null);
            setTimeout(() => {
                // toLogin();
                console.log('请重新登录')
            }, 1000);
            break;
        // 404请求不存在
        case 404:
            console.log('请求的资源不存在');
            break;
        default:
            console.log(other);
    }
}


function fetch(config) {
    let urlThype = config['type'] 
    const uri = URL[urlThype] || URL.host;
    if (!uri) throw '为获取对应的请求地址';
    config.baseURL = uri;
    return http(config)
}
export default http