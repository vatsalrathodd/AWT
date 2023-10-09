function* infinite() {
    let i = 0;
    while (true) {
      yield i++;
    }
  }
  
  function* evenNum(count) {
    let i = 0;
    let iteratedCount = 0;
    while (iteratedCount < count) {
      if (i % 2 === 0) {
        yield i;
        iteratedCount++;
      }
      i++;
    }
  }
  
  const Iterator = infinite();
  
  for (let i = 0; i < 5; i++) {
    console.log("Infinite sequence:", Iterator.next().value);
  }
  
  const evenNumGenerator = evenNum(6);
  
  for (const evenNumber of evenNumGenerator) {
    console.log("Even number:", evenNumber);
  }
  