let result = +prompt('Сколько вам лет?', );

console.log(result);

console.log (typeof result);

if (Number.isNaN(result)) {
console.log('Упс')
}

if (result % 2 === 0) {
console.log('Число чётное');
} if (result % 2 === 1) {
console.log('Число нечётное');
};