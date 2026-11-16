function showPage(page){

document
.querySelectorAll('.page')
.forEach(p => p.classList.remove('active'));

document
.getElementById(page)
.classList.add('active');

}

const tripDate = new Date("2027-06-20T14:00:00");

function updateCountdown(){

const now = new Date();

const diff = tripDate - now;

if(diff <= 0){
document.getElementById("countdown").innerHTML =
"¡Comenzó el viaje!";
return;
}

const days = Math.floor(diff / 86400000);
const hours = Math.floor(diff % 86400000 / 3600000);

document.getElementById("countdown").innerHTML =
`${days} días ${hours} horas`;
}

setInterval(updateCountdown,1000);

updateCountdown();

if('serviceWorker' in navigator){
navigator.serviceWorker.register('./service-worker.js');
}