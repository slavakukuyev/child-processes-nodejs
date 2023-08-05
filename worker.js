// worker.js - Child Process (Worker)

// Function to simulate some work
function doWork() {
  console.log('Processing some work...');
  // Simulate work by waiting for a random time
  const randomTime = Math.floor(Math.random() * 3000) + 1000;
  return new Promise((resolve) => setTimeout(resolve, randomTime));
}

// Receive messages from the parent process
process.on('message', async (message) => {
  if (message === 'start') {
    console.log(`Worker ${process.pid} started to work.`);
    await doWork();
    // Send a message to the parent process to indicate completion
    process.send('finished');
    console.log(`Worker ${process.pid} finished the work.`);
    process.exit();
  }
});
