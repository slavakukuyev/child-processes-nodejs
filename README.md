# child-processes-nodejs
This repository contains Node.js code showcasing the implementation of a manager-worker pattern using child processes to utilize all CPU cores. The manager.js script creates multiple worker processes, each simulating some work in the worker.js script. Messages are exchanged via IPC to validate when workers start and finish their tasks. This approach maximizes CPU utilization, making it suitable for compute-intensive tasks.

output:
```js
 node .\manager.js
Worker 5336 started.
Worker 38312 started.
Worker 40652 started.
Worker 21164 started.
Worker 39832 started.
Worker 40888 started.
Worker 22408 started.
Worker 45544 started.
Worker 45000 started.
Worker 36688 started.
Worker 44684 started.
Worker 38312 started to work.
Processing some work...
Worker 44100 started.
Created 12 workers.
Worker 5336 started to work.
Processing some work...
Worker 40652 started to work.
Processing some work...
Worker 21164 started to work.
Processing some work...
Worker 40888 started to work.
Processing some work...
Worker 22408 started to work.
Worker 39832 started to work.
Processing some work...
Processing some work...
Worker 45544 started to work.
Processing some work...
Worker 45000 started to work.
Processing some work...
Worker 36688 started to work.
Processing some work...
Worker 44684 started to work.
Processing some work...
Worker 44100 started to work.
Processing some work...
Worker 22408 finished the work.
Worker 40888 finished the work.
Worker 38312 finished the work.
Worker 45000 finished the work.
Worker 45544 finished the work.
Worker 40652 finished the work.
Worker 21164 finished the work.
Worker 36688 finished the work.
Worker 39832 finished the work.
Worker 44684 finished the work.
Worker 44100 finished the work.
Worker 5336 finished the work.
All workers have finished their work.
```
