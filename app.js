// Zajednička logika za obe stranice. Svaki podaci.js definiše KLJUC i POSLOVI.

let stanje = {};
try { stanje = JSON.parse(localStorage.getItem(KLJUC)) || {}; } catch (e) { stanje = {}; }

function zavrseno(p){
  return Object.prototype.hasOwnProperty.call(stanje, p.id) ? stanje[p.id] : !!p.vecKontaktirano;
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
    <input type="checkbox" data-id="${esc(p.id)}" ${done ? "checked" : ""}
           aria-label="Označi kao kontaktirano">
    <div class="body">
      <p class="pos">${esc(p.pozicija)}</p>
      <p class="firma">${esc(p.firma)}</p>
      <div class="badges">
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
}

el("lista").addEventListener("change", e => {
  const cb = e.target.closest("input[type=checkbox]");
  if (!cb) return;
  stanje[cb.dataset.id] = cb.checked;
  snimi();
  crtaj();
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
  if (!confirm("Poništiti sve kvačice koje si ti stavio? (Firme koje su unapred označene ostaju u „Završeno“.)")) return;
  stanje = {};
  snimi();
  crtaj();
});

crtaj();
