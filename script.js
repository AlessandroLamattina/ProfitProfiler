const dataEl = document.getElementById('data');
const banconoteEl = document.getElementById('banconote');
const moneteEl = document.getElementById('monete');
const giocateCalcioEl = document.getElementById('giocate-calcio');
const giocateVirtualiEl = document.getElementById('giocate-virtuali');
const fondoCassaEl = document.getElementById('fondo-cassa');
const totaleEl = document.getElementById('totale');
const btnCalcolaEl = document.getElementById('btn-calcola');


btnCalcolaEl.addEventListener('click', () => {
    const data = dataEl.value;
    const banconote = parseFloat(banconoteEl.value);
    const monete = parseFloat(moneteEl.value);
    const giocateCalcio = parseFloat(giocateCalcioEl.value);
    const giocateVirtuali = parseFloat(giocateVirtualiEl.value);
    const fondoCassa = parseFloat(fondoCassaEl.value);

    const totale = banconote + monete + giocateCalcio + giocateVirtuali + fondoCassa;

    totaleEl.value = totale;
});
