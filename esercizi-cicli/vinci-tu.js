/*
  Vinci tu!
  Scrivi un programma che simula un gioco di dadi tra due utenti, prendi in input il numero di quanti tiri effettuare per ciascun giocatore (N), dopodiché ogni utente tira N volte un dado a sei facce.
  Stampa il vincitore che ha totalizza più punti.
  http://www.imparareaprogrammare.it
*/
var somma2=0;
var somma1=0;
var volte = 3;
for (var i=0;i<volte;i++){
  var n = Math.random(0,100);
  alert(n);
  var num = n*6;
  num = Math.ceil(num);
 console.log( "tiri giocatore 1 :"+num);
var somma1=somma1+num;
}
console.log("somma giocatore 1:"+somma1);
for (var i=0;i<volte;i++){
  var n = Math.random(0,100);
  alert(n);
  var num = n*6;
  num = Math.ceil(num);
 console.log( "tiri giocatore 2 :"+num);
var somma2=somma2+num;
}
console.log("somma giocatore 2 :"+somma2);
if (somma2>somma1){console.log("il giocatore n°2 vince la mano in : "+volte+" tiri")};
if (somma2<somma1){console.log("il giocatore n°1 vince la mano in : "+volte+" tiri")};
if (somma2==somma1){console.log("mano patta in: "+volte+" tiri")};
