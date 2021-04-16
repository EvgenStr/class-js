"use strict";

class Stack {
  constructor(maxSize = 10, ...args) {
    this._maxSize = maxSize;
    this._size = 0;
    this.push(...args);
  }

  get isEmpty() {
    return this._size === 0;
  }

  get size() {
    return this._size;
  }

  push(...args) {
    for (const item of args) {
      if (this.size >= this._maxSize) {
        throw new RangeError("Stack overflow");
      }
      this[`_${this.size}`] = item;
      this._size++;
    }
    return this.size;
  }

  pop() {
    if (this.isEmpty) {
      return;
    }
    const lastItem = this[`_${this.size - 1}`];
    delete this[`_${this.size - 1}`];
    this._size--;
    return lastItem;
  }

  pip() {
    return this[`_${this.size - 1}`];
  }
}
// const stack = new Stack();
// const stack = new Stack(5, 'text', 6, 2, 2, 1, 6)

const options = {
  braces: { '(': ')', '[': ']', '{': '}', },
  strict: false,
}

function checkSequence(string, options) {

  const stack = new Stack(string.length);
  const braces = options.braces;
  const closeBraces = Object.values(braces)

  for (const symbol of string) {
    if (braces[symbol]) {
      stack.push(symbol);
      continue;
    }
    if (stack.isEmpty && closeBraces.includes(symbol)) {
      return false;
    }
    if (braces[stack.pip()] === symbol) {
      stack.pop()
      continue;
    }
    if (closeBraces.includes(symbol)) {
      return false;
    }
  }
  return stack.isEmpty;
}

// console.log(checkSequence('(({3+})[{ew8}]([*])[fwe])', options), 'stack')