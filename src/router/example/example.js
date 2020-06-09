export default [
    {
        path: '/',
        name: '/',
        meta: { title: '首页' },
        component: () => import('@/views/Home.vue')
    },
    {
        path: '/home',
        name: 'home',
        meta: { title: '首页' },
        component: () => import('@/views/Home.vue')
    },
    {
        path: '/404',
        name: '404',
        meta: { title: '404' },
        component: () => import('@/views/404.vue')
    }
];