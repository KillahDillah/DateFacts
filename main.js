var moment = require('moment')
var chalk = require('chalk')

var now = moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
console.log("It is " + chalk.blueBright(now))


var day = moment().format("DDDo")
console.log("It is " +chalk.magenta(day) + " of the year")


let secs = moment().unix()
let startOfDayInSeconds = moment().startOf('day').unix()
let secsDay = secs - startOfDayInSeconds
console.log("It is " +chalk.cyan(secsDay) + " seconds into the day")



var dst = moment().isDST()
	if(dst===true)
console.log("It " +chalk.green("is") + " Daylight savings time")
	if(dst===false)
console.log("It " +chalk.green("is not") + " Daylight savings time")



var year = moment(2017).isLeapYear()
	if(year===false)
console.log("It " +chalk.red("is not") + " a leap year")
	if(year===true)
console.log("It " +chalk.red("is") + " a leap year")
