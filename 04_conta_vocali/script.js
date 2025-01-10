/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function getCount(stringa){

    // Inizializza la variabile vocali
    let contaVocali= 0;

    let aeiou= ["a","e","i","o","u"];
    
    for(let i= 0; i<stringa.length; i++){

        let carattere= stringa.charAt(i)


        if(aeiou.includes(carattere)){
           contaVocali += 1;
        }
    }   

    return contaVocali
}

// Invoca la funzione qui e stampa il risultato in console
const risultato= getCount(word)
console.log("Le vocali sono:",risultato)

//Risultato atteso se si passa 'javascript': 3 (a, a, i)