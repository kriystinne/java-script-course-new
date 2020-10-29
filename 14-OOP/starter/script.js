'use strict';

class Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = dob;
  }
}

const jessica = new Person('Jessica', 'Jones', '1990');
console.log(jessica);
