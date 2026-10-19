export const profile = {
  name: "Shivam Gaikwad",
  role: "Business Analyst · Technology & Data",
  pitch: "I turn ambiguous business needs into clear requirements, validated processes and measurable outcomes. With a software engineering background, I bridge stakeholders and delivery teams so what gets built is what the business actually asked for.",
  email: "gaikwadshivam572@gmail.com",
  phone: "+91 8669061300",
  linkedin: "https://www.linkedin.com/in/shivamgaikwad572",
  github: "https://github.com/Shivam-Gaikwad",
  location: "Pune, Maharashtra",
  about: "I am an Information Technology graduate who started as a full-stack developer and moved toward business analysis because I enjoy the question before the code: what problem are we solving, for whom, and how will we know it worked? I work comfortably with engineers, because I have been one, and with business owners, because I write requirements in their language. I am looking for a Business Analyst or Associate Business Analyst role in a global technology organization.",
  facts: [
    ["Pune, India", "Open to relocation and hybrid roles"],
    ["B.E. IT, CGPA 8.51", "Class of 2026"],
    ["Agile · SDLC", "Scrum ceremonies, backlog grooming"],
  ],
};

export const process = [
  ["Business need", "Goal, KPI, stakeholder"],
  ["Requirement", "BRD / FRD, priority"],
  ["User story", "Acceptance criteria"],
  ["Test & UAT", "Cases mapped in RTM"],
  ["Release", "Sign-off, feedback"],
];

export const skills = [
  ["Business analysis", ["Requirements elicitation", "BRD / FRD / SRS", "User stories & acceptance criteria", "Use cases", "Gap & impact analysis", "Stakeholder management", "Process mapping (BPMN)", "Requirement traceability matrix", "UAT planning", "Change requests"]],
  ["Data & analytics", ["SQL (joins, CTEs, window functions)", "Advanced Excel (pivots, XLOOKUP)", "Power BI", "Tableau (basic)", "KPI & metric definition", "Data validation", "Python (pandas)"]],
  ["Tools", ["Jira", "Confluence", "MS Visio / Lucidchart", "Figma & Balsamiq", "Postman", "MS Office, SharePoint", "Git & GitHub"]],
  ["Delivery & people", ["Agile / Scrum", "Kanban", "SDLC & Waterfall", "Risk & assumption logs", "Presentation & storytelling", "Facilitation of workshops", "Negotiation", "Cross-functional collaboration"]],
];

export const experience = [
  {
    dates: "Jan 2025 – Feb 2025", place: "Pune",
    title: "Software Developer Intern, Exaltasoft Solutions",
    points: [
      "Worked in an Agile SDLC team, translating stakeholder requirements and feature requests into working, tested application modules.",
      "Clarified requirements with developers and stakeholders, reducing rework by confirming scope before implementation.",
      "Validated features through functional and UI testing, logging defects with clear steps to reproduce and following them to closure.",
      "Delivered reusable, responsive interface components that improved consistency across screens.",
    ],
  },
  {
    dates: "2025 – 2026", place: "Pravara Rural Engineering College",
    title: "Final-year project team lead",
    points: [
      "Led the team: planned work, set priorities, coordinated tasks and kept delivery on schedule through to the live demo.",
      "Ran progress reviews and handled trade-offs between scope, time and quality.",
    ],
  },
];

export const projects = [
  { tag: "Data analysis · Retention", title: "Customer Churn Analysis & Power BI Dashboard",
    blurb: "Why are subscribers leaving, and which segments should the business act on first?",
    tools: ["SQL", "Power BI", "Excel", "Python"],
    problem: "Leadership saw rising cancellations but had no view of who was churning or why.",
    did: "Defined churn KPIs, cleaned and joined customer, billing and support data in SQL, and segmented by tenure, plan and ticket volume.",
    deliverables: "KPI definition sheet, data dictionary, interactive dashboard and a recommendations deck for retention actions." },
  { tag: "Process improvement · Finance operations", title: "Order-to-Cash Process Redesign",
    blurb: "Cutting delays between order confirmation and payment collection.",
    tools: ["BPMN", "Visio", "BRD", "Gap analysis"],
    problem: "Manual hand-offs between sales, billing and finance caused invoice errors and late payments.",
    did: "Mapped the as-is flow, ran stakeholder interviews, found bottlenecks and designed a to-be process with automation points and approval rules.",
    deliverables: "As-is and to-be BPMN diagrams, gap analysis, BRD, RACI chart and a cost-benefit summary." },
  { tag: "Requirements to delivery · Full-stack", title: "Eventra: Event Booking Platform",
    blurb: "A live platform for event discovery and ticket booking, treated as a requirements-first product.",
    tools: ["User stories", "Use cases", "Postman", "UAT", "MERN"],
    problem: "Organisers and attendees needed one secure place to publish events, book tickets and manage bookings.",
    did: "Split needs into user and admin roles, wrote prioritised stories with acceptance criteria, then built and tested the workflows, including role-based access and OTP verification.",
    deliverables: "Story backlog, use-case flows, API test collection, defect log and a deployed demo." },
  { tag: "Requirements documentation · Retail", title: "Inventory & Order Management System",
    blurb: "End-to-end requirement package for a mid-size retailer replacing spreadsheets.",
    tools: ["SRS / FRD", "UML", "RTM", "Jira", "Figma"],
    problem: "Stock mismatches and missed reorders led to lost sales and over-stocking.",
    did: "Elicited needs through interviews and workshops, modelled use cases and data flows, prioritised with MoSCoW and prototyped key screens.",
    deliverables: "SRS, use-case and activity diagrams, wireframes, traceability matrix, UAT test scenarios and a Jira backlog." },
];

export const education = [
  "B.E. in Information Technology, Pravara Rural Engineering College, Loni. CGPA 8.51 (2022–2026)",
  "HSC, A. S. C. College, Rahuri. 64.33% (2020–2022)",
  "SSC, Adarsh Vidyalaya, Umbre. 91.80% (2020)",
];
export const certifications = [
  "HackerRank Certified Frontend Developer",
  "HackerRank Advanced SQL Certificate",
  "HackerRank Python Certificate",
];
