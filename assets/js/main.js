/* 
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). */

// Chiedo al passeggero il numero di km da percorrere e lo assegno ad una variabile
const tripKm = Number(prompt('How many km you have to cover?'));
// Chiedo al passeggero la sua età e la assegno ad una variabile
const passengerAge = Number(prompt('How old are you?'));
// Loggo nella console i dati
console.log(tripKm, passengerAge);

/* Calcolo il prezzo totale del biglietto */
// Assegno il prezzo euro per ogni km percorso
const pricePerKm = 0.21;
// Assegno ad una variabile il prezzo provvisorio moltiplicando i km percorsi per il prezzo euro per km
const provisionalPrice = tripKm * pricePerKm;
// loggo nella console il prezzo provvisorio
console.log(provisionalPrice);

// dichiaro la variabile del prezzo totale
let totalPrice = 0;

// assegno a una variabile l'elemento HTML con cui interagire
const priceDisplay = document.getElementById('price');

// Dichiaro le condizioni di avriazione del prezzo
if (passengerAge < 18) {
    // Dichiaro la condizione dello sconto del 20% per i minorenni
    const discount20 = provisionalPrice / 100 * 20;
    totalPrice = Number(parseFloat(provisionalPrice - discount20).toFixed(2));
    console.log(totalPrice);
    // output
    priceDisplay.innerHTML = `&euro; ${totalPrice}`;

} else if (passengerAge > 65) {
    // Dichiaro la condizione dello sconto del 40% per gli over 65
    const discount40 = provisionalPrice / 100 * 40;
    totalPrice = Number(parseFloat(provisionalPrice - discount40).toFixed(2));
    console.log(totalPrice);
    //output
    priceDisplay.innerHTML = `&euro; ${totalPrice}`;
} else {
    totalPrice = parseFloat(provisionalPrice).toFixed(2);
    //output
    priceDisplay.innerHTML = `&euro; ${totalPrice}`;
}