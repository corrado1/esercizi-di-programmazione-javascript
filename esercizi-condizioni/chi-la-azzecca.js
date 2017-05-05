/*
  Chi l'azzecca?
  Scrivi un programma che generi un numero casuale compreso tra 1 e 100 (zero escluso).
  Successivamente prendi in input altri due numeri di due ipotetici utenti, e comunica se uno dei due ha azzeccato il numero casuale, in caso contrario quale dei due si è avvicinato di più al numero.
  Hint: Per generare un numero casuale utlizza la funzione javascript random, che restituisce un intervallo compreso tra 0 e 1 che necessita di essere convertito per il tuo intervallo.
  http://www.imparareaprogrammare.it
*/
var num1=58;
var num2=48;
var n = Math.random(0,100);
alert(n);
console.log(n);
var m=n*100;

c=Math.round(m);
console.log(c);
if (c==num1){console.log("giocatore 1 azzeca in pieno !!!")};
if (c==num2){console.log("giocatore 2 azzeca in pieno !!!")};
if (num1<c){var z =c-num1};
if (num1>c){var z =num1-c};
if (num2<c){var y =c-num2};
if (num2>c){var y =num2-c};
if (y>z){console.log("il giocatore n°1 vince con lo scarto di :"+z)};
if (y<z){console.log("il giocatore n°2 vince con lo scarto di :"+y)};
