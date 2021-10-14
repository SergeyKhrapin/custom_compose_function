/*=================  Option 1  ======================*/

function _compose(...functions) {
  return (val) => functions.reverse().reduce((res, func) => func(res), val);
}

function add(n) {
  return n + 2;
}
function multiply(n) {
  return n * 2;
}
function sub(n) {
  return n - 4;
}

console.log(_compose(add, multiply, sub)(10));

/*=================  Option 2 (old)  ======================*/

function f1 (resFromF2) {
    console.log('call f1() - ', resFromF2)
    return 'Result returned from f1()'
}

function f2 (resFromF3) {
    console.log('call f2() - ', resFromF3)
    return 'Result returned from f2()'
}

function f3 (initialArg) {
    console.log('call f3() - ', initialArg)
    return 'Result returned from f3()'
}

const composedFunction = compose(f1, f2, f3)
const finalResult = composedFunction(777)

console.log('finalResult - ', finalResult)

function compose() {
    const functions = arguments
    const rightFunc = functions[functions.length - 1]

    return function(arg) {
        let prevFuncResult = rightFunc(arg)

        for (let i = functions.length - 2; i >= 0; i--) {
            prevFuncResult = functions[i](prevFuncResult)
        }

        return prevFuncResult
    }
}
