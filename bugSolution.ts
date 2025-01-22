function add(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both arguments must be numbers');
  }
  return a + b;
}

function subtract(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both arguments must be numbers');
  }
  return a - b;
}

let result = add(5, 3); // result is 8
console.log(result);
result = subtract(10, 5); // result is 5
console.log(result);

try {
  result = add("5", 3); //Throws an error
  console.log(result);
} catch (e) {
  console.error(e);
}


//Example of string to number conversion
function addStringNumbers(a: string, b: string): number{
    const numA = parseFloat(a);
    const numB = parseFloat(b);
    if(isNaN(numA) || isNaN(numB)){
        throw new Error('Invalid input: Both arguments must be parsable numbers.');
    }
    return numA + numB;
}
console.log(addStringNumbers("5","3"));