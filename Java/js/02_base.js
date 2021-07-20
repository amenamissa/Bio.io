let x = 43;

console.log(typeof x);

if(typeof x === 'boolean'){
console.log('x - булевое значение');
} else if (typeof x === 'number') {
console.log('x - число');
} else if (typeof x === 'string'){
console.log('x - строка');
} else {
console.log('Тип x не определён');
};