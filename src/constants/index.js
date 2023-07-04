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
  nuoma,
  onmu,
  revents,
  campsite,
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
    title: "Web Developer",
    icon: web,
  },
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
];

const jobs = [
  {
    title: "Currently looking for experience as Front-End Developer :)",
    company_name: "",
    iconBg: "#383E56",
    date: "",
    points: [],
  },
];

const educations = [
  {
    title: "Marine Navigation",
    company_name: 'National University "Odesa Maritime Academy"',
    icon: nuoma,
    iconBg: "#0095D7",
    date: "Sep 2018 - June 2022",
    points: [
      "Bachelor degree",
      "Celestial navigation, electronic navigation, radar plotting, and the use of nautical charts.",
      "Understanding international maritime laws and regulations, such as SOLAS, COLREGs.",
      "Knowledge of meteorology and oceanography - assessing weather conditions, understanding currents, and predicting the behavior of the sea.",
      "Familiarized with various communication systems - operating and interpreting data from navigational equipment like GPS, ECDIS, and AIS.",
    ],
  },
  {
    title: "Transportation Logistics",
    company_name: "Odesa National Maritime University",
    icon: onmu,
    iconBg: "#1D377D",
    date: "Sep 2022 - Current",
    points: [
      "Master degree",
      "Understanding of principles and concepts of logistics management, including supply chain management, inventory control, demand forecasting, and logistics network design.",
      "Familiarized with freight forwarding processes, including documentation requirements, customs procedures, and international trade regulations.",
      "Economic aspects of transportation, such as pricing, cost analysis, and financial evaluation of logistics operations. ",
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
  {
    title: "Computer Techologies",
    company_name: "Odesa National Maritime University",
    icon: onmu,
    iconBg: "#1D377D",
    date: "Sep 2023 - Current",
    points: [
      "Master degree",
      "Studying database concepts, data modeling, and SQL (Structured Query Language) for managing and querying databases",
      "Learning software engineering principles and practices, including software development life cycle (SDLC), requirements analysis, software design, testing, and maintenance. ",
      "Gaining knowledge of operating systems, their functionalities, and management, such as process management, memory management, file systems, and security mechanisms.",
    ],
  },
];

const projects = [
  {
    name: "CampSite",
    description:
      "Web-based platform that allows users to search & book campgrounds, where people can be relaxed and surrounded by nature, or users can create their own campgrounds.",
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "expressjs",
        color: "blue-text-gradient",
      },
      {
        name: "ejs",
        color: "orange-text-gradient",
      },
      {
        name: "javascript",
        color: "yellow-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: campsite,
    source_code_link: "https://github.com/ilyalobatch/CampSite",
  },
  {
    name: "Re-vents",
    description:
      "Social Media web application that enables users to search for the upcoming events, join them and also create their own events on which people can attend as well.",
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
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "firestore",
        color: "green-text-gradient",
      },
      {
        name: "semantic-ui-react",
        color: "pink-text-gradient",
      },
    ],
    image: revents,
    source_code_link: "https://github.com/ilyalobatch/Re-vents",
  },
];

export { services, technologies, educations, jobs, projects };
