Array.prototype.add = function () {
    let total = 0;
    for (let i = 0; i < this.length; i++) {
      total += this[i];
    }
    return total;
  };
  
  const numbers = [17, 25, 35];
  console.log(numbers.add()); // Output: 77
  