import {fibonacci, arithProg, geomProg} from './mathTs'
import {getCurrentDate, getDaysInMonth, getMonthName, getCurrentTime} from './dateTs'

console.log(`fibonacci: ${fibonacci(8)}`)
console.log(`arithProg: ${arithProg(2, 3, 5)}`);
console.log(`geomProg: ${geomProg(2,3,5)}`)

console.log(`getCurrentDate: ${getCurrentDate()}`)
console.log(`getDaysInMonth: ${getDaysInMonth(1, 2023)}`)
console.log(`getMonthName: ${getMonthName(1)}`)
console.log(`getCurrentTime: ${getCurrentTime()}`)