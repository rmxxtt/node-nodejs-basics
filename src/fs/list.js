import {readdir} from 'node:fs'

const list = async () => {
    readdir('./src/fs', (err, files) =>{
        if (err?.code === 'ENOENT') throw new Error('FS operation failed');
        console.log(files);
    });
};

await list();
