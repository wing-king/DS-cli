import Vue from 'vue';
/**
 * 动态加载当前目录指令
 * 排除：exclude
 */
const files = require.context('./', true, /\.js$/i),
    exclude = ['index.js'],
    directives = {};
files.keys().forEach(path => {
    const content = files(path),
        fileName = path.replace(/^.*[\\\/]/, '');
    if (!exclude.includes(fileName)) {
        directives[fileName.replace(/\.\w+$/, '')] = content.default || content;
    }
});
for (const x in directives) {
    if (directives.hasOwnProperty(x)) {
        Vue.directive(x, directives[x]);
    }
}