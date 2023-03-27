console.log('läuft');

// const d = new Date();
// d.setDate(15);
// console.log(d);

const today = new Date();
today.setDate(23);
today.setMonth(9);
today.setFullYear(2222);
console.log(today);

today.setDate(24);
today.setMonth(1);
today.setFullYear(2123);
console.log(today);

today.setDate(24);
today.setMonth(2);
today.setFullYear(2123);
console.log(today);

today.setDate(3);
today.setMonth(2);
today.setFullYear(2123);
console.log(today);

let d = new Date();
d.setDate(d.getDate() + 30);
console.log(d);

