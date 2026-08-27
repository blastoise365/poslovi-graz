// Osiguranje — Lehre i ulazne pozicije, Graz.
// Podaci prikupljeni 27.08.2026. Proveriti pre kontakta — Lehrstelle se brzo popune.
//
// PROVERENO 27.08.2026: linkovi otvoreni, mejl domeni imaju MX zapis, kontakti upoređeni
// sa zvaničnim sajtovima. Šta je potvrđeno stoji u polju "provereno".
// PAŽNJA na AMS linkove (jobs.ams.at): stranica se učitava JavaScript-om, pa se sadržaj
// oglasa ne može automatski proveriti — link se otvori i kad oglas više ne postoji.
// Kod GRAWE, UNIQA i Wiener Städtische zvanični sajt NE prikazuje otvoreno mesto za
// Štajersku, pa se prvo zove/piše kontakt osoba i pita za sledeći termin.
//
// kontaktNas -> osoba za koju po imenu pretpostavljam da govori naš jezik. PRETPOSTAVKA, nije potvrđeno.
// kontaktAlt -> rezervni kontakt ili zvanična mejl adresa firme.
// lehre: true -> kartica dobija LEHRE oznaku i može se sortirati po tome.

const KLJUC = "poslovi-graz-versicherung-v1";

const POSLOVI = [
  {
    id: "grawe-gd-graz",
    firma: "GRAWE — Grazer Wechselseitige Versicherung AG",
    pozicija: "Kundenberater:in Versicherung · Kundencenterkraft Innendienst · Versicherungssachbearbeiter:in",
    link: "https://jobs.ams.at/public/emps/jobs/f7d87226-7c9e-35e4-abf9-7f553b6d639d",
    kontakt: "Eva Maria Glitzner, MA — Recruiting & Personalentwicklung",
    kontaktNas: { ime: "Ana Ilic", uloga: "Repräsentantin, Kundencenter Graz Ost", email: "ana.ilic@grawe.at" },
    kontaktAlt: "Eva Glitzner: eva.glitzner@grawe.at · 0316/8037-6817 · Kundencenter Herrengasse: +43 316 8037 6222 · inicijativna prijava: grawe.at/karriere/initiativbewerbung-kb/",
    email: "eva.glitzner@grawe.at",
    telefon: "0316 8037-6817",
    adresa: "Herrengasse 18–20, 8010 Graz (Generaldirektion, sam centar)",
    udaljenost: "Graz",
    plata: "od 32.294,97 € bruto godišnje, moguća viša",
    pocetak: "odmah",
    lehre: false,
    preporuka: 5,
    kununu: "https://www.kununu.com/at/search?q=Grazer+Wechselseitige",
    provereno:
      "27.08.2026: Eva Maria Glitzner, MA potvrđena kao Recruiting & Personalentwicklung u GRAWE, mejl eva.glitzner@grawe.at tačan. Plata od 32.294,97 € bruto godišnje potvrđena iz oglasa. Adresa Herrengasse 18–20 tačna (ulaz Jungferngasse 4). Stranica initiativbewerbung-kb postoji. IZMENJENO: kao „naš jezik“ kontakt sada stoji Ana Ilic (Graz Ost) jer je njen mejl potvrđen na sajtu — ranije je tu bila Jovana Cvjetković, koju nisam našao ni na jednoj od 5 graških GRAWE kancelarija. Telefon 0316/8037-6817 nije potvrđen (8037 je centrala GRAWE, lokal nije proveren).",
    napomena:
      "NAJVAŽNIJA ADRESA. Centrala cele firme je u Grazu na Herrengasse — nije filijala nego glavna kuća, tu su sva odeljenja i tu se otvaraju ulazne pozicije. Trenutno otvoreno: Kundenberater, Kundencenterkraft Innendienst, Versicherungssachbearbeiter i asistencija direktora. Imaju i stalnu opciju „Initiativbewerbung für den Innendienst“ (grawe.at/karriere/initiativbewerbung-kb/) — to je pravi put ako trenutno nema oglasa. Svi oglasi: grawe.at/karriere/jobs/",
    vecKontaktirano: false,
  },
  {
    id: "uniqa-lehre-stmk",
    firma: "UNIQA Österreich Versicherungen AG",
    pozicija: "LEHRE Versicherungskaufmann/-frau — pitati Ulrike Graf za sledeći termin u Štajerskoj",
    link: "https://careers.uniqagroup.com/go/Lehre/9516401/",
    kontakt: "Ulrike Graf — zadužena za Lehre u Štajerskoj",
    kontaktAlt: "Zvanično: ulrike.graf@uniqa.at · prijava preko careers.uniqagroup.com",
    email: "ulrike.graf@uniqa.at",
    telefon: null,
    adresa: "Landesdirektion Steiermark, Graz",
    udaljenost: "Graz",
    plata: "1. godina 1.018,74 € · 2. godina 1.268,18 € · 3. godina 1.688,45 € bruto/mes.",
    pocetak: "obično 1. septembar",
    lehre: true,
    preporuka: 5,
    kununu: "https://www.kununu.com/at/search?q=UNIQA",
    provereno:
      "27.08.2026 sa uniqa.at/versicherung/karriere/lehre — plate POTPUNO TAČNE: 1. godina 1.018,74 €, 2. godina 1.268,18 €, 3. godina 1.688,45 €; traje 3 godine; uslovi: pozitivan Pflichtschulabschluss, dobar nemački, najmanje 17 godina. Ulrike Graf potvrđena kao osoba za Lehre u Štajerskoj, ulrike.graf@uniqa.at tačan. ALI: na careers.uniqagroup.com trenutno je otvorena SAMO JEDNA Lehrstelle u celoj Austriji i ona je u Innsbruck-u (Tirol) — za Štajersku nema otvorenog mesta. Zato je pozicija preformulisana.",
    napomena:
      "NAJBOLJI PUT ZA LEHRE. Jedina firma gde sam našao imenovanu osobu zaduženu baš za učenike u Štajerskoj. Uslovi: završena obavezna škola, nemački, najmanje 17 godina. Traje 3 godine, radi se i u kancelariji i na terenu, dobija mentora. Piši Ulrike Graf direktno i pitaj za sledeći termin — trenutno NEMA otvorenog mesta za Štajersku (jedino otvoreno je Innsbruck), pa je ovo prijava za sledeći upis, ne za oglas.",
    vecKontaktirano: false,
  },
  {
    id: "greco-graz",
    firma: "GrECo International AG (maklerska kuća)",
    pozicija: "Versicherungstechniker:in Graz (potvrđeno) · LEHRE 1.026 €/mes. (grad nije naveden)",
    link: "https://greco.services/freie-stellen/",
    kontakt: "Kancelarija Graz (ime nije objavljeno na sajtu)",
    kontaktAlt: "Slobodne Lehrstelle: greco.services/karriere/freie-lehrstellen/ · centrala +43 5 04 04-0",
    email: "career@greco.services",
    telefon: null,
    adresa: "Hauptplatz, 8010 Graz (glavni trg)",
    udaljenost: "Graz",
    plata: "Lehre 1.026 € bruto/mes.",
    pocetak: "po dogovoru",
    lehre: true,
    preporuka: 5,
    kununu: "https://www.kununu.com/at/search?q=GrECo",
    provereno:
      "27.08.2026 sa greco.services: „Versicherungstechniker:in | Graz | Vollzeit“ je POTVRĐENO otvoren. Lehre 1.026 € bruto u prvoj godini potvrđeno. DOPUNJEN mejl career@greco.services (pre je bilo prazno). ALI: na Lehrstellen stranici ne piše koji su gradovi — Graz nije izričito naveden, a Kundenbetreuer:in Innendienst mesta su sva u Beču. Sajt vraća 429 na automatsko čitanje, spisak proveriti ručno.",
    napomena:
      "Jedna od retkih firmi koja OTVORENO drži rubriku „Freie Lehrstellen“ i istovremeno širi tim u Grazu na Hauptplatzu. Makler, ne osiguravajuća kuća — radi za klijenta prema svim osiguranjima, pa se nauči više nego kod jednog osiguravatelja. Otvoreno i Versicherungstechniker:in Graz. Sajt blokira automatsko čitanje pa tačan spisak proveriti ručno na greco.services/freie-stellen/",
    vecKontaktirano: false,
  },
  {
    id: "merkur-graz",
    firma: "Merkur Versicherung AG",
    pozicija: "Versicherungsberater:in Graz — 2.500 € fiksno + provizija",
    link: "https://merkur.recruitee.com/o/versicherungsberaterin-graz-1",
    kontakt: "Martin Auer, MSc — Human Resources",
    kontaktAlt: "Prijava isključivo preko merkur.recruitee.com · +43 316 80 34-2223",
    email: null,
    telefon: "+43 316 8034-2223",
    adresa: "Conrad-von-Hötzendorf-Straße 84, 8010 Graz (Merkur Campus)",
    udaljenost: "Graz",
    plata: "2.500 € bruto/mes. fiksno u prvoj godini + provizija (40h)",
    pocetak: "odmah",
    lehre: false,
    preporuka: 4,
    kununu: "https://www.kununu.com/at/search?q=Merkur+Versicherung",
    provereno:
      "27.08.2026 iz samog oglasa na merkur.recruitee.com — SVE TAČNO: Versicherungsberater:in Graz, Merkur Campus, Conrad-von-Hötzendorf-Straße 84, 2.500 € bruto fiksno u prvoj godini + provizija, 40 h, Vertrieb/Außendienst, telefon +43 316 80 34-2223. DOPUNJENO ime: kontakt osoba je Martin Auer, MSc (HR).",
    napomena:
      "Druga velika osiguravajuća kuća sa centralom u Grazu. Ulazna pozicija u prodaji sa pristojnim fiksom od 2.500 € — ne traži se prethodno iskustvo u osiguranju. Na karijernoj stranici stoji i rubrika za Lehre, ali trenutno nema otvorene učeničke pozicije — vredi poslati inicijativnu prijavu preko portala i pitati za sledeći termin.",
    vecKontaktirano: false,
  },
  {
    id: "wiener-staedtische-lehre",
    firma: "Wiener Städtische Versicherung AG (Vienna Insurance Group)",
    pozicija: "LEHRE Versicherungskaufmann/-frau — mesto rada Leibnitz",
    link: "https://jobs.ams.at/public/emps/jobs/c54b580d-3100-3124-b985-c9cf7187549a",
    kontakt: "Landesdirektion Steiermark, Graz",
    kontaktAlt: "Direkcija Štajerska: ld-stmk@staedtische.co.at · +43 50 350-43600 (Landesdirektor Michael Witsch, m.witsch@wienerstaedtische.at) · b.lendl mob. +43 664 60139-66214",
    email: "b.lendl@wienerstaedtische.at",
    telefon: "+43 50 350-66214",
    adresa: "Rad: Sailergasse 14, 8430 Leibnitz · prijava: Landesdirektion Steiermark, Brockmanngasse 32, 8010 Graz",
    udaljenost: "Leibnitz ~35 km",
    plata: "1.202,94 € bruto/mes. u prvoj godini (na karriere.at aktuelni oglasi pišu 1.246,25 € — proveriti)",
    pocetak: "po dogovoru",
    lehre: true,
    preporuka: 3,
    kununu: "https://www.kununu.com/at/search?q=Wiener+St%C3%A4dtische",
    provereno:
      "27.08.2026: adresa direkcije Brockmanngasse 32, 8010 Graz potvrđena. Format mejla firme potvrđen kao ime.prezime skraćeno (m.witsch@, a.wallner@), pa je b.lendl@wienerstaedtische.at ispravno napisan — ali tu osobu nisam mogao potvrditi. ALI: na karriere.at Wiener Städtische trenutno ima 5 otvorenih Lehre mesta (Feldkirch, St. Pölten, Innsbruck, Salzburg, Linz) i NI JEDNO u Štajerskoj ni u Leibnitz-u; aktuelna Lehre plata je 1.246,25 €, ne 1.202,94 €. Oglas postoji samo na AMS-u i nije se mogao proveriti. Ocena spuštena sa 4 na 3. Sigurniji put je direkcija: ld-stmk@staedtische.co.at, +43 50 350-43600.",
    napomena:
      "PAŽNJA: mesto rada je Leibnitz, ne Graz — oko 35 km, ali ima direktan voz iz Graza (~25 min). Uvrstio sam je jer je ovo bila jedina Lehrstelle u osiguranju u Štajerskoj koju sam našao — ali provera je pokazala da je vidi samo AMS, a zvanični spisak firme je ne prikazuje, pa je moguće da je već popunjena. Prijava i kontakt idu preko direkcije u Grazu. Ako mu Leibnitz ne odgovara, svejedno vredi pisati — direkcija zna gde se još otvaraju mesta.",
    vecKontaktirano: false,
  },
  {
    id: "riedenbauer-graz",
    firma: "Riedenbauer Consulting GmbH (posreduje za osiguranja)",
    pozicija: "Innendienst · (Young-)Professionals · Schadensabwicklung — Graz",
    link: "https://jobs.ams.at/public/emps/jobs/a6b7c76f-f2c7-3683-b2fd-b8c4d94c3a40",
    kontakt: "Mag. Martin Hoffmann, MA — zadužen za prijave",
    kontaktAlt: "Nastupaju kao „professionals4you“ — professionals4you.at/karriere/ · inicijativna prijava: karriere.professionals4you.at",
    email: "office@professionals4you.at",
    telefon: "+43 664 2213227",
    adresa: "Kratkystraße 2, 8020 Graz",
    udaljenost: "Graz",
    plata: "zavisi od pozicije",
    pocetak: "odmah",
    lehre: false,
    preporuka: 4,
    kununu: "https://www.kununu.com/at/search?q=Riedenbauer+Consulting",
    provereno:
      "27.08.2026: adresa Kratkystraße 2, 8020 Graz potvrđena, Mag. Martin Alfred Hoffmann, MA potvrđen kao direktor zadužen za posredovanje radne snage. DOPUNJENO: firma javno nastupa pod imenom „professionals4you“ — office@professionals4you.at, +43 664 2213227 (pre su mejl i telefon bili prazni). Domen riedenbauer.at nema MX zapis, tako da na njega nema smisla pisati. Tri otvorene pozicije vide se samo na AMS-u i nisu potvrđene.",
    napomena:
      "Nije osiguravajuća kuća nego kadrovska agencija koja popunjava mesta u osiguranjima po Grazu — drži tri otvorene pozicije odjednom (kancelarija, ulazne pozicije za mlade, obrada šteta). Prednost: jedna prijava, a oni je nose ka više poslodavaca. Traže isključivo onlajn prijavu. Dobar potez rano, jer preko njih se čuje i za mesta koja nisu javno objavljena.",
    vecKontaktirano: false,
  },
  {
    id: "generali-stmk",
    firma: "Generali Versicherung AG — Landesdirektion Steiermark",
    pozicija: "LEHRE Versicherungskauffrau/-mann (program) + ulazne pozicije",
    link: "https://www.generali.at/karriere/lehrlingsausbildung/",
    kontakt: "Ursula Dangl — Lehrlingsbeauftragte (centrala Beč)",
    kontaktAlt: "Direkcija Štajerska: office.stmk.at@generali.com · +43 316 8056",
    email: "office.stmk.at@generali.com",
    telefon: "+43 316 8056",
    adresa: "Waagner-Biro-Straße 102, 8020 Graz",
    udaljenost: "Graz",
    plata: "14.775,74 € bruto godišnje u prvoj godini (3 godine, 38,5 h)",
    pocetak: "1. septembar",
    lehre: true,
    preporuka: 3,
    kununu: "https://www.kununu.com/at/search?q=Generali+Versicherung",
    provereno:
      "27.08.2026 — SVE TAČNO: plata 14.775,74 € bruto u prvoj godini, 3 godine, 38,5 h, Ursula Dangl kao Lehrlingsbeauftragte (+43 1 53401 11580), direkcija Waagner-Biro-Straße 102, 8020 Graz, office.stmk.at@generali.com, +43 316 8056, radno vreme pon–čet 08–16, pet 08–13.",
    napomena:
      "Ima razrađen program za učenike na nivou cele Austrije, ali trenutno NEMA objavljenu Lehrstelle za Graz — otvorene su bile Innsbruck i Bregenz. Zato: pisati direkciji u Grazu (office.stmk.at@generali.com) i pitati za sledeći termin, a po potrebi zvati i Ursulu Dangl u centrali (+43 1 53401 11580). Direkcija radi pon–čet 08–16, pet 08–13.",
    vecKontaktirano: false,
  },
  {
    id: "allianz-donau-zurich-graz",
    firma: "Allianz · DONAU · Zurich · Helvetia — filijale u Grazu",
    pozicija: "Inicijativna prijava za Lehre i ulazne pozicije",
    link: null,
    kontakt: "—",
    kontaktAlt: "Kontakte uzeti sa karijernih stranica svake firme",
    email: null,
    telefon: null,
    adresa: "Sve imaju filijalu/direkciju u Grazu",
    udaljenost: "Graz",
    plata: "Lehre u branši ~1.000–1.200 € bruto u prvoj godini",
    pocetak: "obično 1. septembar",
    lehre: true,
    preporuka: 3,
    kununu: "https://www.kununu.com/at/search?q=Allianz+%C3%96sterreich",
    napomena:
      "Nemaju trenutno otvoren oglas za Graz koji sam našao, ali sve četiri drže Lehre program i sve imaju predstavništvo u Grazu. Kod Lehre inicijativna prijava radi bolje nego kod običnih poslova — ljudi se prijave pre nego što oglas uopšte izađe. Poslati kratak mejl sa CV-om i svedočanstvom na karijernu adresu svake firme i pitati za termin za sledeću godinu.",
    vecKontaktirano: false,
  },
  {
    id: "grawe-nasi-savetnici",
    firma: "GRAWE — savetnici u Grazu sa naših prostora",
    pozicija: "Nisu oglasi — ljudi koje vredi pitati kako se ušlo u firmu",
    link: "https://www.grawe.at/kundenberater-finden/",
    kontakt: "Više savetnika u graškim Kundencentrima",
    kontaktNas: { ime: "Ana Ilic", uloga: "Repräsentantin, Kundencenter Graz Ost", email: "ana.ilic@grawe.at" },
    kontaktAlt: "Potvrđeno u Grazu: nurija.bajric@grawe.at (Graz Nord) · elena.zorkovic@grawe.at (Graz Nord, mejl po formatu firme) — NEPOTVRĐENO: senada.imamovic@ · zikica.markovic@ · jovana.cvjetkovic@",
    email: null,
    telefon: null,
    adresa: "Kundencenter Graz Nord / Graz Ost i drugi po gradu",
    udaljenost: "Graz",
    plata: "—",
    pocetak: "—",
    lehre: false,
    preporuka: 4,
    kununu: "https://www.kununu.com/at/search?q=Grazer+Wechselseitige",
    provereno:
      "27.08.2026: GRAWE u Grazu ima 5 kancelarija (Herrengasse, Graz Ost, Graz Nord, Andritz, Mariatrost) i format mejla je ime.prezime@grawe.at — potvrđeno. POTVRĐENI: Ana Ilic (Repräsentantin, Graz Ost) i nurija.bajric@grawe.at (Graz Nord). Elena Zorkovic je nabrojana u Graz Nord, mejl sledi format firme. NISU NAĐENI ni na jednoj od 5 graških kancelarija: Senada Imamović, Zikica Marković, Jovana Cvjetković — ta tri mejla verovatno ne stižu do nikoga u Grazu, pa ih koristiti poslednje. Link ispravljen: /kundenberater/ sada preusmerava na /kundenberater-finden/.",
    napomena:
      "OVO NIJE OGLAS. GRAWE javno objavljuje spisak svojih savetnika sa mejlovima — iz graških Kundencentara izdvojio sam one čija imena zvuče sa naših prostora. To je PRETPOSTAVKA po imenu, nije potvrđeno da govore naš jezik. Poenta: kratak, pristojan mejl jednom od njih („završio sam školu, zanima me Lehre kod vas, kome da se javim“) često prođe bolje nego zvanična prijava, jer preporuka iznutra vredi. Telefone namerno nisam prepisivao — uzeti ih sa grawe.at/kundenberater-finden/. Prvo pisati Ani Ilic ili Nuriji Bajric jer su njihovi mejlovi potvrđeni.",
    vecKontaktirano: false,
  },
];
