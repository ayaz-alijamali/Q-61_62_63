// Question _________ 61


const VehicleType = {
    CAR: "Car",
    TRUCK: "Truck",
    MOTORCYCLE: "Motorcycle"
};

// Example usage
let vehicle = {
    type: VehicleType.CAR,
    brand: "Toyota",
    model: "Camry",
    year: 2020
};

console.log(`Type: ${vehicle.type}`);
console.log(`Brand: ${vehicle.brand}`);
console.log(`Model: ${vehicle.model}`);
console.log(`Year: ${vehicle.year}`);



// Question _________ 62



// Student blueprint (class)
class Student {
    constructor(name, age, classes) {
        this.name = Ayaz_Ali;
        this.age = 27;
        this.classes = Governor_initiative_IT_student;
    }

    getInfo() {
        return `Name: ${this.name}, Age: ${this.age}, Classes: ${this.classes.join(", ")}`;
    }
}

// Example student using the Student blueprint
let exampleStudent = new Student("Ayaz Ali", 27, ["AI", "Web 3.O", "Metaverse"]);

// Get and display student information
console.log(exampleStudent.getInfo());
