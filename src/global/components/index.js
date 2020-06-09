import Vue from 'vue'
const modules = (modulesFiles => {
    const exclude = ['index.js']
    let module = {};
    modulesFiles.keys().forEach(path => {
    const content = modulesFiles(path),
        fileName = path.replace(/^.*[\\\/]/, '');
        let contents = content.default || content
        if (!exclude.includes(fileName)) {
            module[fileName.replace(/\.\w+$/, '')] = contents;
            if(contents.install &&  contents.install instanceof Function){
                Vue.use(contents)
            }else {
                Vue.component(contents.name,contents)
            }
            
        }
       
    });
    return module
})(require.context('./', true, /\.js$/));
export default modules