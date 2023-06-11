/*Click Event 
const clearBtn = document.querySelector("#clear");
// clearBtn.onclick = function(){
//     alert("Hello world");
//     console.log("Hello world");
// }

clearBtn.addEventListener("click",()=>{
    const list = document.querySelector(".items");
    const lis = list.querySelectorAll("li");
    list.remove(lis);
})
*/



// Double Click Event
/* 
const logo = document.querySelector("img");

const onClick = () => {
    if(document.body.style.backgroundColor!='purple'){
        document.body.style.backgroundColor="purple"
        document.body.style.color="white";
    }
    else{
        document.body.style.backgroundColor="white"
        document.body.style.color="black";
    }
}


const onDoubleClick = () => {
    console.log("Double Click Event");
}

const onMouseDown = () => {
    console.log("The mouse is down");
}

const onMouseEnter = () => {
    console.log("Mouse Enter")
    document.body.style.backgroundColor = "green";
}

logo.addEventListener("click", onClick);

logo.addEventListener("dblclick", onDoubleClick);

logo.addEventListener("mousedown", onMouseDown);

logo.addEventListener("mouseenter", onMouseEnter);

*/

const logo = document.querySelector("img");

function onClick(e){
        console.log(e.timeStamp);
        e.target.style.backgroundColor = "green";
}

logo.addEventListener("click", onClick);

document.addEventListener("click", function(e){
    e.preventDefault();
    console.log("A link was clicked");
})