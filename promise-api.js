// // Promise.resolve() => returns a promise that is already resolved

// // const p = Promise.resolve({ id : 1 });
// const p = Promise.reject(new Error('reason for rejection'));
// // p.then(result => console.log(result));
// p.catch(error => console.log(error));

const p1 = new Promise((resolve) => {
    setTimeout(() => {
        console.log('Async operation 1...');
        resolve(1);
        // reject(new Error('because something failed.'));
    }, 2000);
});

const p2 = new Promise((resolve) => {
    setTimeout(() => {
        console.log('Async operation 2...');
        resolve(2);
    }, 2000);
});


// Executing the promise calls in parallel.
// Promise.all([p1, p2])
//     .then(result => console.log(result))
//     .catch(err => console.log('Error', err.message));

Promise.race([p1, p2])
    .then(result => console.log(result))
    .catch(err => console.log('Error', err.message));
