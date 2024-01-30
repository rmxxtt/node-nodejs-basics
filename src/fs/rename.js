import fs from 'node:fs'

const rename = async () => {
    const old = './src/fs/files/wrongFilename2.txt'
    const new_ = './src/fs/files/properFilename.md'
    fs.access(new_, fs.constants.F_OK, (err) => {
        if (!err) throw new Error('FS operation failed')
    })
    fs.rename(old, new_, (err) => {
        if (err) throw new Error('FS operation failed');
        console.log('File renamed');
    });
};

await rename();
