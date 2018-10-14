
let results = [0];

for (let i = 0; i <= 100; i++) {
  let result = null;
  if (!i) {
    results.push(1);
  } else {
    let prevOne = results[results.length - 1];
    let prevTwo = results[results.length - 2];
    result = prevOne + prevTwo;
    results.push(result);
  }
}

console.log(results);
