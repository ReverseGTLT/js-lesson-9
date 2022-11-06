const arrayNew = [];
while (!arrayNew.includes(null)) {
    arrayNew.push(prompt('Enter numbers'))
}
arrayNew.pop();
console.log(`The state of the array is as follows: ${arrayNew}`)
arrayNew.sort(function (a, b) {
    return a - b;
});
console.log(`The state of the array after sort: ${arrayNew}`)
arrayNew.splice(1,3);
console.log(`The state of the array after splice: ${arrayNew}`)