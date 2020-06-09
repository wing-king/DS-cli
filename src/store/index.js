import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex)

const  PersistedState = createPersistedState({
   storage: window.sessionStorage,
   key: 'projectName' 
});
const modules = (modulesFiles => {
    const exclude = ['index.js']
    let module = {};
    modulesFiles.keys().forEach(path => {
    const content = modulesFiles(path),
        fileName = path.replace(/^.*[\\\/]/, '');
        if (!exclude.includes(fileName)) {
            module[fileName.replace(/\.\w+$/, '')] = content.default || content;
        }
    });
    return module
})(require.context('./', true, /\.js$/));
export default new Vuex.Store({
  modules,
  plugins: [PersistedState]
})
