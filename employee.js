//const Manager = require('./manager')

class Employee {
 constructor(name, salary, title, manager = null) {
  this.name = name
  this.salary = salary
  this.title = title
  this.manager = manager

  if (manager) {
    manager.addEmployee(this)
  }
 }
}



const leo = new Employee('Leonardo', 90000, 'Ninja');
console.log(leo)


module.exports = Employee;
