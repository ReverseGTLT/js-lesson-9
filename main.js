const arrayNew = [];
while (true) {
    let element = prompt('Enter numbers');
    if (element === null || isNaN(+element)) {
        break;
    }
    arrayNew.push(element)
}

console.log(`The state of the array is as follows: ${arrayNew.join(', ')}`)
arrayNew.sort(function (a, b) {
    return a - b;
});
console.log(`The state of the array after sort: ${arrayNew.join(', ')}`)
arrayNew.splice(1,3);
console.log(`The state of the array after splice: ${arrayNew.join(', ')}`)