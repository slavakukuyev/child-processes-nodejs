// manager.js - Parent Process (Manager)

const { fork } = require('child_process');
const os = require('os');

const numCores = os.cpus().length;

const workers = [];
let numWorkersFinished = 0;

// Create workers
for (let i = 0; i < numCores; i++) {
  const worker = fork('./worker.js');
  workers.push(worker);

  // Listen for messages from workers
  worker.on('message', (message) => {
    if (message === 'finished') {
      numWorkersFinished++;
      if (numWorkersFinished === numCores) {
        console.log('All workers have finished their work.');
      }
    }
  });

  // Start the worker
  worker.send('start');
  console.log(`Worker ${worker.pid} started.`);
}

console.log(`Created ${numCores} workers.`);
