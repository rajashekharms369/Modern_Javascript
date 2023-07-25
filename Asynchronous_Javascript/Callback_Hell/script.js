const promise = new Promise((resolve, reject)=>{
    setTimeout(() => {
        let error = false;
        if(!error){
            resolve({name:"John", age:33})
        }else{
            reject("Error: Something went wrong");
        }
    }, 1000);
});

promise
    .then((user)=>{
        console.log(user);
    })
    .catch((error)=>console.log(error));
    console.log("Hello world");
    console.log("Hello world");
    console.log("js update");
    console.log("js update");
    console.log("js update");