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
  risex,
  riselogo,
  antd,
  azure,
  csharp,
  mui,
  vue,
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
    title: "QA Engineer",
    icon: web,
  },
  {
    title: "Front-End Engineer",
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
  {
    name: "Azure DevOps",
    icon: azure,
  },
  {
    name: "C#",
    icon: csharp,
  },
  {
    name: "MUI React",
    icon: mui,
  },
  {
    name: "VueJS",
    icon: vue,
  },
];

const jobs = [
  {
    title: "Front-End Engineer",
    company_name: "Rise-X",
    icon: riselogo,
    iconBg: "#fff",
    date: "Aug 2023 - current",
    points: [
      "Implementing and maintaining UI of web applications to ensure an intuitive and engaging user experience.",
      "Maintaining and writing Unit Tests / Automation test to ensure product quality.",
      "Good knowledge of writing re-usable and readable code, that other developers can maintain as well",
      "Currently learning Back-End (C#) in order to become Full-Stack Engineer & DevOps Azure",
    ],
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
    date: "Sep 2022 - Dec 2023",
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
  {
    name: "Rise-X \n(Under development)",
    description:
      "The Rise-X Ecosystem Orchestration Platform (EOP) is a comprehensive multi-party collaborative platform that enables you to build, connect, optimise, and automate every workflow in your business.",
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
        name: "zustand",
        color: "blue-text-gradient",
      },
      {
        name: "C#",
        color: "green-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "java",
        color: "green-text-gradient",
      },
      {
        name: "mui-react",
        color: "pink-text-gradient",
      },
    ],
    image: risex,
    project_link: "https://www.rise-x.io/",
    source_code_link: "https://github.com/ilyalobatch/Re-vents",
  },
];

export { services, technologies, educations, jobs, projects };
