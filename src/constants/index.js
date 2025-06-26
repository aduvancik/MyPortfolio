import {
  mobile,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  git,
  firebase,
  beetroot,
  pnu,
  english_platform,
  kodix,
  freelance,
  antd,
  olmx,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "works",
    title: "Work",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Front-End Developer",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Ant-design React",
    icon: antd,
  },
];

const jobs = [
  {
    title: "Front-End Developer",
    company_name: "Freelance",
    icon: freelance,
    iconBg: "#fff",
    date: "2023 - current",
    points: [
      "Implementing and maintaining UI of web applications to ensure an intuitive and engaging user experience.",
      "Good knowledge of writing re-usable and readable code, that other developers can maintain as well",
      "Currently, I am improving my skills in frontend development, also studying unit tests and English.",
    ],
  },
];

const educations = [
  {
    title: "Computer engineer",
    company_name: "Vasyl Stefanyk Precarpathian National University",
    icon: pnu,
    iconBg: "#1D377D",
    date: "Sep 2021 - Jun 2025",
    points: [
      "Bachelor’s Degree",
      "Understanding of principles and core concepts of computer engineering, including digital logic design, computer architecture, embedded systems, and microprocessor technologies.",
      "Familiar with software development practices, programming languages (such as C/C++, Python, and JavaScript), and version control systems like Git.",
      "Basic knowledge of computer networks, operating systems, and database management systems.",
      "Experience with hardware-software integration, debugging, and system-level problem-solving.",
    ],
  },
  {
    title: "Front-End Developer",
    company_name: "Beetroot Academy",
    icon: beetroot,
    iconBg: "#A9053C",
    date: "Feb 2023 - July 2023",
    points: [
      "Certificate",
      "Developing and maintaining web applications using HTML, CSS, Javascript & React.js",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Understanding version control systems like Git - track changes, collaborate with other developers, and manage code repositories. ",
    ],
  },
];

const projects = [
  {
    name: "The online platform for selling animals",
    description:
      "here you can view ads, filter by name, price and category, or log in and post ads yourself, add them to the cart, and correspond with the seller.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindCss",
        color: "pink-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "firestore",
        color: "green-text-gradient",
      },
    ],
    image: olmx,
    project_link: "https://shopchik-3c85d.web.app/",
    source_code_link: "https://github.com/aduvancik/shopchik?tab=readme-ov-file",
  },
  {
    name: "english-platform",
    description:
      "Initiated and configured the project for effective team collaboration (repository structure, base configuration, integration of necessary libraries and services). Developed the frontend part of the projecParticipated in UI planning, implemented key UI components, set up routing and backend integration. Worked in a team following Git best practices (branching, pull requests, code review).",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "React Context",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindCss",
        color: "pink-text-gradient",
      },
    ],
    image: english_platform,
    source_code_link: "https://github.com/aduvancik/english-platform",
  },
  {
    name: "test task in kodix",
    description:
      "Develop a web application with basic functionality for user authentication and post display, following the design provided in Figma. The application should display posts with the ability to view detailed information for each post and support user authentication/registration. User data must be stored in localStorage to verify login status. The design should be implemented as accurately as possible. It is recommended to use Tailwind CSS, Material UI, or other libraries for styling.",
    tags: [
      {
        name: "javascript",
        color: "yellow-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "react-router-dom",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind css",
        color: "blue-text-gradient",
      },
      {
        name: "localStorage",
        color: "green-text-gradient",
      },
    ],
    image: kodix,
    source_code_link: "https://github.com/aduvancik/kodix",
  },
];

export { services, technologies, educations, jobs, projects };
