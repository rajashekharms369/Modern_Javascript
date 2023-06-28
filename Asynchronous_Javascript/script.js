function changeText(){
    document.querySelector("h1").textContent = "hello form callback";
}

const timerId = setTimeout(changeText, 4000);

timerId();