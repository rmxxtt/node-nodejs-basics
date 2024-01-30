import {appendFile} from 'node:fs';

const create = async () => {
    appendFile('./src/fs/files/fresh.txt', 'I am fresh and young', {flag: 'wx'}, (err) => {
        if (err) {
            if (err.code === 'EEXIST') throw new Error('FS operation failed');
            else throw err;
        }
        console.log('File created');
    });
};

await create();
