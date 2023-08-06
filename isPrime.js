// Please use this function responsibly and avoid running it for extended periods or in production environments. 
// It is essential to consider the potential impact on system performance before running resource-intensive functions.
module.exports =  num => Array.from({ length: Math.sqrt(num) - 1 }, (_, i) => i + 2).every(n => num % n !== 0);