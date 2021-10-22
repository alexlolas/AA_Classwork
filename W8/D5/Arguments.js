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