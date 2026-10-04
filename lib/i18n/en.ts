// All site copy in English. `sr.ts` mirrors this shape; the type below keeps the two in step.

export const en = {
  locale: "en",
  htmlLang: "en",
  meta: {
    title: "MonX · Business service monitoring, top-down",
    ogTitle: "MonX · See what your customers see.",
    description:
      "MonX watches what your customers actually do: card payments, logins and orders per minute. Know about an outage before the first customer calls, find the cause fast, and report it to the regulator.",
  },
  skipToContent: "Skip to content",
  languages: { label: "Language", en: "EN", sr: "SR" },

  announcement: { badge: "NEW", before: "Incident register and draft reports for", strong: "NBS Decision 102/2024" },

  nav: {
    label: "Main",
    home: "MonX home",
    links: [
      { href: "#problem", label: "Problem" },
      { href: "#how", label: "How it works" },
      { href: "#product", label: "Product" },
      { href: "#compliance", label: "Compliance" },
      { href: "#pilot", label: "Pilot" },
      { href: "#faq", label: "FAQ" },
    ],
    watchVideo: "Watch video",
    watchVideoLong: "Watch the video",
    bookDemo: "Book a demo",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },

  contact: {
    close: "Close",
    title: "Book a demo",
    description: "Tell us which service matters most. We'll show you MonX on it, at your site or online.",
    sentTitle: "Thanks, we got it.",
    sentText: "We usually reply within one working day.",
    name: "Full name",
    email: "Work email",
    company: "Company",
    message: "What would you like to see first?",
    messagePlaceholder: "e.g. card payments, mobile logins, instant payments",
    optional: "(optional)",
    error: "That didn't go through. Try again, or write to",
    sending: "Sending…",
    submit: "Send request",
  },

  hero: {
    eyebrow: "Business service monitoring, top-down",
    titleStart: "See what your customers",
    titleAccent: "see.",
    lead: "Most monitoring watches machines. MonX watches what your customers actually do: card payments, logins and transfers, every minute. When they stop, you know before the first customer calls.",
    bookDemo: "Book a demo",
    watch: "Watch the overview",
    proof: ["15 years in banking operations", "On-prem or SaaS", "Built for NBS 102/2024 and DORA", "Support in Serbian"],
    figureLabel: "A MonX chart of instant payments per minute over six hours, incoming and outgoing. Illustrative data.",
  },

  video: {
    eyebrow: "Product overview · 1:29",
    title: "Friday, 18:00. Every light is green. No one can pay.",
    lead: "Ninety seconds on what happens next, and what MonX does about it.",
    label: "MonX product overview, in English",
    play: "Watch the overview",
    playLabel: "Play the MonX overview video",
  },

  problem: {
    eyebrow: "The problem",
    title: "All systems green. Payments down.",
    lead: "Component monitoring measures the parts of a system, not whether the customer completes a transaction. It's known as the watermelon effect: green outside, red inside.",
    componentsTitle: "Component monitoring",
    components: ["Servers (CPU, memory)", "Databases", "Network", "Application services"],
    componentsNote: "Friday 18:00 · every check passing",
    drop: {
      title: "Customer experience",
      subtitle: "Successful card payments per minute",
      before: "Every component reports “OK”…",
      after: "Service outage, while every component reports “OK”.",
    },
    whoTitle: "Who notices first: you, or your customer?",
    whoStat: "47%",
    whoText: "of organisations say customers are often or very often the first to detect service degradation or outages.",
    whoSource: "Splunk and Oxford Economics, 2026",
    steps: [
      { who: "Your customers", what: "“Payment declined.” They try again, then give up." },
      { who: "Your call center", what: "The queue fills: 48 callers waiting." },
      { who: "Then you", what: "Operations hears about it from the call center." },
      { who: "And soon, the regulator", what: "A significant incident, with deadlines to report it." },
    ],
  },

  cost: {
    eyebrow: "The cost of downtime",
    title: "Every minute costs more each year.",
    lead: "Unexpected outages and long recoveries cause losses across the business: revenue, customers, engineering time and trust.",
    chartCaption: "Average cost of one minute of downtime (USD)",
    chartLabel:
      "Average cost of one minute of downtime: $5,600 in 2014 (Gartner), $9,000 in 2024 (Splunk), $15,000 in 2026 (Splunk)",
    bars: [
      { value: 5600, label: "$5,600", year: "2014", source: "Gartner" },
      { value: 9000, label: "$9,000", year: "2024", source: "Splunk" },
      { value: 15000, label: "$15,000", year: "2026", source: "Splunk" },
    ],
    facts: [
      { stat: "$95M", text: "lost revenue per company, every year (Global 2000)", source: "Splunk and Oxford Economics, 2026" },
      { stat: "$5M+", text: "per hour of downtime for large banks and financial institutions", source: "ITIC, Hourly Cost of Downtime, 2024" },
    ],
    tabsLabel: "What downtime costs",
    helpsLabel: "How MonX helps:",
    pains: [
      {
        id: "churn",
        tab: "Customer churn",
        short: "Churn",
        title: "Customers don't wait for your fix",
        stat: "32%",
        text: "of customers would stop doing business with a brand they loved after one bad experience.",
        source: "PwC, Future of Customer Experience survey, 2018",
        more: [
          { stat: "29%", text: "of Global 2000 executives report losing customers because of downtime", source: "Splunk and Oxford Economics, 2024" },
          { stat: "90%", text: "of tech leaders report more demand on customer support after downtime", source: "Splunk and Oxford Economics, 2026" },
        ],
        helps: "you see the drop in successful transactions the moment it starts, not when complaints arrive.",
      },
      {
        id: "recovery",
        tab: "Recovery time",
        short: "Recovery",
        title: "Firefighting eats a third of the week",
        stat: "30%",
        text: "of engineering time goes to handling interruptions: 12 hours of every 40-hour week.",
        source: "New Relic, Observability Forecast 2024",
        more: [
          { stat: "77 h", text: "median annual downtime from high-impact outages", source: "New Relic, Observability Forecast 2024" },
          { stat: "89%", text: "of tech leaders say fixing issues takes large numbers of people", source: "Splunk and Oxford Economics, 2026" },
        ],
        helps: "top-down indicators show where to look first, so fewer people chase the wrong alarm.",
      },
      {
        id: "reputation",
        tab: "Reputation",
        short: "Reputation",
        title: "Trust takes months to rebuild",
        stat: "44%",
        text: "of executives say downtime damages their company's reputation.",
        source: "Splunk and Oxford Economics, The Hidden Costs of Downtime, 2024",
        more: [
          { stat: "60 days", text: "for brand health to recover after an incident", source: "Splunk and Oxford Economics, 2024" },
          { stat: "3.4%", text: "average stock price drop after a downtime incident", source: "Splunk and Oxford Economics, 2026" },
        ],
        helps: "catch degradation before customers do, and fix it before it becomes a headline.",
      },
    ],
    quote: "“…I'm talking around $15 to $30 million for each downtime that we have.”",
    quoteSource: "Technology executive, JPMorgan Chase (Splunk, 2024)",
  },

  how: {
    eyebrow: "The top-down approach",
    title: "From the customer to the cause.",
    lead: "MonX starts with what the customer experiences, then adds the layers below so you find the cause fast. The tools you already run keep watching the components.",
    layers: [
      { name: "Customer experience", examples: "Successful payments, logins, completed orders" },
      { name: "Business services", examples: "Cards, instant payments, mobile banking" },
      { name: "Applications and integrations", examples: "APIs, message queues, batch jobs" },
      { name: "Infrastructure", examples: "Servers, databases, network" },
    ],
    startsTitle: "MonX starts here",
    startsText: "It measures what the customer experiences, every minute.",
    thenText: "Then add the layers below to find the cause fast.",
    existingTitle: "Your existing tools",
    existingText: "The component monitoring you already run stays. MonX doesn't replace it; it adds the layer above.",
    stepsTitle: "How it works",
    steps: [
      {
        title: "Connect any source",
        text: "If your systems record it, MonX can watch it. Agents are the SQL queries, PowerShell scripts and REST or SOAP calls your team already knows. A lightweight Agent Service runs them on a schedule, inside your network.",
      },
      {
        title: "Turn results into indicators",
        text: "Each value lands on an indicator with the levels you set, grouped into business services such as Card payments. MonX learns what normal looks like for every hour and every kind of day.",
      },
      {
        title: "Know first, then find the cause",
        text: "One message when an indicator changes level and one when it's back, not hundreds. To Teams, Slack, SMS, email, Jira or ServiceNow. Then MonX shows what moved with it.",
      },
    ],
  },

  product: {
    eyebrow: "Inside MonX",
    title: "From the first unusual minute to the report you send.",
    lead: "Live indicators, a learned sense of normal, the likely cause, the alert, and the paperwork for the regulator. In one product your team already knows how to feed.",
    tabsLabel: "MonX features",
    tabs: {
      live: {
        label: "Live indicators",
        title: "Live business indicators",
        tags: ["Every minute", "Any source"],
        text: "Card payments, logins, transfers and anything else your systems record, as live indicators and charts. Group them by business service, put them on a wall screen, and scroll back through the history.",
        points: [
          "Agents in SQL, PowerShell, REST and SOAP",
          "Levels per indicator, from good to very bad",
          "Dashboards, charts and a ticker for maintenance notices",
        ],
      },
      anomaly: {
        label: "Anomaly detection",
        title: "Spot incidents while they form",
        tags: ["Learned normal", "Sensitivity 1–5"],
        text: "Forty orders waiting is fine at 03:00 and odd on a Tuesday at 10:00. For every hour, MonX learns the usual range from the same hour on comparable days, and tells you when values drift out of it.",
        points: [
          "Compares weekdays, holidays, and the first and last working day of the month",
          "Opens after three unusual values in a row, so one blip doesn't wake anyone",
          "Runs inside your network. No data leaves it",
        ],
      },
      moved: {
        label: "Root cause",
        title: "See what moved with it",
        tags: ["Correlation", "±30 minutes"],
        text: "When card payments drop, MonX finds which of your other indicators rose or fell with them, up to 30 minutes before or after, and lists the ten closest with small charts. You go straight to the likely cause.",
        points: [
          "Ask from an indicator or straight from an incident",
          "Top-down: from the customer to the component",
          "Fewer people chasing the wrong alarm",
        ],
      },
      incidents: {
        label: "Incidents and reports",
        title: "Report to the regulator on time",
        tags: ["NBS 102/2024", "Annex 1"],
        text: "Open an incident from the alerts that started it. MonX classifies it against Annex 1 for a person to confirm, works out every reporting deadline, reminds your team, and drafts the initial, interim and final reports for you to send.",
        points: [
          "A timeline of alerts, notifications and changes",
          "Reports freeze the moment you mark them as sent",
          "A monthly check for incidents that keep coming back",
        ],
      },
      assistant: {
        label: "AI assistant",
        title: "Ask MonX what happened",
        tags: ["Your own model", "Read-only"],
        text: "Ask in any language about agents, indicators, alerts, anomalies or incidents. The assistant reads only what you may read, shows what it read, and proposes changes you approve in the normal form. It can run on the bank's own model, so data stays in the bank.",
        points: [
          "Explain any alert from recent values, levels and changes",
          "Draft incident descriptions, root causes and actions",
          "An MCP server for your own AI tools, behind single sign-on",
        ],
      },
      alerts: {
        label: "Alerts",
        title: "One message, not hundreds",
        tags: ["11 channel types", "No alert storms"],
        text: "MonX sends one message when an indicator enters a level and one when it's back to normal. Mute an indicator during maintenance, cap messages per channel, and open a ticket automatically.",
        points: [
          "Email, SMS, Viber, WhatsApp, Teams, Slack, Discord and Telegram",
          "Jira and ServiceNow tickets, signed webhooks",
          "Only email is on until an administrator allows the rest",
        ],
      },
    },
  },

  useCases: {
    eyebrow: "Use cases",
    title: "Indicators your customers feel.",
    lead: "Built in banking, and just as useful anywhere a service has to work around the clock: insurance, ticketing, fintech, delivery, and the internal systems large companies run on.",
    industries: [
      { name: "Banks", indicators: ["Card authorizations per minute", "Instant payments in progress", "Mobile banking logins"] },
      { name: "Telecoms", indicators: ["SMS delivered per minute", "Service activations", "Successful top-ups"] },
      { name: "Payments", indicators: ["Approved transactions per minute", "Processor response time", "Failed charges"] },
      { name: "E-commerce", indicators: ["Orders completed per minute", "Successful checkout payments", "Deliveries assigned"] },
    ],
  },

  statement: {
    label: "MonX alongside your tools",
    eyebrow: "Alongside your tools, not instead of them",
    text: "Your tools show how your servers are doing. MonX tells you whether your customers can pay right now.",
    lead: "Keep your existing monitoring for infrastructure. MonX adds the layer above it: is the service actually working for the customer?",
  },

  compliance: {
    eyebrow: "Compliance",
    title: "What MonX measures, regulators require.",
    lead: "NBS Decision 102/2024 applies from 1 January 2026, and DORA across the EU. Both ask you to detect problems early, know how long a service was down, and report it. MonX keeps that record for you.",
    caption: "Regulatory requirements and what MonX provides for each",
    requirementHeader: "Requirement",
    requirementNote: "(NBS Decision 102/2024; DORA)",
    providesHeader: "What MonX provides",
    rows: [
      ["NBS item 26: an adequate monitoring system", "Continuous indicators of service delivery to customers, not just components"],
      ["NBS item 40: early-warning indicators", "Thresholds and alerts per indicator, and comparison with the same period"],
      ["NBS items 41–42: incident classification and how long the service was down", "Indicator history shows when the service stopped and when it recovered"],
      ["NBS item 53: performance and capacity monitoring", "Volume trends and system capacity limits"],
      ["NBS chapter VII and Annex 1: reporting significant incidents", "An incident register, Annex 1 classification for a person to confirm, deadlines, and drafted reports"],
      ["NBS item 25: a yearly review of who has access", "Last sign-in for every user and an access review export"],
      ["DORA Art. 10: prompt detection of anomalies, alert thresholds", "Top-down indicators with defined thresholds, on several levels"],
    ],
    securityTitle: "Built to pass your security review.",
    securityText:
      "Your security team gets a full pack to start from: an overview, the threat model, the NBS mapping, questionnaire answers and a software bill of materials for every release.",
    securityButton: "Ask for the security pack",
    security: [
      { title: "Runs inside your bank", text: "Windows Server, IIS and SQL Server. Reached only from your network, and installs without internet access." },
      { title: "Your data stays with you", text: "Everything MonX records lives in your own SQL Server database. MonX sends nothing to us." },
      { title: "Sign-in your way", text: "Windows (Active Directory), single sign-on with your provider, or passwords with two-step sign-in." },
      { title: "Secrets nobody can read back", text: "Agents' passwords are encrypted so only the MonX service can use them. Not even an administrator sees them." },
      { title: "Every change on record", text: "Who changed what and when, in the app and in the Windows Event Log for your SIEM." },
      { title: "Least privilege", text: "Viewer, Configurator and Administrator roles, checked by the API on every request." },
    ],
  },

  comparison: {
    eyebrow: "Where MonX fits",
    title: "MonX next to the tools you know.",
    lead: "Monitoring and observability platforms start from components. MonX starts from the business service. Most teams keep both.",
    caption: "MonX compared with infrastructure monitoring and enterprise observability platforms",
    aspect: "Aspect",
    columns: [
      { name: "Infrastructure monitoring", examples: "e.g. Zabbix, PRTG, SolarWinds" },
      { name: "Enterprise observability", examples: "e.g. Datadog, Dynatrace, Splunk" },
    ],
    rows: [
      ["Built around", "Business services and customer outcomes", "Hosts, devices and sensors", "Applications, traces and cloud infrastructure"],
      ["Business view", "The starting point (top-down)", "Built on top of component checks", "Service views and SLOs, sometimes a separate module"],
      ["Custom checks", "SQL, PowerShell, REST, SOAP built in", "Scripts, plugins and sensors", "Custom metrics and extensions"],
      ["Deployment", "On-prem or SaaS", "Mostly self-hosted", "Mostly SaaS"],
      ["Pricing", "Annual subscription", "Per device or sensor, or a free license with paid support", "Per host, per product or by consumption"],
      ["Setup", "A lightweight agent and your own SQL", "Agents or sensors on every device", "Agents on every host, plus platform setup"],
      ["Support", "Direct, local, in Serbian", "Vendor or partners", "Global vendor and partners"],
    ],
    swipeHint: "Swipe the table sideways to compare →",
  },

  why: {
    eyebrow: "Why MonX",
    title: "Proven in banking, built for you.",
    reasons: [
      {
        title: "15 years in practice",
        text: "The top-down approach was developed and used in one of the largest banking IT systems in Serbia. MonX turns it into a product.",
      },
      { title: "Skills you already have", text: "SQL, PowerShell, SQL Server, IIS. No new query languages or stacks to maintain." },
      { title: "Your data stays with you", text: "Fully on-prem, or SaaS with a lightweight agent on your network. Minimal load on your systems." },
      { title: "Local and hands-on", text: "A Belgrade-based team with support in Serbian. We help you design your monitoring and write the agents." },
    ],
    quote: "“Built by people who ran major incidents for fifteen years. The tool we wished we'd had.”",
    founders: [
      {
        initials: "DG",
        name: "Dejan Gošić",
        role: "Co-founder · architecture and methodology",
        bio: "More than 24 years in banking IT: developer, software architect, major incident and problem manager, and head of ICT application architecture.",
      },
      {
        initials: "LG",
        name: "Lazar Gošić",
        role: "Co-founder · product development",
        bio: "Builds the MonX web app and services. Information systems and technologies, University of Belgrade.",
      },
    ],
  },

  pilot: {
    eyebrow: "Next step",
    title: "Pilot: three critical services, eight weeks.",
    lead: "Start on the services that matter most and judge MonX by what it catches. You won't do it alone: our team designs and sets up the monitoring with yours.",
    cta: "Plan a pilot",
    steps: [
      { when: "Week 1", title: "Workshop and service selection", text: "Two 1.5-hour workshops for your team, and the choice of your three most critical services." },
      { when: "Weeks 1–2", title: "First indicators live", text: "We write the agents together with your team and move them to production." },
      { when: "Weeks 3–8", title: "Thresholds and alerts", text: "We tune thresholds and measure how fast problems are detected." },
      { when: "End of pilot", title: "Joint review", text: "What MonX caught before your customers did, and how we continue." },
    ],
    after: "After the pilot: an annual subscription (OPEX) with new versions included. On-prem installation available.",
  },

  faq: {
    eyebrow: "FAQ",
    title: "What clients usually ask.",
    askBefore: "Something we didn't answer?",
    askLink: "Ask us directly",
    items: [
      {
        q: "We already have monitoring tools.",
        a: "Good, keep them. MonX doesn't replace them. It adds the layer above: indicators of service delivery to customers.",
      },
      {
        q: "Can't we build this ourselves?",
        a: "You can. Compare the effort: scripts, scheduling, metric storage, dashboards, alerting, incident reporting and the upkeep of all of it. We suggest a side-by-side test on one service.",
      },
      {
        q: "Why Windows and .NET?",
        a: "Because that is what most banks run: SQL Server, IIS, PowerShell. No new stack just for monitoring.",
      },
      {
        q: "Where does our data live?",
        a: "On-prem, everything MonX records stays in your own SQL Server database and nothing is sent to us. With SaaS, a lightweight agent runs on your network and sends the indicator values it collects.",
      },
      {
        q: "What does MonX need to run?",
        a: "Windows Server, IIS and SQL Server for the web app and its APIs, and the Agent Service on a server that can reach the systems you monitor. You can run several Agent Services, for example one per network zone or data center.",
      },
      {
        q: "Does MonX send our data to an AI provider?",
        a: "Not unless you decide it should. Anomaly detection and “what moved together” run inside MonX. The assistant and incident drafts use a language model only once an administrator turns them on, and they can run on the bank's own model so nothing leaves the bank.",
      },
      {
        q: "Does MonX cover NBS Decision 102/2024?",
        a: "It keeps the incident register, classifies incidents against Annex 1 for a person to confirm, tracks every reporting deadline and drafts the reports. You review them and submit them through the channel NBS prescribes.",
      },
      {
        q: "How is MonX priced?",
        a: "As an annual subscription (OPEX), with new versions included. We start with an eight-week pilot on three critical services. On-prem installation is available.",
      },
      {
        q: "Who sets it up?",
        a: "We do, with your team: two workshops, then we write the first agents together and tune the thresholds. Support is local, in Serbian or English.",
      },
    ],
  },

  finalCta: {
    title: "Let's look at your three most critical services.",
    lead: "Bring the service you worry about most. We'll show you what MonX would have caught on it, live, at your site or online.",
    cta: "Book a demo",
    people: [
      { name: "Dejan Gošić", role: "Co-founder · architecture and methodology", href: "mailto:dejan.gosic@mon-x.app", link: "dejan.gosic@mon-x.app" },
      { name: "Lazar Gošić", role: "Co-founder · product development", href: "mailto:lazar.gosic@mon-x.app", link: "lazar.gosic@mon-x.app" },
      { name: "Live demo", role: "At your site or online", href: "#video", link: "Or watch the overview first" },
    ],
  },

  footer: {
    about:
      "Business service monitoring, top-down. Built in Belgrade by people who ran major incidents at one of the region's largest banks.",
    onThisPage: "On this page",
    contact: "Contact",
    city: "Belgrade, Serbia",
    tagline: "See what your customers see.",
  },

  structuredData: {
    description:
      "Business service monitoring, top-down: live indicators of what customers actually do, anomaly detection, root-cause hints and incident reports for NBS Decision 102/2024.",
  },
}

export type Dict = typeof en
