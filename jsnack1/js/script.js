// Crea due tag div con due id diversi:
// un div avrà il testo colorato di rosso mentre l’altro di verde.
// Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e
// in verde i numeri pari.

// Creo un array contenti dei numeri -> Funziona
const myNumbers = [1,2,3,4,5,6,7,8,9,10]
console.log(myNumbers);

// srotolo l'array per controllare i numeri
for (let i = 0; i < myNumbers.length; i++) {
    let controlloArray = myNumbers[i]
 
    let evenOrOdd;
    // Se i numeri sono pari o dispari andranno in uno dei due div
    if(controlloArray  % 2 === 0) {
        console.log('pari',controlloArray);
        document.getElementById('green').innerHTML += controlloArray + " "

    } else if (controlloArray % 2 !== 0) {
        console.log('dispari',controlloArray)
        document.getElementById('red').innerHTML += controlloArray + " "
    }

}

     
    

