// Zajednička logika za sve liste. Svaki podaci.js definiše KLJUC i POSLOVI.
// Stranica koja ima dugme #kopiraj (za sada samo sanacija) umesto kućice ima tri dugmeta za oznaku.

const OZNAKE = !!document.getElementById("kopiraj");
const NAZIV = { prijavio: "Prijavio se", odbijen: "Odbijen", neodgovara: "Ne odgovara" };

let stanje = {};
try { stanje = JSON.parse(localStorage.getItem(KLJUC)) || {}; } catch (e) { stanje = {}; }

// Oznaka firme { s, r }: s je ključ iz NAZIV, "zavrseno" (bez posebne oznake) ili "" (aktivno), r je razlog.
// Oznaka iz ovog pretraživača ima prednost nad onom iz podaci.js. Stara kvačica (true/false)
// na sanaciji važi kao „Prijavio se“ / aktivno.
function oznaka(p){
  const v = Object.prototype.hasOwnProperty.call(stanje, p.id) ? stanje[p.id] : undefined;
  if (v === undefined) return { s: p.status || (p.vecKontaktirano ? "zavrseno" : ""), r: p.razlog || "" };
  if (typeof v === "boolean") return { s: v ? (OZNAKE ? "prijavio" : "zavrseno") : "", r: "" };
  return v;
}
function zavrseno(p){
  return oznaka(p).s !== "";
}
function snimi(){
  try { localStorage.setItem(KLJUC, JSON.stringify(stanje)); } catch (e) {}
}

let tab = "aktivno";

const el   = (id) => document.getElementById(id);
const esc  = (s) => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const zvez = (n) => "★".repeat(n) + "☆".repeat(5 - n);
const tel  = (t) => `<a href="tel:${esc(t.replace(/[^+\d]/g,""))}">${esc(t)}</a>`;
const mail = (m) => `<a href="mailto:${esc(m)}">${esc(m)}</a>`;

function kartica(p){
  const done = zavrseno(p);
  const o = oznaka(p);
  const d = [];
  if (p.kontakt && p.kontakt !== "—") d.push(["Kontakt osoba", esc(p.kontakt)]);
  if (p.kontaktNas) d.push([
    'Naš jezik <span class="mini">(pretpostavka po imenu)</span>',
    `<strong>${esc(p.kontaktNas.ime)}</strong>${p.kontaktNas.uloga ? " — " + esc(p.kontaktNas.uloga) : ""}` +
    (p.kontaktNas.email ? "<br>" + mail(p.kontaktNas.email) : "") +
    (p.kontaktNas.telefon ? "<br>" + tel(p.kontaktNas.telefon) : "")
  ]);
  if (p.kontaktAlt) d.push(["Drugi kontakt", esc(p.kontaktAlt)]);
  if (p.telefon) d.push(["Telefon", tel(p.telefon)]);
  if (p.email)   d.push(["E-mail", mail(p.email)]);
  if (p.adresa)  d.push(["Adresa", esc(p.adresa)]);
  if (p.plata)   d.push(["Plata", esc(p.plata)]);
  if (p.pocetak) d.push(["Početak", esc(p.pocetak)]);

  return `
  <div class="card${done ? " done" : ""}">
    ${OZNAKE ? "" : `<input type="checkbox" data-id="${esc(p.id)}" ${done ? "checked" : ""}
           aria-label="Označi kao kontaktirano">`}
    <div class="body">
      <p class="pos">${esc(p.pozicija)}</p>
      <p class="firma">${esc(p.firma)}</p>
      <div class="badges">
        ${NAZIV[o.s] ? `<span class="badge status st-${o.s}">${NAZIV[o.s]}${o.r ? " — " + esc(o.r) : ""}</span>` : ""}
        <span class="badge" title="Moje rangiranje, vidi objašnjenje na dnu">${zvez(p.preporuka)}</span>
        <span class="badge ok">${esc(p.udaljenost)}</span>
        ${p.lehre ? '<span class="badge lehre">LEHRE</span>' : ""}
        ${p.kontaktNas ? '<span class="badge nas">govori naš jezik?</span>' : ""}
        ${p.link ? "" : '<span class="badge warn">Nema oglasa — javiti se direktno</span>'}
      </div>
      <dl>${d.map(([k,v]) => `<dt>${k}</dt><dd>${v}</dd>`).join("")}</dl>
      <p class="note">${esc(p.napomena)}</p>
      ${p.provereno ? `<p class="verif"><strong>Provereno:</strong> ${esc(p.provereno)}</p>` : ""}
      <div class="links">
        ${p.link ? `<a href="${esc(p.link)}" target="_blank" rel="noopener">Oglas ↗</a>` : ""}
        <a href="${esc(p.kununu)}" target="_blank" rel="noopener">kununu ocena ↗</a>
        <a href="https://www.google.com/maps/search/${encodeURIComponent(p.firma + " " + (p.adresa || "Graz"))}"
           target="_blank" rel="noopener">Mapa ↗</a>
      </div>
      ${OZNAKE ? `<div class="oznake" role="group" aria-label="Oznaka">${Object.keys(NAZIV).map(s =>
        `<button data-id="${esc(p.id)}" data-s="${s}" aria-pressed="${o.s === s}">${NAZIV[s]}</button>`).join("")}</div>` : ""}
    </div>
  </div>`;
}

