const promise = new Promise((resolve, reject) => {
    setTimeout(()=>{
        console.log("Async task completed");
        resolve();
    }, 1000);
})

promise.then(()=>{
    console.log("Promise consumed");
})

console.log("Hello from global scope");