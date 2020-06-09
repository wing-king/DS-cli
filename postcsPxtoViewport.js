const  postcsPxtoViewport =  {    //把px单位转换为vw、vh、vmin或者vmax这样的视窗单位，也是vw适配方案的核心插件之一。
    unitToConvert: 'px', // 需要转换的单位，默认为"px"
    viewportWidth: 750, // 设计稿的视口宽度, 将根据视口做比例换算
    unitPrecision: 2, // 转化精度，转换后保留位数
    propList: ['*'], // 能转化为vw的属性列表
    viewportUnit: 'vw', // 希望使用的视口单位
    fontViewportUnit: 'vw', // 字体使用的视口单位
    selectorBlackList: ['van'], // 需要忽略的CSS选择器
    minPixelValue: 1, // 最小的转换数值
    mediaQuery: false, // 媒体查询里的单位是否需要转换单位
    replace: true, // 转换后是否添加备用单位
    exclude: [], // 忽略文件目录
    landscape: false, // 是否添加根据 landscapeWidth 生成的媒体查询条件 @media (orientation: landscape)
    landscapeUnit: 'vw', // 横屏时使用的单位
    landscapeWidth: 568 // 横屏时使用的视口宽度
}
module.exports = postcsPxtoViewport
