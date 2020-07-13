const container = document.querySelector('.seat-container');
const seat = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');
const ticketPrice = parseInt(movieSelect.value);

console.log(typeof ticketPrice);