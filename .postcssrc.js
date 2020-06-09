const { mobile} = require('./config/project')
const postcsPxtoViewport = require('./postcsPxtoViewport')
let plugins =  {
    // "postcss-import": {},      //用于@import导入css文件
    // "postcss-url": {},           //路径引入css文件或node_modules文件
    // "postcss-aspect-ratio-mini": {},   //用来处理元素容器宽高比
    // "postcss-write-svg": { utf8: false },    //用来处理移动端1px的解决方案。该插件主要使用的是border-image和background来做1px的相关处理。
    "postcss-cssnext": {},  //该插件可以让我们使用CSS未来的特性，其会对这些特性做相关的兼容性处理。
    // "postcss-viewport-units":{}, //给vw、vh、vmin和vmax做适配的操作,这是实现vw布局必不可少的一个插件
    "cssnano": {    //主要用来压缩和清理CSS代码。在Webpack中，cssnano和css-loader捆绑在一起，所以不需要自己加载它。
        preset: "advanced",   //重复调用
        autoprefixer: false,    //cssnext和cssnano都具有autoprefixer,事实上只需要一个，所以把默认的autoprefixer删除掉，然后把cssnano中的autoprefixer设置为false。
        "postcss-zindex": false   //只要启用了这个插件，z-index的值就会重置为1
     }
}
if (mobile) {
    plugins['postcss-px-to-viewport'] =  postcsPxtoViewport 
}
module.exports = {
    map: false,
    plugins
  }