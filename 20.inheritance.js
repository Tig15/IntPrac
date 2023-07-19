class Vehicle {
    constructor(brand){
        this.brand = brand
    }

    drive(){
        console.log(`${this.brand} is driving...`)
    }
}

class Car extends Vehicle{
    constructor(brand, model){
        super(brand);
        this.model = model
    }

    honk(){
        console.log(`${this.model} of ${this.brand} is way noisy`)
    }
}

const mYcar = new Car('Audi', 'SU00')
mYcar.drive()
mYcar.honk()