// manager.js - Parent Process (Manager)

const { fork } = require('child_process');
const _isPrime = require('./isPrime')
const async = require('async')
const os = require('os');

function main() {
    const numCores = os.cpus().length;

    const workers = [];
    let numWorkersFinished = 0;

    const limit = 99999;
    let running = true

    let startTime = Date.now()

    // Create workers
    for (let i = 0; i < numCores; i++) {
        const worker = fork('./worker.js');
        workers.push(worker);

        // Listen for messages from workers
        worker.on('message', (message) => {
            if (message === 'finished') {
                numWorkersFinished++;
                if (numWorkersFinished === numCores) {
                    console.log('All workers have finished their work in ', (Date.now() - startTime) / 1000, ' sec');
                    running = false
                }
            }
        });

        // Start the worker
        worker.send(`{"start":true, "limit": ${limit}}`);
        console.log(`Worker ${worker.pid} started.`);
    }

    console.log(`Created ${numCores} workers.`);


    function sleep(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    async function run(callback) {
        while (running) {
            await sleep(1000)
            console.log('still running...')
        }

        callback()
    }

     run(() => {
        startTime = Date.now()
        let parallels = []
        for (let i = 0; i < numCores; i++) {
            parallels.push((callback) => {
                let a;
                for (let i = 0; i < limit; i++) {
                    a = _isPrime(i)
                }
    
                callback()
            })
        }
        
        console.log('Single worker has started his parallel jobs')
        async.parallel(parallels, (err) => {
            if (err) {
                console.error(err)
                return
            }
    
            console.log('Single worker has finished its work in parallel in ', (Date.now() - startTime) / 1000, ' sec');
    
        })
    })
}

main()