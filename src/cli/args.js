import {argv} from 'node:process';

const parseArgs = () => {
    const result = []
    argv.forEach((v, i) => {
        if (v.slice(0, 2) === '--') {
            result.push(`${v.slice(2)} is ${argv[i + 1]}`)
        }
    })
    console.log(result.join(', '))
};

parseArgs();
