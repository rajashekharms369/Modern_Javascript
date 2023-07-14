// document.querySelector("button").addEventListener("click", toggle);

// function toggle(e){
//     e.target.classList.toggle("danger");
// }

const post = [
    {title: 'post-one', body: 'This is post one'},
    {title: 'Post-two', body: 'This is post two'}
];

function getPosts(){
    setTimeout(()=>{
        post.forEach(function(post){
            const div = document.createElement('div');
            div.innerHTML = `<strong>${post.title}</strong>-${post.body}`;
            document.querySelector('#post').appendChild(div);
        });
    },1000);
}

getPosts();

const jsonString = '{"name":"John Doe", "age":30, "city":"New York"}';