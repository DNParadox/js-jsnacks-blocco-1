// Dammi un numero di 4 cifre
// Chiedi un numero di 4 cifre all’utente nel prompt
//  e calcola la somma di tutte le cifre che compongono il numero. (modificato) 

const userNumbers = prompt ('Dammi 4 Cifre', '3438')
let addizione = 0;
for (let i = 0; i < userNumbers.length; i++) {
    let thisNumbers = parseInt(userNumbers[i])
    console.log(thisNumbers);
    addizione += thisNumbers;
    console.log(addizione)
    
}

