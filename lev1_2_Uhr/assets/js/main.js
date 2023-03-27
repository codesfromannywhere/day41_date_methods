// UHR 

//get hours / get minutes / getSeconds

let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

const uhrZeit = () => {
    const timeNow = new Date()
    theday = days[timeNow.getDay()],
    hours = timeNow.getHours(),
    minutes = timeNow.getMinutes(),
    seconds = timeNow.getSeconds();
    console.log(timeNow);

};
uhrZeit ()
document.getElementById('uhr').innerHTML = theday + hours + ':' + minutes + ':' + seconds;



// function uhrzeit() {
//     var jetzt = new Date(),
//         h = jetzt.getHours(),
//         m = jetzt.getMinutes(),
//         s = jetzt.getSeconds();
//     document.getElementById('uhr').innerHTML = h + ':' + m + ':' + s;
//   }
//   uhrzeit()