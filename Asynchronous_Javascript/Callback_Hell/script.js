// const promise = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         let error = false;
//         if(!error){
//             resolve({name:"John", age:33})
//         }else{
//             reject("Error: Something went wrong");
//         }
//     }, 1000);
// });

// promise
//     .then((user)=>{
//         console.log(user);
//     })
//     .then((name)=>{
//         console.log(name);
//         return name.length;
//     })
//     .then((nameLength)=>{
//         console.log(nameLength);
//     })
//     .catch((error)=>console.log(error))
//     .then(()=>console.log("This will run no matter what"));

// function resolveAfter2Seconds(){
//     return new Promise(resolve=>{
//         setTimeout(()=>{
//             resolve("resolved");
//         },2000);
//     });
// }

// async function asyncCall(){
//     console.log("calling");
//     const result = await resolveAfter2Seconds();
//     console.log(result);
// }

// asyncCall();

// Fetching a json file
fetch("./movies.json").then((response)=>{
    return response.json();
}).then((data)=>{
    console.log(data);
});

// Fetching a text file
fetch("./test.txt")
    .then((response)=>response.text())
    .then((data)=>console.log(data));

// fetching data from github

const data = fetch("https://api.github.com/users/rajashekharms369/repos")
    .then((response)=>response.json())
    .then((data)=>console.log(data));

console.log("Hello worold");