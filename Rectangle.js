class Rectangle {
    width;
    height;

    constructor(width, height, area, perimeter) {
        this.width = width;
        this.height = height;
    }
    setWidth(width){
        this.width=width;
    }
    getWidth(){
        return this.width;
    }
    setHeight(height){
        this.height=height;
    }
    getHeight(){
        return this.height;
    }
    setArea(area){
        return  this.height*this.width
    }
    getArea(){
        return this.setArea()
    }
    setPerimeter(perimeter){
        return (this.height+this.width)*2
    }
    getPerimeter(){
        return this.setPerimeter()
    }
}

