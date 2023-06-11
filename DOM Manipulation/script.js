// Day 1;
// Insert Element, Text through Javascript
//--------------------------------
// function insertElement(){
    
//     const filter = document.querySelector(".filter");

//     const h1 = document.createElement("h1");
//     h1.textContent = "Insert Adjacent element";

//     filter.insertAdjacentElement("afterbegin", h1);

// }

// insertElement();

// ---------------------------------

/*
-----------------------------------
 # Inserting text through Javscript
function insertText(){
    const item = document.querySelector("li:first-child");
    item.insertAdjacentText("beforebegin", "insertText");  
}

insertText();
*/


/*
------------------------------------
#InsertAdjecentHTML method
function insertHTML(){
    const clearBTN = document.querySelector("#clear");
     console.log(clearBTN);
     clearBTN.insertAdjacentHTML("afterbegin", "<h1>Inner HTML</h1>")
}
insertHTML();
*/

/* 
// Custom InsertAfter function
function insertAfter(newEl, existingEl){
    console.log(existingEl.parentElement.insertBefore(newEl, existingEl.nextSibling));
}

const li = document.createElement("li");
li.textContent = "Insert me after";
const firstItem = document.querySelector("li:first-child");

insertAfter(li, firstItem);
*/

/*
function replaceFirstItem(){
    const firstItem = document.querySelector("li:first-child");

    const li = document.createElement('li');
    li.textContent = "Replaced first";

    firstItem.replaceWith(li);
}

function replaceSecondItem(){
    const secondItem = document.querySelector("li:nth-child(2)");

    const li = document.createElement('li');
    li.textContent = "Replaced Second";

    secondItem.replaceWith(li);
}

function replaceAllItems(){
    const lis = document.querySelectorAll("li");
    lis.forEach((item, index)=>{
        item.innerHTML = "Replace All";
    })
}

replaceFirstItem();
replaceSecondItem();
replaceAllItems();

 */



/* DOM removing elements


function removeClearButton(){
    document.querySelector("#clear").remove();
}

function removeFirstItem(){
    const ul = document.querySelector("ul");

    const li = document.querySelector("li:first-child");

    ul.removeChild(li);
}
removeClearButton();
removeFirstItem();
 */


/* Styling css through Javascript
const text = document.querySelector('p');
const itemList = document.querySelector(".item-list");

const items =  itemList.querySelectorAll("li");

document.querySelector("button").onclick = run;

function run(){
    console.log(1);
}
 */

