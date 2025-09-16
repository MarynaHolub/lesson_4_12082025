function sumIteration(n) {
    let sum=0;
    for (let i=0; i<=n; i++) {
        sum +=i;
    
    }
    return sum;
}

function sumIterationReverse(n) {
    let sum=0;
    for (let i=n; i>0; i--) {
        sum +=i;
    
    }
    return sum;
}

function sumRecursive(n) {
    if(n===1) {             //базовое условие выхода из рекурсии
        return 1;
    }
    let res = sumRecursive(n-1);
    let sum = n + res;
    console.log(`sumR = ${sum}; n = ${n}`);
    return sum;
}
// sumRecursive(5)
//      sumRecursive(4)
//          sumRecursive(3)
//              sumRecursive(2)
//                  sumRecursive(1)
//                      1
//              res = 1; sum = 2 + 1 = 3
//          res = 3; sum = 3 + 3 = 6
//      res = 6; sum = 4 + 6 = 10
// res = 10; sum = 5 + 10 = 15 


console.log("Sum = " + sumIteration(5)); //канкатенация
sum = sumIteration(5);
console.log(`Sum = ${sum}`);
console.log(`Sum = ${sumIteration(5)}`);

console.log("Sum = " + sumIterationReverse(5)); //канкатенация
sum = sumIterationReverse(5);
console.log(`Sum = ${sum}`);
console.log(`Sum = ${sumIterationReverse(5)}`);

console.log(`SumRecursive = ${sumRecursive(5)}`);

//------ Recursion ------
//-----------------------
function funRecursion(x,y) {
    if (x === 0) {
        return y;
    } else {
        let res = funRecursion(x - 1, x + y);
        console.log("res = " + res + "; x = " + x + "; y " + y);
        return res;
    }
}

function funIteration1(x,y) {
    for (let i = 0; i < x; i++) {
        y = (x-i) + y;
    }
    return y;
}

function funIteration2(x,y) {
    for (let i = x; i > 0; i--) {
        y = i + y;
    }
    return y;
}

console.log("funRecursion = " + funRecursion(5,1));
console.log("funIteration1 = " + funIteration1(5,1));
console.log("funIteration2 = " + funIteration2(5,1));


