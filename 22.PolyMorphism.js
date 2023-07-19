class Shape{
  getArea(){
    throw new Error("getArea() must be implemented")
  }
}

class Circle extends Shape{
  constructor(radius){
    super()
    this.radius = radius
  }

  getArea(){
    return Math.PI * this.radius ** 2;
  }
}

class Rectangle extends Shape{
  constructor(length, width){
    super()
    this.length = length
    this.width = width
  }

  getArea(){
    return this.length * this.width
  }
}

const circle = new Circle(40)
console.log(circle.getArea())

const rect = new Rectangle(12,12)
console.log(rect.getArea())