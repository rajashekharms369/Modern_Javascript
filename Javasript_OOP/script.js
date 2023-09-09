class Shape{
    constructor(name){
        this.name = name;
    }

    logName(){
        console.log(this.name);
    }
}

class Rectangle extends Shape{
    constructor(name, width, height){
        super(name);
        this.width = width;
        this.height = height;
    }
}

const rect = new Rectangle("Rect 1", 20, 20);
console.log("Hello world");
rect.logName();
console.log("Good morning");