'use strict';

class RangeValidator {
  constructor(from, to) {
    this.from = from;
    this.to = to;
  }
  set from(number) {
    if (typeof number !== 'number') throw new TypeError();
    this.from = number;
  }
  get from() {
    return this.from;
  }
}