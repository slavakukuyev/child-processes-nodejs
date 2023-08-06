// worker.js - Child Process (Worker)

const _isPrime = require('./isPrime')


// Function to simulate some work
function doWork(limit) {
  console.log('Processing some work...');

  let a;
  for (let i = 0; i < limit; i++) {
    a = _isPrime(i)
  }

  return Promise.resolve()
}

// Receive messages from the parent process
process.on('message', async (message) => {

    if (!message || typeof message != "string") {
        return
    }

    try {
        message = JSON.parse(message)
    } catch(e) {
        console.error(e)
        return 
    }

    if (message.start === true && typeof message.limit == "number") {
        console.log(`Worker ${process.pid} started to work.`);
        await doWork(message.limit);
        // Send a message to the parent process to indicate completion
        process.send('finished');
        console.log(`Worker ${process.pid} finished the work.`);
        process.exit();
    }
});


