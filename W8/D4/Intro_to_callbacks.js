// class Clock {
//   constructor(hour, minutes, seconds) {
//   this.hour = hour
//   this.minutes = minutes
//   this.seconds = seconds
//   }

//   printTime() {
//     console.log(`${this.hour}:${this.minutes}:${this.seconds}`)
//   }

//   _tick() {
//     if (this.seconds === 60) {
//       this.seconds = 0 
//       this.minutes += 1
//     } 

//     if (this.minutes === 60) {
//       this.minutes = 0
//       this.hour += 1
//     }
    
//     if (this.hour === 24) {
//       this.seconds = 0
//       this.minutes = 0
//       this.hour = 0
//     }
//     this.seconds += 1
//     this.printTime()
//   }
// }



// const readline = require('readline');

// const reader = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// function addNumbers(sum, numsLeft, completionCallback) {
//   if (numsLeft > 0) {
//     reader.question("Input a number", function (integer) {
//       const answer = parseInt(integer);
//       sum += answer
//       console.log(sum)
//       numsLeft -= 1
//       addNumbers(sum, numsLeft, completionCallback)
//     }
//     )} else {
//       completionCallback(sum)
//     }
    
// } 

// addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));



