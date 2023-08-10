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