const math = require('./math.js')
const date = require('./date')

console.log(`fibonacci: ${math.fibonacci(8)}`)
console.log(`arithProg: ${math.arithProg(2, 3, 5)}`);
console.log(`geomProg: ${math.geomProg(2,3,5)}`)

console.log(`getCurrentDate: ${date.getCurrentDate()}`)
console.log(`getDaysInMonth: ${date.getDaysInMonth(1, 2023)}`)
console.log(`getMonthName: ${date.getMonthName(1)}`)
console.log(`getCurrentTime: ${date.getCurrentTime()}`)