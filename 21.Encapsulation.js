class BankInfo {
  #balance = 0;

  constructor(name) {
    this.name = name;
  }

  depoist(amount) {
    this.#balance += amount;
    console.log(`Depoisted $${amount}. New Balance = $${this.#balance}`);
  }

  withdraw(amount) {
    if (amount < this.#balance) {
      this.#balance -= amount;
      console.log(`Withdrawn $${amount}. New Balance = $${this.#balance}`);
    } else {
      console.log("Insuffiecent Fund");
    }
  }
}

const person = new BankInfo("Aman");
console.log(person.depoist(2500));
console.log(person.withdraw(600));


class Employee{
    constructor(name, age){
        this.name = name
        this.age = age
    }

    static retiredAge = 65

    static isRetired(employee){
        return employee.age > Employee.retiredAge
    }
}

const employee1 = new Employee("Aman", 21)
const employee2 = new Employee("Tora", 80)

console.log(Employee.isRetired(employee1))
console.log(Employee.isRetired(employee2))