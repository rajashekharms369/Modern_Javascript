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




/* 
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
*/


/* KeyBoard Events 
const itemInput =  document.getElementById("item-input");

const onKeyPress = (e) => {
    console.log("keypress")
}

const onKeyDown = (e) => {
    if(e.key == " "){
        alert("You pressed SpaceBar");
    }
    console.log("Key pressed Down");
}

const onKeyUp = (e) => {
    console.log("Key pressed up");
}



document.addEventListener("keypress", onKeyPress);

document.addEventListener("keydown", onKeyDown);

document.addEventListener("keyup", onKeyUp);

window.addEventListener("keydown", (e) => {
    const insert = document.getElementById("insert");

    insert.innerHTML = 
    `
    <div class="key">
      ${e.key}
      <small>e.key</small>
    </div>

    <div class="key">
      ${e.keyCode}
      <small>e.keyCode</small>
    </div>

    <div class="key">
      ${e.code}
      <small>e.code</small>
    </div>
    `
})
*/

/* Input Events 
const itemInput = document.getElementById('item-input');

const priorityInput = document.getElementById("priority-input");

const checkBox = document.getElementById("checkbox");

const heading = document.querySelector("h1");

itemInput.addEventListener("input", onImput);

function onImput(e){
    // console.log("Hello world");
    console.log(e.target.value);
}
*/



/* Form Submission 
const form = document.getElementById("item-form");

function onSubmit(e){

    e.preventDefault();

    const item = document.getElementById("item-input").value;

    const priority = document.getElementById("priority-input").value;

    if(item === "" || priority === 0){
        alert("Please Enter the fields");
        return;
    }

    console.log(item, priority);

}

form.addEventListener("submit", onSubmit);
*/

/* Event Bubbling 
const button = document.querySelector("form button");

const div = document.querySelector("form div:nth-child(1)");

div.addEventListener("click", () => {
    alert("Div was clicked");
})

button.addEventListener("click", ()=>{
    alert("The button was clicked");
});
*/

/* Event Delegation and multiple events 
const listItems = document.querySelectorAll("li");

listItems.forEach((item)=>{
    item.addEventListener("click", (e)=>{
        e.target.remove();
    })
})
*/

/* Page Loading and window events 
// window.onload = () => {
//     document.querySelector("h1").innerText = "Hello world";
// }

window.addEventListener("load", ()=>{
    document.querySelector("h1").textContent = "Hello World";
})

window.addEventListener("DOMContentLoaded", ()=>{
    document.querySelector("h1").textContent = "Hello World";
})

window.addEventListener("resize", ()=>{
    document.querySelector("h1").innerText = `Resize to ${window.innerWidth} x ${window.innerHeight}`;
})

window.addEventListener('scroll', ()=>{
    console.log(`Scrolled: ${scrollX} X ${scrollY}`);
})
*/

/* Submit form project 
const itemForm = document.getElementById("item-form");
const itemInput = document.getElementById("item-input");
const itemList = document.getElementById("item-list");

function addItem(e){
    e.preventDefault();
    if(itemInput.value===""){
        alert("Please add an item");
        return;
    }

    console.log("Success");
}

itemForm.addEventListener("submit", addItem);


function removeItem(e){
    if(e.target.parentElement.classList.contains("remove-item")){
        e.target.parentElement.parentElement.remove();
        console.log("click");
    }
}

document.addEventListener("click", removeItem);
console.log("Hello world");

*/
