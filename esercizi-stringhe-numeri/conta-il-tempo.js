/*
  Conta il tempo
  Scrivi un programma che prenda in input un numero di secondi e calcoli la quantità di ore, minuti e secondi corrispondenti, poi stampa il risultato. L'output avrà solo numeri interi.
  Esempio
    Input: 12560
    Output: 3 ore, 29 minuti e 20 secondi.
  http://www.imparareaprogrammare.it
*/
var input =12560;


var oree = (input/60)/60;
var ore=Math.floor(oree);
var minutii =(oree-ore)*60 ;
var minuti=Math.floor(minutii);
var secondii =(minutii-minuti)*60;
var secondi=Math.floor(secondii);
console.log ("ore :"+ ore);
console.log ("minuti :"+ minuti);
console.log ("secondi :"+ secondi);
