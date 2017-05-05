/*
  Tanti numeri
  Scrivi un programma che dato un insieme di valori in un array, calcolai la media dei valori e restituisca in output tutti i valori minori della media.
  Stampa anche quanti sono i valori monori della media e quanti quelli maggiori.
  http://www.imparareaprogrammare.it
*/
var maggiori= 0;
var minori = 0;
var media =0;
var somma = 0;
var numeri =[8,28,6,87,90,100,23];
console.log(numeri);
console.log("n° di cifre nella variabile n°: "+numeri.length);
for (var i=0;i<numeri.length;i++){
    somma=somma+numeri[i];
}
media = somma/numeri.length;
console.log("la media è : "+media);

for (var a=0;a<numeri.length;a++){
   if (numeri[a]<media){console.log(numeri[a]);
      minori=minori+1;}
};
for (var b=0;b<numeri.length;b++){
   if (numeri[b]>media){
      maggiori=maggiori+1;}
}
  console.log(minori+" numeri sono sotto la media");
  console.log(maggiori+" numeri sono sopra la media");
