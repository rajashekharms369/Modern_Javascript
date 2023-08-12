// fetch("http://httpstat.us/200")
//     .then((response)=>{
//         return response;
//     })
//     .then(()=>{
//         console.log("Success");
//     });


// fetch("http://httpstat.us/400")
//     .then((response)=>{
//         if(!response.ok){
//             throw new Error("Request failed");
//         }
//         return response;
//     })
//     .then(()=>{
//         console.log("Success");
//     })
//     .catch((error) =>{
//         console.log(error)
//     });

// const promise = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve({name:"John", age:20});
//     },1000);
// });


// async function getPromise(){
//     const response = await promise;
//     console.log(response);
// }

// getPromise();


// async function getUsers(){
//     const res = await fetch("https://jsonplaceholder.typicode.com/users");

//     const data = await res.json();
//     console.log(data);
// }

// getUsers();

// try{
//     console.log(x);
// } catch(error){
//     console.log(error);
// }


const getUsers = async () =>{
    
    try{
        // const response = await fetch("https://jsonplaceholder.typicode.com/users");
        // const data = await response.json();
        const response =  await fetch("https://httpstat.us/500");

        if(!response.ok){
            throw new Error("Request failed");
        }

        const data = await response.text();
        
        console.log(data);
    }
    catch(error){
        console.log(error);
    }
};

getUsers();
console.log("Hello world");