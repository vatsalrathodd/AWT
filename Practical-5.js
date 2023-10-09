class Vehicle {
    constructor(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  
    displayDetails() {
      console.log(`Vehicle: ${this.year} ${this.make} ${this.model}`);
    }
  
    calculateMileage(distance, fuel) {
      const mileage = distance / fuel;
      console.log(`Mileage: ${mileage} miles per liter`);
    }
  }
  
  class Motorcycle extends Vehicle {
    constructor(make, model, year, engineDisplacement) {
      super(make, model, year);
      this.engineDisplacement = engineDisplacement;
    }
  
    displayDetails() {
      super.displayDetails();
      console.log(`Engine Displacement: ${this.engineDisplacement} cc`);
    }
  }
  
  class Car extends Vehicle {
    constructor(make, model, year, doors) {
      super(make, model, year);
      this.doors = doors;
    }
  
    displayDetails() {
      super.displayDetails();
      console.log(`Doors: ${this.doors}`);
    }
  }
  
  const motorcycle = new Motorcycle("Suzuki", "2004", 400);
  motorcycle.displayDetails();
  motorcycle.calculateMileage(200, 10);
  
  const car = new Car("Hyundai", "2020", 2, 3);
  car.displayDetails();
  car.calculateMileage(350, 14);
  