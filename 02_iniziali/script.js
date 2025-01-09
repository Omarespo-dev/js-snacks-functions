/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
function accettaArray(nomiArray){    
    // Dichiaro variabile con array vuoto per le iniziali
    const inizializza = [];
    
    // Utilizzo ciclo for dove i < dei nomi dentro l'array ed incremento

    for(let i= 0; i < nomiArray.length; i++){
        const elemento = nomiArray[i];
        inizializza.push(elemento.charAt(0)) 
    }
    return inizializza
}

// Invoca la funzione qui e stampa il risultato in console
const risultato= accettaArray(names)
console.log(risultato)
//Risultato atteso: ["A", "L", "M", "A", "G", "A"]

