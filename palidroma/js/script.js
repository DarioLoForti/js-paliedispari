// 1 - chiedo all'utente di inserire una parola
let parola = prompt("inserisci una parola");


// definisco funzione

function palidroma(text){

    // tramite ciclo for confronto i caratteri della parola inserita dall'utente con il reverse

    
    let reverseText = (text.split('').reverse().join(''));

    if(text == reverseText){
        console.log(`${text} "La parola è palindroma"`);
    }
    else{
        console.log(`${text} "La parola non è palindroma"`);
    }
    
    
}

 palidroma(parola);

