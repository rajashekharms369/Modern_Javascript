// function Player(name) {
//   this.name = name;
//   this.lvl = 1;
//   this.points = 0;
// }

// Player.prototype.gainXp = function(xp){
//     this.points += xp;
//     if(this.points>=10){
//         this.lvl++;
//         this.points -= 10;
//     }
// }

// Player.prototype.describe = function(){
//     return `${this.name} is in level ${this.lvl} with ${this.points} experience points`    
// };

// const player1 = new Player("Bob");
// const player2 = new Player("Alice");

// player1.gainXp(4);
// player2.gainXp(7);
// player1.gainXp(5);
// player2.gainXp(1);
// player1.gainXp(7);
// player2.gainXp(9);
// player1.gainXp(5);
// player2.gainXp(2);

// console.log(player1.describe());
// console.log(player2.describe());


class Wallet{
    constructor(){
        this._balance = 0;
    }

    deposit(amount){
        this._balance += amount;
    }

    withdraw(amount){
        this._balance -= amount;
    }

    get balance(){
        return this._balance;
    }
}

const wallet = new Wallet();
wallet.deposit(300);
wallet.withdraw(299);
console.log(wallet.balance);
console.log("Hello world");
Math.PI = 44;
console.log(Math.PI);

// [[Configurable]] - If 'true', the property can be deleted and these attributes can be modified, otherwise not
// [[Enumerable]] - If 'true', the property will be returned in a 'for...in' loop, ohterwise not.
// [[Writeable]] - If 'true', the value of the property can be changed, otherwise not.
// [[Value]] - It represents the value of the property.


// let desc = Object.getOwnPropertyDescriptor(Math, "PI");
// console.log(desc);

// const rect = {
//     name:"Rectangle 1",
//     width:"120",
//     height:"10"
// }


// Object.defineProperty(rect, "name",{
//     writable:false,
//     configurable:false,
//     enumerable:false
// });

// const desc1 = Object.getOwnPropertyDescriptor(rect, "name");

// console.log(desc1);

// rect.name = "Raj";

// console.log(rect);

// for(let [key, value] of Object.entries(rect)){
//     console.log(key+" "+value);
// }



// Sealing: Prevents properties from adding or removing. Can still be changed.
// Freezing: Prevents properties from being added, removed or changed.

const rectObj = {
    name:"Rectangle 1",
    width:10,
    height:10
}

Object.seal(rectObj);

let desc = Object.getOwnPropertyDescriptor(rectObj);

rectObj.color = "red";

delete rectObj.width;

console.log(rectObj);


const circleObj = {
    name: "Circle 1",
    radius: 30
}

Object.freeze(circleObj);

