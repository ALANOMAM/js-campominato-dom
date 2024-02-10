/* 
Consegna:
Copiamo la griglia fatta nella fase1 nella nuova repo e aggiungiamo la logica del gioco 
Il computer deve generare 16 numeri casuali e inserirli in un array, in base al range della difficoltà prescelta (se abbiamo scelto facile l'array conterrà numeri casuali da 1 a 100, se invece abbiamo scelto difficile l'array dovrà contenerne da 1 a 49): questi rappreseranno le posizioni delle nostre bombe.
Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
In seguito l'utente clicca su una cella:
 se il numero è presente nella lista dei numeri generati
  - abbiamo calpestato una bomba 
  - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
  La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba
*/



let pulsante = document.querySelector("#btn")
let num 
let numeroDiClicchi =[]

pulsante.addEventListener("click", function(){

  

 
  
    let griglia = document.querySelector("#grid")
    let livelli = document.querySelector("#levels")
   
    //mi resetta la tabella ogni volta che premo "gioca" cosi le tabelle non si aggiungano una sotto l'altra quando cambio livelli di difficolà
     griglia.innerHTML=""

 // mi cambia il numero di scatole a disposizione a seconda del livello     
if(livelli.value == "level1"){
     num = 100
     
}else if(livelli.value == "level2"){
    num = 81
}else{
  num=49
}
   
const randomNumbersArray = getRandom(16,num);



for(let i=0; i< num;i++){
    //creo i vari div   
   let scatole = document.createElement("div")
  
   //STILE PER LE SCATOLE DENTRO IL MIO GRID
   //collego la classe box ad ogni scatola per avere una prima stilizazione
   scatole.classList.add("box")
   
   //aggiungo anche le classi "easy" "medium" o "hard" alle mie scatole a seconda del livello 
   if(livelli.value == "level1"){
     scatole.className += " easy"  
  }else if(livelli.value == "level2"){
    scatole.className += " medium"
  }else{
    scatole.className += " hard"
  }

   
   //Iinserimento numeri in ogni box della mia griglie
 scatole.innerHTML = i+1 
console.log(scatole.innerHTML)


   // aggiungo event listener che mi identifica la box cliccata, fa cambiare backgroud e mi manda un messaggio in console
   scatole.addEventListener("click",function(){
   
   numeroDiClicchi.push(`la scatola clisccata è : ${Number(this.innerHTML)}`)
   console.log(numeroDiClicchi)

  
   
   //se il numero cliccato corrisponde ad un numero presente in array lo colora di rosso, altrimenti lo colora di azzuro
   if( randomNumbersArray.includes(Number(scatole.innerHTML)) ){
    this.classList.add("dead")
   }else{
    this.classList.add("alive")
   }
   
   /*
   if(numeroDiClicchi.length === (num-16)){
     prompt("hai vinto")
   } */



   })
   
   
   //appendo le scatole generate al contenitore grid
   griglia.append(scatole)
   
   }

 
  }) 



// creo una funzione che genera numeri casuali
function creatRandom (maxNumber){
   let randomNumber = Math.floor(Math.random()*maxNumber+1)

   return randomNumber
}



// creo una funzione che raccoglie i miei elementi random e li mette dentro in array
function getRandom (quantity, num){
const randomArray = []

while(randomArray.length < quantity/*16*/){
  const newNumber = creatRandom(num)
  

  //controllo se il numero appena generato è già presente dentro il nostro array
  if( ! randomArray.includes(newNumber)  ) {

    randomArray.push(newNumber)

}
   
}
console.log(randomArray)
 return randomArray
}


 //getRandom()
 //console.log(getRandom()) 
