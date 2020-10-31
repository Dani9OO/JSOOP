// Encapsulation

// Procedural Implementation

let baseSalary = 30000;
let overtime = 10;
let rate = 20;

function getWage(baseSalary, overtime, rate) {
    return baseSalary + (overtime * rate);
}

console.log('\nFunctional Programming Style ➡');
console.log(`\tCalculated wage: $${getWage(baseSalary, overtime, rate)} 💸`)

// Object Oriented Implementation

let employee = {
    baseSalary: 30000,
    overtime: 10,
    rate: 20,
    getWage: function() {
        return this.baseSalary + (this.overtime * this.rate)
    }
};
console.log('\nObject Oriented Programming Style 📝');
console.log(`\tCalculated wage: $${employee.getWage()} 💰`);
