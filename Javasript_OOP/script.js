class Rectangle{
    constructor(name, width, height){
        this.name = name;
        this.width = width;
        this.height = height;
    }

    area(){
        return this.height*this.width;
    }
}

const rect = new Rectangle("Rect 1", 2, 3);
console.log(rect.area());