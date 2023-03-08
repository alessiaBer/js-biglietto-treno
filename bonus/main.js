// Assegno il prezzo euro per ogni km percorso
const pricePerKm = 0.21;

// dichiaro la variabile del prezzo totale
let totalPrice = 0;

// assegno a una variabile l'elemento HTML con cui interagire
const priceDisplay = document.getElementById('price');

//assegno a una variabile l'elemento HTML con cui interagire
const price_h4 = document.getElementById('price-title'); 

// assegno a una variabile l'elemento HTML con cui interagire
const calcButton = document.getElementById('calc-btn');

// assegno una funzione all'evento "click"
calcButton.addEventListener("click", calculatePrice);

function calculatePrice() {
    // Chiedo al passeggero il numero di km da percorrere e lo assegno ad una variabile
    const tripKm = Number(prompt('How many km you have to cover?'));
    // Chiedo al passeggero la sua età e la assegno ad una variabile
    const passengerAge = Number(prompt('How old are you?'));
    // Loggo nella console i dati
    console.log(tripKm, passengerAge);

    // Assegno ad una variabile il prezzo provvisorio moltiplicando i km percorsi per il prezzo euro per km
    const provisionalPrice = tripKm * pricePerKm;
    // loggo nella console il prezzo provvisorio
    console.log(provisionalPrice);

    price_h4.innerHTML = 'Il prezzo totale del tuo biglietto è:'

    /* Dichiaro le condizioni di variazione del prezzo */
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
}