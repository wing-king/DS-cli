// 本地环境
const localUrl = {
    host: 'https://archivesdev.zhugexuetang.com/'
}
// 开发环境
const devUrl = {
    host: 'https://archives.zhugexuetang.com/'
}
// 测试环境
const testUrl = {
    host: 'https://archives.zhugexuetang.com/'
}
// 线上环境
const proUrl = {
    host: 'https://archives.zhugexuetang.com/'
}
let proxy = (project) =>{
        switch(project){
            case  'develop' :
                return devUrl
                break
            case  'test' :
                return testUrl
                break
            case  'production' :
                return proUrl
                break
            case  'local' :
                return localUrl 
                break   
        }
    
}
module.exports = proxy
