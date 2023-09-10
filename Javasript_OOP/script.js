// class App{
//     constructor(){
//         this.serverName = "localhost";
//         document
//             .querySelector("button")
//             .addEventListener("click", this.getServerName.bind(this));
//     }

//     getServerName(){
//         console.log(this.serverName);
//     }
// }

// const app = new App();


// class Person{
//     constructor(firstName, lastName){
//         this._firstName = firstName;
//         this._lastName = lastName;
//     }

//     get firstName(){
//         console.log(this._firstName);
//     }

//     get lastName(){
//         console.log(this._lastName);
//     }
// }

// const person1 = new Person("John", "Doe");
// person1.firstName;
// person1.lastName;


function Person(firstName, lastName){
    this._firstName = firstName;
    this._lastName = lastName;

    Object.defineProperty(this, "firstName", {
        get: function(){
            return this._firstName;
        },
        set: function(value){
            this._firstName = value;
        },
    });

    Object.defineProperty(this, "lastName",{
        get: function(){
            return this._lastName;
        },
        set: function(value){
            this._lastName = value;
        },
    });
}


// Person.prototype.capitalizeFirst = function(value){
//     return value.charAt(0).toUpperCase()+value.slice(1);
// }
// const person1 = new Person("John", "Doe");

// console.log(person1.firstName+" "+person1.lastName);

// function Rectangle(name){
//     this.name = name;
// }

// const rect1 = new Rectangle("Rectangle 1");

// console.log(rect1);


// function Rectangle(name, width, height){
//     this.name = name;
//     this.width = width;
//     this.height = height;
//     this.area = function(){
//         return this.width*this.height;
//     }
// }

// const rect1 = new Rectangle("Rect 1", 10, 10);

// const rect2 = new Rectangle("Rect 2", 20, 10);

// // console.log(rect1["width"]);

// rect1.perimeter = () => {
//     return 2*(rect1.width + rect1.height);  
// }
// // console.log(rect1);
// console.log(rect1.perimeter());

// delete rect1.perimeter;

// console.log(rect1);


// // Checking for the property
// console.log(rect1.hasOwnProperty("width"));
// console.log(rect1.hasOwnProperty("color"));

// // Getting all the keys
// console.log(Object.keys(rect1));

// // Getting all the values of the object
// console.log(Object.values(rect1));

// // Getting all the entries
// console.log(Object.entries(rect1));

// for(let [key, value] of Object.entries(rect1)){
//     if(typeof value != "function"){
//         console.log(`${key} - ${value}`);
//     }
// }



// Prototype
