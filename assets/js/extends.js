"use strict";
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.isBanned = false;
  }
}

class Admin extends User {
  constructor(name, age) {
    super(name, age);
    this.permission = true;
  }
  toggleBan(user) {
    if (!(user instanceof User)) {
      throw new Error();
    }
    user.isBanned = !user.isBanned;
  }
}

const user = new User("userName", 15);
const adm = new Admin("administrator", 55);
