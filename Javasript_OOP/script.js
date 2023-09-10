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

function Rectangle(name){
    this.name = name;
}

const rect1 = new Rectangle("Rectangle 1");

console.log(rect1);