/*Реализуйте класс Student(Студент), который будет наследовать от класса User.
Этот класс должен иметь следующие свойства: name(имя, наследуется от User), surname(фамилия, наследуется от User), year(год поступления в вуз).
Класс должен иметь метод getFullName()(наследуется от User), с помощью которого можно вывести одновременно имя и фамилию студента.
Также класс должен иметь метод getCourse(), который будет выводить текущий курс студента(от 1 до 5).
Курс вычисляется так: нужно от текущего года отнять год поступления в вуз.Текущий год получите самостоятельно.*/

'use strict';

class User {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
  set name(newName) {
    if (typeof newName !== 'string') {
      throw new TypeError("");
    }
    this._name = newName;
  }
  get name() {
    return this._name;
  }
  set surname(newSurname) {
    if (typeof newSurname !== 'string') {
      throw new TypeError("");
    }
    this._surname = newSurname;
  }
  get surname() {
    return this._surname;
  }
  get getFullName() {
    return `${this.name} ${this.surname}`;
  }
}


class Student extends User{
  constructor(name, surname, year){
    super(name, surname)
  }
}

const test = new User('test', "TEST")