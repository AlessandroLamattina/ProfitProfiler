const fs = require('fs');

function createUser(username, email) {
    // Leggi il contenuto del file user.json
    const users = JSON.parse(fs.readFileSync('user.json', 'utf8'));

    // Controlla se l'username o l'email sono già presenti
    const existingUser = users.find(user => user.username === username || user.email === email);
    if (existingUser) {
        console.log('Username o email già presenti');
        return;
    }

    // Crea un nuovo oggetto utente
    const newUser = {
        username,
        email
    };

    // Aggiungi il nuovo utente all'array degli utenti
    users.push(newUser);

    // Scrivi l'array aggiornato nel file user.json
    fs.writeFileSync('user.json', JSON.stringify(users));

    console.log('Utente creato con successo');
}

// Utilizzo della funzione
const username = 'nuovo_utente';
const email = 'nuovo_utente@example.com';
createUser(username, email);
// Ricevi le informazioni dal form nella pagina create_account.html
const form = document.getElementById('createAccountForm');
form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Ottieni i valori dei campi del form
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Controlla se la password soddisfa i requisiti
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
        console.log('La password deve essere di minimo 8 caratteri con almeno una maiuscola, una minuscola, un numero e un carattere speciale');
        return;
    }

    // Leggi il contenuto del file user.json
    const users = JSON.parse(fs.readFileSync('user.json', 'utf8'));

    // Controlla se l'username o l'email sono già presenti
    const existingUser = users.find(user => user.username === username || user.email === email);
    if (existingUser) {
        console.log('Username o email già presenti');
        return;
    }

    // Crea un nuovo oggetto utente
    const newUser = {
        username,
        email,
        password
    };

    // Aggiungi il nuovo utente all'array degli utenti
    users.push(newUser);

    // Scrivi l'array aggiornato nel file user.json
    fs.writeFileSync('user.json', JSON.stringify(users));

    console.log('Utente creato con successo');
});