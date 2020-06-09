import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
const routes = (moduleFiles => {
    const exclude = ['index.js']
    let route = [];
    moduleFiles.keys().forEach(path => {
    const content = moduleFiles(path),
        fileName = path.replace(/^.*[\\\/]/, '');
        if (!exclude.includes(fileName)&& Array.isArray(content.default || content)) {
            route = route.concat(content.default || content);
        }
    });
    return route
})(require.context('./', true, /\.js$/));
// 404页面
routes.push({
    path: '*',
    redirect: '/'
});



const router = new VueRouter({
    routes,
    scrollBehavior: () => ({ y: 0 })
});

// 页面资源找不到报错
router.onError((error) => {
    const pattern = /Loading chunk (\d)+ failed/g;
    const isChunkLoadFailed = error.message.match(pattern);
    const targetPath = router.history.pending.fullPath;
    console.log("targetPath",targetPath);
    if (isChunkLoadFailed) {
      console.log("页面资源找不到了");
    }
  });
router.beforeEach((to, from, next) => {
    // 修改页面标题
    if (to.meta && to.meta.title) {
        document.title = to.meta.title;
    }
    next()
});

export default router;
