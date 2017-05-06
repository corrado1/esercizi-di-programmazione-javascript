/*
  La tombola magica
  Scrivi un programma in cui dichiari un array di di 5 elementi e vi inserisca casualmente i valori da 1 a 90 senza ripetizioni.
  Permetti all’utente di effettuare una partita scegliendo 5 numeri a suo piacimento e verifica quanti sono presenti nella array principale, restituisci un risultato del tipo:
    1 numero uguale => estratto
    2 numeri uguali => ambo
    3 numeri uguali => terno
    4 numeri uguali => quaterna
    5 numeri uguali => cinquina
  In caso di vittoria dovrà essere stampato un messaggio adeguato a tua scelta, in caso di perdina dovrà essere concesso un nuovo tentativo senza una nuova estrazione.
  Hint: Per generare un numero casuale utlizza la funzione javascript random, che restituisce un intervallo compreso tra 0 e 1 che necessita di essere convertito per il tuo intervallo.
  http://www.imparareaprogrammare.it
*/
var schedina1=[58,2,63,12,41];
var schedina2=[5,84,16,34,53];
var estratti=[0,0,0,0,0,];
var vincita=[];
var tipoVincita=0;
for (var i=0;i<5;i++){
  var n = Math.random(0,100);
  alert(n);
  var num = n*90;
  num = Math.ceil(num);
 estratti[i]=num;
 if(num==estratti[0]&&num==estratti[1]&&num==estratti[2]&&num==estratti[3]&&
   num==estratti[4]){i--};
 }
 console.log(estratti);
 console.log(schedina1);
 //controllo schedina 1°numero
 for (a=0;a<5;a++){
   if (schedina1[0]==estratti[a]){ vincita.push(estratti[a])}}
 //controllo schedina 2°numero
 for (b=0;b<5;b++){
   if (schedina1[1]==estratti[b]){ vincita.push(estratti[b])}};
  //controllo schedina 3°numero
  for (c=0;c<5;c++){
    if (schedina1[2]==estratti[c]){vincita.push(estratti[c])}};
      //controllo schedina 4°numero
  for (d=0;d<5;d++){
     if (schedina1[3]==estratti[d]){vincita.push(estratti[d])}};
   //controllo schedina 5°numero
  for (e=0;e<5;e++){
     if (schedina1[4]==estratti[e]){vincita.push(estratti[e])}};
 console.log(vincita);
 // controllo del tipèo di vincita
 tipoVincita=vincita.length;
 var win=["estratto","ambo","terna","quaterna","cinquina"];
  if (tipoVincita==1){console.log("bravo hai fatto : "+ win[0])};
  if (tipoVincita==2){console.log("bravo hai fatto : "+ win[1])};
  if (tipoVincita==3){console.log("bravo hai fatto : "+ win[2])};
  if (tipoVincita==4){console.log("bravo hai fatto : "+ win[3])};
  if (tipoVincita==5){console.log("bravo hai fatto : "+ win[5])};
  // seconda prova controllo schedina 1°numero

  if (tipoVincita==0){console.log(schedina2);
    for (a=0;a<5;a++){
      if (schedina2[0]==estratti[a]){ vincita.push(estratti[a])}}
  //seconda prova controllo schedina 2°numero
    for (b=0;b<5;b++){
      if (schedina2[1]==estratti[b]){ vincita.push(estratti[b])}};
  //seconda prova controllo schedina 3°numero
     for (c=0;c<5;c++){
       if (schedina2[2]==estratti[c]){vincita.push(estratti[c])}};
 //seconda prova controllo schedina 4°numero
     for (d=0;d<5;d++){
        if (schedina2[3]==estratti[d]){vincita.push(estratti[d])}};
  //seconda prova controllo schedina 5°numero
     for (e=0;e<5;e++){
        if (schedina2[4]==estratti[e]){vincita.push(estratti[e])}};
    console.log(vincita);
    // controllo del tipo di vincita
    tipoVincita=vincita.length;
    var win=["estratto","ambo","terna","quaterna","cinquina"];
     if (tipoVincita==1)
     {console.log("bravo, al secondo tentativo hai fatto : "+ win[0])};
     if (tipoVincita==2)
     {console.log("bravo, al secondo tentativo hai fatto : "+ win[1])};
     if (tipoVincita==3)
     {console.log("bravo, al secondo tentativo hai fatto : "+ win[2])};
     if (tipoVincita==4)
     {console.log("bravo, al secondo tentativo hai fatto : "+ win[3])};
     if (tipoVincita==5)
     {console.log("bravo, al secondo tentativo hai fatto : "+ win[5])};

};
if(tipoVincita==0)
{console.log("mi dispiace ...noi hai vinto neanche con la seconda schedina")};
