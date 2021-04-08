'use strict';
/*Реализовать класс RangeValidator, со следующими свойствами:
■ from(number);
■ to(number);
Реализовать getter'ы и setter'ы для обоих свойств
Реализовать getter range, который будет возвращать массив с двумя числами диапазона
Реализовать метод validate, который будет принимать число и проверить входит ли число в указанный диапазон.
Возвращает число, если оно входит в диапазон. Выкидывает ошибку, если не входит в диапазон*/


const typeNumberError = new TypeError('wrong type, need a number');
class RangeValidator {
  constructor(from, to) {
    this.from = from;
    this.to = to;
  }
  set from(value) {
    if (typeof value !== 'number') throw typeNumberError;
    this._from = value;
  }
  get from() {
    return this._from;
  }
  set to(value) {
    if (typeof value !== 'number') throw new typeNumberError;
    this._to = value;
  }
  get to() {
    return this._to;
  }
  get getterRange() {
    return [this._from, this._to];
  }
  validate(value) {
    if (typeof value !== 'number') throw new typeNumberError;
    if (value < this.from || value > this.to) {
      throw new RangeError('this value out of range');
    }
    return value;
  }
}

const validator = new RangeValidator(10, 52);

// const test = validator.from;
// validator.to = 55;

