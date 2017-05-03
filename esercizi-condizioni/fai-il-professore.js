/*
  Fai il professore
  Scrivi un programma che converte un voto numerico in un giudizio seguendo questi parametri:
    v < 18:  insufficiente
    18 < = v <21:  sufficiente
    21 < = v <24:  buono
    24 < = v <27:  distinto
    27 < = v <29:  ottimo
    v = 30:  eccellente
  Utilizza costrutto If.

  Variante
  Realizzare una versione con il costrutto Switch-Case.
  http://www.imparareaprogrammare.it
*/
var voto = 21 ;
switch (voto) {
  case 30: console.log("eccellente");
     break;
  case 27: console.log("ottimo");
    break;
  case 28: console.log("ottimo");
      break;
  case 29: console.log("ottimo");
      break;
  case 24: console.log("distinto");
      break;
  case 25: console.log("distinto");
      break;
  case 26: console.log("distinto");
      break;
  case 21: console.log("buono");
      break;
  case 22: console.log("buono");
      break;
  case 23: console.log("buono");
        break;
        case 20: console.log("sufficente");
        break;
        case 19: console.log("sufficente");
        break;
        case 18: cosole.log("sufficente");
        break;
      }
      if(voto>=30){console.log("non è un voto valido")}
      if(voto<18){console.log("insufficente")}
      if(voto<0){console.log("non è un voto valido")}
