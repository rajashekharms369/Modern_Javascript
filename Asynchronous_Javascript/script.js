const intervalId = setInterval(() => {
    console.log(Date.now());
}, 1000);

function stopChange(){
    clearInterval(intervalId);
}

document.getElementById("stop").addEventListener("click", stopChange);
console.log("hello world");