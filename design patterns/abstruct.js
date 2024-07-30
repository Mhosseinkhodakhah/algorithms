// class vehicles{
//     constructor(name , veels){
//         this.name = name;
//         this.veels = veels
//     }

//     Vmaker(){
//         return (`${this.name} with ${this.veels} weels`)
//     }
// }



// const car = new vehicles('car' , 4).Vmaker()
// const bice = new vehicles('byke' , 2).Vmaker()


////////////////////////////! 
//! change it with abstruct factory


class Car {
    constructor () {
        this.name = "Car"
        this.wheels = 4
    }
    turnOn = () => console.log("Chacabúm!!")
}

class Truck {
    constructor () {
        this.name = "Truck"
        this.wheels = 8
    }
    turnOn = () => console.log("RRRRRRRRUUUUUUUUUMMMMMMMMMM!!")
}

class Motorcycle {
    constructor () {
        this.name = "Motorcycle"
        this.wheels = 2
    }
    turnOn = () => console.log("sssssssssssssssssssssssssssssshhhhhhhhhhham!!")
}





class vehicles{
    
    Vmaker(name){
        switch (name){
            case 'car' :
                return new Car()
                break;
            case 'truck':
                return new Truck()
                break;

            case 'Motorcycle':
                return new Motorcycle()
                break;
        }
    }

}
