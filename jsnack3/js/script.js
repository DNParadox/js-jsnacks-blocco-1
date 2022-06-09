// Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.


//  Definisci una const con valore 0 e che aumenti con il ciclo fuori quindi -> Funziona
    let datacalc = 0;
// Dammi un numero x 10 volte quindi ciclo for -> Funziona
for (let i = 0; i < 10; i++) {
    const userData = parseInt ( prompt ('Dimmi 10 volte un numero'));
    datacalc += userData;
}

    console.log(datacalc)


