Array.prototype.myEach = function(callback) {
  let new_arr = this
  for (let i = 0; i < this.length; i++) {
    let element = this[i];
    callback(element);
  }
}

//helper method: 
let callback = function banana(params) {
  console.log(params);
}




Array.prototype.myMap = function(callback) {
  let new_arr = []
  for (let i = 0; i < this.length; i++) {
    let element = this[i];
    new_arr.push(callback(element));
  }
  return new_arr;
}


Array.prototype.myReduce = function(callback, [optional]) {
  this.unshift(optional).myEach(callback);
}
