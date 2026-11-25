// 1. 
function OddNumber(oddnumbers) {
    return oddnumbers.filter(num => num % 2 !== 0);
}
const oddArr = OddNumber([1,2,3,4,5,6,7,8,8,10])

// 2. 
function OddMultitple(oddArr) {
    return oddArr.reduce((total, num) => total * num, 1); 
}

console.log("This is the product of odd numbers: " + OddMultitple(oddArr));
