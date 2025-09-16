
function fibonacciRecursion(n) {
    if (n < 2) {
        return 1;
    }
    return fibonacciRecursion(n-1) + fibonacciRecursion(n-2);
}

let n = 11;
console.log(fibonacciRecursion(n));

// 1 1 2 3 5 8 13 21 34 55 89 144  ряд Фибоначчи

// f(11) -> F(10)+f(9) -> 89 + 55 = 144
// f(10) -> F(9)+f(8) -> 55 + 34 = 89
// f(9) -> F(8)+f(7) -> 34 + 21 = 55
// f(8) -> F(7)+f(6) -> 21 + 13 = 34
// f(7) -> F(6)+f(5) -> 13 + 8 = 21
// f(6) -> F(5)+f(4) -> 8 + 5 = 13
// f(5) -> F(4)+f(3) -> 5 + 3 = 8
// f(4) -> F(3)+f(2) -> 3 + 2 = 5
// f(3) -> F(2)+f(1) -> 2 + 1 = 3
// f(2) -> F(1)+f(0) -> 1 + 1 = 2

function fibonacciIteration(n) {
    let sequenceArray = [0, 1];
    for (var i = 2; i <= n; i++) {
       sequenceArray.push(sequenceArray[i-1] + sequenceArray[i-2]);
    }
    return sequenceArray;
 }

console.log("Фибоначи итерация = "+fibonacciIteration(12));

// ---------------------- 

function findKthElement(arr1, arr2, k) {
    let i = 0, j = 0, count = 0, kthElement = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            kthElement = arr1[i];
            i++;
        } else {
            kthElement = arr2[j];
            j++;
        }
        count++;
        if (count == k) {
            return kthElement;
        }
    }

    // If we reach the end of one array
    while (i < arr1.length) {
        kthElement = arr1[i];
        i++;
        count++;
        if (count == k) {
            return kthElement;
        }
    }

    while (j < arr2.length) {
        kthElement = arr2[j];
        j++;
        count++;
        if (count == k) {
            return kthElement;
        }
    }

    return -1; // This line should theoretically never be reached
}

let arr1 = [100, 112, 256, 349, 770];
let arr2 = [72, 86, 113, 119, 265, 445, 892];//990
let k = 7;
console.log("k-th element is: " + findKthElement(arr1, arr2, k));