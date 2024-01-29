import {createReadStream, createWriteStream} from "node:fs";
import {createUnzip} from "node:zlib";

const decompress = async () => {
    const source = './src/zip/files/archive.gz'
    const destination = './src/zip/files/fileToCompress.txt'
    createReadStream(source).pipe(createUnzip()).pipe(createWriteStream(destination))
};

await decompress();
