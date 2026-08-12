---
title: "Vulcan"
date: "2026-06-06"
location: "Børslid"
type: motor-test
status: success
cover: /images/launches/Vulcan/Vulcan-cover.png
coverAlt: "Vulcan-motoren fyres av på testriggen, med en lang flamme ut av dysen"
summary: "Første statiske test av Vulcan, vår egenutviklede hybridmotor — den eneste studentutviklede hybriden i Norge."
---

Vulcan er ASTROs egenutviklede hybridmotor, og kjernen i det som gjør oss unike:
vi er den eneste studentorganisasjonen i Norge som utvikler en hybrid
rakettmotor. En hybrid brenner en fast drivstoffladning med et flytende
oksidasjonsmiddel — den kan stenges av midt i brenningen, og er tryggere å
håndtere enn en ren faststoffmotor.

I stedet for en oppskyting gjennomførte vi en **statisk motortest**: motoren
spennes fast i en rigg og fyres av på bakken, slik at vi kan måle skyvekraft,
forbrenning og oppførsel under kontrollerte forhold — uten å sende noe til værs.
Det er slik seriøs motorutvikling gjøres, steg for steg.

Testen er et viktig skritt mot å fly på vår egen motor, i stedet for å være
avhengige av import — en lærdom vi tok med oss fra [Altair](/launch/altair).

## Nøkkeltall

- **Skyvekraft:** ca. 700–750 N stabilt, med en topp på ca. 1,7 kN ved tenning
- **Brenntid:** ca. 4 sekunder
- **Drivstoff:** parafinvoks
- **Oksidasjonsmiddel:** lystgass (N₂O)
- **Kammertrykk:** designet for 30 bar

## Motoren

![Maskinerte deler til Vulcan før montering: dyse, forkammer, brennkammerforinger i kompositt og den ferdig monterte motoren](/images/launches/Vulcan/vulcan-deler.png)

Vulcan er bygget fra bunnen av: dyse, injektor, kammerforinger og trykkstruktur
er dimensjonert, maskinert og satt sammen av medlemmer. Brennkammeret er kledd
innvendig for å tåle temperaturen gjennom hele brenningen.

![Servostyrt kuleventil montert i en brakett, med servo under ventilhuset](/images/launches/Vulcan/vulcan-ventil.png)

Oksidasjonsmiddelet slippes inn gjennom en servostyrt kuleventil. Det er den som
gir hybriden sin store fordel: vi kan stenge motoren når vi vil, både i en
planlagt nedstengning og hvis noe ser galt ut under testen.

![CFD-simulering av strømningen gjennom injektoren, med fargeskala for hastighet opp til 62 m/s](/images/launches/Vulcan/vulcan-cfd.png)

Injektoren ble simulert i CFD før den ble maskinert, for å se hvordan
lystgassen fordeler seg inn i kammeret.

## Testen

![Vulcan montert horisontalt på testriggen ute i felt, med skyvekraftmåler bak motoren](/images/launches/Vulcan/vulcan-testrigg.jpeg)

Riggen holder motoren horisontalt mot en lastcelle, slik at skyvekraften logges
gjennom hele brenningen. Alt av fylling og tenning skjer på avstand.

![Forventet skyvekraftkurve fra beregningene: rask oppbygging til ca. 1230 N, som faller svakt gjennom fem sekunder](/images/launches/Vulcan/vulcan-thrust-forventet.png)

Slik forventet vi at kurven skulle se ut — beregnet med en spesifikk impuls på
230 sekunder.

![Målt skyvekraftkurve fra testen: en topp på ca. 1690 N ved tenning, deretter et stabilt platå rundt 700–750 N i drøyt fire sekunder før den faller til null](/images/launches/Vulcan/vulcan-thrust-malt.png)

Og slik ble den. Motoren tente, bygget trykk og holdt et stabilt platå gjennom
hele brenningen før den slokket rent. Nivået ligger under det beregnede, med en
markant topp ved tenning — nettopp den typen avvik en statisk test er til for å
avdekke, og det vi tar med oss inn i neste iterasjon.

## Status

Gjennomført. Motoren gikk hele brenntiden, og vi har måledata å bygge videre på
— et steg nærmere en helt egenutviklet oppskyting.
