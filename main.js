// Crea una funzione dichiarativa chiamata somma che accetta due numeri e restituisce la loro somma.

/* function somma(num1, num2) {
    return num1 + num2;
}

console.log(somma(3, 4));
console.log(somma(2, 5)); */

// Poi, definisci la stessa funzione somma ma come funzione anonima assegnata a una variabile

/* const somma = function (num1, num2) {
    return num1 + num2;
}

console.log(somma(1, 3)); */

// Quindi, riscrivi la funzione somma con la sintassi delle arrow functions.

/* const somma = (num1, num2) => console.log(num1 + num2);

somma(6, 9); */

// Crea una arrow function che calcola il quadrato di un numero.
// Definisci una funzione chiamata quadrato che accetta un numero e restituisce il suo quadrato in una sola riga.

const quadrato = (num) => console.log(num * num);

quadrato(7);

//Crea una funzione eseguiOperazione
//Definisci una funzione eseguiOperazione che accetta tre parametri: due numeri e una funzione operatore (callback). La funzione deve eseguire l'operazione fornita sui due numeri.

const somma = (num1, num2) => num1 + num2;

const sottrai = (num1, num2) => num1 - num2;

const moltiplica = (num1, num2) => num1 * num2;

const dividi = (num1, num2) => num1 / num2;

function eseguiOperazione(num1, num2, operatore) {
    return operatore(num1, num2)
};

console.log(eseguiOperazione(3, 9, somma));
console.log(eseguiOperazione(7, 4, sottrai));
console.log(eseguiOperazione(5, 6, moltiplica));
console.log(eseguiOperazione(36, 12, dividi));










