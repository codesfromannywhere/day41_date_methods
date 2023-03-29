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
    theday = days[timeNow.getDay()].substring(0,3),
    hours = timeNow.getHours(),
    minutes = timeNow.getMinutes(),
    seconds = timeNow.getSeconds();
    // console.log(timeNow);
};

uhrZeit ()
document.getElementById('watch').innerHTML = `${theday} ${hours}:${minutes}:${seconds}`
document.getElementById('subline').innerHTML += `Days Hours Minutes Seconds`
