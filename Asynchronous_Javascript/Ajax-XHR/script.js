const xhr = new XMLHttpRequest();

xhr.open("GET", "https://api.github.com/users/bradtraversy/repos");

// readystate has 5 possible values
// 0. Request Not Initialised
// 1. Server Connection established
// 2. request recieved
// 3. processing request
// 4. request finished and response is ready
xhr.onreadystatechange = function(){
    if(this.readyState==4 && this.status == 200){
        const data = JSON.parse(this.responseText);
        data.forEach(element => {
            const li = document.createElement("li");

            li.innerHTML = `<strnog>${element.title}</strong> - ${element.year}`;
            document.querySelector("#results").appendChild(li);
        });
    }
}

xhr.send();