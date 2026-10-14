// Lista firmi i oglasa — sanacija šteta (voda / požar / buđ) u Grazu i okolini (~30 km).
// Podaci prikupljeni 27.08.2026, osveženi 14.10.2026. Telefoni i adrese se menjaju — proveriti pre kontakta.
//
// PROVERENO 14.10.2026: svi oglasi ponovo otvoreni, kontakti upoređeni sa zvaničnim sajtovima
// firmi (stranice tima i filijala, impresum). Šta je potvrđeno stoji u polju "provereno".
// PAŽNJA na AMS linkove (jobs.ams.at): ta stranica se učitava JavaScript-om, pa se sadržaj
// oglasa ne može automatski proveriti — link se otvori i kad oglas više ne postoji. Sve što
// se oslanja SAMO na AMS (plate, „mesto rada Graz") nije potvrđeno i to je izričito rečeno
// u napomeni. Prvo pozvati telefonom pre nego što se piše prijava.
//
// Kako dodati firmu: kopiraj jedan blok {...} i izmeni polja.
// vecKontaktirano: true  -> stavka startuje u tabu "Završeno" i rođak je ne vidi u "Aktivno".
// status: "prijavio" | "odbijen" | "neodgovara" (+ razlog: "...") -> isto, ali sa oznakom; ovde
//                           se upisuje spisak koji rođak pošalje dugmetom "Kopiraj spisak".
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
      "14.10.2026 sa mibag.at/jobs i mibag.at/standort/graz: svih pet oglasa za Graz (Allrounder, Trockenbauer, Bodenleger, Fliesenleger, Maler) i dalje otvoreno. Richard Birkl (Niederlassungsleitung, birkl@mibag.at, +43 664 8476911), zamenik Mario Veit i adresa Auwiesenweg 6 — bez promena. Plata u oglasima: „Mindestgehalt lt. KV, Bereitschaft zur KV-Überzahlung“, bez cifre.",
    napomena:
      "Najbolji pogodak: velika austrijska firma za sanaciju šteta, filijala u Grazu, otvoreni oglasi baš za Graz. Ima ime i mobilni šefa filijale — zvati direktno njega, ne centralu. Centrala Graz: +43 316 426988, info.graz@mibag.at. Ako Birkl ne odgovara, zamenik je Mario Veit (+43/664/8476997, veit@mibag.at). Svi oglasi traže dobar nemački („Fundierte Deutschkenntnisse in Wort und Schrift“). Među 11 ljudi u filijali Graz nema imena sa naših prostora. Orijentir za platu: MIBAG za Bodenleger u Sierningu (Gornja Austrija) nudi 3.300 € bruto mesečno.",
    vecKontaktirano: false,
  },
  {
    id: "tsd-graz",
    firma: "TSD Brand- und Wasserschaden Sanierung GmbH",
    pozicija: "Graz: Trocknungsmonteur · Bodenleger · Bautechniker (oglasi važe do 31.12.2026)",
    link: "https://www.tsd.at/jobs/job-details/trocknungsmonteur",
    kontakt: "Miroslav Stojakovic — šef filijale Graz (Geschäftsführung Standort Graz)",
    kontaktNas: { ime: "Miroslav Stojakovic", uloga: "šef filijale Graz", email: "stojakovic@tsd.at", telefon: "+43 664 88 44 08 51" },
    email: "graz@tsd.at",
    telefon: "+43 664 88 44 08 51",
    adresa: "Plabutscherstraße 18, 8020 Graz",
    udaljenost: "Graz",
    preporuka: 5,
    kununu: "https://www.kununu.com/at/search?q=TSD+Sanierung",
    provereno:
      "14.10.2026 sa tsd.at (oglasi, stranica filijale Graz, impresum): sva tri oglasa za Graz su otvorena, objavljena u julu 2026, važe do 31.12.2026. NOVO: filijala Graz sada ima objavljeno ime — Miroslav Stojakovic, „Geschäftsführung Standort Graz“, stojakovic@tsd.at, isti mobilni +43 664 88 44 08 51. U filijali radi više od 8 ljudi. Satnica 16,30 €/h za Bodenleger i dalje stoji samo na AMS-u i nije potvrđena; na sajtu firme piše „leistungsgerechte Entlohnung, Überzahlung je nach Qualifikation“.",
    napomena:
      "Identičan profil kao Belfor (požar + voda od 1991), 7 lokacija, preko 100 zaposlenih. Trocknungsmonteur u Grazu je tačno njegov posao: „Auf- und Abbau der Trocknungen bei unseren Wasserschäden und Brandschäden“ — zanat (instalater ili električar) je prednost, ali nije uslov. ŠEF FILIJALE JE MIROSLAV STOJAKOVIC — po imenu verovatno naš čovek: zvati njega direktno na mobilni. Prijava pisano na graz@tsd.at ili stojakovic@tsd.at. Traže nemački „in Wort und Schrift“. Druga dva oglasa (Bodenleger, Bautechniker): tsd.at/tsd-jobangebote.",
    vecKontaktirano: false,
  },
  {
    id: "polygon-at",
    firma: "POLYGON Austria Service GmbH",
    pozicija: "Handwerker/Allrounder — Leckortung, demontaža, suvi zid (min. 2.900 € bruto) · Technische:r Projektleiter:in (min. 3.000 €) — filijala Graz",
    link: "https://www.polygongroup.com/de-AT/karriere/stellenangebote-neu/techniker-ganz-%C3%B6/",
    kontakt: "Robert Tropper — šef filijale „Graz“ (Frohnleiten)",
    kontaktNas: { ime: "Petra Bekavac", uloga: "HR, Polygon Austria", email: "hr.austria@polygongroup.com", telefon: "+43 699 159 590 67" },
    kontaktAlt: "HR: Petra Bekavac · hr.austria@polygongroup.com · +43 699 159 590 67 (na stranici sa oglasima piše +43 699 15 95 90 52 — probati oba) · centrala Austrija: at@polygongroup.com · +43 50 6142",
    email: "robert.tropper@polygongroup.com",
    telefon: "+43 676 840 227 306",
    adresa: "Filijala „Graz“ je stvarno u Frohnleiten-u: Technologiepark Frohnleiten, Grazer Straße 10, 8130 Frohnleiten (~25 km severno od Graza)",
    udaljenost: "~25 km (Frohnleiten)",
    preporuka: 5,
    kununu: "https://www.kununu.com/at/search?q=Polygon+Austria",
    provereno:
      "14.10.2026 sa polygongroup.com: NOVO — na karijernoj stranici firme sada stoje dva oglasa čije mesto rada uključuje Graz (oglas važi za „ganz Österreich“, a među filijalama je izričito navedena Graz): Handwerker/Allrounder, „Das Mindestgehalt beträgt EUR 2.900,00 brutto pro Monat bei 40 Wochenstunden“, i Technische:r Projektleiter:in, minimum 3.000 €. Iste oglase na karriere.at (10. i 12.10.2026) objavljuje agencija PMC International. Robert Tropper i adresa u Frohnleiten-u bez promena. Petra Bekavac: mejl isti, ali sajt navodi dva broja. Stari AMS oglas „Region Graz Stadt“ (2.300 €) nije nađen nigde drugde.",
    napomena:
      "Direktan konkurent Belfor-u — internacionalna grupa (18 zemalja), preko 100 zaposlenih u Austriji. Allrounder oglas je njegov posao: među zadacima su Leckortung, demontaža i rušenje, suvi zid; „Eine abgeschlossene Lehre ist wünschenswert, aber kein Muss“. Traže dobar nemački za razgovor sa mušterijama. Najbolje prvo pozvati Petru Bekavac (HR, po imenu verovatno govori naš jezik), reći da je u pitanju filijala Graz/Frohnleiten, pa poslati prijavu na hr.austria@polygongroup.com — tako se zaobilazi agencija PMC sa karriere.at (koja prima prijave samo preko svog portala). Filijala „Graz“ je fizički u Frohnleiten-u, ~25 km severno; šef je Robert Tropper.",
    vecKontaktirano: false,
  },
  {
    id: "sms-graz",
    firma: "SMS Austria GmbH (SMS Group)",
    pozicija: "Tischler_in — sanacija i renoviranje, Graz (+ pitati za Trocknungstechniker)",
    link: "https://www.sms-teampower.com/at/career/tischler-graz-260626/",
    kontakt: "Harald Perko — šef filijale Graz",
    kontaktNas: { ime: "Davor Pusic, Velid Suvic", uloga: "tehničari za sušenje u filijali Graz — kolege, bez direktnog kontakta" },
    kontaktAlt: "Prijava telefonom (centralna linija za prijave, pon–pet 08–18): +43 664 80390538 · karriere@sms-teampower.com · zamenik šefa filijale: Florian Krainer (veštak za buđ)",
    email: "graz@sms-group.at",
    telefon: "+43 316 271 548",
    adresa: "Johann-Strauß-Gasse 15, 8010 Graz",
    udaljenost: "Graz",
    preporuka: 4,
    kununu: "https://www.kununu.com/at/search?q=SMS+Austria",
    provereno:
      "14.10.2026 sa sms-group.at/locations/graz i sms-teampower.com: oglas za Tischler-a u Grazu je aktivan (objavljen 26.06.2026), plata „Überzahlung möglich“ — cifra 2.059,41 € stoji samo na AMS-u. Harald Perko, +43 316 271 548, graz@sms-group.at, Johann-Strauß-Gasse 15, radno vreme pon–čet 07:30–16:30, pet 07:30–13:30 — tačno. ISPRAVLJENO: +43 664 80390538 NIJE Perkov mobilni, nego centralna linija za prijave (isti broj stoji i na oglasima za Leibnitz i Wolfsberg). U spisku tima filijale Graz: „Trocknungstechnik — Davor Pusic, Velid Suvic“.",
    napomena:
      "Od 2005. specijalizovani za kompletnu sanaciju šteta u Štajerskoj (voda, požar, leckortung, suvi led, buđ). Jedini oglas za Graz je Tischler (podovi, unutrašnja sanacija, stolarija); dovoljan je nemački „za svakodnevni razgovor“. U ekipi za sušenje u Grazu rade Davor Pusic i Velid Suvic — po imenima verovatno naši, pa bi tu radio sa ljudima koji govore naš jezik. Kad zoveš Perka, pitaj da li im treba još jedan Trocknungstechniker u Grazu. Ako mu Leibnitz (~35–40 km) nije daleko, tamo stoji oglas baš za Allrounder / Sanierungstechniker / Trocknungstechniker (star, iz jula 2025 — proveriti telefonom).",
    vecKontaktirano: false,
  },
  {
    id: "profimax-lieboch",
    firma: "PM Trocknungs und Sanierungs GmbH „Profi MAX“",
    pozicija: "Leckortungstechniker Graz/Lieboch (od 3.200 € bruto) · Sanierungs-/Entfeuchtungstechniker Lieboch (KV min. 2.624,41 €)",
    link: "https://www.profi-max.at/de/service/jobs/",
    kontakt: "Ing. Richard Wagner — šef filijale Lieboch",
    kontaktNas: { ime: "Goran Skvorc", uloga: "projektni vođa, Lieboch", email: "skvorc@profi-max.at", telefon: "0676 5319338" },
    kontaktAlt: "Prijave: Leckortung → office@profi-max.at · Sanierungstechniker → graz.office@profi-max.at · centrala: +43 720 700828",
    email: "wagner@profi-max.at",
    telefon: "0676 55 23 275",
    adresa: "Industriestraße West 6, 8501 Lieboch (centrala firme: Hauptplatz 6, 8291 Burgau)",
    udaljenost: "~15 km",
    preporuka: 5,
    kununu: "https://www.kununu.com/at/search?q=Profi+Max+Trocknung",
    provereno:
      "14.10.2026 sa profi-max.at (jobs + tim): NOVO — dva oglasa za filijalu Lieboch, teren „Graz, Graz-Umgebung“ (PDF od 09.09.2026): Leckortungstechniker, „Verdienstmöglichkeiten ab EUR 3.200,-- brutto als Facharbeiter (Mindest-KV EUR 2.624,41 brutto) mit der Bereitschaft zur Überzahlung, Diäten, Zulagen“, i Sanierungstechniker (Entfeuchtungstechniker, Montagetischler, Maurer), KV minimum 2.624,41 €. NESTALO: ProjektleiterIn za Lieboch (jobs.at vraća „nicht mehr verfügbar“; projektni vođa se sada traži samo za Siegendorf). Wagner, Skvorc, Wondrak, Moser i adresa Industriestraße West 6 — bez promena.",
    napomena:
      "Preko 110 zaposlenih, 6 lokacija. Oba oglasa su Belfor posao: odvlaživanje/sušenje 1:1, a Leckortung (traženje curenja) nosi od 3.200 € bruto mesečno plus dnevnice i dodatke. Goran Skvorc (projektni vođa u Lieboch-u, 0676 5319338) — po imenu verovatno govori naš jezik, najbolji prvi kontakt. U firmi je i Miroslav Micic (projektni vođa za kanalizaciju i cevi, 0664 78977314, micic@profi-max.at; filijala nije navedena). Ostali projektni vođe u Lieboch-u: Kevin Wondrak (0676 55 31 064), Daniel Moser (0676 73 38 094).",
    vecKontaktirano: false,
  },
  {
    id: "pleinimmo-graz",
    firma: "Pleinimmo GmbH",
    pozicija: "Fliesenleger_in / Allrounder_in — sanacije stanova, Graz i Štajerska (19,99 €/h bruto)",
    link: "https://jobs.ams.at/public/emps/jobs/c412a2c0-1175-3da6-8d0b-3f83cd106077",
    kontakt: "Dipl.-Ing. Niklas Pleunik — osnivač i direktor",
    email: "office@pleinimmo.at",
    telefon: "+43 664 1820058",
    adresa: "Rösselmühlgasse 15/5, 8020 Graz",
    udaljenost: "Graz",
    preporuka: 3,
    kununu: "https://www.kununu.com/at/search?q=Pleinimmo",
    provereno:
      "14.10.2026 sa pleinimmo.at (impresum, „Über uns“): ISPRAVLJENO — direktor i osnivač je Dipl.-Ing. Niklas Pleunik („stehe als direkter Ansprechpartner zur Verfügung“); ime „Martin Höfler“ koje je ranije stajalo ovde ne pojavljuje se nigde na sajtu. Adresa je Rösselmühlgasse 15/5. Telefon iz impresuma +43 664 1820058 je isti kao ovde (na drugim stranicama sajta piše …1820085, verovatno greška u kucanju). Oglas i dalje postoji samo na AMS-u — nema ga na willhaben-u, karriere.at ni jobs.at, a firma nema Karriere stranicu.",
    napomena:
      "Nađeno preko AMS-a, nije bilo ni na jednom drugom portalu — i sajt firme nema Karriere stranicu, pa je oglas nepotvrđen. Najavljena satnica je visoka (19,99 €/h bruto po građevinskom kolektivnom ugovoru), ali firma postoji od maja 2024. i vrlo je mala, pa proveriti telefonom pre nego što se računa na to. Sanacije stanova po Grazu i Štajerskoj. Prednost: direktan kontakt sa vlasnikom, prijava ne zapinje u HR-u.",
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
    status: "neodgovara",
    razlog: "već radio ovde, nije mu se svidelo",
  },
  {
    id: "lieb-bau-weiz",
    firma: "Lieb Bau Weiz GmbH & Co KG",
    pozicija: "Vorarbeiter_in 21,96 €/h · Facharbeiter_in 19,99 €/h — sanacija i popravke, mesto rada Graz",
    link: "https://www.willhaben.at/jobs/job/facharbeiter-in-sanierungs-und-instandsetzungsarbeiten/13257820",
    kontakt: "Charlotte Leitgeber — šefica kadrovske službe (Abteilungsleiterin Personal)",
    kontaktAlt: "Centrala: office@lieb.at · +43 3172 2417-0",
    email: "charlotte.leitgeber@lieb.at",
    telefon: "+43 3172 2417-165",
    adresa: "Mesto rada: Graz · centrala: Birkfelder Straße 40, 8160 Weiz",
    udaljenost: "Graz",
    preporuka: 4,
    kununu: "https://www.kununu.com/at/search?q=Lieb+Bau+Weiz",
    provereno:
      "14.10.2026 sa willhaben-a i lieb.at: oba oglasa obnovljena 08.10.2026 i važe do 14.12.2026. Mesto rada „Graz & Umgebung“, satnice po KV-u: Facharbeiter 19,99 €/h, Vorarbeiter 21,96 €/h, obe „+ Bereitschaft zur Überzahlung“. ISPRAVLJENO: šifra oglasa za Facharbeiter je LB 26 006, a za Vorarbeiter LB 26 005 (ranije je ovde stajala samo jedna šifra). NOVO: kadrovska služba ima ime — Charlotte Leitgeber, +43 3172 2417-165, charlotte.leitgeber@lieb.at.",
    napomena:
      "NAJVEĆA SATNICA U LISTI: predradnik 21,96 €/h, majstor 19,99 €/h bruto, oba puno radno vreme sa mestom rada Graz i okolina. Velika firma, oko 1.200 zaposlenih. VAŽNO: u prijavi OBAVEZNO navesti šifru oglasa — LB 26 006 (Facharbeiter) ili LB 26 005 (Vorarbeiter) — tako izričito pišu, bez toga prijava lako propadne. Primaju i cele ekipe („Bewerbungen von gesamten Arbeiterpartien sind auch willkommen“). ALI: ovo je opšta sanacija i popravke u građevini (Hochbau i sanacija stanova), NIJE sanacija šteta od vode i požara — poklapanje sa Belfor profilom je delimično. Vredi zbog para i sigurnosti. Oglas za predradnika: willhaben.at/jobs/job/vorarbeiter-in-sanierungs-und-instandsetzungsarbeiten/13257818",
    vecKontaktirano: false,
  },
  {
    id: "trummer-kalsdorf",
    firma: "Trummer Sanierung GmbH",
    pozicija: "Sušenje, sanacija buđi, sanacija stambenog prostora — videti Karriere",
    link: "https://trummer-sanierung.at/karriere",
    kontakt: "Alexandra i Rene Trummer — vlasnici (Geschäftsführung)",
    email: "zentrale@trummer.org",
    telefon: "+43 3135 20612",
    adresa: "Hauptstraße 305, 8401 Kalsdorf bei Graz",
    udaljenost: "~12 km",
    preporuka: 4,
    kununu: "https://www.kununu.com/at/search?q=Trummer+Sanierung",
    provereno:
      "14.10.2026 sa trummer-sanierung.at (karriere, impresum): poziv „Wir suchen laufend Verstärkung … auch ohne ausgeschriebene Stelle“ i dalje stoji; zentrale@trummer.org, 03135 20612 i Hauptstraße 305, Kalsdorf — tačno. NOVO: imena vlasnika (Geschäftsführung) — Alexandra Trummer i Rene Trummer.",
    napomena:
      "Regionalna firma, dug staž u sušenju i sanaciji buđi. Nema objavljenih oglasa, ALI na Karriere stranici izričito pišu: „Wir suchen laufend Verstärkung — im Innendienst wie auf der Baustelle. Schreiben Sie uns, auch ohne ausgeschriebene Stelle.“ (tražimo stalno, pišite nam i bez oglasa). Primaju prijave za Montage („Trocknung aufstellen, Schäden sanieren“), Innendienst, Lager i Außendienst — Montage je njegovo. Manji tim, lakše da ga prime na razgovor nego u velikoj grupi.",
    vecKontaktirano: false,
  },
  {
    id: "lts-graz",
    firma: "LTS Service GmbH",
    pozicija: "Leckorter · Trocknungsmonteur · Projektleiter — filijala Štajerska",
    link: "https://lts-group.com/karriere/",
    kontakt: "Dominik Degen — šef filijale Štajerska/Graz",
    email: "dominik.degen@lts-service.at",
    telefon: "+43 670 608 64 61",
    adresa: "Filijala Štajerska: Petersgasse 34, 8010 Graz",
    udaljenost: "Graz",
    preporuka: 4,
    kununu: "https://www.kununu.com/at/search?q=LTS+Service",
    kontaktAlt: "Filijala Graz: stmk@lts-service.at · centrala Salzburg: office@lts-service.at · +43 6245 21950 (Urstein Nord 13, 5412 Puch) · prijava i preko lts-group.com/karriere/bewerbung-senden/",
    provereno:
      "14.10.2026 sa lts-group.com (tim, lokacije, karijera): NOVO — šef filijale Graz ima ime: Dominik Degen, „Niederlassungsleiter Steiermark – Filiale Graz“, dominik.degen@lts-service.at, isti broj +43 670 608 64 61. Adresa Petersgasse 34 tačna. Na karijernoj stranici i dalje 7 pozicija (među njima Leckorter i Trocknungsmonteur), ali NIJEDNA ne navodi Graz ili Štajersku kao mesto rada.",
    napomena:
      "Porodična firma, sanacija požara i vode + upravljanje nekretninama, filijale širom Austrije. Leckorter i Trocknungsmonteur su Belfor posao 1:1, ali oglasi ne kažu za koju filijalu — zato prvo pozvati Dominika Degena (šef filijale Graz) i pitati da li nekoga traže za Graz. Hitna linija 0800 66 55 67.",
    vecKontaktirano: false,
  },
  {
    id: "brugger-graz",
    firma: "Brugger Entfeuchtungs- & Kanaltechnik GmbH",
    pozicija: "Odvlaživanje, sušenje objekata, isušivanje zidova",
    link: null,
    kontakt: "Margit Brugger — vlasnica (Geschäftsführung)",
    email: "office@brugger-entfeuchtung.at",
    telefon: "0316 47 17 71",
    adresa: "Liebenauer Hauptstraße 181, 8041 Graz",
    udaljenost: "Graz",
    preporuka: 3,
    kununu: "https://www.kununu.com/at/search?q=Brugger+Entfeuchtung",
    provereno:
      "14.10.2026 sa brugger-entfeuchtung.at (impresum, kontakt): adresa, 0316 47 17 71 i office@brugger-entfeuchtung.at tačni. NOVO: vlasnica Margit Brugger, firma ima preko 25 zaposlenih, radno vreme pon–čet 8–17, pet 8–12. Na sajtu i dalje nema Jobs/Karriere stranice — inicijativna prijava je jedini put.",
    napomena:
      "Nema oglasa — inicijativna prijava. Uska specijalnost (odvlaživanje + kanalizaciona tehnika) koja se direktno poklapa s Belfor iskustvom. Preko 25 zaposlenih. Najbolje pozvati u radno vreme (pon–čet 8–17, pet 8–12) pa poslati CV na mejl.",
    vecKontaktirano: false,
  },
  {
    id: "derigo-graz",
    firma: "Derigo Installations GmbH",
    pozicija: "Sanacija štete od vode + instalacije — oglasi: Bauhelfer, Fliesenleger (novo), Installateur",
    link: "https://www.derigo.at/jobs",
    kontakt: "Marion Khallaf-Derigo — direktorka; prijava telefonom kod nje: 0676 847227 500",
    kontaktNas: { ime: "Dragan Todic", uloga: "radnik na sanaciji (Sanierung Helfer) — kolega, bez direktnog kontakta" },
    email: "buero@derigo.at",
    telefon: "0316 57 24 57",
    adresa: "Triester Straße 391, 8055 Graz",
    udaljenost: "Graz",
    preporuka: 3,
    kununu: "https://www.kununu.com/at/search?q=Derigo+Installations",
    provereno:
      "14.10.2026 sa derigo.at (jobs, tim, impresum): tri stara oglasa i dalje stoje, plus NOVI Fliesenleger:in (online od 09.10.2026, oko 2.260 € neto). Oglasi kažu „Ruf jetzt an! Kein Formular … ein kurzes Telefonat mit der Chefin Marion“ — 0676 847227 500. Impresum: direktorka Marion Khallaf-Derigo; na stranici tima kao Geschäftsführung stoji i Karim Khallaf (karim@derigo.at), pa raniji „ispravak“ tog imena nije bio sasvim tačan. U timu: „Todic Dragan — Sanierung Helfer“.",
    napomena:
      "Manja gradska firma, sanacija vode + vodoinstalacije i kupatila. Oglasi su pisani i na slovenačkom, uz napomenu da je dovoljno osnovno znanje nemačkog. U ekipi za sanaciju radi Dragan Todic — po imenu verovatno naš. Otvoreno: Bauhelfer (2.368,06 € bruto/mes., 38,5 h), Installateur (~2.300 € neto), Fliesenleger (~2.260 € neto) i Lehrstelle Bürokaufmann. Najbrže: pozvati direktorku Marion na 0676 847227 500. Radno vreme kancelarije: pon–čet 07:15–16:15, pet 07:15–11:45.",
    vecKontaktirano: false,
  },
  {
    id: "hsp-premstaetten",
    firma: "HSP Haustechnik GmbH",
    pozicija: "Kućna tehnika (grejanje/vodovod) + sanacija štete od vode — Quereinsteiger/Montagehelfer",
    link: "https://www.hsp-haustechnik.at/stellenangebote/",
    kontakt: "Dragan Pejic — direktor (Geschäftsführung)",
    kontaktNas: { ime: "Dragan Pejic", uloga: "direktor firme", email: "office@hsp-haustechnik.at", telefon: "+43 664 4311536" },
    email: "office@hsp-haustechnik.at",
    telefon: "+43 664 4311536",
    adresa: "Torpeterweg 22a, 8141 Premstätten",
    udaljenost: "~10 km",
    preporuka: 4,
    kununu: "https://www.kununu.com/at/search?q=HSP+Haustechnik",
    provereno:
      "14.10.2026 sa hsp-haustechnik.at (oglasi, impresum): NOVO — direktor je Dragan Pejic („Geschäftsführung: Herr Dragan Pejic“). Mobilni +43 664 4311536 stoji u impresumu kao broj firme (ne piše čiji je). Ista 4 oglasa, stalna (od 2023): Gas-/Wasser-/Zentralheizungsmonteur u Grazu, Quereinsteiger/Montagehelfer, Monteure HKLS, Lehrlinge HKLS. Mejl i adresa tačni.",
    napomena:
      "Porodični zanatski pogon, 18 godina iskustva, hitna služba 24/7. DIREKTOR DRAGAN PEJIC — po imenu verovatno naš čovek, pa razgovor može na našem jeziku. Oglasi su HKLS (grejanje/vodovod/klima), ne sanacija šteta, ali „Quereinsteiger/Montagehelfer“ izričito prima ljude iz drugih branši („Egal, was du vorher gemacht hast“) — plata po KV-u uz Überzahlung. Zvati na +43 664 4311536 i tražiti Pejića.",
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
      "14.10.2026 sa etb-bauer.at/kontakt i impresuma — bez promena: office@etb-bauer.at, Bernhard Bauer +43 664 4607371, Harald Bauer +43 664 2823190, Mooskirchnerstraße 21, 8561 Söding-Sankt Johann, radno vreme pon–čet 07:00–16:00, pet 07:00–13:00. Obojica su vlasnici (Geschäftsführung). I dalje nema stranice sa oglasima.",
    napomena:
      "Nema objavljenih oglasa — ali imamo direktne mobilne brojeve oba vlasnika, što je najbrži put. Mala firma, sve ide preko telefona. Zvati pon–čet 07–16, pet 07–13.",
    vecKontaktirano: false,
  },
  {
    id: "ledererbau-graz",
    firma: "Lederer-Grabner Baugesellschaft m.b.H.",
    pozicija: "Schadenssanierung (sanacija šteta) u okviru građevinske firme",
    link: "https://www.ledererbau.com/karriere/",
    kontakt: "Kancelarija (za sanaciju šteta nije navedena posebna osoba)",
    kontaktAlt: "Šefovi grupa gradilišta (sa prokurom): BM Ing. Martin Felber · +43 664 496 47 58 · martin.felber@ledererbau.com — Franz Karl Niederl · +43 664 61 13 238 · niederl.fk@ledererbau.com",
    email: "office@ledererbau.com",
    telefon: "+43 316 47 25 81",
    adresa: "Puchstraße 162, 8055 Graz",
    udaljenost: "Graz",
    preporuka: 3,
    kununu: "https://www.kununu.com/at/search?q=Lederer-Grabner",
    provereno:
      "14.10.2026 sa ledererbau.com: mejl, telefon, adresa (Puchstraße 162) i radno vreme (pon–čet 07:00–16:30, pet 07:00–12:00) tačni. Na Karriere stranici i dalje samo opšti formular („Wir suchen die Besten“), bez pojedinačnih oglasa. NOVO: na stranici firme stoji spisak šefova gradilišta sa direktnim brojevima (oko 270 zaposlenih) — ne piše ko vodi sanaciju šteta.",
    napomena:
      "Građevinska firma koja radi i sanaciju šteta od buđi, požara i vode (Schimmel-, Brand- i Wasserschadensanierung). Nema objavljenih oglasa, ide se preko formulara na Karriere stranici ili direktno na office@ledererbau.com — ili pozvati jednog od dvojice šefova grupa (gore) i pitati ko vodi sanaciju šteta. Stabilan poslodavac u Grazu. Među šefovima gradilišta nema imena sa naših prostora.",
    vecKontaktirano: false,
  },

  // ── Novo 14.10.2026 ──
  {
    id: "ets-graz",
    firma: "ETS Egger GmbH (ETS Steiermark Süd)",
    pozicija: "Bodenleger (m/w/d) u Grazu — uz pomoć na sanaciji i sušenju (od 3.065 € bruto + dodaci)",
    link: "https://www.willhaben.at/jobs/job/bodenleger-m-w-d/13232883",
    kontakt: "Aron Rada — kontakt iz oglasa, filijala Graz",
    kontaktAlt: "Filijala Graz: graz@ets.at · +43 316 295 880 · hitna linija 050 99 10 · svi oglasi: ets-gruppe.com/at/jobs",
    email: "aron.rada@ets.at",
    telefon: "0664 60435250",
    adresa: "Gmeinstraße 19, 8055 Graz",
    udaljenost: "Graz",
    preporuka: 4,
    kununu: "https://www.kununu.com/at/search?q=ETS+Egger",
    provereno:
      "14.10.2026 sa willhaben-a i StepStone-a: oglas ponovo objavljen 12.10.2026 i aktivan — „Unser Team in Graz braucht Verstärkung“, „Bruttomindestlohn € 3.065,- + Zulagen“, prijava kod „Herrn Aron Rada, Gmeinstraße 19, 8055 Graz, aron.rada@ets.at, Tel.: 0664/60435250“. Na sajtu firme (ets-gruppe.com/at/jobs) za Graz stoje Bodenleger i Tischler; oglasi za Entfeuchtungstechniker i Leckortungstechniker postoje samo za druge filijale (Zeltweg, Irdning…).",
    napomena:
      "NOVA FIRMA, profil 1:1 kao Belfor: sušenje i sanacija posle vode, požara i buđi, traženje curenja (Lecksuche, Leitungsortung) — oko 350 zaposlenih na 15 lokacija. Oglas je za podopolagača, ali među zadacima je i pomoć pri sanaciji šteta od požara, vode i buđi i pri sušenju, a u platnoj tabeli su i pomoćnik i Hilfsarbeiter (od 2.427 €). Pozvati Arona Radu i pitati da li u Grazu traže nekoga za sušenje/sanaciju — za to već imaju oglase u drugim filijalama.",
    vecKontaktirano: false,
  },
  {
    id: "majcen-seiersberg",
    firma: "Ing. Majcen Baugesellschaft m.b.H.",
    pozicija: "Sanierungsfachkraft / Allroundler — odvlaživanje i sanacija (KV za majstora 3.185,60 € bruto)",
    link: "https://www.majcen-bau.at/2024/06/21/sanierungsfachkraft-allroundler-m-w-d/",
    kontakt: "Kancelarija (ime nije objavljeno)",
    email: "office@majcen-bau.at",
    telefon: "+43 316 40 99 800",
    adresa: "Brunnenfeldstraße 25-27, 8055 Seiersberg-Pirka",
    udaljenost: "~6 km",
    preporuka: 4,
    kununu: "https://www.kununu.com/at/search?q=Majcen",
    provereno:
      "14.10.2026 sa majcen-bau.at: oglas „Sanierungsfachkraft / Allroundler“ i dalje stoji na sajtu i na Indeed-u, ali je iz juna 2024 — možda je već popunjen. Plata: „Bruttomonatslohn (Facharbeiter) lt. KV für Facharbeiter € 3.185,60“ uz spremnost na Überzahlung. Usluge firme: „Entfeuchtung & Sanierung“, „Leck-, Leitungsortung & Infrarotthermografie“.",
    napomena:
      "NOVA FIRMA odmah kraj Graza, profil skoro 1:1: odvlaživanje, sanacija, traženje curenja. Oglas traži iskustvo u sanaciji (suvi zid, malter, pločice, hidroizolacija, podovi, molerski radovi) i spremnost da se nauči odvlaživanje — to on već zna. Oglas je star (jun 2024), zato prvo pozvati i pitati da li još traže; ako ne — inicijativna prijava.",
    vecKontaktirano: false,
  },
  {
    id: "adecco-graz",
    firma: "Adecco (agencija za zapošljavanje), Graz",
    pozicija: "Preko agencije: Bodenleger · Fliesenleger · Trockenbaumonteur · Installateur — Graz (od 15,30–15,45 €/h)",
    link: "https://www.willhaben.at/jobs/job/bodenleger-in-m-w-d-handwerkliches-talent-gesucht-in-graz-steiermark/13278457",
    kontakt: "Ivan Blazevic — regruter za zanatske poslove u Grazu",
    kontaktNas: { ime: "Ivan Blazevic", uloga: "regruter, Adecco Graz", email: "ivan.blazevic@contact.adecco.at", telefon: "+43 5991180013" },
    email: "ivan.blazevic@contact.adecco.at",
    telefon: "+43 5991180013",
    udaljenost: "Graz",
    preporuka: 3,
    kununu: "https://www.kununu.com/at/search?q=Adecco",
    provereno:
      "14.10.2026 sa willhaben-a: četiri aktivna oglasa od 09.–12.10.2026, „Einsatzort Graz“, svi sa istim kontaktom: „Ivan Blazevic, T +435991180013, M ivan.blazevic@contact.adecco.at“ (kod oglasa za Installateur-a broj je +435991180000). Satnice: Bodenleger i Trockenbau od 15,45 €/h, Fliesenleger od 15,30 €/h, Installateur od 15,40 €/h.",
    napomena:
      "Agencija (Leiharbeit), ne direktan poslodavac — plata je niža nego kod firmi gore. Ali Ivan Blazevic je po imenu verovatno naš i radi baš zanatske poslove u Grazu: pozvati ga, reći da ima Belfor iskustvo (sušenje, voda, požar) i pitati da li ima klijenta za sanaciju šteta. VAŽNO: Adecco ne uzima u obzir prijave poslate mejlom — prvo telefon, pa prijava preko dugmeta „Direkt bewerben“ u oglasu.",
    vecKontaktirano: false,
  },
  {
    id: "synergie-graz",
    firma: "Synergie Personal (agencija) — za neimenovanu firmu za sanaciju šteta u Grazu",
    pozicija: "Allround-Handwerker — podovi, pločice i ostalo, kod firme za sanaciju šteta (min. 3.157,87 € bruto)",
    link: "https://www.willhaben.at/jobs/job/allround-handwerker-w-w-d-boden-fliesen-mehr/13268403",
    kontakt: "Kancelarija Graz (ime nije objavljeno)",
    email: "office.graz@synergiejobs.at",
    adresa: "Otto-Baumgartner-Straße 4/Top 3a, 8055 Seiersberg",
    udaljenost: "Graz",
    preporuka: 3,
    kununu: "https://www.kununu.com/at/search?q=Synergie+Personal",
    provereno:
      "14.10.2026 sa willhaben-a: oglas aktivan (prvi put 16.09., ponovo objavljen 14.10.2026). „Als ein International führendes Unternehmen in der Schadensanierung ist unser Kunde spezialisiert auf die professionelle Wiederherstellung von Immobilien und Infrastruktur nach Brand-, Wasser- und Sturmschäden“, „am Standort in Graz“, „Das gesetzliche Mindestentgelt beträgt € 3.157,87 brutto / Monat“. Ime klijenta nije navedeno.",
    napomena:
      "Posao je 1:1 (sanacija posle požara, vode i oluje), a plata dobra — ALI agencija ne kaže ko je klijent. „Međunarodno vodeća firma za sanaciju, sa lokacijom u Grazu“ je najverovatnije BELFOR (njegov bivši poslodavac), možda Polygon. Prvo pitati Synergie ko je klijent, pa odlučiti. Oglas nudi i „Option zur Übernahme“ — kasniji prelazak direktno u firmu.",
    vecKontaktirano: false,
  },
  {
    id: "entfeuchter-lieboch",
    firma: "der entfeuchter Wasserschadensanierungs GmbH",
    pozicija: "Entfeuchtungstechniker (obuka u firmi) · Sanierungsfachkraft — Lieboch",
    link: "https://www.entfeuchter.com/job/entfeuchtungstechniker/",
    kontakt: "Kancelarija; direktori Ing. Paul Pagitsch i Ing. Michael Pagitsch",
    kontaktAlt: "Prijem šteta i koordinacija: Edeltraud Doppler Haj-Youssef · doppler@entfeuchter.com — projektni vođa (buđ): Thomas Pagitsch · t.pagitsch@entfeuchter.com",
    email: "office@entfeuchter.com",
    telefon: "0316 29 41 47",
    adresa: "Industriestraße Süd 18, 8501 Lieboch",
    udaljenost: "~17 km",
    preporuka: 5,
    kununu: "https://www.kununu.com/at/search?q=der+entfeuchter",
    provereno:
      "14.10.2026 sa entfeuchter.com (oglasi, tim, impresum): otvoreno „Entfeuchtungstechniker (M/W/D) auf Vollzeitbasis“ — traže „Berufserfahrung im Baunebengewerbe“ i vozačku B, nude „Hauseigene Ausbildung zum Entfeuchtungstechniker“ i službeno vozilo, plata „Bereitschaft zu Überzahlung“ bez cifre. Otvoreno i „Sanierungsfachkraft“ (iskustvo kao podopolagač ili keramičar). Datum objave nije naveden. Sajt ima nepotpun TLS sertifikat — pretraživač može da pokaže upozorenje; stranica se otvori kad se ono prihvati.",
    napomena:
      "NOVA FIRMA, profil 1:1: traženje curenja, odvlaživanje/sušenje, sanacija posle vode, buđ — hitna služba 0–24. Postoji od 1990, na stranici tima 16 ljudi (od toga 4 tehničara za curenje). Oglas za Entfeuchtungstechniker-a je tačno njegov posao, a obuku daju sami. Radno vreme pon–čet 07:30–16:30, pet 07:30–12:00. U Lieboch-u je i Profi MAX — dve firme za sušenje na par minuta jedna od druge. Nema imena sa naših prostora.",
    vecKontaktirano: false,
  },
  {
    id: "trockenmax-feldkirchen",
    firma: "Trockenmax Entfeuchtung u. Sanierungs GmbH",
    pozicija: "Sušenje, traženje curenja, buđ, unutrašnja sanacija — bez oglasa, inicijativna prijava",
    link: null,
    kontakt: "Christian Thomann — direktor (Geschäftsführung)",
    kontaktAlt: "Sa arhiviranog sajta (sept. 2025, proveriti): Christian Thomann 0664 8368557 · tho@trockenmax.at — šef odeljenja Hansjürgen Daum +43 664 96 65 662 · daum@trockenmax.at",
    email: "office@trockenmax.at",
    telefon: "+43 316 418989",
    adresa: "Eduard-Ast-Straße 15/3, 8073 Feldkirchen bei Graz",
    udaljenost: "~10 km",
    preporuka: 4,
    kununu: "https://www.kununu.com/at/search?q=Trockenmax",
    provereno:
      "14.10.2026: sajt trockenmax.at trenutno pokazuje samo zaštitu od botova, pa su pročitani arhivirani sajt (08.09.2025) i imenici. office@trockenmax.at i +43 316 418989 potvrđuju Herold i firmenabc. Na arhiviranoj stranici „Über uns“: „32 Mitarbeiter & Mitarbeiterinnen, 28 Fahrzeuge“. Imena iz tima (Thomann, Daum) su sa arhivirane stranice i nisu potvrđena na živom sajtu. Oglasa nema ni na sajtu ni na portalima.",
    napomena:
      "NOVA FIRMA, profil 1:1 osim požara: hitna služba posle vode, tehničko sušenje, traženje curenja bez razbijanja, buđ, pa kompletna unutrašnja sanacija (imaju svoje zidare, keramičare, stolare, molere i podopolagače). Oko 30 zaposlenih, 10 km od Graza. Oglasa nema — pozvati kancelariju (pon–čet 07:30–16:30, pet do 12:00), pitati za direktora Thomanna da li im treba tehničar za sušenje, pa poslati CV. Nema imena sa naših prostora.",
    vecKontaktirano: false,
  },
  {
    id: "eisbaer-graz",
    firma: "eisbär Graz (Icebear Entfeuchtung & Klima GmbH)",
    pozicija: "Odeljenje za štete od vode (Štajerska, Koruška) — bez oglasa za Graz, inicijativna prijava",
    link: "https://eisbaer.com/jobs/",
    kontakt: "Yvonne Lindner — projektni vođa za sanaciju štete od vode, Graz",
    kontaktAlt: "Lindner: lindner.y@eisbaer-graz.com · tehnički šef Graz: Christoph Szapacs · stmk@eisbaer.com · +43 316 24 27 00",
    email: "office@eisbaer-graz.com",
    telefon: "+43 316 24 35 35",
    adresa: "Puntigamer Straße 127, 8055 Graz",
    udaljenost: "Graz",
    preporuka: 3,
    kununu: "https://www.kununu.com/at/search?q=eisb%C3%A4r",
    provereno:
      "14.10.2026 sa eisbaer.com (kontakt, tim, oglasi): filijala Graz ima svoje odeljenje za štete od vode (ispitivanje pritiska, traženje curenja, sušenje, sanacija, obračun direktno sa osiguranjem) — office@eisbaer-graz.com, +43 316 24 35 35 (ujedno dežurna linija). Na stranici sa oglasima 6 mesta, nijedno u Grazu (Wels, Innsbruck, Wien). Inicijativne prijave primaju.",
    napomena:
      "Grupa za klimatizaciju i odvlaživanje sa filijalama u Beču, Welsu, Innsbrucku i Grazu; u Grazu je odeljenje baš za štete od vode. Oglasa za Graz sada nema — pozvati, pitati Yvonne Lindner da li traže tehničara za sušenje, pa poslati inicijativnu prijavu. U filijali Graz nema imena sa naših prostora (ima ih u Beču i Welsu).",
    vecKontaktirano: false,
  },
  {
    id: "goldgruber-gleisdorf",
    firma: "Goldgruber Unternehmens GmbH",
    pozicija: "Sušenje posle vode, traženje curenja, buđ — „tražimo dobre ljude“, inicijativna prijava",
    link: "https://www.goldgruber.eu/jobangebote_7.htm",
    kontakt: "Gottfried Goldgruber — vlasnik i direktor",
    kontaktAlt: "Mobilni firme: +43 664 42 100 08",
    email: "office@goldgruber.eu",
    telefon: "+43 3112 36 220-0",
    adresa: "Frank-Stronach-Straße 6, 8200 Gleisdorf",
    udaljenost: "~25 km",
    preporuka: 3,
    kununu: "https://www.kununu.com/at/search?q=Goldgruber",
    provereno:
      "14.10.2026 sa goldgruber.eu: na stranici sa poslovima nema konkretnih oglasa, ali piše „Wir suchen gute Mitarbeiter. Freiberufler und Selbständige willkommen, oder schicken Sie uns einfach Ihre Initiativbewerbung!“. Kontakt sa sajta: +43 3112 36 220-0, +43 664 42 100 08, office@goldgruber.eu. Vlasnik i direktor od 2010: Gottfried Goldgruber (javni registar).",
    napomena:
      "NOVA FIRMA: sušenje posle štete od vode (i estriha i izolacije), traženje curenja, buđ, neprijatni mirisi, iznajmljivanje sušača — bez požara. Srednja firma sa svojim tehničarima, Gleisdorf ~25 km istočno. Oglasa nema, ali izričito pozivaju na inicijativnu prijavu. Nema imena sa naših prostora.",
    vecKontaktirano: false,
  },
  {
    id: "suedmann-leibnitz",
    firma: "SÜDMANN Bau & Transporte GmbH",
    pozicija: "Odvlaživanje i sanacija štete od vode, suvi zid — bez oglasa, inicijativna prijava",
    link: null,
    kontakt: "Matej Capin — direktor (Geschäftsführer)",
    kontaktNas: { ime: "Matej Capin, Ines Kesinovic", uloga: "direktor i prokuristkinja — preko kancelarije", email: "office@suedmann.at", telefon: "+43 676 5300275" },
    kontaktAlt: "Mejl-link na sajtu vodi na office@suedmann-trockenbau.at (oba domena primaju poštu)",
    email: "office@suedmann.at",
    telefon: "+43 676 5300275",
    adresa: "Ebnerweg 29, 8434 Tillmitsch (kod Leibnitza)",
    udaljenost: "~33 km",
    preporuka: 3,
    kununu: "https://www.kununu.com/at/search?q=S%C3%BCdmann",
    provereno:
      "14.10.2026: na suedmann.at stoji stranica „Entfeuchtung & Wasserschadensanierung“ (sušenje, sanacija i obnova oštećenih prostorija), plus suvi zid i renoviranje; kontakt +43 676 5300275, office@suedmann.at. Po javnom registru (evi.gv.at): direktor Matej Capin (od 03.05.2023), drugi direktor Hans Jürgen Resch (od 01.09.2025), prokuristkinja Ines Kesinovic. Oglasa nema.",
    napomena:
      "Mala firma južno od Graza (Tillmitsch/Leibnitz, ~33 km — malo preko granice od 30 km). Radi odvlaživanje i sanaciju posle vode. Direktor Matej Capin i prokuristkinja Ines Kesinovic — po imenima verovatno govore naš jezik. Oglasa nema: pozvati, predstaviti se na našem i pitati da li im treba neko sa Belfor iskustvom.",
    vecKontaktirano: false,
  },
  {
    id: "trosecc-feldkirchen",
    firma: "Abdichtungstechnik DI Rittner e.U. (TROSECC)",
    pozicija: "Isušivanje zidova i uklanjanje buđi — bez oglasa, inicijativna prijava",
    link: null,
    kontakt: "Dipl.-Ing. Helfried Rittner — vlasnik",
    kontaktNas: { ime: "Dzevad Osmancevic", uloga: "vođa servisnog tima (Teamleiter Servicetechnik) — preko kancelarije", email: "rittner@trosecc.at", telefon: "0316 24 11 12" },
    email: "rittner@trosecc.at",
    telefon: "0316 24 11 12",
    adresa: "Riegelschneiderweg 15, 8073 Feldkirchen bei Graz",
    udaljenost: "~9 km",
    preporuka: 3,
    kununu: "https://www.kununu.com/at/search?q=Trosecc",
    provereno:
      "14.10.2026 sa trosecc.at (tim, kontakt): vlasnik Dipl.-Ing. Helfried Rittner; „Dzevad Osmancevic — Teamleiter Servicetechnik“. Kontakt 0316 24 11 12, rittner@trosecc.at, pon–pet 08–17. Po Herold-u 6–10 zaposlenih. Oglasa i Karriere stranice nema.",
    napomena:
      "Mala firma blizu Graza: isušivanje zidova, horizontalne barijere protiv vlage, uklanjanje buđi, analiza objekta. Poklapanje delimično (nema sušenja posle akutnih šteta od vode), ali vlaga i buđ su njegov posao. Šef servisnog tima Dzevad Osmancevic — po imenu verovatno naš: pozvati kancelariju i tražiti njega.",
    vecKontaktirano: false,
  },
  {
    id: "krajina-lieboch",
    firma: "KRAJINA Bau- und Errichtungs GmbH",
    pozicija: "Građevinska firma (kuće „ključ u ruke“), ima i dozvolu za odvlaživanje — bez oglasa",
    link: null,
    kontakt: "Stjepan Krajina — vlasnik i direktor",
    kontaktNas: { ime: "Stjepan Krajina", uloga: "vlasnik i direktor", email: "ks@krajina-bau.at", telefon: "0699 102 886 84" },
    kontaktAlt: "Kancelarija: office@krajina-bau.at · +43 676 37 72 090 · administracija: Ana Krajina",
    email: "office@krajina-bau.at",
    telefon: "+43 676 37 72 090",
    adresa: "Packerstraße 281, 8501 Lieboch",
    udaljenost: "~15 km",
    preporuka: 2,
    kununu: "https://www.kununu.com/at/search?q=Krajina+Bau",
    provereno:
      "14.10.2026 sa krajina.at: „Stjepan Krajina — Geschäftsführer“, ks@krajina-bau.at, 0699 102 886 84, Packerstraße 281, 8501 Lieboch; „Ana Krajina — Administration“; na početnoj strani „40 + Mitarbeiter“, „Seit 2015“. Po WKO-u firma ima i slobodnu delatnost „Entfeuchtung“. Oglasa i Karriere stranice nema.",
    napomena:
      "NIJE firma za sanaciju šteta — gradi kuće po fiksnoj ceni. Na listi je zbog jezika: vlasnik Stjepan Krajina i Ana Krajina su po imenima verovatno naši, firma ima 40+ zaposlenih i radi i u Hrvatskoj. Rezerva za posao na našem jeziku ako sanacija ne uspe — zvati direktno vlasnika.",
    vecKontaktirano: false,
  },
  {
    id: "holzer-hart",
    firma: "Holzer Installationen GmbH",
    pozicija: "Installationshelfer (bez škole, od 2.000 € bruto, 38,5 h) — vodoinstalacije, hitne intervencije kod pucanja cevi",
    link: "https://www.holzer-installationen.at/jobs/helfer",
    kontakt: "Christian Holzer — direktor",
    kontaktNas: { ime: "Salem Salihovic, Zlatan Gutic, Kristijan Svajger", uloga: "tehničar, pomoćnik i instalater u firmi — kolege, bez direktnog kontakta" },
    email: "office@holzer-installationen.at",
    telefon: "+43 664 128 77 12",
    adresa: "Pachern-Hauptstraße 151, 8075 Hart bei Graz",
    udaljenost: "~8 km",
    preporuka: 2,
    kununu: "https://www.kununu.com/at/search?q=Holzer+Installationen",
    provereno:
      "14.10.2026 sa holzer-installationen.at: otvoreno „Helfer — ab € 2.000, 38,5 h“, bez potrebne škole, i Installateur od 2.900 € (traži završen zanat). Na stranici tima: Salem Salihovic (Techniker), Zlatan Gutic (Helfer), Kristijan Svajger (Installateur). Oko 13 ljudi.",
    napomena:
      "Vodoinstalacije i grejanje, ne sanacija — ali kod pucanja cevi rade traženje curenja, otvaranje i popravku, pa iskustvo sa vodom pomaže. Na listi zbog jezika: u timu su trojica sa imenima sa naših prostora. Plata za pomoćnika je niska (od 2.000 €) — samo kao rezerva.",
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
    status: "odbijen",
  },
];
