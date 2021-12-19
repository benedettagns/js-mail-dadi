//creo un array con le email che possono accedere 
const mailAutorizzate = ['maildadi@icloud.com', 'benedetta@gmail.com', 'scriptarray@gmail.com'];

//creo un prompt per fare inserire la mail all'utente 
let mailUtente = prompt('Inserisci la mail');

//controllo che ci sia la mail nella lista 

//genero un numero random da 1 a 6, per giocatore e per computer 
let numeroGiocatore = Math.floor(Math.random() * ((6 + 1) - 1)) + 1;
console.log('Numero Giocatore');
console.log(numeroGiocatore);

let numeroPc = Math.floor(Math.random() * ((6 + 1) - 1)) + 1;
console.log('Numero Computer');
console.log(numeroPc);

//vincitore
if (numeroGiocatore > numeroPc) {
    console.log('Il vincitore è il GIOCATORE');
} else {
    console.log('Il vincitore è il COMPUTER');
};