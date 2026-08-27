#!/usr/bin/env sh
# Lokalni pregled: http://127.0.0.1:8765
# Ne dira Docker, ne treba sudo. Zaustavljanje: Ctrl+C
cd "$(dirname "$0")" || exit 1
echo "Otvori: http://127.0.0.1:8765"
exec python3 -m http.server 8765 --bind 127.0.0.1
