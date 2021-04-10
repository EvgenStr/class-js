/*Реализуйте класс Student(Студент), который будет наследовать от класса User.
Этот класс должен иметь следующие свойства: name(имя, наследуется от User), surname(фамилия, наследуется от User), year(год поступления в вуз).
Класс должен иметь метод getFullName()(наследуется от User), с помощью которого можно вывести одновременно имя и фамилию студента.
Также класс должен иметь метод getCourse(), который будет выводить текущий курс студента(от 1 до 5).
Курс вычисляется так: нужно от текущего года отнять год поступления в вуз.Текущий год получите самостоятельно.*/

'use strict';

const currentYear = new Date().getFullYear();
const currentMonth = new Date().getMonth();
const amountCourses = 5;

/**
 * @class
 */
class User {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
  set name(newName) {
    if (typeof newName !== 'string') {
      throw new TypeError("Name must be string type");
    }
    this._name = newName;
  }
  get name() {
    return this._name;
  }
  set surname(newSurname) {
    if (typeof newSurname !== 'string') {
      throw new TypeError("Surname must be string type");
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

/**
 * @class
 */
class Student extends User {
  constructor(name, surname, year) {
    super(name, surname);
    this.year = year;
  }
  set year(newYear) {
    if (typeof newYear !== 'number' || newYear > currentYear) {
      throw new Error("Wrong Year");
    }
    this._year = newYear;
  }
  get year() {
    return this._year;
  }
  get getCourse() {
    let course = currentMonth >= 8 ? currentYear - this.year + 1 : currentYear - this.year;
    return course <= amountCourses ? course : `student graduated in ${this.year + amountCourses}`;
  }
}

const test = new User('test', "TEST");
const student = new Student('John', 'Doe', 2020);
const oldStudent = new Student('John', 'Doe', 2010);
// const student2 = new Student('John', 'Doe', 2022);
