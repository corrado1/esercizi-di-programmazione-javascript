/*
  Menu dei dolci
  Scrivi un programma stampi il seguente menu:
    MENU:
    1. Tiramisù
    2. Torta della nonna
    3. Cheesecake alla nutella
    4. Macedonia
  Inoltre, prenda in input il valore numerico della scelta.
  Se la scelta non è tra quelle elencate verrà stampata la scritta 'Dolce non disponibile' altrimenti verrà visualizzata la scelta effettuata 'Hai scelto il dolce X'.
  http://www.imparareaprogrammare.it
*/
var menù= "menù:";
var a ="1) tiramisù";
var b ="2) torta della nonna";
var c ="3) cheesecake alla nutella";
var d ="4) macedonia";
var scelta =8;
console.log(menù);
console.log(a);
console.log(b);
console.log(c);
console.log(d);
switch (scelta) {
  case 1:console.log("hai scelto :"+a);
    break;
  case 2:console.log("hai scelto :"+b);
    break;
  case 3:console.log("hai scelto :"+c);
    break;
  case 4:console.log("hai scelto :"+d);
    break;
  default:console.log("la tua scelta non è contemplata nel menù");
}
