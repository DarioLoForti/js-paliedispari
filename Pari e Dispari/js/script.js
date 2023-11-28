// 1 - chiedo all'utente di scegliere tra pari o dispari

let pariDispari = prompt("inserisci se preferisci pari o dispari");
console.log(pariDispari);

// 2 - chiedo all'utende ti scegliere un numero tra 1 e 5

let numberUser = parseInt(prompt("inserisci un numero da 1 a 5"));
console.log(numberUser);
// console.log(pariDispari, numberUser);

// 3 - genero un numero random da 1 a 5 per il pc
function numberRandom(){
    return Math.floor(Math.random() * 5 + 1);
}

let numberPc = numberRandom();
console.log(numberPc);


// 4 - sommo i numeri ( inseriti dall'utente e generato random per il pc)
let result = 0;

function Somma(n_1, n_2){
    result = n_1 + n_2;
}
Somma(numberUser, numberPc);
console.log(result);

//  5 - stabilisco se la somma è un numero pari o dispari.
function pari_o_dispari(Result){

    if(Result % 2 == 0 ){
        console.log("Pari");
    }
    else{
        console.log("dispari")
    }
    
}

pari_o_dispari(result);

