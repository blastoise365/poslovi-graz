// Lista firmi i oglasa — sanacija šteta (voda / požar / buđ) u Grazu i okolini (~30 km).
// Podaci prikupljeni 27.08.2026. Telefoni i adrese se menjaju — proveriti pre kontakta.
//
// PROVERENO 27.08.2026: svi linkovi otvoreni, svi mejl domeni imaju MX zapis, kontakti
// upoređeni sa zvaničnim sajtovima firmi. Šta je potvrđeno stoji u polju "provereno".
// PAŽNJA na AMS linkove (jobs.ams.at): ta stranica se učitava JavaScript-om, pa se sadržaj
// oglasa ne može automatski proveriti — link se otvori i kad oglas više ne postoji. Sve što
// se oslanja SAMO na AMS (plate, „mesto rada Graz") nije potvrđeno i to je izričito rečeno
// u napomeni. Prvo pozvati telefonom pre nego što se piše prijava.
//
// Kako dodati firmu: kopiraj jedan blok {...} i izmeni polja.
// vecKontaktirano: true  -> stavka startuje u tabu "Završeno" i rođak je ne vidi u "Aktivno".
// link: null             -> nema oglasa, javlja se direktno (inicijativna prijava).
// preporuka: 1-5         -> moje rangiranje, vidi objašnjenje na dnu stranice.

const KLJUC = "poslovi-graz-v1";

