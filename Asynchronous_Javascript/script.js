setTimeout(changeText,2000);

function changeText(){
    document.querySelector("h1").textContent = "Hello from callback";
}

console.log("This is a global scope");