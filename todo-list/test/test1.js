class Polygon {
    constructor(height,width){
        this.name = 'har';
        this.height = height;
        this.width = width;
    }
    sayName(){
        console.log('hi,I am '+this.name + '.' )
    }
}

class Square extends Polygon {
    constructor(length){
        this.height;
        super(length,length);
    }
}