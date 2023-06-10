function insertElement(){
    
    const filter = document.querySelector(".filter");

    const h1 = document.createElement("h1");
    h1.textContent = "Insert Adjacent element";

    filter.insertAdjacentElement("afterbegin", h1);

}

insertElement();