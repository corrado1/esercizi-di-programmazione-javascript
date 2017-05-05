/*
  Operazioni tra array
  Scrivi un programma che dichiari 2 array di 10 elementi interi e li riempia con numeri casuali da 1 a 10.
  Il programma prende in input dall'utente il tipo di operazione aritmetica da effettuare, una delle seguenti:
    addizione
    sottrazione
    moltiplicazione
    divisione
  Ed esegue il calcolo tra ogni elemento dei due array salvando ciascun risultato in un terzo array di appoggio.
  Hint: Per generare un numero casuale utlizza la funzione javascript random, che restituisce un intervallo compreso tra 0 e 1 che necessita di essere convertito per il tuo intervallo.
  http://www.imparareaprogrammare.it
*/
var input1= ["","","","","","","","","",""];
var input2= ["","","","","","","","","",""];
var input3= ["","","","","","","","","",""];
var volte = 10;
var n = 0; // variabile random *10
var num = 0;
var segno = "+";
//funzione random 1°array
for (var i=0;i<volte;i++){
  var n = Math.random(0,100);
  alert(n);
  var num = n*10;
  num = Math.ceil(num);
  input1[i]=num;};
  console.log(input1);
  //funzione random 2° array
  for (var a=0;a<volte;a++){
    var n = Math.random(0,100);
    alert(n);
    var num = n*10;
    num = Math.ceil(num);
    input2[a]=num;};
    console.log(input2);
// riempimento 3° array
    switch (segno) {
      case "+":
        for(b=0;b<10;b++){input3[b]=input1[b]+input2[b]};
         break;
      case "-":
        for(b=0;b<10;b++){input3[b]=input1[b]-input2[b]};
          break;
      case "*":
        for(b=0;b<10;b++){input3[b]=input1[b]*input2[b]};
          break;
      case"/":
        for(b=0;b<10;b++){input3[b]=input1[b]/input2[b]};
          break;
      default :console.log("operazione aritmetica non valida");

  }
  console.log(input3);
