'use strict';
/*Реализовать класс RangeValidator, со следующими свойствами:
■ from(number);
■ to(number);
Реализовать getter'ы и setter'ы для обоих свойств
Реализовать getter range, который будет возвращать массив с двумя числами диапазона
Реализовать метод validate, который будет принимать число и проверить входит ли число в указанный диапазон.
Возвращает число, если оно входит в диапазон.Выкидывает ошибку, если не входит в диапазон*/

class RangeValidator {
  constructor(from, to) {
    this.from = from;
    this.to = to;
  }
  set from(value) {
    if (typeof value !== 'number') throw new TypeError('wrong type, need a number');
    this.from = value;
  }
  get from() {
    return this.from;
  }
  set to(value) {
    if (typeof value !== 'number') throw new TypeError('wrong type, need a number');
    this.to = value;
  }
  get to() {
    return this.to;
  }
  getterRange() {
    return [this.from, this.to]
  }
  validate(value) {
    if (typeof value !== 'number') throw new TypeError('wrong type, need a number');
    if (value < this.from && value > this.to) {
      throw new RangeError('this value out of range')
    }
    return value;
  }
}