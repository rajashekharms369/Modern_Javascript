const apiUrl = "https://jsonplaceholder.typicode.com/todos";

const getTodos = () => {
    fetch(apiUrl + "?_limit=5")
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
    });
};

getTodos();

console.log("Hello world");