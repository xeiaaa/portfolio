export const navItems = [
  {
    label: "About",
    id: "about",
  },
  {
    label: "Experience",
    id: "experience",
  },
  {
    label: "Projects",
    id: "projects",
  },
];

export const experiences = [
  {
    title: "Top-Rated Plus Full-Stack Developer",
    company: "Upwork",
    date: "2019 — PRESENT",
    skills: ["React", "Node.js", "MongoDB", "PostgreSQL", "Next.js"],
    description:
      "Delivered multiple React + Node.js apps with consistent 5-star reviews. Designed MongoDB/PostgreSQL schemas, ensuring scalable data handling. Maintained 100% job success score through quality delivery.",
  },
  {
    title: "Senior Software Engineer",
    company: "Cloudstaff",
    date: "2018 — 2019",
    skills: ["WooCommerce", "WordPress", "PHP", "JavaScript", "Architecture"],
    description:
      "Architected solutions and mentored junior devs. Built WooCommerce plugin for intimate.io. Designed secure, maintainable mobile project solutions.",
  },
  {
    title: "Full-Stack Developer",
    company: "Volenday",
    date: "2016 — 2017",
    skills: ["Ionic", "Node.js", "JavaScript", "Headless CMS", "REST APIs"],
    description:
      "Built Asia CEO Awards site and a headless CMS (AHA). Developed employee tracking app (Ionic + Node.js).",
  },
  {
    title: "Freelance Web Developer",
    company: "",
    date: "2014 — 2020",
    skills: ["PSD-to-HTML", "React", "Redux", "Socket.IO", "Web Scraping"],
    description:
      "Worked on PSD-to-HTML, React/Redux, and mobile apps. Implemented real-time functionality with Socket.IO and web scraping utilities.",
  },
];

export const projects = [
  {
    title: "InvestorPrez — Website Builder for Real Estate",
    date: "2024",
    builtWith: ["React", "GrapesJS", "TypeScript", "Node.js", "Jest"],
    description:
      "Optimized GrapesJS integration with React improving editor load speed by 3×. Refactored large components into modular units and rebuilt state management for better responsiveness. Added automated React tests and enforced strict TypeScript/ESLint rules.",
    image: "",
    video: "",
    downloads: "",
    bookmarked: "",
    link: "",
    company: {
      name: "Sonority Pty Ltd",
      url: "https://sonority.com.au",
    },
  },
  {
    title: "ChatBuildX — AI Chatbot Builder",
    date: "2024",
    builtWith: ["NestJS", "React", "MongoDB", "OpenAI", "TypeScript"],
    description:
      "Built from scratch for scalability. Integrated WordPress, WooCommerce, Facebook Messenger, and Google Drive for contextual data. Developed a custom web scraping utility for dynamic knowledge enrichment.",
    image: "",
    video: "",
    downloads: "",
    bookmarked: "",
    link: "https://www.chatbuildx.com/",
    company: {
      name: "Upwork",
      url: "https://www.upwork.com",
    },
  },
  {
    title: "CSV Analyser — Trading Data Validator",
    date: "2023",
    builtWith: ["React", "TypeScript", "Node.js", "react-window"],
    description:
      "Implemented FIFO vs. LIFO strategy comparison for share balance validation and parcel-level error detection (trade date, price range, dishonesty). Built virtualization for 100K+ rows to ensure smooth dataset interaction.",
    image: "",
    video: "",
    downloads: "",
    bookmarked: "",
    link: "",
    company: {
      name: "Sonority Pty Ltd",
      url: "",
    },
  },
  {
    title: "Moment — Ticketed Live Experience Platform",
    date: "2022",
    builtWith: ["React", "Node.js", "Socket.IO", "Twilio"],
    description:
      "Developed Meet & Greet feature with real-time 1:1 video sessions (Socket.IO + Twilio). Built queueing system for low-latency, high-traffic live events.",
    image: "",
    video: "",
    downloads: "",
    bookmarked: "",
    link: "https://moment.co",
    company: {
      name: "Upwork",
      url: "https://www.upwork.com",
    },
  },
  {
    title: "ANZ MTG Super Series — Event Management Platform",
    date: "2021",
    builtWith: [
      "NestJS",
      "MongoDB",
      "React",
      "Vite",
      "Next.js",
      "PayPal",
      "AWS",
    ],
    description:
      "Designed backend with NestJS and MongoDB, with automated testing for reliability. Built admin dashboard (React + Vite) and participant app (Next.js). Integrated PayPal for secure payments and managed AWS deployment.",
    link: "https://anzmtg.com.au",
    image: "",
    video: "",
    downloads: "",
    bookmarked: "",
    company: {
      name: "Upwork",
      url: "https://www.upwork.com",
    },
  },
  {
    title: "Contract Generator — Word Document",
    date: "2020",
    builtWith: ["React", "Node.js", "Express", "docx"],
    description:
      "Built a web app for an in-house legal team to automatically generate contracts in Word format. Implemented conditional logic (if/then) for dynamic fields like price and client type. Produced 1–3 page contracts from templates, simplifying sales workflows.",
    link: "",
    image: "",
    video: "",
    downloads: "",
    bookmarked: "",
    company: {
      name: "",
      url: "",
    },
  },
  {
    title: "Transfer Web App Modules to React.js",
    date: "2020",
    builtWith: ["React", "React Native"],
    description:
      "Migrated an educational app in Ghana from legacy code to React.js and React Native. Enhanced performance and maintainability for in-house use.",
    link: "",
    image: "",
    video: "",
    downloads: "",
    bookmarked: "",
    company: {
      name: "",
      url: "",
    },
  },
  {
    title: "Sports App",
    date: "2021",
    builtWith: ["Next.js", "Express", "Python"],
    description:
      "Developed CRUD app with a Next.js frontend and Express/Python backend. Added slug-based URLs (e.g., /nfl/2021/round-1/patriots-vs-panthers), enabled CSV upload for historical data, and manual entry for upcoming games. Provided groundwork for predictions, odds, and voting.",
    link: "",
    image: "",
    video: "",
    downloads: "",
    bookmarked: "",
    company: {
      name: "",
      url: "",
    },
  },
  {
    title: "GaConnector",
    date: "2019",
    builtWith: ["React"],
    description: "Built a React-based admin dashboard for an analytics tool.",
    link: "https://gaconnector.com",
    image: "",
    video: "",
    downloads: "",
    bookmarked: "",
    company: {
      name: "",
      url: "",
    },
  },
  {
    title: "Korean In-House Casino App",
    date: "2017",
    builtWith: [
      "MongoDB",
      "Express",
      "React",
      "Node.js",
      "Socket.IO",
      "Betgames API",
    ],
    description:
      "Developed a casino app from scratch with the MERN stack and Socket.IO. Integrated Betgames API for real-time betting and deployed for internal client use.",
    link: "",
    image: "",
    video: "",
    downloads: "",
    bookmarked: "",
    company: {
      name: "",
      url: "",
    },
  },
  {
    title: "Factor 75",
    date: "2018",
    builtWith: ["React"],
    description:
      "Converted multi-page flows into a single-page React application.",
    link: "https://factor75.com",
    image: "",
    video: "",
    downloads: "",
    bookmarked: "",
    company: {
      name: "",
      url: "",
    },
  },
  {
    title: "Asia CEO Awards",
    date: "2016 — 2017",
    builtWith: ["Express", "Node.js", "Headless CMS (AHA)"],
    description:
      "Built an Express.js application consuming data from a custom headless CMS (AHA).",
    link: "https://asia-ceo-awards.org",
    image: "",
    video: "",
    downloads: "",
    bookmarked: "",
    company: {
      name: "Volenday",
      url: "",
    },
  },
];

