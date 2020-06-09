const modules = (modulesFiles => {
    const exclude = ['index.js']
    let module = {};
    modulesFiles.keys().forEach(path => {
    const content = modulesFiles(path),
        fileName = path.replace(/^.*[\\\/]/, '');
        if (!exclude.includes(fileName)) {
            console.log(content);
            module[fileName.replace(/\.\w+$/, '')] = content.default || content;
        }
    });
    return module
})(require.context('./common', true, /\.vue$/));
module.exports =  modules
