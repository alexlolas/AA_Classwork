Array.prototype.uniq = function() {
  let uniq = [];
  this.forEach(function(ele){
    if (!uniq.includes(ele)) {
      uniq.push(ele);
    }
  })
  return uniq;
}

Array.prototype.twoSum = function() {
  let pairs = [];
  this.forEach(function(ele1, index1){
    this.forEach(function(ele2, index2){
      if (ele1 + ele2 === 0){
        pairs.push([index1, index2])
      }
    })
  })
}
