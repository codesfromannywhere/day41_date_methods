// lev1_2: Date Methods

let monate = [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember"
  ];
  
  let wochenTag = [
    "Sonntag",
    "Montag",
    "Dienstag",
    "Mittwoch",
    "Donnerstag",
    "Freitag",
    "Samstag"
  ];

date = new Date();
console.log(date);
const div = document.querySelector('div');

div.innerHTML += date.toString()+ `<br>`;
div.innerHTML += date.getFullYear() + `<br>`;
div.innerHTML += date.getMonth() + " Monat" + "<br>";
div.innerHTML += date.getDate() + " Tag" + "<br>";
div.innerHTML += date.getHours() + " Stunde" + "<br>";
div.innerHTML += date.getMinutes() + " Minute" + "<br>";
div.innerHTML += wochenTag[date.getMonth()] + "<br>";
div.innerHTML += monate[date.getMonth()] + "<br>";


