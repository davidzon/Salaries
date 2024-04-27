const Employee = require('./test')

class Boss extends Employee {
  constructor(name, salary, title, boss = null) {
    super(name, salary, title, boss)
    this.employees = []
  }

  addEmployee(employee){
  if (employee instanceof Employee) {
    this.employees.push(employee);
    }
  }

  calculateBonus(multiplier) {
    return (this.salary + this._totalSubSalary()) * multiplier;
  }

  _totalSubSalary() {
    let sum = 0;
    for(const employee of this.employees) {
      if (employee instanceof Boss) {
        sum += employee.salary + employee._totalSubSalary();
      }
      else {
        sum += employee.salary
      }
    }
    return sum;
  }

}

const hobbes = new Boss('Hobbes',	1000000,	'Founder')
const calvin = new Boss('Calvin', 130000,	'Director',	hobbes)
const susie = new Boss('Susie', 100000,	'TA',	calvin)
const lily = new Employee('Lily', 90000,	'TA',	susie)
const clifford = new Employee('Clifford', 90000,	'TA',	susie)

console.log(`${hobbes.name}'s bonus is: ${hobbes.calculateBonus(0.05)}`)
console.log(`${calvin.name}'s bonus is: ${calvin.calculateBonus(0.05)}`)
console.log(`${susie.name}'s bonus is: ${susie.calculateBonus(0.05)}`)
console.log(`${lily.name}'s bonus is: ${lily.calculateBonus(0.05)}`)
console.log(`${clifford.name}'s bonus is: ${clifford.calculateBonus(0.05)}`)

module.exports = Boss;
