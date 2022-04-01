"use strict";
/*coding  challenge 
1.Use a ES6 CLASSES to implement a car.A
car has a make and a speed property.The speed pro-
perty is the current speed of the car in km/h;
2.Add a getter called "speedUS" which return the current speed
in mi/h (divide by 1.6)
3. Add a setter called "speedUS" which set the current speed in mi/h(
    but convert it to km/h before storing the value(by multiplying the input by 1.6)
)
4.create a new car and experiment with accerate and brake methods, and with a  getter
 and a setter

 DATA CAR:"FORD"  going at 120km/h
*/

class Car{
    constructor(make,speed){
        this.make = make;
        this.speed = speed;
    }
    accelerate(){
        this.speed+=10;
        console.log(`${this.make} is going at ${this.speed}km/h`);
    }
    brake(){
        this.speed-=5;
        console.log(`${this.make} is going at ${this.speed}km/h`);
    }
    get speedUS(){
        console.log(`${this.make} is going at ${this.speed/1.6}m/h`);
        return this.speed/1.6;
        
    }
    set speedUS(speed){
        console.log(`${this.make} is going at ${this.speed/1.6}km/h`);
        this.speed = speed*1.6;
    }

}
const ford = new Car('FORD',120);
ford.accelerate();
ford.accelerate();
ford.brake();
ford.brake();
ford.speedUS = 81.25;
console.log(ford);

