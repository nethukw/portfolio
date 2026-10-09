// ============================================================
//  All portfolio content lives here (taken from Nethmi's CV).
//  Edit this file to update the website – no database needed.
// ============================================================

export const profile = {
  name: "Nethmi Wijekoon",
  email: "nethukzz@gmail.com",
  phone: "+94758381698",
  address: "Kandy, Sri Lanka",
  linkedin: "https://www.linkedin.com/in/nethukzz",
  linkedinHandle: "nethukzz",
  github: "https://github.com/nethukw",
  cv: "/Nethmi_Wijekoon_CV.pdf",
  gpa: "3.67",
  summary:
    "Software Engineering undergraduate at LNBTI with hands-on full-stack experience building responsive web applications using React, Next.js, Node.js and Laravel with relational and NoSQL databases, and UI/UX design skills using Figma. Freelance experience building real-time dashboards and integrating REST APIs, Google Maps, Firebase, Supabase and the OpenAI API. Strong in debugging, testing and Git-based workflows, and eager to learn new technologies quickly in a collaborative team.",
};

// ---------- cover images (generated, replace with real screenshots anytime) ----------
const cover = (label, tag, c1 = "#0f766e", c2 = "#0369a1") => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${c1}"/><stop offset="1" stop-color="${c2}"/></linearGradient></defs><rect width="800" height="450" fill="url(#g)"/><circle cx="680" cy="70" r="140" fill="#fff" opacity="0.07"/><circle cx="90" cy="400" r="120" fill="#fff" opacity="0.07"/><text x="400" y="215" text-anchor="middle" font-family="Arial,Helvetica,sans-serif" font-weight="700" font-size="54" fill="#fff">${label}</text><text x="400" y="268" text-anchor="middle" font-family="Arial,Helvetica,sans-serif" font-size="26" fill="#fff" opacity="0.8">${tag}</text></svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};

// ---------- projects ----------
export const projects = [
  {
    id: 1,
    Title: "Next.js Developer Portfolio",
    Year: "2026",
    Img: "/Portofolio.png",
    Description:
      "Designed and developed a fully responsive, modern web portfolio utilizing Next.js to showcase software engineering projects and technical certifications.",
    Link: "",
    Github: "",
    TechStack: ["Next.js"],
    Features: [
      "Fully responsive, modern design",
      "Showcases software engineering projects",
      "Displays technical certifications",
    ],
  },
  {
    id: 2,
    Title: "TaskFlow - Cross-Platform Task Manager",
    Year: "Ongoing",
    Img: cover("TaskFlow", "Cross-platform task manager", "#0e7490", "#0f766e"),
    Description:
      "Developing a mobile application using React Native. Integrated with a robust Node.js and Laravel backend via REST APIs to handle authentication and real-time data synchronization.",
    Link: "",
    Github: "",
    TechStack: ["React Native", "Node.js", "Laravel", "REST APIs"],
    Features: [
      "Cross-platform mobile application built with React Native",
      "Node.js and Laravel backend connected via REST APIs",
      "Authentication",
      "Real-time data synchronization",
    ],
  },
  {
    id: 3,
    Title: "EduChat - Peer-to-Peer Learning Platform",
    Year: "2025",
    Img: "/educhat.png",
    Description:
      "Engineered a full-stack educational platform with a Laravel backend and MySQL database, integrating the Zoom API for session scheduling, real-time discussion forums and an AI chatbot. Served as group leader.",
    Link: "",
    Github: "",
    TechStack: ["Laravel", "MySQL", "Zoom API", "AI Chatbot"],
    Features: [
      "Full-stack educational platform",
      "Session scheduling through the Zoom API",
      "Real-time discussion forums",
      "AI chatbot",
      "Served as group leader",
    ],
  },
  {
    id: 4,
    Title: "Mood Matcher & VibeReads Bookstore",
    Year: "2024",
    Img: "/moodmatcher.png",
    Description:
      "Built an innovative e-commerce recommendation engine using PHP and Tailwind CSS. Developed automated testing scripts using Selenium to validate core functionalities.",
    Link: "",
    Github: "",
    TechStack: ["PHP", "Tailwind CSS", "Selenium"],
    Features: [
      "E-commerce recommendation engine",
      "Automated Selenium testing scripts to validate core functionalities",
    ],
  },
  {
    id: 5,
    Title: "SmartLMS & Exchange Rate Converter",
    Year: "2024",
    Img: "/currency.png",
    Description:
      'Built "SmartLMS" using C# to effectively manage academic resources, and engineered an "Exchange Rate Converter" using PHP for real-time currency calculation.',
    Link: "",
    Github: "",
    TechStack: ["C#", "PHP"],
    Features: [
      "SmartLMS to manage academic resources",
      "Exchange Rate Converter for real-time currency calculation",
    ],
  },
  {
    id: 6,
    Title: "College Course, Vehicle & Pet Shop Systems",
    Year: "2024 - 2025",
    Img: cover("DB Systems", "Management systems", "#0e7490", "#047857"),
    Description:
      "Developed multiple database-driven management systems utilizing PostgreSQL, C++, and PHP/Bootstrap to streamline operations, maintenance tracking, and academic schedules.",
    Link: "",
    Github: "",
    TechStack: ["PostgreSQL", "C++", "PHP", "Bootstrap"],
    Features: [
      "Multiple database-driven management systems",
      "Streamlined operations and maintenance tracking",
      "Academic schedule management",
    ],
  },
];

// ---------- certifications & courses ----------
export const certificates = [
  { id: 1, Title: "Japanese Language Preparation", Issuer: "NAT N5 Passed", Year: "" },
  { id: 2, Title: "Python Programming & Python for Beginners", Issuer: "University of Moratuwa", Year: "" },
  { id: 3, Title: "Server Side Web Programming", Issuer: "University of Moratuwa", Year: "" },
  { id: 4, Title: "Fundamentals of Project Management", Issuer: "University of Moratuwa (In Progress)", Year: "" },
  { id: 5, Title: "Diploma in English", Issuer: "Esoft Metro Campus", Year: "2023" },
  { id: 6, Title: "Business Ethics", Issuer: "LinkedIn Learning", Year: "" },
];

// ---------- tech stack (icon files live in /public) ----------
export const techStacks = [
  { icon: "javascript.svg", language: "JavaScript" },
  { icon: "typescript.svg", language: "TypeScript" },
  { icon: "python.svg", language: "Python" },
  { icon: "php.svg", language: "PHP" },
  { icon: "java.svg", language: "Java" },
  { icon: "kotlin.svg", language: "Kotlin" },
  { icon: "csharp.svg", language: "C#" },
  { icon: "cpp.svg", language: "C++" },
  { icon: "reactjs.svg", language: "React.js" },
  { icon: "reactnative.svg", language: "React Native" },
  { icon: "nextjs.svg", language: "Next.js" },
  { icon: "nodejs.svg", language: "Node JS" },
  { icon: "laravel.svg", language: "Laravel" },
  { icon: "tailwind.svg", language: "Tailwind CSS" },
  { icon: "bootstrap.svg", language: "Bootstrap" },
  { icon: "android.svg", language: "Android SDK" },
  { icon: "firebase.svg", language: "Firebase" },
  { icon: "supabase.svg", language: "Supabase" },
  { icon: "mysql.svg", language: "MySQL" },
  { icon: "postgresql.svg", language: "PostgreSQL" },
  { icon: "mongodb.svg", language: "MongoDB" },
  { icon: "sqlserver.svg", language: "SQL Server" },
  { icon: "git.svg", language: "Git" },
  { icon: "github.svg", language: "GitHub" },
  { icon: "docker.svg", language: "Docker" },
  { icon: "vercel.svg", language: "Vercel" },
  { icon: "aws.svg", language: "Basic AWS" },
  { icon: "openai.svg", language: "OpenAI API" },
  { icon: "googlemaps.svg", language: "Google Maps API" },
  { icon: "figma.svg", language: "Figma" },
  { icon: "selenium.svg", language: "Selenium" },
  { icon: "jira.svg", language: "Jira" },
  { icon: "trello.svg", language: "Trello" },
];

// ---------- services (based on skills & experience in the CV) ----------
export const services = [
  {
    id: 1,
    icon: "Code",
    title: "Full-Stack Web Development",
    description:
      "Scalable web applications with React, Next.js, Node.js and Laravel, backed by well-designed relational databases.",
    features: [
      "REST API design & integration",
      "Relational database design (MySQL, PostgreSQL)",
      "Real-time dashboards with React",
    ],
  },
  {
    id: 2,
    icon: "Smartphone",
    title: "Mobile App Development",
    description:
      "Native Android apps with Kotlin and cross-platform apps with React Native, built with responsive UI/UX.",
    features: [
      "Native Android (Kotlin)",
      "Cross-platform apps (React Native)",
      "Authentication & real-time data sync",
    ],
  },
  {
    id: 3,
    icon: "ShieldCheck",
    title: "Quality Assurance & Testing",
    description:
      "Manual and automated testing to keep applications stable, following Agile development workflows.",
    features: [
      "Test-case based manual testing",
      "Automation scripts with Selenium",
      "Bug tracking with Jira / Trello",
    ],
  },
  {
    id: 4,
    icon: "Users",
    title: "Project Management",
    description:
      "Team coordination and delivery of web and mobile projects using Agile workflows, with hands-on group leadership experience.",
    features: [
      "Agile/Scrum planning & team leadership",
      "Task & defect tracking with Jira / Trello",
      "Project Management fundamentals (University of Moratuwa)",
    ],
  },
];

// ---------- experience, education & languages ----------
export const background = [
  {
    id: 1,
    icon: "Briefcase",
    title: "Work Experience",
    items: [
      {
        heading: "Freelance Software Developer",
        sub: "ShaloTrack | Western Province, Sri Lanka",
        meta: "April 2026 – September 2026",
        points: [
          "Built a real-time fleet management web dashboard using React, Google Maps API, Firebase and Supabase to monitor and manage vehicle tracking data.",
          "Integrated the OpenAI API to add AI-powered features to the platform.",
          "Developed and maintained native Android applications using Kotlin, with responsive UI/UX and REST API integrations.",
          "Debugged and tested applications, executing manual test cases for real-time tracking and tracking defects in Jira/Trello through the full bug life cycle.",
          "Worked in Agile workflows using Git, collaborating with team members on code reviews and troubleshooting to ensure application stability.",
          "Served as group leader, coordinating team members and supporting collaboration across the project.",
        ],
      },
    ],
  },
  {
    id: 2,
    icon: "GraduationCap",
    title: "Education",
    items: [
      {
        heading: "BSc (Hons) in Software Engineering",
        sub: "Lanka Nippon BizTech Institute (LNBTI)",
        meta: "2023 – Present | Current Cumulative GPA: 3.67 / 4.00",
      },
      {
        heading: "G.C.E. Advanced Level – Biological Science Stream",
        sub: "Swarnamali Girls' College, Kandy",
        meta: "2019 – 2021",
      },
      {
        heading: "G.C.E. Ordinary Level",
        sub: "D.B. Wijethunga National School, Kandy",
        meta: "2018",
      },
    ],
  },
  {
    id: 3,
    icon: "Globe",
    title: "Languages",
    items: [
      { heading: "English", sub: "Business Level" },
      { heading: "Japanese", sub: "NAT N4 / Studying N3" },
      { heading: "Sinhala", sub: "Native" },
    ],
  },
];
