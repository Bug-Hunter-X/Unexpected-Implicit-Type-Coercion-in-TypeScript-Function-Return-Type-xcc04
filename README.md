# Unexpected Implicit Type Coercion in TypeScript

This repository demonstrates a potential issue in TypeScript related to implicit type coercion in function return types. The `combine` function in `bug.ts` combines a string and a number, implicitly converting the number to a string. While this might be the expected behavior in some cases, it can lead to unexpected results if stricter type checking is desired.  The `bugSolution.ts` file shows how to handle this using explicit type checking and type guards.

## How to reproduce

1. Clone this repository.
2. Navigate to the repository's directory.
3. Run `tsc bug.ts` to compile the code.
4. Run `node bug.js` to execute the compiled code.

The output will be "hello5", which may not be what was expected depending on the intended behavior.

## Solution

The solution, detailed in `bugSolution.ts`, involves explicitly defining the behavior, thereby eliminating potential ambiguity, or including explicit type guards or error handling to manage potential type mismatch issues.