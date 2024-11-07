//problem - 7
class Car {
    make: string;
    model: string;
    year: number;
  
    constructor(make: string, model: string, year: number) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  
    getCarAge(): number {
      const currentYear = new Date().getFullYear();
      return currentYear - this.year;
    }
  }
  
  const car = new Car("Honda", "Civic", 2018);
  const result7 : number = car.getCarAge();
  console.log(result7);