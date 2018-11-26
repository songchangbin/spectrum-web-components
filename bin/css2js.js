const fs = require('fs');
const path = require('path');
const glob = require('glob');
const mkdirp = require('mkdirp');
const rmdir  = require('rmdir');


const filepattern = process.argv[2]; //**/*.js
const sourcebasepath = process.argv[3] ? process.argv[3]: '';
const destbasepath = process.argv[4] ? process.argv[4]: '';

console.log('Starting at ', sourcebasepath, 'using file pattern', filepattern);
console.log('Writing to ', destbasepath);

glob(sourcebasepath + path.sep + filepattern, (er, files) => {
        for (let c = 0; c < files.length; c++) {
            let css = fs.readFileSync(files[c], 'utf8').trim();
            css = `export default { 
    css() {
        return \`
${css}\`;
    }
}`;

            const file = path.parse(files[c]);
            const dest = destbasepath + path.sep + path.relative(sourcebasepath, file.dir);
            console.log('Writing file', dest + path.sep + file.name + '.js');

            mkdirp.sync(dest);
            fs.writeFileSync(dest + path.sep + file.name + '.js', css);
        }
    });



