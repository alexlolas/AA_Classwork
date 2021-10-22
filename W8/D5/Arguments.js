function sum() {
  let sum = 0;
  let args = [...arguments]
  args.forEach(el => sum += el) 
  return sum
}
console.log(sum(1, 2, 3, 4))
// sum(1, 2, 3, 4, 5) === 15;

Function.prototype.myBind = function (cxt, ...bindargs) {
  let that = this

  return function (...callargs) {
    let allArgs = bindargs.concat(callargs)
    return that.apply(cxt, allArgs)
  }
}


class Cat {
  constructor(name) {
    this.name = name;
  }

  says(sound, person) {
    console.log(`${this.name} says ${sound} to ${person}!`);
    return true;
  }
}

class Dog {
  constructor(name) {
    this.name = name;
  }
}

const markov = new Cat("Markov");
const pavlov = new Dog("Pavlov");

// function threeSum (number) {
//   let sum = 0;
//   const array = [number];
//   return function curryNum (num) {
//     array.push(num);
//     if (array.length === 3) {
//       for (let i = 0; i < 3; i++) {
//         sum += array[i];
//         console.log(sum);
//       }
//     } else {
//       return sum;
//     } 
//   }
// }

function sumThree(num1, num2, num3) {
  console.log(num1 + num2 + num3)
}

Function.prototype.curry = function (numArgs) {
  const arr = [];
  let that = this
  return function curryArr(item) {
    arr.push(item)
    if (arr.length === numArgs) {
        that.apply(null, arr)
    } else {
     return curryArr
    }
  }
}