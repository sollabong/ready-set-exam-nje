export const tasks = {
  // 1. FÉLÉV
  'an1': [
    { id: 'an1_1', question: "Számítsd ki az f(x)=x^2 deriváltját!", answer: "2x", explain: "A hatványfüggvény szabálya: (x^n)' = n*x^(n-1), így (x^2)' = 2x." },
    { id: 'an1_2', question: "Mi az f(x) = sin(x) deriváltja?", answer: "cos(x)", explain: "A szinuszfüggvény deriváltja a koszinuszfüggvény." },
    { id: 'an1_3', question: "Mennyi az f(x) = 5x + 3 függvény határértéke a végtelenben?", answer: "végtelen", explain: "Mivel a függvény lineáris és pozitív meredekségű, az értéke a végtelenbe tart." }
  ],
  'fiz1': [
    { id: 'fiz1_1', question: "Mi a Newton-féle II. törvény képlete?", answer: "F = m * a", explain: "Az erő az egyenlő a tömeg és a gyorsulás szorzatával." },
    { id: 'fiz1_2', question: "Mennyi a vákuumbeli fénysebesség?", answer: "kb. 300 000 km/s", explain: "A fénysebesség pontos értéke 299 792 458 m/s." },
    { id: 'fiz1_3', question: "Mi a munka (W) mértékegysége?", answer: "Joule (J)", explain: "A munka SI mértékegysége a Joule." }
  ],
  'prog1': [
    { id: 'prog1_1', question: "Mivel deklarálunk egy egész típusú változót C++-ban?", answer: "int", explain: "Az 'int' kulcsszóval hozunk létre egész számokat tároló változót." },
    { id: 'prog1_2', question: "Mi az 'endl' funkciója?", answer: "Sor vége és puffer ürítése", explain: "Az 'endl' kiír egy újsor karaktert és kiüríti a kimeneti puffert." },
    { id: 'prog1_3', question: "Mi a mutató (pointer) lényege?", answer: "Memóriacím tárolása", explain: "A pointer egy olyan változó, amely egy másik változó memóriacímét tárolja." }
  ],

  // 2. FÉLÉV
  'an2': [
    { id: 'an2_1', question: "Mi a határozatlan integrálja az f(x)=1/x függvénynek?", answer: "ln|x| + C", explain: "Az 1/x primitív függvénye a természetes logaritmus." },
    { id: 'an2_2', question: "Mire használjuk a parciális integrálást?", answer: "Szorzat alakú függvények integrálására", explain: "Az $\int u \cdot v' = uv - \int u' \cdot v$ képletet használjuk." },
    { id: 'an2_3', question: "Mi az f(x)=e^x függvény integrálja?", answer: "e^x + C", explain: "Az exponenciális függvény integrálja önmaga." }
  ],
  'vill': [
    { id: 'vill_1', question: "Mi az Ohm-törvény képlete?", answer: "U = I * R", explain: "A feszültség egyenlő az áramerősség és az ellenállás szorzatával." },
    { id: 'vill_2', question: "Mi az elektromos teljesítmény (P) kiszámításának módja?", answer: "P = U * I", explain: "A teljesítmény a feszültség és az áramerősség szorzata." },
    { id: 'vill_3', question: "Mi a váltakozó áram rövidítése?", answer: "AC", explain: "Az AC (Alternating Current) jelöli a váltakozó áramot." }
  ],
  'prog2': [
    { id: 'prog2_1', question: "Mi a különbség a struct és a class között C++-ban?", answer: "Az alapértelmezett láthatóság", explain: "A struct publikus, a class pedig privát alapértelmezett láthatósággal rendelkezik." },
    { id: 'prog2_2', question: "Mi a konstruktor?", answer: "Objektum inicializáló függvény", explain: "A konstruktor az objektum létrejöttekor hívódik meg." },
    { id: 'prog2_3', question: "Mi a polimorfizmus?", answer: "Többalakúság", explain: "Különböző osztályok objektumai azonos interfészen keresztül érhetőek el." }
  ],

  // 3. FÉLÉV
  'adat': [
    { id: 'adat_1', question: "Mi az SQL jelentése?", answer: "Structured Query Language", explain: "Relációs adatbázisok kezelésére szolgáló nyelv." },
    { id: 'adat_2', question: "Mire való a SELECT parancs?", answer: "Adatok lekérdezésére", explain: "A SELECT utasítással válogathatunk ki rekordokat az adatbázisból." },
    { id: 'adat_3', question: "Mi a Primary Key?", answer: "Elsődleges kulcs", explain: "Egyedi azonosító egy táblán belüli rekordhoz." }
  ],
  'valsz': [
    { id: 'valsz_1', question: "Mi a valószínűség értéktartománya?", answer: "[0, 1]", explain: "Egy esemény bekövetkezésének valószínűsége 0 és 1 közötti szám." },
    { id: 'valsz_2', question: "Mi a független esemény?", answer: "Ha egyik hatása nincs a másikra", explain: "A két esemény együttes valószínűsége a szorzatukkal egyenlő." },
    { id: 'valsz_3', question: "Mennyi az eseménytér (biztos esemény) valószínűsége?", answer: "1", explain: "A biztosan bekövetkező esemény valószínűsége mindig 1." }
  ],
  'ang2': [
    { id: 'ang2_1', question: "Mi a 'deadlock' magyar jelentése?", answer: "Holtpont", explain: "Informatikában két folyamat egymásra várakozik, így megáll a rendszer." },
    { id: 'ang2_2', question: "Hogyan mondjuk angolul, hogy 'szoftverfejlesztő'?", answer: "Software Developer", explain: "A fejlesztőt developernek hívjuk." },
    { id: 'ang2_3', question: "Mi az 'input' ellentéte?", answer: "Output", explain: "A bemenetet 'inputnak', a kimenetet 'outputnak' nevezzük." }
  ],

  // 4. FÉLÉV
  'web1': [
    { id: 'web1_1', question: "Mire való a PHP?", answer: "Szerveroldali szkriptek írására", explain: "A PHP egy szerveroldali programozási nyelv webfejlesztéshez." },
    { id: 'web1_2', question: "Mi a MySQL szerepe?", answer: "Adatbázis-kezelés", explain: "A MySQL egy népszerű relációs adatbázis-kezelő rendszer." },
    { id: 'web1_3', question: "Mi a JavaScript feladata a böngészőben?", answer: "Dinamikus tartalom létrehozása", explain: "A JavaScript teszi interaktívvá és élővé a weboldalakat." }
  ],
  'irtech': [
    { id: 'irtech_1', question: "Mi az automatika célja?", answer: "Folyamatok emberi beavatkozás nélküli irányítása", explain: "Visszacsatolt rendszerekkel elérni a kívánt kimeneti értéket." },
    { id: 'irtech_2', question: "Mi a PID szabályozó?", answer: "Arányos-integráló-differenciáló", explain: "Egy gyakran használt visszacsatolt szabályozási algoritmus." },
    { id: 'irtech_3', question: "Mi az alapjel?", answer: "A kívánt érték", explain: "Az a célkitűzés, amelyet a szabályozási körnek el kell érnie." }
  ],
  'infbizt': [
    { id: 'infbizt_1', question: "Mi az adathalászat (phishing)?", answer: "Személyes adatok csalással való megszerzése", explain: "Hamis e-mailekkel vagy weboldalakkal kérik el a felhasználók adatait." },
    { id: 'infbizt_2', question: "Mi a titkosítás (encryption)?", answer: "Adatok olvashatatlanná tétele kulccsal", explain: "Az adatokat algoritmusok segítségével titkosítjuk a védelem érdekében." },
    { id: 'infbizt_3', question: "Mi a kétfaktoros hitelesítés?", answer: "Két különböző típusú azonosítás", explain: "Pl. jelszó + SMS kód vagy ujjlenyomat használata." }
  ]
};

