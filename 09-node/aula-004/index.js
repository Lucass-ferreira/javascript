const fs = require('fs').promises;
const path = require('path');

//utilizando then e catch
// fs.readdir(path.resolve(__dirname))
//     .then(files =>console.log(files))
//     .catch(e => console.log(e))


//utilizando async e await
async function readdir(rootDir) {
    rootDir = rootDir || path.resolve(__dirname);
    const files = await fs.readdir(rootDir)

    walk(files, rootDir);
}

async function walk(files, rootDir) {
    for(let file of files){
        const fileFullPAth = path.resolve(rootDir, file)
        const stats = await fs.stat(fileFullPAth)

        if(/\.git/g.test(fileFullPAth)) continue;
        if(/node_modules/g.test(fileFullPAth)) continue;
        
        if(stats.isDirectory()){
            readdir(fileFullPAth);
            continue;
        }
        
        // if(!/\.css$/g.test(fileFullPAth) && !/\.html$/g.test(fileFullPAth)) continue;
        if(!/\.html$/g.test(fileFullPAth)) continue;

        // console.log(file, stats.isDirectory());
        console.log(fileFullPAth);
    }
}

readdir( 'C:/Users/lucas/OneDrive/Documentos/estudos/javascript_3/avançado_js/' );