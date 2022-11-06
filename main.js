const arrayNew = [];
while (!arrayNew.includes(null) && !arrayNew.some(isNaN)) {
    arrayNew.push(prompt('Enter numbers'))
}
arrayNew.pop();
console.log(`The state of the array is as follows: ${arrayNew.join(', ')}`)
arrayNew.sort(function (a, b) {
    return a - b;
});
console.log(`The state of the array after sort: ${arrayNew.join(', ')}`)
arrayNew.splice(1,3);
console.log(`The state of the array after splice: ${arrayNew.join(', ')}`)