import {createWriteStream} from 'node:fs'

const write = async () => {
    const ws = createWriteStream('./src/streams/files/fileToWrite.txt');
    process.stdin.pipe(ws);
};

await write();
