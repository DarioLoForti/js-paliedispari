// 1 - chiedo all'utente di scegliere tra pari o dispari

let pariDispari = prompt("inserisci se preferisci pari o dispari");
console.log(pariDispari);

// 2 - chiedo all'utende ti scegliere un numero tra 1 e 5

let numberUser = parseInt(prompt("inserisci un numero da 1 a 5"));
console.log(`USER ${numberUser}`);
// console.log(pariDispari, numberUser);

// 3 - genero un numero random da 1 a 5 per il pc
function numberRandom(){
    return Math.floor(Math.random() * 5 + 1);
}

let numberPc = numberRandom();
console.log(`PC ${numberPc}`);


// 4 - sommo i numeri ( inseriti dall'utente e generato random per il pc)
let result = 0;

function Somma(n_1, n_2){
    return n_1 + n_2;
}

result = Somma(numberUser, numberPc);
console.log(`SOMMA ${result}`);

//  5 - stabilisco se la somma è un numero pari o dispari.

function pari_o_dispari(som){

    if(som % 2 == 0 ){
        console.log(`${result} è Pari`);
        return "pari"
    }
    else{
        console.log(`${result} è Dispari`)
        return "dispari"
    }
}

let risultato = pari_o_dispari(result);

// 6 - dichiaro il vincitore

if(risultato && pariDispari == risultato){
    console.log("User win");
}
else if(risultato && pariDispari == risultato){
    console.log("User win");
}
else{
    console.log("PC win")
}
