// 1 - chiedo all'utente di inserire una parola
let parola = prompt("inserisci una parola");


// definisco funzione

function palidroma(text){

    // tramite ciclo for confronto i caratteri della parola inserita dall'utente con il reverse

    for(let i=0; i<text.length; i++){ 
        let reverseText = (text.split('').reverse().join(''));

        if(parola == reverseText){
            console.log(`${parola} "La parola è palindroma"`);
        }
        else{
            console.log(`${parola} "La parola non è palindroma"`);
        }
    }
    
}

 palidroma(parola);

