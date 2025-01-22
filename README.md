# Type 'string' is not assignable to type 'number'

This repository demonstrates a common type error in TypeScript where a string value is assigned to a variable with a numeric type. The error arises when the variable's type annotation explicitly specifies a number, but a string is assigned to it. This typically happens when there is a mismatch between expected input types and actual values. 

## Problem

The provided TypeScript code defines two functions: `add` and `subtract`. These functions should accept numbers as arguments and return a number as a result. However, the code might produce a runtime error if you attempt to pass a string to these functions instead of a number. 

## Solution

To fix this error, ensure that the data being assigned to the variable has the correct numeric type. Strict type checking will prevent such errors. Consider adding runtime checks to handle potential errors or convert strings to numbers if needed. 

The solution provided in `bugSolution.ts` demonstrates these concepts, incorporating more robust error handling.