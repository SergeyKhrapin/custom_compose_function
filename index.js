const composedFunction = compose(f1, f2, f3)

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
    console.log
    return 'Result returned from f3()'
}

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
