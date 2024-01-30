import {createReadStream} from 'node:fs';
import {createHash} from 'node:crypto';

const calculateHash = async () => {
    const hash = createHash('sha256');
    const input = createReadStream('./src/hash/files/fileToCalculateHashFor.txt');
    input.pipe(hash).setEncoding('hex').pipe(process.stdout);
};

await calculateHash();
