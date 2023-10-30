
# How to start the project?

## 1. Clone the repository
- git clone

## 2. Install dependencies
```bash
npm install
```

## 3. Start the project
```bash
npm start
```

# Deploying to production?

## 1. Build the project
```bash
npm run build
```
## 2. Serve static files

# Algebra Requirements

## Quote from an "Seminarski rad_FE DEVELOPER.pdf"
> - moći kreirati nove tekstualne poruke
> - na enter ili klik na button “poslati” poruku (prikazati je na ekranu uz ime autora)
> - za svakog sudionika u chatu selektirati neku slučajnu boju i/ili ime kojih ih identificiraju
> - povezati se sa Scaledrone servisom (dodatne upute o servisu u privitku) te uspješno
  simulirati razgovor svih aktivnih korisnika
> - biti dostupna preko javnog GitHub računa


### Scaledrone

 ## Register, Create Channel and get Channel ID

> Registracija i setup Scaledrone računa
> Kako bismo mogli koristiti Scaledrone, potrebno je napraviti nekoliko koraka unutar
> Scaledrone web aplikacije:
> 1. Registrirati se na Scaledrone sustavu (https://dashboard.scaledrone.com/signup)
> 2. Nakon registracije, možemo otvoriti scaledrone dashboard
> (https://dashboard.scaledrone.com/channels) te kreirati novi chat kanal (koristiti sve
> preporučene postavke prilikom kreiranja kanala).
> 3. Sačuvati podatak channelID - biti će nam potreban unutar aplikacije kako bismo se
> spojili na ispravan chat kanal
> 
> Nakon što smo nabavili channelID svog chat kanala, možemo integrirati Scaledrone unutar
> svoje aplikacije. Za sve upute za integraciju proučite upute za vašu izabranu tehnologiju
> (https://www.scaledrone.com/docs/api-clients).
> 
> Dodatni savjet: prilikom razvoja aplikacije, otvorite vlastitu aplikaciju u dva odvojena taba
> unutar svog web preglednika. Tako možete simulirati komunikaciju između dva korisnika
> unutar vašeg chat rooma.
