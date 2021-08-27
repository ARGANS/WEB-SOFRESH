#python3 -m http.server --directory ./ 8001
openssl req -new -x509 -keyout server.pem -out server.pem -days 365 -nodes -subj "/C=FR/ST=AM/L=SophiaAntipolis/O=ARGANS/OU=R&D/CN=smos.argans.co.uk"
python3 server.py
