#!/bin/bash
CERT="server.pem"

if [[ ! -f "$CERT" ]]; then
    openssl req -new -x509 -keyout server.pem -out "$CERT" -days 365 -nodes -subj "/C=FR/ST=AM/L=SophiaAntipolis/O=ARGANS/OU=R&D/CN=smos.argans.co.uk"
fi
python3 server.py
