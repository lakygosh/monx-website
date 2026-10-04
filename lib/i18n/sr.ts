import type { Dict } from "./en"

// Serbian (Latin script). Product screens in the mockups stay in English, as in the app itself.

export const sr: Dict = {
  locale: "sr",
  htmlLang: "sr-Latn",
  meta: {
    title: "MonX · Monitoring poslovnih servisa, top-down",
    ogTitle: "MonX · Vidite ono što vide vaši klijenti.",
    description:
      "MonX prati ono što vaši klijenti zaista rade: plaćanja karticama, prijave i porudžbine po minutu. Saznajte za prekid pre prvog poziva klijenta, brzo pronađite uzrok i prijavite ga regulatoru.",
  },
  skipToContent: "Preskoči na sadržaj",
  languages: { label: "Jezik", en: "EN", sr: "SR" },

  announcement: { badge: "NOVO", before: "Registar incidenata i nacrti izveštaja za", strong: "Odluku NBS 102/2024" },

  nav: {
    label: "Glavni meni",
    home: "MonX početna",
    links: [
      { href: "#problem", label: "Problem" },
      { href: "#how", label: "Kako radi" },
      { href: "#product", label: "Proizvod" },
      { href: "#compliance", label: "Usklađenost" },
      { href: "#pilot", label: "Pilot" },
      { href: "#faq", label: "Pitanja" },
    ],
    watchVideo: "Video",
    watchVideoLong: "Pogledajte video",
    bookDemo: "Zakažite demo",
    openMenu: "Otvori meni",
    closeMenu: "Zatvori meni",
  },

  contact: {
    close: "Zatvori",
    title: "Zakažite demo",
    description: "Recite nam koji servis vam je najvažniji. Pokazaćemo vam MonX na njemu, kod vas ili online.",
    sentTitle: "Hvala, primili smo.",
    sentText: "Obično odgovaramo u roku od jednog radnog dana.",
    name: "Ime i prezime",
    email: "Poslovni email",
    company: "Kompanija",
    message: "Šta biste želeli prvo da vidite?",
    messagePlaceholder: "npr. plaćanja karticama, prijave na mobilno bankarstvo, instant plaćanja",
    optional: "(opciono)",
    error: "Slanje nije uspelo. Pokušajte ponovo ili pišite na",
    sending: "Šalje se…",
    submit: "Pošaljite zahtev",
  },

  hero: {
    eyebrow: "Monitoring poslovnih servisa, top-down",
    titleStart: "Vidite ono što vide",
    titleAccent: "vaši klijenti.",
    lead: "Većina alata za monitoring prati mašine. MonX prati ono što vaši klijenti zaista rade: plaćanja karticama, prijave i transfere, svakog minuta. Kada stanu, saznajete pre nego što pozove prvi klijent.",
    bookDemo: "Zakažite demo",
    watch: "Pogledajte pregled",
    proof: ["15 godina u bankarskim operacijama", "On-prem ili SaaS", "Usklađen sa Odlukom NBS 102/2024 i DORA", "Podrška na srpskom"],
    figureLabel: "MonX grafikon instant plaćanja po minutu tokom šest sati, dolazna i odlazna. Ilustrativni podaci.",
  },

  video: {
    eyebrow: "Pregled proizvoda · 1:29 · na engleskom",
    title: "Petak, 18:00. Sva svetla su zelena. Niko ne može da plati.",
    lead: "Devedeset sekundi o tome šta se dešava dalje i šta MonX radi povodom toga.",
    label: "Pregled MonX-a, na engleskom",
    play: "Pogledajte pregled",
    playLabel: "Pustite video pregled MonX-a",
  },

  problem: {
    eyebrow: "Problem",
    title: "Svi sistemi zeleni. Plaćanja ne rade.",
    lead: "Monitoring komponenti meri delove sistema, a ne da li je klijent završio transakciju. To se zove efekat lubenice: spolja zeleno, iznutra crveno.",
    componentsTitle: "Monitoring komponenti",
    components: ["Serveri (CPU, memorija)", "Baze podataka", "Mreža", "Aplikativni servisi"],
    componentsNote: "Petak 18:00 · sve provere prolaze",
    drop: {
      title: "Iskustvo klijenta",
      subtitle: "Uspešna plaćanja karticama po minutu",
      before: "Svaka komponenta javlja „OK”…",
      after: "Servis ne radi, a svaka komponenta javlja „OK”.",
    },
    whoTitle: "Ko prvi primeti: vi ili vaš klijent?",
    whoStat: "47%",
    whoText: "organizacija kaže da su klijenti često ili veoma često prvi koji primete pad kvaliteta usluge ili prekid.",
    whoSource: "Splunk i Oxford Economics, 2026",
    steps: [
      { who: "Vaši klijenti", what: "„Plaćanje odbijeno.” Pokušaju ponovo, pa odustanu." },
      { who: "Vaš kol centar", what: "Red se puni: 48 poziva na čekanju." },
      { who: "Pa onda vi", what: "Operacije saznaju za problem od kol centra." },
      { who: "I uskoro regulator", what: "Značajan incident, sa rokovima za izveštavanje." },
    ],
  },

  cost: {
    eyebrow: "Cena zastoja",
    title: "Svaki minut košta više svake godine.",
    lead: "Neočekivani prekidi i dug oporavak donose gubitke u celom poslovanju: prihod, klijente, vreme inženjera i poverenje.",
    chartCaption: "Prosečna cena jednog minuta zastoja (USD)",
    chartLabel:
      "Prosečna cena jednog minuta zastoja: 5.600 dolara u 2014. (Gartner), 9.000 dolara u 2024. (Splunk), 15.000 dolara u 2026. (Splunk)",
    bars: [
      { value: 5600, label: "$5.600", year: "2014", source: "Gartner" },
      { value: 9000, label: "$9.000", year: "2024", source: "Splunk" },
      { value: 15000, label: "$15.000", year: "2026", source: "Splunk" },
    ],
    facts: [
      { stat: "$95M", text: "izgubljenog prihoda po kompaniji, svake godine (Global 2000)", source: "Splunk i Oxford Economics, 2026" },
      { stat: "$5M+", text: "po satu zastoja za velike banke i finansijske institucije", source: "ITIC, Hourly Cost of Downtime, 2024" },
    ],
    tabsLabel: "Šta košta zastoj",
    helpsLabel: "Kako MonX pomaže:",
    pains: [
      {
        id: "churn",
        tab: "Odliv klijenata",
        short: "Odliv",
        title: "Klijenti ne čekaju vašu ispravku",
        stat: "32%",
        text: "klijenata bi prestalo da posluje sa brendom koji vole posle samo jednog lošeg iskustva.",
        source: "PwC, Future of Customer Experience, 2018",
        more: [
          { stat: "29%", text: "rukovodilaca u Global 2000 kompanijama prijavljuje gubitak klijenata zbog zastoja", source: "Splunk i Oxford Economics, 2024" },
          { stat: "90%", text: "tehnoloških lidera prijavljuje veće opterećenje korisničke podrške posle zastoja", source: "Splunk i Oxford Economics, 2026" },
        ],
        helps: "vidite pad uspešnih transakcija u trenutku kada počne, a ne kada stignu žalbe.",
      },
      {
        id: "recovery",
        tab: "Vreme oporavka",
        short: "Oporavak",
        title: "Gašenje požara pojede trećinu nedelje",
        stat: "30%",
        text: "vremena inženjera odlazi na rešavanje prekida: 12 sati od svake radne nedelje od 40 sati.",
        source: "New Relic, Observability Forecast 2024",
        more: [
          { stat: "77 h", text: "medijana godišnjeg zastoja zbog prekida visokog uticaja", source: "New Relic, Observability Forecast 2024" },
          { stat: "89%", text: "tehnoloških lidera kaže da rešavanje problema angažuje veliki broj ljudi", source: "Splunk i Oxford Economics, 2026" },
        ],
        helps: "top-down indikatori pokazuju gde prvo da gledate, pa manje ljudi juri pogrešan alarm.",
      },
      {
        id: "reputation",
        tab: "Reputacija",
        short: "Reputacija",
        title: "Za povratak poverenja potrebni su meseci",
        stat: "44%",
        text: "rukovodilaca kaže da zastoji štete reputaciji njihove kompanije.",
        source: "Splunk i Oxford Economics, The Hidden Costs of Downtime, 2024",
        more: [
          { stat: "60 dana", text: "da se imidž brenda oporavi posle incidenta", source: "Splunk i Oxford Economics, 2024" },
          { stat: "3,4%", text: "prosečan pad cene akcija posle incidenta sa zastojem", source: "Splunk i Oxford Economics, 2026" },
        ],
        helps: "uočite pad kvaliteta pre klijenata i rešite ga pre nego što postane vest.",
      },
    ],
    quote: "„…govorim o 15 do 30 miliona dolara za svaki zastoj koji imamo.”",
    quoteSource: "Tehnološki rukovodilac, JPMorgan Chase (Splunk, 2024)",
  },

  how: {
    eyebrow: "Top-down pristup",
    title: "Od klijenta do uzroka.",
    lead: "MonX polazi od onoga što klijent doživljava, pa dodaje slojeve ispod, kako biste brzo pronašli uzrok. Alati koje već koristite i dalje prate komponente.",
    layers: [
      { name: "Iskustvo klijenta", examples: "Uspešna plaćanja, prijave, završene porudžbine" },
      { name: "Poslovni servisi", examples: "Kartice, instant plaćanja, mobilno bankarstvo" },
      { name: "Aplikacije i integracije", examples: "API-ji, redovi poruka, batch obrade" },
      { name: "Infrastruktura", examples: "Serveri, baze podataka, mreža" },
    ],
    startsTitle: "MonX počinje ovde",
    startsText: "Meri ono što klijent doživljava, svakog minuta.",
    thenText: "Zatim dodajte slojeve ispod da brzo pronađete uzrok.",
    existingTitle: "Vaši postojeći alati",
    existingText: "Monitoring komponenti koji već imate ostaje. MonX ga ne zamenjuje, već dodaje sloj iznad.",
    stepsTitle: "Kako radi",
    steps: [
      {
        title: "Povežite bilo koji izvor",
        text: "Ako vaši sistemi to beleže, MonX može da prati. Agenti su SQL upiti, PowerShell skripte i REST ili SOAP pozivi koje vaš tim već poznaje. Lagani Agent Service ih pokreće po rasporedu, unutar vaše mreže.",
      },
      {
        title: "Pretvorite rezultate u indikatore",
        text: "Svaka vrednost ide na indikator sa nivoima koje vi postavite, grupisan u poslovne servise kao što su Plaćanja karticama. MonX uči kako izgleda normalno za svaki sat i svaku vrstu dana.",
      },
      {
        title: "Saznajte prvi, pa pronađite uzrok",
        text: "Jedna poruka kada indikator promeni nivo i jedna kada se vrati, a ne stotine. U Teams, Slack, SMS, email, Jiru ili ServiceNow. Zatim vam MonX pokazuje šta se menjalo zajedno sa njim.",
      },
    ],
  },

  product: {
    eyebrow: "Unutar MonX-a",
    title: "Od prvog neobičnog minuta do izveštaja koji šaljete.",
    lead: "Indikatori uživo, naučen osećaj za normalno, verovatan uzrok, alarm i dokumentacija za regulatora. U jednom proizvodu koji vaš tim već zna da napuni podacima.",
    tabsLabel: "Mogućnosti MonX-a",
    tabs: {
      live: {
        label: "Indikatori uživo",
        title: "Poslovni indikatori uživo",
        tags: ["Svakog minuta", "Bilo koji izvor"],
        text: "Plaćanja karticama, prijave, transferi i sve drugo što vaši sistemi beleže, kao indikatori i grafikoni uživo. Grupišite ih po poslovnom servisu, prikažite na zidnom ekranu i vratite se kroz istoriju.",
        points: [
          "Agenti u SQL-u, PowerShell-u, REST-u i SOAP-u",
          "Nivoi po indikatoru, od dobrog do veoma lošeg",
          "Dashboardi, grafikoni i traka za najave održavanja",
        ],
      },
      anomaly: {
        label: "Detekcija anomalija",
        title: "Uočite incidente dok nastaju",
        tags: ["Naučeno normalno", "Osetljivost 1–5"],
        text: "Četrdeset porudžbina na čekanju je u redu u 03:00, a neobično utorkom u 10:00. Za svaki sat MonX uči uobičajeni opseg iz istog sata u uporedivim danima i javlja vam kada vrednosti izađu iz njega.",
        points: [
          "Poredi radne dane, praznike i prvi i poslednji radni dan u mesecu",
          "Otvara se posle tri neobične vrednosti zaredom, pa jedan skok nikoga ne budi",
          "Radi unutar vaše mreže. Podaci je ne napuštaju",
        ],
      },
      moved: {
        label: "Uzrok",
        title: "Vidite šta se menjalo zajedno",
        tags: ["Korelacija", "±30 minuta"],
        text: "Kada plaćanja karticama padnu, MonX pronalazi koji su drugi indikatori rasli ili padali zajedno sa njima, do 30 minuta pre ili posle, i prikazuje deset najbližih sa malim grafikonima. Idete pravo ka verovatnom uzroku.",
        points: [
          "Pitajte sa indikatora ili direktno iz incidenta",
          "Top-down: od klijenta do komponente",
          "Manje ljudi juri pogrešan alarm",
        ],
      },
      incidents: {
        label: "Incidenti i izveštaji",
        title: "Izveštavajte regulatora na vreme",
        tags: ["NBS 102/2024", "Prilog 1"],
        text: "Otvorite incident iz alarma koji su ga pokrenuli. MonX ga klasifikuje prema Prilogu 1 da bi ga osoba potvrdila, izračunava svaki rok za izveštavanje, podseća vaš tim i priprema nacrte početnog, privremenog i završnog izveštaja za slanje.",
        points: [
          "Vremenska linija alarma, obaveštenja i izmena",
          "Izveštaji se zaključavaju čim ih označite kao poslate",
          "Mesečna provera incidenata koji se ponavljaju",
        ],
      },
      assistant: {
        label: "AI asistent",
        title: "Pitajte MonX šta se desilo",
        tags: ["Vaš model", "Samo čitanje"],
        text: "Pitajte na bilo kom jeziku o agentima, indikatorima, alarmima, anomalijama ili incidentima. Asistent čita samo ono što vi smete da vidite, pokazuje šta je pročitao i predlaže izmene koje odobravate u standardnoj formi. Može da radi na modelu same banke, pa podaci ostaju u banci.",
        points: [
          "Objašnjenje bilo kog alarma iz skorašnjih vrednosti, nivoa i izmena",
          "Nacrti opisa incidenata, uzroka i preduzetih mera",
          "MCP server za vaše AI alate, uz single sign-on",
        ],
      },
      alerts: {
        label: "Alarmi",
        title: "Jedna poruka, ne stotine",
        tags: ["11 tipova kanala", "Bez lavine alarma"],
        text: "MonX šalje jednu poruku kada indikator uđe u nivo i jednu kada se vrati u normalu. Utišajte indikator tokom održavanja, ograničite broj poruka po kanalu i automatski otvorite tiket.",
        points: [
          "Email, SMS, Viber, WhatsApp, Teams, Slack, Discord i Telegram",
          "Jira i ServiceNow tiketi, potpisani webhookovi",
          "Uključen je samo email dok administrator ne dozvoli ostale",
        ],
      },
    },
  },

  useCases: {
    eyebrow: "Primene",
    title: "Indikatori koje vaši klijenti osećaju.",
    lead: "Nastao u bankarstvu, a jednako koristan svuda gde servis mora da radi bez prekida: osiguranje, prodaja karata, fintech, dostava i interni sistemi na kojima rade velike kompanije.",
    industries: [
      { name: "Banke", indicators: ["Autorizacije kartica po minutu", "Instant plaćanja u toku", "Prijave na mobilno bankarstvo"] },
      { name: "Telekomi", indicators: ["Isporučeni SMS-ovi po minutu", "Aktivacije usluga", "Uspešne dopune"] },
      { name: "Plaćanja", indicators: ["Odobrene transakcije po minutu", "Vreme odziva procesora", "Neuspela zaduženja"] },
      { name: "E-trgovina", indicators: ["Završene porudžbine po minutu", "Uspešna plaćanja pri kupovini", "Dodeljene isporuke"] },
    ],
  },

  statement: {
    label: "MonX uz vaše alate",
    eyebrow: "Uz vaše alate, ne umesto njih",
    text: "Vaši alati pokazuju kako rade vaši serveri. MonX vam govori da li vaši klijenti mogu da plate upravo sada.",
    lead: "Zadržite postojeći monitoring infrastrukture. MonX dodaje sloj iznad njega: da li servis zaista radi za klijenta?",
  },

  compliance: {
    eyebrow: "Usklađenost",
    title: "Ono što MonX meri, regulatori traže.",
    lead: "Odluka NBS 102/2024 primenjuje se od 1. januara 2026, a DORA u celoj EU. Obe traže da rano otkrijete probleme, znate koliko dugo servis nije radio i to prijavite. MonX vodi tu evidenciju umesto vas.",
    caption: "Regulatorni zahtevi i šta MonX obezbeđuje za svaki od njih",
    requirementHeader: "Zahtev",
    requirementNote: "(Odluka NBS 102/2024; DORA)",
    providesHeader: "Šta MonX obezbeđuje",
    rows: [
      ["NBS tačka 26: adekvatan sistem monitoringa", "Kontinuirani indikatori pružanja usluge klijentima, a ne samo stanja komponenti"],
      ["NBS tačka 40: indikatori ranog upozorenja", "Pragovi i alarmi po indikatoru i poređenje sa istim periodom"],
      ["NBS tačke 41–42: klasifikacija incidenata i trajanje prekida usluge", "Istorija indikatora pokazuje kada je servis stao i kada se oporavio"],
      ["NBS tačka 53: praćenje performansi i kapaciteta", "Trendovi obima i granice kapaciteta sistema"],
      ["NBS glava VII i Prilog 1: izveštavanje o značajnim incidentima", "Registar incidenata, klasifikacija po Prilogu 1 koju potvrđuje osoba, rokovi i nacrti izveštaja"],
      ["NBS tačka 25: godišnja provera pristupa", "Poslednja prijava za svakog korisnika i izvoz za proveru pristupa"],
      ["DORA čl. 10: brzo otkrivanje anomalija, pragovi za alarme", "Top-down indikatori sa definisanim pragovima, na više nivoa"],
    ],
    securityTitle: "Napravljen da prođe vašu bezbednosnu proveru.",
    securityText:
      "Vaš bezbednosni tim dobija kompletan paket za početak: pregled, model pretnji, mapiranje na zahteve NBS, odgovore na upitnik i spisak softverskih komponenti (SBOM) za svako izdanje.",
    securityButton: "Zatražite bezbednosni paket",
    security: [
      { title: "Radi unutar vaše banke", text: "Windows Server, IIS i SQL Server. Dostupan samo iz vaše mreže, a instalira se bez pristupa internetu." },
      { title: "Vaši podaci ostaju kod vas", text: "Sve što MonX beleži nalazi se u vašoj SQL Server bazi. MonX nama ne šalje ništa." },
      { title: "Prijava po vašem izboru", text: "Windows (Active Directory), single sign-on preko vašeg provajdera ili lozinka uz prijavu u dva koraka." },
      { title: "Tajne koje niko ne može da pročita", text: "Lozinke agenata su šifrovane tako da ih koristi samo MonX servis. Ne vidi ih čak ni administrator." },
      { title: "Svaka izmena je zabeležena", text: "Ko je šta promenio i kada, u aplikaciji i u Windows Event Logu za vaš SIEM." },
      { title: "Najmanja potrebna prava", text: "Uloge Viewer, Configurator i Administrator, koje API proverava pri svakom zahtevu." },
    ],
  },

  comparison: {
    eyebrow: "Gde je MonX",
    title: "MonX pored alata koje poznajete.",
    lead: "Platforme za monitoring i observability polaze od komponenti. MonX polazi od poslovnog servisa. Većina timova zadržava oba.",
    caption: "MonX u poređenju sa platformama za monitoring infrastrukture i enterprise observability",
    aspect: "Aspekt",
    columns: [
      { name: "Monitoring infrastrukture", examples: "npr. Zabbix, PRTG, SolarWinds" },
      { name: "Enterprise observability", examples: "npr. Datadog, Dynatrace, Splunk" },
    ],
    rows: [
      ["Zasnovan na", "Poslovnim servisima i ishodima za klijente", "Hostovima, uređajima i senzorima", "Aplikacijama, trace-ovima i cloud infrastrukturi"],
      ["Poslovni pogled", "Polazna tačka (top-down)", "Nadograđen na provere komponenti", "Prikazi servisa i SLO, ponekad kao poseban modul"],
      ["Prilagođene provere", "SQL, PowerShell, REST, SOAP ugrađeni", "Skripte, pluginovi i senzori", "Prilagođene metrike i ekstenzije"],
      ["Instalacija", "On-prem ili SaaS", "Uglavnom na sopstvenoj infrastrukturi", "Uglavnom SaaS"],
      ["Cene", "Godišnja pretplata", "Po uređaju ili senzoru, ili besplatna licenca uz plaćenu podršku", "Po hostu, po proizvodu ili po potrošnji"],
      ["Uvođenje", "Lagani agent i vaš SQL", "Agenti ili senzori na svakom uređaju", "Agenti na svakom hostu i podešavanje platforme"],
      ["Podrška", "Direktna, lokalna, na srpskom", "Proizvođač ili partneri", "Globalni proizvođač i partneri"],
    ],
    swipeHint: "Prevucite tabelu u stranu za poređenje →",
  },

  why: {
    eyebrow: "Zašto MonX",
    title: "Proveren u bankarstvu, napravljen za vas.",
    reasons: [
      {
        title: "15 godina u praksi",
        text: "Top-down pristup je razvijen i korišćen u jednom od najvećih bankarskih IT sistema u Srbiji. MonX ga pretvara u proizvod.",
      },
      { title: "Znanja koja već imate", text: "SQL, PowerShell, SQL Server, IIS. Bez novih jezika za upite i novih tehnologija za održavanje." },
      { title: "Vaši podaci ostaju kod vas", text: "Potpuno on-prem, ili SaaS sa laganim agentom u vašoj mreži. Minimalno opterećenje vaših sistema." },
      { title: "Lokalno i iz prve ruke", text: "Tim iz Beograda sa podrškom na srpskom. Pomažemo vam da osmislite monitoring i napišete agente." },
    ],
    quote: "„Napravili su ga ljudi koji su petnaest godina vodili velike incidente. Alat kakav smo i sami želeli da imamo.”",
    founders: [
      {
        initials: "DG",
        name: "Dejan Gošić",
        role: "Suosnivač · arhitektura i metodologija",
        bio: "Više od 24 godine u bankarskom IT-ju: programer, softverski arhitekta, menadžer velikih incidenata i problema i rukovodilac ICT aplikativne arhitekture.",
      },
      {
        initials: "LG",
        name: "Lazar Gošić",
        role: "Suosnivač · razvoj proizvoda",
        bio: "Razvija MonX veb aplikaciju i servise. Informacioni sistemi i tehnologije, Univerzitet u Beogradu.",
      },
    ],
  },

  pilot: {
    eyebrow: "Sledeći korak",
    title: "Pilot: tri kritična servisa, osam nedelja.",
    lead: "Počnite na servisima koji su najvažniji i ocenite MonX po onome što uhvati. Nećete biti sami: naš tim osmišljava i postavlja monitoring zajedno sa vašim.",
    cta: "Isplanirajte pilot",
    steps: [
      { when: "Nedelja 1", title: "Radionica i izbor servisa", text: "Dve radionice od po sat i po za vaš tim i izbor tri najkritičnija servisa." },
      { when: "Nedelje 1–2", title: "Prvi indikatori uživo", text: "Pišemo agente zajedno sa vašim timom i puštamo ih u produkciju." },
      { when: "Nedelje 3–8", title: "Pragovi i alarmi", text: "Podešavamo pragove i merimo koliko brzo se problemi otkrivaju." },
      { when: "Kraj pilota", title: "Zajednički pregled", text: "Šta je MonX uhvatio pre vaših klijenata i kako nastavljamo." },
    ],
    after: "Posle pilota: godišnja pretplata (OPEX) sa uključenim novim verzijama. Dostupna je i on-prem instalacija.",
  },

  faq: {
    eyebrow: "Pitanja",
    title: "Šta klijenti obično pitaju.",
    askBefore: "Nismo odgovorili na vaše pitanje?",
    askLink: "Pitajte nas direktno",
    items: [
      {
        q: "Već imamo alate za monitoring.",
        a: "Odlično, zadržite ih. MonX ih ne zamenjuje. Dodaje sloj iznad: indikatore pružanja usluge klijentima.",
      },
      {
        q: "Zar ne možemo sami da napravimo ovo?",
        a: "Možete. Uporedite trud: skripte, raspoređivanje, čuvanje metrika, dashboardi, alarmi, izveštavanje o incidentima i održavanje svega toga. Predlažemo uporedni test na jednom servisu.",
      },
      {
        q: "Zašto Windows i .NET?",
        a: "Zato što to koristi većina banaka: SQL Server, IIS, PowerShell. Bez nove tehnologije samo zbog monitoringa.",
      },
      {
        q: "Gde se nalaze naši podaci?",
        a: "Kod on-prem instalacije sve što MonX beleži ostaje u vašoj SQL Server bazi i ništa se ne šalje nama. Kod SaaS-a lagani agent radi u vašoj mreži i šalje vrednosti indikatora koje prikupi.",
      },
      {
        q: "Šta je MonX-u potrebno za rad?",
        a: "Windows Server, IIS i SQL Server za veb aplikaciju i njene API-je, i Agent Service na serveru koji može da pristupi sistemima koje pratite. Možete pokrenuti više Agent Service instanci, na primer po jednu za svaku mrežnu zonu ili data centar.",
      },
      {
        q: "Da li MonX šalje naše podatke AI provajderu?",
        a: "Ne, osim ako vi tako ne odlučite. Detekcija anomalija i „šta se menjalo zajedno” rade unutar MonX-a. Asistent i nacrti incidenata koriste jezički model tek kada ih administrator uključi i mogu da rade na modelu same banke, pa ništa ne napušta banku.",
      },
      {
        q: "Da li MonX pokriva Odluku NBS 102/2024?",
        a: "Vodi registar incidenata, klasifikuje incidente prema Prilogu 1 da bi ih osoba potvrdila, prati svaki rok za izveštavanje i priprema nacrte izveštaja. Vi ih pregledate i šaljete kanalom koji NBS propisuje.",
      },
      {
        q: "Kako se MonX naplaćuje?",
        a: "Kao godišnja pretplata (OPEX), sa uključenim novim verzijama. Počinjemo pilotom od osam nedelja na tri kritična servisa. Dostupna je i on-prem instalacija.",
      },
      {
        q: "Ko ga postavlja?",
        a: "Mi, zajedno sa vašim timom: dve radionice, zatim zajedno pišemo prve agente i podešavamo pragove. Podrška je lokalna, na srpskom ili engleskom.",
      },
    ],
  },

  finalCta: {
    title: "Pogledajmo vaša tri najkritičnija servisa.",
    lead: "Izaberite servis koji vas najviše brine. Pokazaćemo vam šta bi MonX na njemu uhvatio, uživo, kod vas ili online.",
    cta: "Zakažite demo",
    people: [
      { name: "Dejan Gošić", role: "Suosnivač · arhitektura i metodologija", href: "mailto:dejan.gosic@mon-x.app", link: "dejan.gosic@mon-x.app" },
      { name: "Lazar Gošić", role: "Suosnivač · razvoj proizvoda", href: "mailto:lazar.gosic@mon-x.app", link: "lazar.gosic@mon-x.app" },
      { name: "Demo uživo", role: "Kod vas ili online", href: "#video", link: "Ili prvo pogledajte pregled" },
    ],
  },

  footer: {
    about:
      "Monitoring poslovnih servisa, top-down. Napravljen u Beogradu, od ljudi koji su vodili velike incidente u jednoj od najvećih banaka u regionu.",
    onThisPage: "Na ovoj stranici",
    contact: "Kontakt",
    city: "Beograd, Srbija",
    tagline: "Vidite ono što vide vaši klijenti.",
  },

  structuredData: {
    description:
      "Monitoring poslovnih servisa, top-down: indikatori uživo onoga što klijenti zaista rade, detekcija anomalija, tragovi do uzroka i izveštaji o incidentima za Odluku NBS 102/2024.",
  },
}
