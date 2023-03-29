console.log('läuft');

// const d = new Date();
// d.setDate(15);
// console.log(d);
const div = document.querySelector('div')
const today = new Date();

today.setDate(23);
today.setMonth(9);
today.setFullYear(2222);
div.innerHTML = today + `<br>`

today.setDate(24);
today.setMonth(1);
today.setFullYear(2123);
div.innerHTML += today + `<br>`


today.setDate(24);
today.setMonth(2);
today.setFullYear(2123);
div.innerHTML += today + `<br>`

today.setDate(3);
today.setMonth(2);
today.setFullYear(2123);
div.innerHTML += today + `<br>`

let d = new Date();
d.setDate(d.getDate() + 30);
div.innerHTML += d 

