# Poslovi — sanacija šteta, Graz i okolina

Statička stranica sa čeklistom firmi/oglasa. **Ništa se ne čuva na serveru** —
kvačice žive samo u `localStorage` pretraživača onoga ko gleda stranicu.

## Lokalno
    ./pokreni.sh          # http://127.0.0.1:8765

## Dodavanje firme
Otvori `podaci.js`, kopiraj jedan `{ ... }` blok, izmeni polja.

- `link: null` → nema oglasa, prikazuje se "javiti se direktno"
- `vecKontaktirano: true` → stavka startuje u tabu "Završeno" (rođak je ne vidi u "Aktivno")
- `preporuka: 1..5` → redosled sortiranja

Posle izmene: `git add -A && git commit -m "nove firme" && git push` — GitHub Pages
se osveži za minut-dva.
