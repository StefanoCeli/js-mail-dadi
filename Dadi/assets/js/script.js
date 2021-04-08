//creo un prompt dove dico all'utente di inserire la parola "start" per iniziare a giocare,se la parola non corrisponde apparirà un messaggio di errore

var start_game = prompt('Scrivi start per poter giocare, il numero maggiore vince')

//creo una condizione per verificare se effettivamente l'utente abbia scritto start e dentro la condizione (se corretta) inizia il gioco,definisco fuori dalla condizione una variabile che userò poi all'interno per il messaggio da inserire,dentro la condizione invece definisco due variabili per assegnare i numeri casuali a utente e computer.

var msg;

if(start_game==="start"){
    var utente = Math.ceil((Math.random() * 6) );
    var cpu = Math.ceil((Math.random() * 6) );
    msg=" Il numero dell'utente è: " + utente +"." + "<br>Mentre quello del computer è: " + cpu + ".";
    if(utente>cpu){
        msg += "<br> COMPLIMENTI HAI VINTO!"
    }else if(utente===cpu){
        msg += "<br> Pareggio!"
        console.log(msg);
    } else{
        msg += "<br> Mi spiace ma hai perso."
    }
}else{
    msg="Se vuoi giocare ricarica la pagina e scrivi 'start' quando ti viene chiesto. ";
}
//faccio apparire su schermo il risultato del gioco richiamando l'id assegnato

document.getElementById("risultato").innerHTML= msg;