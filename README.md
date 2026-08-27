# Poslovi — Graz

Dve statičke čekliste. **Ništa se ne čuva na serveru** — kvačice žive samo u
`localStorage` pretraživača onoga ko gleda stranicu, i svaka lista ima svoj ključ.

| Lista | Putanja | Za koga |
|---|---|---|
| Sanacija šteta (voda/požar/buđ) | `/` | rođak sa Belfor iskustvom |
| Osiguranje — Lehre i ulazni poslovi | `/versicherung/` | rođak koji tek završava školu |

Zajednički `stil.css` i `app.js`, svaka lista ima svoj `podaci.js`.

## Lokalno
    ./pokreni.sh          # http://127.0.0.1:8765

## Dodavanje firme
Otvori odgovarajući `podaci.js`, kopiraj jedan `{ ... }` blok, izmeni polja.

- `link: null` → nema oglasa, prikazuje "javiti se direktno"
- `vecKontaktirano: true` → startuje u tabu "Završeno" (rođak je ne vidi u "Aktivno")
- `preporuka: 1..5` → redosled sortiranja
- `lehre: true` → LEHRE oznaka (samo lista za osiguranje)
- `kontaktNas: { ime, uloga, email, telefon }` → oznaka "govori naš jezik?" (pretpostavka po imenu)
- `kontaktAlt: "..."` → rezervni kontakt ili zvanična adresa firme

Posle izmene: `git add -A && git commit -m "..." && git push` — GitHub Pages
se osveži za minut-dva.

## Napomena o commit-ovima
Repo ima **lokalni** `user.email` (`...@users.noreply.github.com`) i `core.sshCommand`
sa privatnim ključem, da se firmini podaci ne mešaju. Globalni git config nije diran.
