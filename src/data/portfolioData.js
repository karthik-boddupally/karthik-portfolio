// All content here is sourced from Karthik's resume and the provided brief.
// Replace the placeholder "#" links (GitHub repo links, LinkedIn, live demo) with your real URLs.

export const personal = {
  name: "Karthik",
  fullName: "Boddupally Karthik",
  role: "Data Science Engineer",
  tagline: "Building intelligent solutions and uncovering insights from data.",
  email: "karthikboddupally0@gmail.com",
  gmailCompose: "https://mail.google.com/mail/?view=cm&fs=1&to=karthikboddupally0@gmail.com",
  phone: "9014478173",
  whatsapp: "https://wa.me/919014478173",
  linkedin: "https://www.linkedin.com/in/karthik-boddupally-824b70290/", // TODO: add real LinkedIn URL
  github: "https://github.com/karthik-boddupally", // TODO: add real GitHub URL
  resumeFile: "/Karthik_DS_Resume.pdf",
  cgpa: "9.14",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export const aboutLines = [
  "Data Science and Analytics Enthusiast",
  "Certified Intern @ RCI-DRDO — Data Engineering",
  "Certified Intern @ Future Interns — Data Science & Analytics",
  `Final-year B.Tech student (Computer Science – Data Science) at Sreyas Institute of Engineering and Technology with a CGPA of ${personal.cgpa}.`,
];

export const aboutParagraph =
  "I'm a final-year B.Tech student specializing in Computer Science (Data Science) at Sreyas Institute of Engineering and Technology, with hands-on experience building and deploying Machine Learning and Deep Learning projects using Python, PyTorch, Flask, and MediaPipe. I enjoy turning raw, messy data into working products — from a real-time sign language translator to a Bitcoin price forecasting tool — and I'm currently looking for opportunities where I can apply data engineering and data science skills to solve real business problems.";

export const aboutCounters = [
  { label: "Leetcode Questions Solved", value: 200, suffix: "+" },
  { label: "Certifications", value: 9, suffix: "+" },
  { label: "Internships", value: 3, suffix: "" },
  { label: "CGPA", value: parseFloat(personal.cgpa), suffix: "/10", decimals: 2 },
];

export const experience = [
  {
    company: "RCI-DRDO",
    role: "Data Engineering Intern",
    duration: "Jun 2026 – Sep 2026",
    project: "Implementation of Data Warehouse Architecture",
    points: [
      "Contributed to the design and implementation of a data warehouse architecture for structured data storage and retrieval.",
      "Worked on data pipeline concepts to consolidate raw data sources into query-ready, analysis-friendly formats.",
      "Applied data engineering fundamentals in a defense-research environment, focused on data reliability and structure.",
    ],
  },
  {
    company: "Future Interns",
    role: "Data Science & Analytics Intern",
    duration: "May 2026 – Jun 2026",
    project: "Data Analysis & Dashboarding",
    points: [
      "Dashboard Development — built interactive dashboards to visualize business and analytical data.",
      "Data Analysis — applied statistical problem-solving methods to derive insights from datasets.",
      "Python — used for data cleaning, transformation, and analysis workflows.",
      "Power BI — created data-driven reports to support decision-making.",
    ],
  },
  {
    company: "Deloitte Australia",
    role: "Data Analytics Job Simulation (Forage)",
    duration: "Jun 14, 2026",
    project: "Forensic Technology & Data Analytics",
    points: [
      "Data Cleaning — prepared and structured raw datasets for downstream analysis.",
      "Dashboard Generation — built dashboards to communicate analytical findings clearly.",
      "Business Insights — translated data patterns into actionable business recommendations.",
      "Professional Reporting — delivered findings in a consulting-style, client-ready format.",
    ],
  },
];

export const skills = {
  "Programming Languages": ["Python", "Java", "C", "HTML"],
  "Tools": ["Power BI", "Tableau", "Apache NiFi", "Docker"],
  "Databases": ["MySQL", "PostgreSQL", "MongoDB", "ClickHouse"],
  "Frameworks & Libraries": [
    "Scikit-learn",
    "Pandas",
    "NumPy",
    "OpenCV",
    "MediaPipe",
    "Matplotlib",
    "Tkinter",
  ],
};

export const projects = [
  {
    title: "Sign Language Translator",
    date: "July 2025",
    description:
      "A full-stack web app for real-time sign language recognition, translating hand gestures captured via webcam into live sentence predictions with spoken audio output.",
    problem:
      "Communication barriers between sign language users and non-signers are significant, and most existing tools lack real-time, sentence-level translation.",
    features: [
      "Real-time hand gesture recognition using webcam input",
      "Bidirectional LSTM model trained on custom gesture sequences",
      "Live sentence-level prediction, not just single signs",
      "Text-to-speech output for spoken translation",
    ],
    tech: ["Python", "PyTorch", "Flask", "MediaPipe", "OpenCV", "pyttsx3", "HTML/CSS/JavaScript"],
    challenges:
      "Training a Bidirectional LSTM on custom webcam gesture sequences and achieving reliable live tracking with MediaPipe under varying lighting and hand positions.",
    learnings:
      "Gained practical experience combining computer vision (MediaPipe, OpenCV) with sequence models (LSTM) and shipping it as a usable full-stack application.",
    github: "https://github.com/karthik-boddupally/SIGN-LANGUAGE-TRANSLATOR", // TODO: add real GitHub repo link
    demo: "#",
  },
  {
    title: "Bitcoin Price Prediction",
    date: "May 2026",
    description:
      "A desktop application that forecasts Bitcoin prices using engineered time-series features and a regression model, presented through a simple GUI.",
    problem:
      "Cryptocurrency prices are highly volatile, making short-term forecasting valuable but difficult without proper feature engineering.",
    features: [
      "Linear Regression model for 7-day price forecasting",
      "Feature engineering: momentum indicators, 3-day moving averages, day-of-week patterns",
      "RMSE-based accuracy reporting",
      "Desktop GUI built with Tkinter",
    ],
    tech: ["Python", "scikit-learn", "NumPy", "Pandas", "Matplotlib", "Tkinter"],
    challenges:
      "Engineering meaningful time-series features (momentum, moving averages) from raw price data to improve prediction accuracy.",
    learnings:
      "Deepened understanding of feature engineering for time-series data and how to evaluate forecasting models using RMSE.",
    github: "https://github.com/karthik-boddupally/Bitcoin_Price_Prediction", // TODO: add real GitHub repo link
    demo: "#",
  },
];

export const certifications = [
  {
    title: "Introduction to Machine Learning",
    subtitle: "NPTEL/Swayam",
    description: "Comprehensive foundational course in Machine Learning algorithms and applications.",
    link: "https://drive.google.com/file/d/1Inle6EGLF5BCetobAKFS2vG6T6kAsOli/view?usp=sharing", // TODO: add real credential link
  },
  {
    title: "Programming, Data Structures and Algorithms using Python",
    subtitle: "NPTEL/Swayam",
    description: "Advanced Python programming, focusing on efficient data structures and algorithm design.",
    link: "https://drive.google.com/file/d/1-YciWR0dgShtivi_2f-wosGu4an4bvi4/view?usp=drive_link", // TODO: add real credential link
  },
  {
    title: "Power BI Workshop",
    subtitle: "Office Master",
    description: "Hands-on workshop creating interactive dashboards and data visualization reports.",
    link: "https://drive.google.com/file/d/1XCKXCIHYQyMEQkB0WGrmlBh3ZOYEdEpV/view?usp=drive_link", // TODO: add real credential link
  },
];

export const achievements = [
  {
    title: "Letter of Recommendation",
    subtitle: "Future Interns",
    description: "Recognized for exceptional work ethic, professionalism, and consistently delivering high-quality results throughout the internship.",
    date: "June 2026",
    link: "https://drive.google.com/file/d/1aFRB3346xutD338pW4-mjRbZhNRedkin/view?usp=sharing",
  },
  {
    title: "Advanced Python Learning",
    subtitle: "HackerRank",
    description: "Completed advanced Python learning, demonstrating high proficiency.",
    date: "",
  },
];

export const education = [
  {
    degree: "Bachelor of Technology in Computer Science (Data Science)",
    school: "Sreyas Institute of Engineering and Technology",
    duration: "2023 – 2027",
    detail: `CGPA: ${personal.cgpa}/10`,
  },
  {
    degree: "Intermediate Education — Mathematics, Physics, Chemistry",
    school: "Narayana Junior College",
    duration: "2021 – 2023",
    detail: "Percentage: 94.7%",
  },
  {
    degree: "Primary & Secondary Education (SSC Board)",
    school: "Narayana Concept School",
    duration: "2011 – 2021",
    detail: "Percentage: 100%",
  },
];
