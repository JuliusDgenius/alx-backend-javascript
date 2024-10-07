import Car from './10-car';

export default class EvCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color, range);

    this._brand = brand;
    this._motor = motor;
    this._color = color;
    this._range = range;
  }

  cloneCar() {
    return new Car(this._brand, this._motor, this._color);
  }
}
