/*
  La calcolatrice
  Scrivi un programma che prenda tre input:
    - Due numeri
    - Una stringha che identifichi l'operazione da eseguire, es: "somma"
  Le operazioni supportate sono le suguenti:
    somma => +
    sottrazione => -
    moltiplicazione => *
    divisione => /
    modulo (solo tra interi) => %
    potenza => ^
    media => m
  Utilizza il costrutto Switch-Case mediante acquisizione di caratteri.
  http://www.imparareaprogrammare.it
*/
var primo =5;
var secondo =2;
var funz= "^";

switch (funz) {
  case"+": console.log("addizione "+(primo+secondo));
       break;
  case "-": console.log("sottrazione "+(primo-secondo));
       break;
  case "*": console.log("moltiplicazione "+(primo*secondo));
      break;
  case "/": console.log("divisione "+(primo/secondo));
      break;
  case "%": console.log("resto "+(primo%secondo));
      break;
 case "^": console.log("potenza "+(Math.pow(primo,secondo)));
      break;
  case "m": console.log("media "+((primo+secondo)/2));
      break;
  default: console.log("caso non contemplato");}
