﻿# Prime Number Calculation using Multiple Workers

This Node.js application demonstrates the use of multiple workers to calculate prime numbers up to a specified limit. The parent process, `manager.js`, manages the worker processes to efficiently utilize available CPU cores.

## How it works

1. The `manager.js` script first determines the number of CPU cores available on the system using `os.cpus().length`.
2. It then creates worker processes using the `fork()` method from the `child_process` module, one for each CPU core. These workers are managed in an array.
3. Each worker runs the `worker.js` script, which is responsible for calculating prime numbers within a given range.
4. The manager process sends a message to each worker to start its task, passing the specified `limit` value for calculating prime numbers.
5. As each worker completes its task, it sends a message back to the manager process with the message `'finished'`.
6. The manager keeps track of the number of finished workers. Once all workers have finished their tasks, the manager prints the time taken for all workers to complete their work.
7. After the worker processes have completed their individual tasks, the manager process starts a single worker to perform the prime number calculation using `async.parallel()`. This worker runs in parallel, making use of the full single core's processing power.
8. The manager then logs the time taken for the single worker to complete its parallel jobs.

## How to use

1. Clone the repository and navigate to the project directory.
2. Install the dependencies using `npm install`.
3. Run the application using `node manager.js`.
4. The manager process will create worker processes to calculate prime numbers, utilizing multiple CPU cores.
5. Once all workers finish their tasks, the manager will print the time taken for all workers to complete their work.
6. After that, a single worker will run parallel (length of CPU cores) tasks for single CPU core, and the manager will log the time taken for the single worker to complete its parallel jobs.

Please note that this application is for demonstration and educational purposes. It is designed to simulate the use of multiple workers for CPU-intensive tasks like prime number calculation.

test console output:
```js
 node .\manager.js
Worker 38036 started.
Worker 38088 started.
Worker 20776 started.
Worker 3628 started.
Worker 37564 started.
Worker 21396 started.
Worker 38184 started.
Worker 42640 started.
Worker 9368 started.
Worker 36680 started.
Worker 38036 started to work.
Processing some work...
Worker 44028 started.
Worker 38088 started to work.
Processing some work...
Worker 39108 started.

Created 12 workers. 

Worker 37564 started to work.
Processing some work...
Worker 20776 started to work.
Processing some work...
Worker 3628 started to work.
Worker 21396 started to work.
Processing some work...
Worker 42640 started to work.
Processing some work...
Processing some work...
Worker 38184 started to work.
Processing some work...
Worker 9368 started to work.
Processing some work...
Worker 36680 started to work.
Processing some work...
Worker 44028 started to work.
Worker 39108 started to work.
Processing some work...
Processing some work...
still running...
Worker 38036 finished the work.
Worker 38088 finished the work.
Worker 3628 finished the work.
Worker 36680 finished the work.
Worker 21396 finished the work.
Worker 20776 finished the work.
Worker 44028 finished the work.
Worker 39108 finished the work.
Worker 38184 finished the work.
Worker 37564 finished the work.
Worker 42640 finished the work.
Worker 9368 finished the work.
All workers have finished their work in  1.91  sec
still running...

Single worker has started his parallel jobs
Single worker has finished its work in parallel in  7.804  sec
```

![image](https://github.com/slavakukuyev/child-processes-nodejs/assets/5977522/1b81697a-85a9-4d65-bee6-2b547129ed25)
