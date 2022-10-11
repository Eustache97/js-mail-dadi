//creiamo un array di email
const emails = ["pincopallo@gmail.com", "pallopinco@mail.com", "marcopolo@hotmail.com"];

//prendiamo gli elemento html input e bottone
const userEmailInput = document.getElementById("email");
console.log(userEmailInput);
const submitBtn = document.getElementById("submit");
console.log(submitBtn);
//chiediamo all'utente di  inserire la sua email
alert("Inserisca l'email nell'apposito campo");
//Al click di submit
submitBtn.addEventListener("click", function() {
    //inizializziamo una variabile booleana
    let flag = false;
    //SE il campo dell'input è vuoto ALLORA alert"Campo vuoto"
    if(userEmailInput.value === ""){
        alert("Campo vuoto!")
     /*ALTRIMENTI creiamo un loop
     andiamo a controllare se l'email inserito dall'utente è presente nell'array, facciamo quindi una ricerca.
     finchè il contatore dell'array è minore della lunghezza dell'array continuamo la ricerca*/
    }else {
        for (let i = 0; i < emails.length; i++) {
            const element = emails[i];
            //SE il contenuto nella posizione deel contatore è uguale all'input dell'utente 
            //ALLORA la variabile booleana diventa true 
            if(element === userEmailInput.value){
                flag = "true";
                }
            }
            
            //ripulisco l'input
            
            //Alla fine del loop SE la variabile booleana è true
            //ALLORA alert"Benvenuto"
            if(flag === "true"){
                alert("Benvenuto!");
                userEmailInput.value = "";
            }else{
                userEmailInput.value = "";
                //ALTRIMENTI "utente non trovato", e gli chiediamo se è sicuro di essere registrato(si o no)"
                const userChoise = prompt("Utente non trovato! E' sicuro di essere registrato? Risponda con un 'si' o con un 'no'");
                //SE la risposta dell'utente è "si"
                if(userChoise === "si"){
                    //alert "riprova"
                    alert("Allora riprovi! Puoddarsi che ha semplicemente sbagliato a scrivere!");
                }else if(userChoise === "no"){
                    /* ALTRIMENTI SE la risposta è "no"
                     gli comunichiamo di inserire la sua email per registrarsi e una volta inserito 
                    aggiungiamo l'email all'array lo ringraziamo*/
                    const userMailSignUp = prompt("Può registrarsi inserendo qui la sua email!");
                    emails.push(userMailSignUp);
                    alert("Grazie mille! Adesso può loggarsi nell'apposito campo");
                }else{
                    // ALTRIMENTI gli comunichiamo che non ha scritto si o no
                    alert("Mi sa che non mi sta risposto come le ho chiesto di rispondere!");
                }
            }
}
})

        
        