export const semesters = [
  {
    id: 1,
    name: "I. FÉLÉV",
    subjects: [
      { id: 'an1', name: 'ANALÍZIS I.' },
      { id: 'fiz1', name: 'FIZIKA' },
      { id: 'prog1', name: 'PROGRAMOZÁS II. (C++)' },
    ]
  },
  {
    id: 2,
    name: "II. FÉLÉV",
    subjects: [
      { id: 'an2', name: 'ANALÍZIS II.' },
      { id: 'vill', name: 'VILLAMOSSÁGTAN' },
      { id: 'prog2', name: 'PROGRAMOZÁS II. (C++)' },
    ]
  },
  {
    id: 3,
    name: "III. FÉLÉV",
    subjects: [
      { id: 'adat', name: 'ADATBÁZISOK' },
      { id: 'valsz', name: 'VALÓSZÍNŰSÉGSZÁMÍTÁS' },
      { id: 'ang2', name: 'SZAKMAI ANGOL II.' },
    ]
  },
  {
    id: 4,
    name: "IV. FÉLÉV",
    subjects: [
      { id: 'web1', name: 'WEBPROGRAMOZÁS I. (PHP, MYSQL, JAVASCRIPT)' },
      { id: 'irtech', name: 'IRÁNYÍTÁSTECHNIKA' },
      { id: 'infbizt', name: 'INFO BIZTONSÁG' },
    ]
  }
];