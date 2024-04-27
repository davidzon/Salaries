class Employee {
  constructor(name, salary, title, boss = null) {
   this.name = name
   this.salary = salary
   this.title = title
   this.boss = boss

   if (boss) {
    boss.addEmployee(this)
  }

  }

  calculateBonus(multiplier) {
   return this.salary * multiplier
  }

 }


module.exports = Employee;
