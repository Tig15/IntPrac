// Animal Class...
class Animal{
    constructor(name, species){
        this.name = name;
        this.species = species;
    }

    eat(){
        console.log(`${this.name} is eating`)
    }

    sleep(){
        console.log(`${this.name} is sleeping`)
    }
}

const lion = new Animal("Simba", "Lion")
lion.eat()
lion.sleep()


// Object...

const car = {
    brand:"BMW",
    model:"XS 30",
    year:2022,

    startEngine(){
        console.log('Engine Started')
    },

    stopEngine(){
        console.log('Engine Stopped')
    }
}

console.log(car.brand)
car.startEngine()