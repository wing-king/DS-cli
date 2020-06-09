const configs = (modulesFiles => {
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
module.exports = configs