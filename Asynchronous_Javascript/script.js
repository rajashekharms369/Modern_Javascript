setTimeout(changeText,2000);

function changeText(){
    document.querySelector("#cancel").textContent = "Hello from callback";
}

const timerId = setTimeout(changeText, 3000);

document.querySelector("#cancel").addEventListener("click", ()=>{
    console.log(timerId);
    clearTimeout(timerId);
    console.log("Timer Cancelled");
})

console.log("This is a global scope");