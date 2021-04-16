class Queue {
  constructor(...args) {
    this._head = 0;
    this._tail = 0;
    this.push(...args);
  }
  get size() {
    return this._tail - this._head;
  }
  push(...args) {
    for (const item of args) {
      this[this._tail] = item;
      this._tail++;
    }
    return this.size;
  }
  pop() {
    if (this.size) {
      const lastItem = this[this._head];
      delete this[this._head++];
      return lastItem;
    }
  }
  // duplicate (){
  //   const newQ = new Queue();
  //   for(let i = this._head)
  // }
}

const q1 = new Queue(1, 2, 3, 4, 5);
const q2 = new Queue(6, 7, 8, 9, 10);

function mergeQueries(q1, q2) {
  const res = new Queue();

  while (q1.size || q2.size) {
    if (q1.size !== 0) {
      res.push(q1.pop());
    }
    if (q2.size !== 0) {
      res.push(q2.pop());
    }
  }
  return res;
}

const q3 = mergeQueries(q1, q2);

const user1 = {
  id: 1,
  name: "john",
  age: 18,
};
const user2 = {
  id: 2,
  name: "john2",
  age: 19,
};

const mes1 = ["rwrw11", "werw11erwer", "werw111erw"];
const mes2 = ["rwrw222", "wer22werwer", "werwer22w"];

const mappedUsers = new Map();
mappedUsers.set(user1.id, mes1);
mappedUsers.set(user2.id, mes2);

function getUserMessages(id) {
  return mappedUsers.get(id);
}
