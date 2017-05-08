const sum2 = (a,b) => a+b; // sum fn suitable for reduce

const summedParams = process.argv.slice(2) // drop first 2
								 .map(Number) // str -> number
								 .reduce(sum2, 0); // sum
console.log(summedParams);
