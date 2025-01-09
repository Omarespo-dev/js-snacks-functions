/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
function accettaArray (lettera){
    let primaLettera= [];

    for(let i = 0; i < names.length; i++){
        if(names[i].charAt(0)=== lettera){
            primaLettera.push(names[i])
        }
    }

    return primaLettera
}

// Invoca la funzione qui e stampa il risultato in console
const risultato =accettaArray("A")
console.log(risultato)


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]