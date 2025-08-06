// https://www.geeksforgeeks.org/javascript/how-to-stop-setinterval-call-in-javascript/
let counter = 0;
let intervalId = setInterval(() => {
    counter++;
    console.log('Counter:', counter);
    if (counter >= 5) {
        clearInterval(intervalId);
        console.log('Interval stopped after 5 iterations.');
    }
}, 1000);

// GLOBALS  - NO WINDOW !!!!

// __dirname  - path to current directory
// __filename - file name
// require    - function to use modules (CommonJS)
// module     - info about current module (file)
// process    - info about env where the program is being executed

console.log(`__dirname: ${__dirname}`);
console.log(`__filename: ${__filename}`);
console.log(`require: ${require}`);
console.log(`module: ${module}`);
console.log(`process: ${process}`);

// Further information about globals: https://nodejs.org/api/globals.html

const ac = new AbortController();

ac.signal.addEventListener('abort', () => console.log('Aborted!'),
                           { once: true });

ac.abort();

console.log(ac.signal.aborted);  // Prints true

let counter2 = 0;
let intervalId2 = setInterval(() => {
    counter2++;
    console.log('Counter2:', counter2);
    if (counter2 >= 15) {
        clearInterval(intervalId2);
        console.log('Interval 2 stopped after 15 iterations.');
    }
}, 1000);

let counter3 = 0;
let intervalId3 = setInterval(() => {
    counter3++;
    console.log('Counter3:', counter3);
    if (counter3 >= 25) {
        clearInterval(intervalId3);
        console.log('Interval 3 stopped after 25 iterations.');
    }
}, 1000);