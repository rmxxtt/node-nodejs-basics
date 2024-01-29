import {createReadStream} from "node:fs";

const read = async () => {
    const rs = createReadStream('./src/streams/files/fileToRead.txt');
    rs.on('open', () => {
        rs.pipe(process.stdout);
    });
};

await read();
