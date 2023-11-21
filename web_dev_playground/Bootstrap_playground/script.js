document.addEventListener("DOMContentLoaded", function () {
    const progressBar = document.getElementById("pb");

    let i = 0;
    const interval = setInterval(function () {
        progressBar.style.width = i + "%";
        i+=20;

        if (i > 100) {
            clearInterval(interval);
        }
    }, 1000);
});
console.log("Hello world");
console.log("Hello world");