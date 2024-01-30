import { unlink } from 'node:fs';

const remove = async () => {
    unlink('./src/fs/files/fileToRemove.txt', err => {
        if (err.code === 'ENOENT') throw new Error('FS operation failed');
        console.log('File deleted');
    })
};

await remove();
