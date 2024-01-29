import {createGzip} from 'node:zlib'
import {createReadStream, createWriteStream} from "node:fs";

const compress = async () => {
    const source = './src/zip/files/fileToCompress.txt'
    const destination ='./src/zip/files/archive.gz'
    createReadStream(source).pipe(createGzip()).pipe(createWriteStream(destination))
};

await compress();
