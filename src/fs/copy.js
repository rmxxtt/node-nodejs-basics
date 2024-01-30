import {cp} from 'node:fs';

const copy = async () => {
    cp('./src/fs/files/', './src/fs/files_copy/', {recursive: true, errorOnExist: true, force: false}, (err) => {
        if (err) {
            if (err.code === 'EEXIST' || err.code === 'ERR_FS_CP_EEXIST') throw new Error('FS operation failed');
            else throw err;
        }
        console.log('All files copied');
    });
};

await copy();