function crtaj(){
  const q = el("q").value.trim().toLowerCase();
  const s = el("sort").value;

  let lista = POSLOVI.filter(p => zavrseno(p) === (tab === "zavrseno"));
  if (q) lista = lista.filter(p =>
    [p.firma, p.pozicija, p.adresa, p.udaljenost, p.kontakt, p.kontaktNas && p.kontaktNas.ime]
      .filter(Boolean).join(" ").toLowerCase().includes(q));

  lista.sort((a,b) =>
      s === "firma" ? a.firma.localeCompare(b.firma, "sr")
    : s === "oglas" ? (!!b.link - !!a.link) || b.preporuka - a.preporuka
    : s === "lehre" ? (!!b.lehre - !!a.lehre) || b.preporuka - a.preporuka
    : b.preporuka - a.preporuka || a.firma.localeCompare(b.firma, "sr"));

  el("lista").innerHTML = lista.length
    ? lista.map(kartica).join("")
    : `<p class="empty">${tab === "zavrseno"
        ? "Još ništa nije završeno."
        : (q ? "Nema rezultata za tu pretragu." : "Sve je obrađeno. 👏")}</p>`;

  const brA = POSLOVI.filter(p => !zavrseno(p)).length;
  el("c-aktivno").textContent  = `(${brA})`;
  el("c-zavrseno").textContent = `(${POSLOVI.length - brA})`;
  el("reset").hidden = tab !== "zavrseno";
  if (OZNAKE) {
    el("kopiraj").hidden = tab !== "zavrseno";
    if (tab !== "zavrseno") el("spisak").hidden = true;
  }
}

el("lista").addEventListener("change", e => {
  const cb = e.target.closest("input[type=checkbox]");
  if (!cb) return;
  stanje[cb.dataset.id] = cb.checked;
  snimi();
  crtaj();
});

// Klik na oznaku koja je već uključena vraća firmu u „Aktivno“.
el("lista").addEventListener("click", e => {
  const b = e.target.closest("button[data-s]");
  if (!b) return;
  const p = POSLOVI.find(x => x.id === b.dataset.id);
  if (oznaka(p).s === b.dataset.s) stanje[p.id] = { s: "", r: "" };
  else {
    // prompt() vraća null i u pretraživačima ugrađenim u Viber/WhatsApp — oznaka tada važi bez razloga
    const r = b.dataset.s === "neodgovara" ? prompt("Zašto ne odgovara? (nije obavezno)") : "";
    stanje[p.id] = { s: b.dataset.s, r: (r || "").trim() };
  }
  snimi();
  crtaj();
});

// Tekst za sledeće osvežavanje liste: tako oznake iz ovog pretraživača postaju trajne u podaci.js.
if (OZNAKE) el("kopiraj").addEventListener("click", () => {
  const redovi = Object.entries({ ...NAZIV, zavrseno: "Završeno" }).map(([s, naziv]) => {
    const firme = POSLOVI.filter(p => oznaka(p).s === s)
      .map(p => p.firma + (oznaka(p).r ? ` (${oznaka(p).r})` : ""));
    return firme.length ? `${naziv}: ${firme.join("; ")}` : "";
  }).filter(Boolean);
  const tekst = `${document.title} — oznake ${new Date().toLocaleDateString("de-AT")}\n${redovi.join("\n")}`;
  const ta = el("spisak");
  ta.value = tekst;
  ta.hidden = false;
  ta.select();
  if (navigator.clipboard) navigator.clipboard.writeText(tekst).then(() => {
    el("kopiraj").textContent = "Kopirano ✓";
    setTimeout(() => { el("kopiraj").textContent = "Kopiraj spisak"; }, 2000);
  }, () => {});
});

for (const [id, val] of [["tab-aktivno","aktivno"], ["tab-zavrseno","zavrseno"]]) {
  el(id).addEventListener("click", () => {
    tab = val;
    el("tab-aktivno").setAttribute("aria-selected", String(val === "aktivno"));
    el("tab-zavrseno").setAttribute("aria-selected", String(val === "zavrseno"));
    crtaj();
  });
}

el("q").addEventListener("input", crtaj);
el("sort").addEventListener("change", crtaj);
el("reset").addEventListener("click", () => {
  if (!confirm("Poništiti sve oznake koje si ti stavio? (Firme koje su unapred označene ostaju u „Završeno“.)")) return;
  stanje = {};
  snimi();
  crtaj();
});

crtaj();
