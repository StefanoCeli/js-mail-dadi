// faccio un prompt per chiedere la mail all'utente

var user_mail= prompt("Inserisci la tua mail per verificare l'accesso");

// creo un array di e-mail che userò per confrontare con quella inserita dall'utente

array_mail= ['rossi-fabio@gmail.com','pino.dei.pini@live.it','gianluca87@gmail.com','valerio_mattei@libero.it','federica-de-angelis@gmail.com']

//definisco una variabile per confrontare i dati inseriti dall'utente con quelli presenti nel computer e faccio un ciclo per verificare se corrispondono o meno

mail_to_found=false;

for(var i=0; i < array_mail.length; i++){
    var mail=array_mail[i]
    console.log(mail)

    if(user_mail===mail){
        mail_to_found=true;
        console.log(mail_to_found);
    }
}
//definisco una variabile vuota per il messaggio di autorizzazione (che andrò poi a riempire in base all'esito), in modo che se positiva sciverà un testo, mentre se negativa ne scriverà un altro.

var autorizzazione=""

if(mail_to_found){
    autorizzazione="Sei autorizzato, puoi entrare.";
    console.log(autorizzazione)
}else{
   autorizzazione = "Tu non puoi passare! (Gandalf non vuole mi spiace)"
   console.log(autorizzazione)
}

document.getElementById('accesso').innerHTML= autorizzazione;