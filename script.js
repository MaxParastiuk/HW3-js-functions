console.log('--------------------- #1')

function sum(a,b) {
    return a+b;
}
function sub(a,b) {
    return a-b;
}
function div(a,b) {
    return a/b;
}
function mult(a,b) {
    return a*b;
}
console.log(sum(4,2))
console.log(sub(4,2))
console.log(div(4,2))
console.log(mult(4,2))

console.log('--------------------- #2')

function countTo(number) {
    for (let i = 1; i <= number; i++) {
        console.log(i)
    }
}
countTo(5);

console.log('--------------------- #3')

function countBackTo(number) {
    for (let i = 5; i >= number; i--) {
        console.log(i)
    }
}
countBackTo(1);

console.log('--------------------- #4')

function pow(x,n) {
    return x ** n;
}
console.log(pow(2,3))

console.log('--------------------- #5')

function isBigger(a,b) {
    if(a > b) {
        return true;
    } else {
        return false;
    }
}
console.log(isBigger(5,-1))

console.log('--------------------- #6')

function isSmaller(a,b) {
    if(a < b) {
        return true;
    } else {
        return false;
    }
}
console.log(isSmaller(5,-1))