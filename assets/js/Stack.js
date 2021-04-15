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

  /*push(value) {
    if (this.size >= this._maxSize) {
      throw new RangeError("Stack overflow");
    }
    this[`_${this.size}`] = value;
    return ++this._size;
  }*/
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

let arr = ['{', '}', '[', ']']
function checkSequence(string) {
  if (string[0] === ')') {
    return false;
  }
  const check = {
    1: "}",
    2: ']',
    3: ')',
  }
  let stack = new Stack(string.length);
  for (const item of string) {
    if (item === '(' || item === '[' || item === '{') {
      stack.push(item);
    } else if (!stack.size) {
      return false;
    }
    else if ((item === '}' && stack.pip() === '{') || (item === ')' && stack.pip() === '(') || (item === ']' && stack.pip() === '[')) {
      stack.pop()
    }
  }
  return !stack.size;
}

braces[stack.pop()] === symbol