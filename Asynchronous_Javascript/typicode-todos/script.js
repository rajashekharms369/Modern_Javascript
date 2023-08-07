// const apiUrl = "https://jsonplaceholder.typicode.com/todos";

// const getTodos = () => {
//     fetch(apiUrl + "?_limit=5")
//     .then((res) => res.json())
//     .then((data) => {
//         console.log(data);
//     });
// };

// getTodos();

// console.log("Hello world");

const apiUrl = "https://jsonplaceholder.typicode.com/todos";

const getTodos = () => {
    fetch(apiUrl+"?_limit=5")
    .then((res)=>res.json())
    .then((data)=>{
        data.forEach((todo) => addToDoDom(todo));
    });
};

const addToDoDom = (todo) => {
    const div = document.createElement("div");
    
    div.appendChild(document.createTextNode(todo.title));

    div.classList.add('todo');

    div.setAttribute("data-id", todo.id);

    if(todo.completed){
        div.classList.add("done");
    }

    document.getElementById("todo-list").appendChild(div);
};

const toggleCompleted = (e) => {
    if(e.target.classList.contains("todo")){
        e.target.classList.toggle("done");
    }
};

const init = () => {
    document.addEventListener("DOMContentLoaded", getTodos);
    document.querySelector("#todo-form").addEventListener("submit",createTodo);
    document.querySelector("#todo-list").addEventListener("click", toggleCompleted);
}

const createTodo = (e) => {
    e.preventDefault();
    const newTodo = {
        title: e.target.firstElementChild.value,
        completed: false
    }

    fetch(apiUrl, {
        method: "POST",
        body: JSON.stringify(newTodo),
        headers:{
            "Content-type":"application/json"
        }
    })
    .then(res => res.json())
    .then(data => addToDoDom(data))
};

// getTodos();
init();

console.log("hello world");