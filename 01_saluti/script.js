/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = 'Mario';
// console.log(userName)

// Dichiara la funzione qui.
function accettaStringa(nome){
    console.log("ciao", nome)
}

// Invoca la funzione qui e stampa il risultato in console

const risultato=accettaStringa(userName);
console.log(risultato);
//Risultato atteso se si passa 'Mario': // ciao Mario






// ARROW VERSiON

// const accettaStringa = (nome) =>  "ciao"+ " " +userName

// console.log(accettaStringa(userName))