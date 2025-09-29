# 📌 Rättningsrapport – fed24d-case-af-jobtech-group-8-1

## 🎯 Uppgiftens Krav:
[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/6VsM7MHT)
# Skapa en egen Platsbanken för ert drömscenario 

Dokumentation om Arbetsförmedlingens öppna data finns på https://jobtechdev.se. All öppna data från arbetsförmedlingen och andra offentliga organisationen går även att hitta direkt på dataportal.se. 
I detta dokument ges två förslag på användningsfall som vi tror är lämpliga för studenter som vill utveckla en applikation på riktig data. All data som är öppna data får vem som helst använda utan att fråga myndigheten om lov, så ingen är begränsad till de exempel vi ger.

Läs först igenom kom-igång hjälpen 

-  [Övergripande dokumentation API:etJobSearch](https://jobtechdev.se/sv/components/jobsearch)
-  [Kom-igång guide](https://gitlab.com/arbetsformedlingen/education/education-api/-/blob/main/GETTING_STARTED.md)

## Prova att utforska datan med vår interaktiva tjänst 

Görs genom att öppna Swagger-sidan för API:et (för att enkelt testa olika endpoints i API:et och läsa dokumentation för respektive endpoint): Search job ads (jobtechdev.se) 

## Uppgift 

Använd endpoint https://jobsearch.api.jobtechdev.se/ för att använda/söka bland befintliga annonser. 
Det går även bra att använda historiska annonser om ni vill jämföra aktuella annonser med hur det har sett ut tidigare. Detta api finns här: Historical job ads (jobtechdev.se)

Om möjligt, använd en grafisk presentation av era resultat genom t.ex. stapeldiagram eller linjegrafer.

**Observera**
Er slutprodukt ska ej innehålla Arbetsförmedlingens logga eller färger. Anpassa gärna efter eget tycke och smak så att ni har en färgpalett och en god tanke bakom. 

## Betygskriterier 

### Need-to-have (G) 
- Ni har hämtat data på ett strukturerat sätt med hjälp av antingen fetch eller axios. 
- Ni har skapat en tjänst som ni använder för att hämta data. 
- Ni använder react-koncept vi har pratat om för att göra datan tillgänglig (context, state, routing et.c.). 
- Ni använder den syntax, namngivningsstandard samt skrivsätt som vi har lärt er.  
- Ni använder designsystemet för presentation. 

### Nice-to-have (Extra bonus) 
- Styled components (som drar nytta av designsystemet) 
- Grafisk presentation av datat 
- Användning av custom hook där det finns möjlighet

## 🔍 ESLint-varningar:
- C:\Work\AssignmentCorrector\backend\repos\fed24d-case-af-jobtech-group-8-1\src\services\serviceBase.ts - no-console - Unexpected console statement.

## 🏆 **Betyg: G**
📌 **Motivering:** Alla G-krav är uppfyllda: data hämtas strukturerat via fetch i en tjänstelager (services/serviceBase.ts + services/jobAdsService.ts), React‑koncept används korrekt (state, routing, context), designsystemet används konsekvent för presentation och AF:s logga/färger ersätts med egen profil. Koden är överlag välstrukturerad och lättläst.

💡 **Förbättringsförslag:**  
- TypeScript-modeller: IApplicationDetails använder literaltyper ("string" och via_af: true). Byt till riktiga typer (string, boolean) och gör fält optional där det behövs för att matcha API:t. Detta förbättrar typkontrollen i hela appen.
- Sökbeteende vs. label: Formuläret beskriver "+inkludera, -uteslut" men buildQuery() escaper tecknen och tolkar dem inte. Implementera tolkning av +/‑ prefix (och gärna frassökning med citattecken) så att UX stämmer med texten.
- Pagination: DigiNavigationPagination får alltid afCurrentResultStart=1 och afCurrentResultEnd=10. Beräkna dessa utifrån aktuell page och limit (t.ex. start = (page-1)*limit+1, end = Math.min(page*limit, totalResults)) och synka aktiv sida med URL-parametern.
- Felhantering i UI: Visa användarvänliga felmeddelanden vid misslyckad hämtning (t.ex. när getJobAds eller getJobAdById kastar fel), inte bara tomma resultat.
- Små kvalitetsdetaljer: Ta bort console.log i AppHeader; rätta stavfel ("Var vanlig" → "Var vänlig", "företages" → "företagets"); undvik överdriven inline‑style där CSS‑variabler/klasser kan användas.
- Säkerhet/robusthet: description visas via dangerouslySetInnerHTML. Överväg sanering/whitelist av HTML (om möjligt) eller tydliggör att källan är betrodd.
- Förfining av ortfilter: Ni visar alternativt format med "(count)" men saknar count‑data. Utnyttja API‑facetter (om tillgängligt) för att visa antal per kommun och ge bättre filtreringsfeedback.
- Bonusmöjlighet (VG-känsla): Lägg till grafisk presentation (t.ex. stapeldiagram över antal annonser per kommun eller över tid) och/eller styled-components som använder designsystemets tokens.

## 👥 Gruppbidrag

| Deltagare | Antal commits | Commit % | Uppgiftskomplettering | Totalt bidrag |
| --------- | -------------- | -------- | ---------------------- | ------------- |
| Valentin Björkli Castillo | 82 | 53.6% | 0.33 | 0.41 |
| Malin Rosenquist | 44 | 28.8% | 0.33 | 0.32 |
| Alice Swahn | 27 | 17.6% | 0.33 | 0.27 |


### 📊 Förklaring
- **Antal commits**: Antalet commits som personen har gjort
- **Commit %**: Procentuell andel av totala commits
- **Uppgiftskomplettering**: Poäng baserad på mappning av README-krav mot kodbidrag 
- **Totalt bidrag**: Viktad bedömning av personens totala bidrag (40% commits, 60% uppgiftskomplettering)
