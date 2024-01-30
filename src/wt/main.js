import os from 'os';
import {Worker} from 'node:worker_threads';

const CORES = os.cpus().length
const PATH = './src/wt/worker.js'
const START_VALUE = 10

const result = []

const createWorker = async (n) => {
    return new Promise((resolve, reject) => {
        const worker = new Worker(PATH)
        worker.on('message', (f) => {
            result.push({status: 'resolved', data: f});
        });
        worker.on('exit', (code) => {
            if (code !== 0) {
                result.push({status: 'error', data: null})
            }
            resolve();
        });
        worker.postMessage(n)
    });
}

const performCalculations = async () => {
    let workers = [];
    for (let i = 0; i < CORES; i++) {
        workers.push(await createWorker(START_VALUE + i))
    }
    await Promise.all(workers)
    result.forEach(r => console.log(r))
};

await performCalculations();
