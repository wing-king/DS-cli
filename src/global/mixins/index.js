

/**
 * 动态加载当前目录混入
 * 排除：exclude
 */
import { project }  from '@config'
const wxChat = project.wxChat
const files = require.context('./', false, /\.js$/i),
    exclude = ['index.js'],
    mixins = [];
    wxChat ? '' : exclude.push('wxShare.js')  // 去除微信功能
files.keys().forEach(path => {
    const content = files(path),
        fileName = path.replace(/^.*[\\\/]/, '');
    if (!exclude.includes(fileName)) {
        mixins.push(content.default || content);
    }
});
export default mixins