const fs = require('fs');

function creaAccount(nome, email, password) {
    // Leggi il file JSON esistente
    let datiUtenti = fs.readFileSync('user.json');
    let utenti = JSON.parse(datiUtenti);

    // Crea un nuovo oggetto utente
    let nuovoUtente = {
        nome: nome,
        email: email,
        password: password
    };

    // Aggiungi il nuovo utente all'array degli utenti
    utenti.push(nuovoUtente);

    // Converti l'array degli utenti in formato JSON
    let datiAggiornati = JSON.stringify(utenti, null, 2);

    // Scrivi i dati aggiornati nel file JSON
    fs.writeFileSync('user.json', datiAggiornati);

    console.log('Account creato con successo!');
}
