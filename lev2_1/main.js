console.log("läuft");

const today = new Date()
console.log(today);

const fullDate = () => {
    const today = new Date()
    day = today.getDate(),
    month = today.getMonth(),
    year = today.getFullYear();
    // console.log(today);
};
fullDate ()
document.getElementById('date').innerHTML = `${day} / ${month+1} / ${year} <br>`;
document.getElementById('date').innerHTML += `${year} / ${month+1} / ${day}`;
