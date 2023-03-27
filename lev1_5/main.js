console.log("läuft");

const list = [
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

let monatsName = ((datum) => {
    
    let checkMonth = new Date(datum);

let a = list[checkMonth.getMonth()]; 

console.log(a);
})

monatsName("2001,3,4"); //März
monatsName("2019,12,24"); //Dezember
monatsName("1410,07,15"); //Juli
