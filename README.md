# Prime Number Calculation using Multiple Workers

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

test console output (limit = 9999999):
```js
 node .\manager.js
Worker 18348 started.
Worker 26244 started.
Worker 3264 started.
Worker 17908 started.
Worker 212 started.
Worker 4108 started.
Worker 144 started.
Worker 3588 started.
Worker 2964 started.
Worker 18348 started to work.
Processing some work...
Worker 22184 started.
Worker 22556 started.
Worker 26036 started.
Created 12 workers.
Worker 212 started to work.
Processing some work...
Worker 3264 started to work.
Processing some work...
Worker 26244 started to work.
Processing some work...
Worker 17908 started to work.
Processing some work...
Worker 4108 started to work.
Processing some work...
Worker 2964 started to work.
Processing some work...
Worker 3588 started to work.
Processing some work...
Worker 144 started to work.
Processing some work...
Worker 22184 started to work.
Processing some work...
Worker 26036 started to work.
Worker 22556 started to work.
Processing some work...
Processing some work...
still running...
still running...
still running...
still running...
still running...
still running...
Worker 26244 finished the work.
Worker 17908 finished the work.
Worker 18348 finished the work.
Worker 4108 finished the work.
Worker 144 finished the work.
Worker 3264 finished the work.
Worker 212 finished the work.
Worker 22184 finished the work.
Worker 22556 finished the work.
Worker 2964 finished the work.
Worker 3588 finished the work.
Worker 26036 finished the work.
All workers have finished their work in  7.032  sec
still running...
Single worker has started his parallel jobs
Single worker has finished its work in parallel in  40.965  sec
```