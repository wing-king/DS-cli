import Vue from 'vue'
import App from './app.vue'
import router from '@/router'
import VConsole from 'vconsole';
import store from '@/store'
import mixins from '@global/mixins'
require('@global/components')
require('@global/directives')
import {project} from '@config'
Vue.config.productionTip = false
if (process.env.NODE_ENV !== 'production' && project.mobile ) {
    new VConsole();
}
Vue.mixin({ mixins });

new Vue({
    router,
    store,
    el:'#app',
    render: h => h(App)
})