const POSLOVI = [
  {
    id: "mibag-graz",
    firma: "MIBAG Sanierungs GmbH",
    pozicija: "Allrounder / Trockenbauer / Maler / Bodenleger / Fliesenleger (m/w/d)",
    link: "https://www.mibag.at/jobs",
    kontakt: "Richard Birkl — šef filijale Graz",
    email: "birkl@mibag.at",
    telefon: "+43 664 8476911",
    adresa: "Auwiesenweg 6, 8055 Graz",
    udaljenost: "Graz",
    preporuka: 5,
    kununu: "https://www.kununu.com/at/search?q=Mibag+Sanierungs",
    provereno:
      "27.08.2026 sa mibag.at/standort/graz — POTPUNO TAČNO: Richard Birkl, Niederlassungsleitung Graz, birkl@mibag.at, +43/664/8476911, Auwiesenweg 6, 8055 Graz. Oglasi za Graz (Allrounder, Bodenleger, Fliesenleger, Maler, Trockenbauer) potvrđeni na mibag.at/jobs. Ovo je najpouzdanija stavka u listi.",
    napomena:
      "Najbolji pogodak: velika austrijska firma za sanaciju šteta, filijala u Grazu, TRENUTNO otvoreni oglasi baš za Graz i Leoben. Ima ime i mobilni šefa filijale — zvati direktno njega, ne centralu. Centrala Graz: +43 316 426988, info.graz@mibag.at. Ako Birkl ne odgovara, zamenik je Mario Veit (+43/664/8476997, veit@mibag.at).",
    vecKontaktirano: false,
  },
  {
    id: "tsd-graz",
    firma: "TSD Brand- und Wasserschaden Sanierung GmbH",
    pozicija: "Graz: Bodenleger_in 16,30 €/h · Trocknungsmonteur · Bautechniker",
    link: "https://jobs.ams.at/public/emps/jobs/dc37992a-0a29-3554-913f-b1ba7ffee0c4",
    kontakt: "Filijala Graz (ime nije objavljeno — tražiti šefa filijale)",
    email: "graz@tsd.at",
    telefon: "+43 664 88 44 08 51",
    adresa: "Plabutscherstraße 18, 8020 Graz",
    udaljenost: "Graz",
    preporuka: 5,
    kununu: "https://www.kununu.com/at/search?q=TSD+Sanierung",
    provereno:
      "27.08.2026 sa tsd.at/tsd-jobangebote.html: adresa Plabutscherstraße 18, telefon +43 664 88 44 08 51 i mejl graz@tsd.at tačni. Za GRAZ su na sajtu firme otvoreni Bodenleger, Trocknungsmonteur i Bautechniker. ISPRAVLJENO: Maler NIJE mesto u Grazu (Maler ide za Salzburg, Pinzgau, Pongau, Gmunden, Innviertel) — pre je ovde pisalo „Maler_in 14,61 €/h — Graz“. Cifra 16,30 €/h je sa AMS-a i nije potvrđena sa sajta.",
    napomena:
      "Identičan profil kao Belfor (požar + voda od 1991), 7 lokacija, preko 100 zaposlenih. Trocknungsmonteur u Grazu je tačno njegov posao. Satnica 16,30 €/h za Bodenleger je sa AMS-a, sa naznakom „Bereitschaft zur Überzahlung“ (spremni da plate više) — potvrditi telefonom. Svi oglasi firme: tsd.at/tsd-jobangebote.html. Prijava pisano na graz@tsd.at.",
    vecKontaktirano: false,
  },
  {
    id: "polygon-at",
    firma: "POLYGON Austria Service GmbH",
    pozicija: "Technische_r / Handwerkliche_r Facharbeiter_in — Brand- und Wasserschadensanierung (Region Graz Stadt)",
    link: "https://jobs.ams.at/public/emps/jobs/0dfa33bf-fa71-37aa-b178-3af54851514a",
    kontakt: "Robert Tropper — šef filijale „Graz“ (Frohnleiten)",
    kontaktNas: { ime: "Petra Bekavac", uloga: "HR, Polygon Austria", email: "hr.austria@polygongroup.com", telefon: "+43 699 159 590 67" },
    kontaktAlt: "HR: Petra Bekavac · hr.austria@polygongroup.com · +43 699 159 590 67 · centrala Austrija: at@polygongroup.com · +43 50 6142",
    email: "robert.tropper@polygongroup.com",
    telefon: "+43 676 840 227 306",
    adresa: "Filijala „Graz“ je stvarno u Frohnleiten-u: Technologiepark Frohnleiten, Grazer Straße 10, 8130 Frohnleiten (~25 km severno od Graza)",
    udaljenost: "~25 km (Frohnleiten)",
    preporuka: 4,
    kununu: "https://www.kununu.com/at/search?q=Polygon+Austria",
    provereno:
      "27.08.2026: Petra Bekavac potvrđena kao HR (hr.austria@polygongroup.com, +43 699 159 590 67) na polygongroup.com. Šef filijale Graz je Robert Tropper, +43 676 840 227 306. PAŽNJA: na zvaničnoj karijernoj stranici firme NEMA otvorenog mesta za Graz — jedino otvoreno je Niederlassung Wr. Neudorf. Dva „Region Graz“ oglasa postoje samo na AMS-u i nisu se mogla proveriti (AMS stranica se ne može automatski pročitati). Takođe: filijala „Graz“ fizički je u Frohnleiten-u, ne u Grazu.",
    napomena:
      "Direktan konkurent Belfor-u — internacionalna grupa (18 zemalja), preko 100 zaposlenih u Austriji. Profil se poklapa savršeno (Trocknungstechniker / Leckortungstechniker), ali PRVO ZVATI Roberta Troppera i pitati da li mesto za Graz/Frohnleiten uopšte postoji — sajt firme ga ne prikazuje. Plata od 2.300 € bruto (40h, sa završenom LAP) je sa AMS-a i nije potvrđena. Ako Tropper kaže da nema, pisati Petri Bekavac i pitati za celu Štajersku.",
    vecKontaktirano: false,
  },
  {
    id: "sms-graz",
    firma: "SMS Austria GmbH (SMS Group)",
    pozicija: "Tischler_in Graz — od 2.059,41 € bruto/mes. (+ pitati za Sanierungstechniker)",
    link: "https://www.sms-teampower.com/at/career/tischler-graz-260626/",
    kontakt: "Harald Perko — šef filijale Graz",
    email: "graz@sms-group.at",
    telefon: "+43 316 271 548",
    adresa: "Johann-Strauß-Gasse 15, 8010 Graz",
    udaljenost: "Graz",
    preporuka: 4,
    kununu: "https://www.kununu.com/at/search?q=SMS+Austria",
    provereno:
      "27.08.2026 sa sms-group.at/locations/graz: Harald Perko (Niederlassungsleitung), +43 316 271 548, graz@sms-group.at, Johann-Strauß-Gasse 15, 8010 Graz — sve tačno. Oglas za Tischler-a je aktivan. Perko-ov direktan mobilni sa oglasa: +43 664 80390538. Radno vreme: pon–čet 07:30–16:30, pet 07:30–13:30.",
    napomena:
      "Od 2005. specijalizovani za kompletnu sanaciju šteta u Štajerskoj (voda, požar, leckortung, suvi led, buđ). Preko AMS-a potvrđen oglas za Graz (Johann-Strauß-Gasse 15), od 2.059,41 € bruto mesečno. VAŽNO: firma ima gomilu oglasa za Sanierungstechniker i Trocknungstechniker, ali po drugim gradovima (Villach, Neuhofen) — kad zoveš Harald Perko-a, pitaj da li tako nešto otvaraju i u Grazu.",
    vecKontaktirano: false,
  },
  {
    id: "profimax-lieboch",
    firma: "PM Trocknungs und Sanierungs GmbH „Profi MAX“",
    pozicija: "Trocknungs- / Entfeuchtungstechniker + ProjektleiterIn Sanierung (Lieboch)",
    link: "https://www.steirerjobs.at/f/profi-max-pm-trocknung-sanierungs-gmbh",
    kontakt: "Ing. Richard Wagner — šef filijale Lieboch",
    kontaktNas: { ime: "Goran Skvorc", uloga: "projektni vođa, Lieboch", email: "skvorc@profi-max.at", telefon: "0676 5319338" },
    kontaktAlt: "Filijala Lieboch/Graz: graz.office@profi-max.at · centrala: office@profi-max.at · +43 720 700828",
    email: "wagner@profi-max.at",
    telefon: "0676 55 23 275",
    adresa: "Industriestraße West 6, 8501 Lieboch (centrala firme: Hauptplatz 6, 8291 Burgau)",
    udaljenost: "~15 km",
    preporuka: 4,
    kununu: "https://www.kununu.com/at/search?q=Profi+Max+Trocknung",
    provereno:
      "27.08.2026 sa profi-max.at/de/unternehmen/team: Ing. Richard Wagner (Niederlassungsleitung Lieboch, wagner@profi-max.at, 0676/55 23 275) i Goran Skvorc (Projektleiter Lieboch, skvorc@profi-max.at, 0676/5319338) potvrđeni tačno kako su zapisani. ISPRAVLJENA ADRESA: Lieboch je Industriestraße West 6, 8501 Lieboch — „Grazer Straße 23, 8071 Hausmannstätten“ nije njihova lokacija (lokacije su Burgau, Wien, Lieboch, Siegendorf, Murtal, Klagenfurt).",
    napomena:
      "Preko 110 zaposlenih, 6 lokacija. Traže baš tehničara za sušenje/odvlaživanje — to je Belfor posao 1:1. Plata za tehničara je najavljena od ~2.091 € bruto, projektni vođa od ~3.600 € (te cifre su sa portala, nisu potvrđene sa sajta firme). U timu je i Goran Skvorc (projektni vođa, 0676 5319338, skvorc@profi-max.at) — verovatno govori naš jezik, dobar prvi kontakt. Ostali projektni vođe u Lieboch-u: Kevin Wondrak (0676 55 31 064), Daniel Moser (0676 73 38 094).",
    vecKontaktirano: false,
  },
  {
    id: "pleinimmo-graz",
    firma: "Pleinimmo GmbH",
    pozicija: "Fliesenleger_in / Allrounder_in — sanacije stanova, Graz i Štajerska (19,99 €/h bruto)",
    link: "https://jobs.ams.at/public/emps/jobs/c412a2c0-1175-3da6-8d0b-3f83cd106077",
    kontakt: "Dipl. Ing. Martin Höfler — direktor",
    email: "office@pleinimmo.at",
    telefon: "+43 664 1820058",
    adresa: "Rösselmühlgasse 15, 8020 Graz",
    udaljenost: "Graz",
    preporuka: 3,
    kununu: "https://www.kununu.com/at/search?q=Pleinimmo",
    provereno:
      "27.08.2026: mejl office@pleinimmo.at potvrđen, DOPUNJENO telefon +43 664 1820058 i adresa Rösselmühlgasse 15, 8020 Graz (pre je pisalo samo „Region Graz-Umgebung“, bez telefona). Direktor: Dipl. Ing. Martin Höfler. Firma je upisana 04.05.2024 — vrlo nova i mala. Satnica 19,99 €/h stoji samo na AMS-u i nije se mogla proveriti.",
    napomena:
      "Nađeno preko AMS-a, nije bilo ni na jednom drugom portalu — i sajt firme nema Karriere stranicu, pa je oglas nepotvrđen. Najavljena satnica je najviša u listi (19,99 €/h bruto po građevinskom kolektivnom ugovoru), ali firma postoji od maja 2024. i vrlo je mala, pa proveriti telefonom pre nego što se računa na to. Sanacije stanova po Grazu i Štajerskoj. Prednost: direktan kontakt sa upravom, prijava ne zapinje u HR-u.",
    vecKontaktirano: false,
  },

  {
    id: "soluto-sattler",
    firma: "SOLUTO Sattler Sanierungs GmbH (SOLUTO Štajerska)",
    pozicija: "Projektleiter_in Brand- & Wasserschadensanierung — 3.593 € bruto/mes.",
    link: "https://www.willhaben.at/jobs/job/projektleiter-in-brand-wasserschadensanierung/13257419",
    kontakt: "Kancelarija Štajerska (ime nije objavljeno)",
    email: "office-sattler@soluto.cc",
    telefon: "+43 316 293036",
    adresa: "Feldkirchner Straße 87, 8055 Seiersberg-Pirka (odmah kraj Graza)",
    udaljenost: "~6 km",
    preporuka: 5,
    kununu: "https://www.kununu.com/at/search?q=Soluto",
    napomena:
      "Već radio ovde — nije mu se svidelo, ne vraćati se. (Oglas: projektni vođa za sanaciju posle požara i vode, 3.593 € bruto, Seiersberg.)",
    vecKontaktirano: true,
  },
  {
    id: "lieb-bau-weiz",
    firma: "Lieb Bau Weiz GmbH & Co KG",
    pozicija: "Vorarbeiter_in 21,96 €/h · Facharbeiter_in 19,99 €/h — sanacija i popravke, mesto rada Graz",
    link: "https://www.willhaben.at/jobs/job/facharbeiter-in-sanierungs-und-instandsetzungsarbeiten/13257820",
    kontakt: "Kancelarija (ime nije objavljeno)",
    email: "office@lieb.at",
    telefon: "+43 3172 2417-0",
    adresa: "Mesto rada: Graz · centrala: Birkfelder Straße 40, 8160 Weiz",
    udaljenost: "Graz",
    preporuka: 4,
    kununu: "https://www.kununu.com/at/search?q=Lieb+Bau+Weiz",
    provereno:
      "27.08.2026 iz samog willhaben oglasa: oglas je aktivan (objavljen 27.08.2026, važi do 27.10.2026), firma Lieb Bau Weiz GmbH & Co KG, satnica 19,99 €/h + „Bereitschaft zur Überzahlung“, u tekstu izričito „für Hochbau & Wohnungssanierung Graz & Umgebung“ — mesto rada Graz je POTVRĐENO (adresa Weiz u metapodacima je samo sedište firme, ne mesto rada).",
    napomena:
      "NAJVEĆA SATNICA U LISTI: predradnik 21,96 €/h, majstor 19,99 €/h bruto, oba puno radno vreme sa mestom rada Graz i okolina. Velika firma, oko 1.200 zaposlenih. VAŽNO: u prijavi OBAVEZNO navesti šifru oglasa „Inseratcode: LB 26 006“ — tako izričito pišu, bez toga prijava lako propadne. ALI: ovo je opšta sanacija i popravke u građevini (Hochbau i sanacija stanova), NIJE sanacija šteta od vode i požara — poklapanje sa Belfor profilom je delimično. Vredi zbog para i sigurnosti. Oglas za predradnika: willhaben.at/jobs/job/vorarbeiter-in-sanierungs-und-instandsetzungsarbeiten/13257818",
    vecKontaktirano: false,
  },
  {
    id: "trummer-kalsdorf",
    firma: "Trummer Sanierung GmbH",
    pozicija: "Sušenje, sanacija buđi, sanacija stambenog prostora — videti Karriere",
    link: "https://trummer-sanierung.at/karriere",
    kontakt: "Centrala (ime nije objavljeno)",
    email: "zentrale@trummer.org",
    telefon: "+43 3135 20612",
    adresa: "Hauptstraße 305, 8401 Kalsdorf bei Graz",
    udaljenost: "~12 km",
    preporuka: 4,
    kununu: "https://www.kununu.com/at/search?q=Trummer+Sanierung",
    provereno:
      "27.08.2026 sa trummer-sanierung.at/karriere: mejl zentrale@trummer.org, telefon 03135 20612 i adresa Hauptstraße 305, 8401 Kalsdorf — sve tačno.",
    napomena:
      "Regionalna firma, dug staž u sušenju i sanaciji buđi. Nema objavljenih oglasa, ALI na Karriere stranici izričito pišu: „Wir suchen laufend Verstärkung — im Innendienst wie auf der Baustelle. Schreiben Sie uns, auch ohne ausgeschriebene Stelle.“ (tražimo stalno, pišite nam i bez oglasa). Primaju prijave za Montage, Innendienst, Lager i Außendienst — Montage je njegovo. Manji tim, lakše da ga prime na razgovor nego u velikoj grupi.",
    vecKontaktirano: false,
  },
  {
    id: "lts-graz",
    firma: "LTS Service GmbH",
    pozicija: "Leckorter · Trocknungsmonteur · Projektleiter — filijala Štajerska",
    link: "https://lts-group.com/karriere/",
    kontakt: "Filijala Štajerska (ime nije objavljeno)",
    email: "stmk@lts-service.at",
    telefon: "+43 670 608 64 61",
    adresa: "Filijala Štajerska: Petersgasse 34, 8010 Graz",
    udaljenost: "Graz",
    preporuka: 4,
    kununu: "https://www.kununu.com/at/search?q=LTS+Service",
    kontaktAlt: "Centrala Salzburg: office@lts-service.at · +43 6245 21950 (Urstein Nord 13, 5412 Puch) · prijava i preko lts-group.com/karriere/bewerbung-senden/",
    provereno:
      "27.08.2026 sa lts-group.com/standorte: adresa Petersgasse 34, 8010 Graz tačna. ISPRAVLJENO: ranije su ovde stajali mejl i telefon centrale u Salzburgu (office@lts-service.at, +43 6245 21950) — za Graz je stmk@lts-service.at i +43 670 608 64 61.",
    napomena:
      "Porodična firma, sanacija požara i vode + upravljanje nekretninama, filijale širom Austrije. ISPRAVKA prethodne ocene: nije „uglavnom kancelarijska mesta“ — među 7 otvorenih pozicija su i Leckorter i Trocknungsmonteur, što je Belfor posao 1:1, plus Projektleiter i Niederlassungsleiter. Na karriere stranici ne piše koja pozicija je za koju filijalu, pa zvati Graz i pitati direktno. Hitna linija 0800 66 55 67.",
    vecKontaktirano: false,
  },
  {
    id: "brugger-graz",
    firma: "Brugger Entfeuchtungs- & Kanaltechnik GmbH",
    pozicija: "Odvlaživanje, sušenje objekata, isušivanje zidova",
    link: null,
    kontakt: "Kancelarija (ime nije objavljeno)",
    email: "office@brugger-entfeuchtung.at",
    telefon: "0316 47 17 71",
    adresa: "Liebenauer Hauptstraße 181, 8041 Graz",
    udaljenost: "Graz",
    preporuka: 3,
    kununu: "https://www.kununu.com/at/search?q=Brugger+Entfeuchtung",
    provereno:
      "27.08.2026 sa brugger-entfeuchtung.at: adresa potvrđena, DOPUNJENO telefon 0316 47 17 71 i mejl office@brugger-entfeuchtung.at (pre su oba bila prazna). Na sajtu nema Jobs/Karriere stranice — inicijativna prijava je jedini put.",
    napomena:
      "Nema oglasa — inicijativna prijava. Uska specijalnost (odvlaživanje + kanalizaciona tehnika) koja se direktno poklapa s Belfor iskustvom. Mala firma, najbolje pozvati pa poslati CV na mejl.",
    vecKontaktirano: false,
  },
  {
    id: "derigo-graz",
    firma: "Derigo Installations GmbH",
    pozicija: "Sanacija štete od vode + instalacije",
    link: "https://www.derigo.at/jobs",
    kontakt: "Marion Khallaf-Derigo — direktorka (Geschäftsführung)",
    email: "buero@derigo.at",
    telefon: "0316 57 24 57",
    adresa: "Triester Straße 391, 8055 Graz",
    udaljenost: "Graz",
    preporuka: 3,
    kununu: "https://www.kununu.com/at/search?q=Derigo+Installations",
    provereno:
      "27.08.2026 sa sajta i impresuma: mejl, telefon, adresa i radno vreme tačni. Ime direktorke ispravljeno — u impresumu stoji Marion Khallaf-Derigo (ranije je ovde pisalo „Khallaf Karim“, pogrešno).",
    napomena:
      "Manja gradska firma, sanacija vode + vodoinstalacije i kupatila. Na /jobs trenutno tri oglasa: Bauhelfer (2.368,06 € bruto/mes., 38,5 h), Installateur (~2.300 € neto) i Lehrstelle Bürokaufmann. Radno vreme kancelarije: pon–čet 07:15–16:15, pet 07:15–11:45 — zvati u tom terminu.",
    vecKontaktirano: false,
  },
  {
    id: "hsp-premstaetten",
    firma: "HSP Haustechnik GmbH",
    pozicija: "Sanacija štete od vode i požara / kućna tehnika",
    link: "https://www.hsp-haustechnik.at/stellenangebote/",
    kontakt: "Kancelarija (ime nije objavljeno)",
    email: "office@hsp-haustechnik.at",
    telefon: "+43 664 4311536",
    adresa: "Torpeterweg 22a, 8141 Premstätten",
    udaljenost: "~10 km",
    preporuka: 3,
    kununu: "https://www.kununu.com/at/search?q=HSP+Haustechnik",
    provereno:
      "27.08.2026 sa hsp-haustechnik.at/stellenangebote: mejl, telefon i adresa tačni. Otvoreno: Gas-/Wasser-/Zentralheizungsmonteur u Grazu, Monteure HKLS, Quereinsteiger/Montagehelfer i Lehrlinge HKLS. NAPOMENA: svi oglasi su HKLS (grejanje/vodovod/klima), ne sanacija šteta — „Quereinsteiger/Montagehelfer“ je najlakši ulaz.",
    napomena:
      "Porodični zanatski pogon, 18 godina iskustva, hitna služba 24/7. Imaju stranicu sa oglasima „Jobs für Haustechniker in Graz und Umgebung“. Kombinacija sanacija + grejanje/vodovod.",
    vecKontaktirano: false,
  },
  {
    id: "etb-soeding",
    firma: "ETB-GmbH Entfeuchtungstechnik Bauer",
    pozicija: "Traženje curenja, odvlaživanje, sanacija štete od vode",
    link: null,
    kontakt: "Bernhard Bauer / Harald Bauer",
    email: "office@etb-bauer.at",
    telefon: "+43 664 4607371 (Bernhard) · +43 664 2823190 (Harald)",
    adresa: "Mooskirchnerstraße 21, 8561 Söding-Sankt Johann",
    udaljenost: "~25 km",
    preporuka: 3,
    kununu: "https://www.kununu.com/at/search?q=ETB+Bauer",
    provereno:
      "27.08.2026 sa etb-bauer.at/kontakt — POTPUNO TAČNO: office@etb-bauer.at, Bernhard Bauer +43 664 4607371, Harald Bauer +43 664 2823190, Mooskirchnerstraße 21, 8561 Söding-Sankt Johann, radno vreme pon–čet 07:00–16:00, pet 07:00–13:00.",
    napomena:
      "Nema objavljenih oglasa — ali imamo direktne mobilne brojeve oba vlasnika, što je najbrži put. Mala firma, sve ide preko telefona. Zvati pon–čet 07–16, pet 07–13.",
    vecKontaktirano: false,
  },
  {
    id: "ledererbau-graz",
    firma: "Lederer-Grabner Baugesellschaft m.b.H.",
    pozicija: "Schadenssanierung (sanacija šteta) u okviru građevinske firme",
    link: "https://www.ledererbau.com/karriere/",
    kontakt: "Kancelarija (ime nije objavljeno)",
    email: "office@ledererbau.com",
    telefon: "+43 316 47 25 81",
    adresa: "Puchstraße 162, 8055 Graz",
    udaljenost: "Graz",
    preporuka: 3,
    kununu: "https://www.kununu.com/at/search?q=Lederer-Grabner",
    provereno:
      "27.08.2026 sa ledererbau.com/karriere: mejl, telefon i adresa (Puchstraße 162) tačni, radno vreme pon–čet 07:00–16:30, pet 07:00–12:00. Ocena povećana sa 2 na 3: firma na sajtu izričito nudi Schimmelsanierung, Brandschadensanierung i Wasserschadensanierung — to je Belfor profil, ne samo „opšta gradnja“. Na Karriere stranici nema pojedinačnih oglasa, samo opšti formular („Wir suchen die Besten“).",
    napomena:
      "Građevinska firma koja radi i sanaciju šteta od buđi, požara i vode — poklapanje je bolje nego što je prvo procenjeno. Nema objavljenih oglasa, ide se preko formulara na Karriere stranici ili direktno na office@ledererbau.com. Stabilan poslodavac u Grazu.",
    vecKontaktirano: false,
  },
  // Kohlfürst Wasserschadensanierung & Bautrocknung GmbH — IZBRISANO 27.08.2026.
  // Domen kohlfuerst-bautrocknung.at više ne postoji (nema ni A ni MX zapisa, ne samo da je
  // sajt pao). Po Firmenbuch-u firma je prešla u Kohlfürst Immobilien-Invest GmbH
  // (Naglergasse 10, 8010 Graz) i više se ne bavi sanacijom. Nema šta da se zove.

  // ── Već kontaktirano — ne prikazuje se u tabu "Aktivno" ──
  {
    id: "belfor-graz",
    firma: "BELFOR Austria GmbH",
    pozicija: "Sanacija šteta (bivši poslodavac)",
    link: "https://www.belfor-jobs.com/at/de/",
    kontakt: "Centrala Beč",
    email: "belfor@at.belfor.com",
    telefon: "+43 1 610170",
    adresa: "Unterer Bründlweg 34, 8053 Graz",
    udaljenost: "Graz",
    preporuka: 5,
    kununu: "https://www.kununu.com/at/search?q=BELFOR+Austria",
    napomena: "Bivši poslodavac — ovde je već radio.",
    vecKontaktirano: true,
  },
  {
    id: "drystar-graz",
    firma: "DRYSTAR Österreich",
    pozicija: "Leckortung / sanacija buđi / odvlaživanje",
    link: "https://www.drystar.at/",
    kontakt: "Filijala Graz",
    email: "graz@drystar.at",
    telefon: "+43 316 833333 0",
    adresa: "Georg-Hausmann-Straße 3, 8055 Seiersberg / Graz",
    udaljenost: "Graz",
    preporuka: 4,
    kununu: "https://www.kununu.com/at/search?q=Drystar",
    napomena: "Već se prijavio — odbijen.",
    vecKontaktirano: true,
  },
];