export const Profile = {
  name: "Bret Axl Sebastian Pura",
  title: "Full Stack Developer",
  description:
    "Passionate about building modern, accessible, and robust web applications — from intuitive interfaces to powerful APIs.",
  location: "Olongapo City, Philippines",
  about: [
    {
      paragraph:
        "I'm a full-stack developer with over nine years of experience, specializing in the MERN stack and modern frameworks like Next.js and NestJS. Over the years, I've worked on a wide range of projects — from real-time event platforms similar to Twitch, to complex website editors, meeting and video call platforms, AI chatbot builders, and numerous admin dashboards that power internal tools and business operations.",
      highlights: [
        "MERN stack",
        "Next.js and NestJS",
        "real-time event platforms",
        "complex website editors",
        "meeting and video call platforms",
        "AI chatbot builders",
        "numerous admin dashboards",
      ],
      bold: [],
      italic: [],
    },
    {
      paragraph:
        "Beyond shipping robust applications, I'm passionate about continuous learning and pushing the boundaries of user experience. Lately, I've been exploring Three.js and GSAP, experimenting with animation and 3D interactivity to bring richer, more engaging interfaces to the web.",
      highlights: ["Three.js", "GSAP"],
      bold: [],
      italic: [],
    },
    {
      paragraph:
        "When I'm not working on development projects, you'll usually find me building Gunpla model kits or practicing piano, two hobbies that let me stay creative outside of code.",
      highlights: ["building Gunpla model kits", "practicing piano"],
      bold: [],
      italic: [],
    },
  ],
  social: {
    linkedin: "https://www.linkedin.com/in/bretaxlsebastianpura",
    github: "https://github.com/xeiaaa",
    twitter: "https://x.com/deemid_",
    instagram: "https://www.instagram.com/bretaxlsebastian",
  },
  email: "cosmicdevcs@gmail.com",
  phone: "+63 995 753 6000",
  projects: projects,
  experiences: experiences,
};

export const articles = [
  {
    title: "5 Common Accessibility Pitfalls and How to Avoid Them",
    date: "2024",
    link: "https://medium.com",
    image: "",
  },
  {
    title: "Integrating Algolia Search with WordPress Multisite",
    date: "2020",
    link: "https://medium.com",
    image: "",
  },
  {
    title: "Building a Headless Mobile App CMS From Scratch",
    date: "2019",
    link: "https://medium.com",
    image: "",
  },
];
