import {Transform} from 'node:stream'

const transform = async () => {
    process.stdin.pipe(new Transform({
            transform(chunk, encoding, callback) {
                const data = chunk.toString().trim().split("").reverse().join("")
                this.push(data+'\n\n')
                callback();
            }
        })
    ).pipe(process.stdout)
};

await transform();
