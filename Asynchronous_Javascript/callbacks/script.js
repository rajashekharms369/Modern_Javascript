document.querySelector("button").addEventListener("click", toggle);

function toggle(e){
    e.target.classList.toggle("danger");
}