Array.prototype.myEach = function(callback) {
  let new_arr = []
  for (let i = 0; i < this.length; i++) {
    let element = this[i];
    new_arr.push(callback(element));
  }
  return new_arr; 
}

//helper method: 
let callback = function banana(params) {
  console.log(params);
}

