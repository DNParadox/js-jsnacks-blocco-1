// - Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari inseriscilo nell’array.

// l'array è vuoto
const odd = [];


// Chiediamo con ciclo for di inserire un numero -> 
for( let i = 0; i < 6; i++) {
    const userNumbers = parseInt( prompt ('Dimmi un numero'))
    console.log(userNumbers)

    // Se il numero è dispari, inseriamo il contenuto nell'array
    if (userNumbers % 2 !== 0) {
        odd.push(userNumbers)
        console.log(odd)
    } 
}