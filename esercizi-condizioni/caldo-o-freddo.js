/*
  Caldo o freddo
  Scrivi un programma che prenda in input sette valori relativi alle temperature della settimana e stabilisca la giornata più calda e quella più fredda.
  http://www.imparareaprogrammare.it
*/
var lun= 5;
var mar= 3;
var mer= 6;
var gio= -2;
var ven= 5;
var sab= 0;
var dom= -4;
if(lun<dom&&mar<dom&&mer<dom&&gio<dom&&ven<dom&&sab<dom){console.log("domenica è il giorno più caldo")};
if(lun<sab&&mar<sab&&mer<sab&&gio<sab&&ven<sab&&dom<sab){console.log("sabato è il giorno più caldo")};
if(lun<ven&&mar<ven&&mer<ven&&gio<ven&&sab<ven&&dom<ven){console.log("venerdì è il giorno più caldo")};
if(lun<gio&&mar<gio&&mer<gio&&ven<gio&&sab<gio&&dom<gio){console.log("giovedi è il giorno più caldo")};
if(lun<mer&&mar<mer&&gio<mer&&ven<mer&&sab<mer&&dom<mer){console.log("mercoledì è il giorno più caldo")};
if(lun<mar&&mer<mar&&gio<mar&&ven<mar&&sab<mar&&dom<mar){console.log("martedì è il giorno più caldo")};
if(mar<lun&&mer<lun&&gio<lun&&ven<lun&&sab<lun&&dom<lun){console.log("lunedì è il giorno più caldo")};

if(lun>dom&&mar>dom&&mer>dom&&gio>dom&&ven>dom&&sab>dom){console.log("domenica è il giorno più freddo")};
if(lun>sab&&mar>sab&&mer>sab&&gio>sab&&ven>sab&&dom>sab){console.log("sabato è il giorno più freddo")};
if(lun>ven&&mar>ven&&mer>ven&&gio>gio&&sab>gio&&dom>mer){console.log("mercoledì è il giorno più freddo")};
if(lun>mar&&mer>mar&&gio>mar&&ven>mar&&sab>mar&&dom>mar){console.log("martedì è il giorno più freddo")};
if(mar>lun&&mer>lun&&gio>
