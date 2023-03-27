// lev1_1: date new Date()

// Speichere die Werte in einer Variable (date1, date2, …)
// Nutze innerHTML um das Ergebnis darzustellen.
// Teste dann die Werte:
// new Date("September 2, 2019 09:00:00")
// new Date(0)
// new Date(31556908800)
// new Date(86400000)


const date1 = new Date()
console.log(date1);

const div1 = document.querySelector('div')
div1.innerHTML = `${date1} = new Date "Mon Mar 27 2023 13:41:07 GMT+0200"  <br>`

const date2 = new Date(0)
div1.innerHTML += `${date2} = new Date(0) <br>`

const date3 = new Date(31556908800)
div1.innerHTML += `${date3} = new Date(31556908800)  <br>`

const date4 = new Date(86400000)
div1.innerHTML += `${date4} = new Date(86400000) `



  
