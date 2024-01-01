function validateForm(){
    let x = document.forms["myform"]["fname"].value;
    if(x==""){
        alert("The input field cannot be empty");
        return false;
    }
}