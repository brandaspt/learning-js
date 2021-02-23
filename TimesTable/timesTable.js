const xTimesTable = 21;
let timesTable = '';

let i = 1;
while (i <= 10) {
    timesTable += i + ' * ' + xTimesTable + ' = ' + i * xTimesTable + '\n';
    i++;
}
console.log(timesTable);
