const arrayNew = [];
let element;
while (!arrayNew.includes(null)) {
    element = arrayNew.push(prompt())
}
arrayNew.pop();
console.log(`The state of the array is as follows: ${arrayNew}`)
if (arrayNew.every(isNaN)) {
    arrayNew.sort();
} else {
    arrayNew.sort(function (a, b) {
        return a - b;
    })
}
console.log(`The state of the array after sort: ${arrayNew}`)
arrayNew.splice(1,3);
console.log(`The state of the array after splice: ${arrayNew}`)