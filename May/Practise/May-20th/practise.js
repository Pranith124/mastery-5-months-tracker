

class Rectangle{
    constructor(width, height, color){
        this.width=width;
        this.height=height;
        this.color=color;
    }

    area(){
        let area=this.width*this.height;
        return area;
    }

    perimeter(){
        return 2*(this.width + this.height);
    }

}


const rect=new Rectangle(200,100,"red");

console.log(rect.area());
console.log(rect.perimeter());


const date = new Date();
console.log(date);


class shape{
    constructor(width,color,height){
        this.height=height
        this.width=width;
        this.color=color;
    }

    Area(){
        return this.width*this.height;
    }

    Perimeter(){
        return 2*(this.width+this.height);
    }
}


class square extends shape{
    constructor(side){
        this.side=side;
    }

    Area(){
        return side*this.side;
    }

}