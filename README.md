# custom_compose_function

Compose function is a common approach in the functional programming. It is used in Redux https://redux.js.org/api/compose

Concept:
1. Signature compose(...functions) => function
2. Compose function takes any number of functions as parameters.
3. Execution of functions occurs from right to left.
4. Compose function returns a function which takes a parameter that is passed to the right function.
5. The right function executes first.
6. The next function to the left takes a returned value from the right function as a parameter, and executes.
7. And so on.
8. A returned value from the last (left) function is a final result.
