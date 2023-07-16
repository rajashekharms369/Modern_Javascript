const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("joke-btn");

const generateJoke = function() {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api.chucknorris.io/jokes/random");

    xhr.onreadystatechange = function(){
        if(this.readyState==4){
            if(this.status===200){
                jokeEl.innerHTML = JSON.parse(this.responseText).value;
            }
            else{
                alert("Some error occured and data could not be fetched.");
            }   
        }
        console.log("Hello world");
    }
    xhr.send();
}

jokeBtn.addEventListener("click", generateJoke);