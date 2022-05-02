import { Projects } from "../components/Projects";
import { Works } from "../components/Works";
import { IIcons, IProject, IWork } from "./interfaces";

export const SECTIONS = [
  {
    title: "work experience",
    subtitle: "associations i have worked with.",
    child: <Works />,
  },
  {
    title: "projects",
    subtitle: "personal projects I have worked on.",
    child: <Projects />,
  },
];

export const WORK_EXPERIENCES: IWork[] = [
  {
    company_name: "National University of Singapore",
    company_image: "/images/company-logos/nus.png",
    role: "Freelance Full-Stack Developer",
    date_joined: "Feb 2022",
    date_left: "Present",
    details: [
      "• Built a static-generating research portfolio page as well as a Content Management System for NUS Computing researchers to showcase their research.",
    ],
    tech_stack: [
      "Typescript",
      "React",
      "NextJS",
      "ExpressJS",
      "NodeJS",
      "SQLite",
    ],
  },
  {
    company_name: "Google Developer Student Club NUS",
    company_image: "/images/company-logos/gdsc.png",
    role: "Front-End Lead",
    date_joined: "Aug 2021",
    date_left: "Present",
    details: [
      "• Led and built the front-end of a platform for promoting mental well-being for social good",
    ],
    tech_stack: ["Typescript", "React", "Redux", "MaterialUI"],
  },
  {
    company_name: "Binance",
    company_image: "/images/company-logos/binance.png",
    role: "Software Engineer Intern",
    date_joined: "Jan 2022",
    date_left: "Apr 2022",
    details: [
      "• Working on internal chat app to boost the productivity of over 4000 Binancians.",
      "• Smoothened image viewing capabilities by integrating features to zoom,rotate and share images in different chats.",
    ],
    tech_stack: ["Typescript", "React", "Redux", "Electron"],
  },

  {
    company_name: "Shopee",
    company_image: "/images/company-logos/shopee.png",
    role: "Front-End Developer Intern",
    date_joined: "Aug 2021",
    date_left: "Nov 2021",
    details: [
      "• Built Workflow, a ticketing system for Designers similar to the Jira software",
      "• Integrated web application with back-end endpoints to increase productivity and efficiency of over 1000 designers in Shopee.",
    ],
    tech_stack: ["Typescript", "React", "Redux"],
  },
];

export const ICONS_MAP: IIcons[] = [
  {
    name: "React",
    imgLink:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Electron",
    imgLink:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/electron/electron-original.svg",
  },
  {
    name: "Tailwind",
    imgLink:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
  },
  {
    name: "NextJS",
    imgLink:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg",
  },
  {
    name: "SQLite",
    imgLink:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",
  },
  {
    name: "MaterialUI",
    imgLink:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
  },
  {
    name: "Redux",
    imgLink:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
  },
  {
    name: "GraphQL",
    imgLink:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
  },
  {
    name: "Django",
    imgLink:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain-wordmark.svg",
  },
  {
    name: "Flask",
    imgLink:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
  },
  {
    name: "MySQL",
    imgLink:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    name: "PostgreSQL",
    imgLink:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "Typescript",
    imgLink:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "Python",
    imgLink:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "NodeJS",
    imgLink:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg",
  },
  {
    name: "ExpressJS",
    imgLink:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg",
  },
];

export const PROJECTS: IProject[] = [
  {
    project_name: "Mangareader",
    project_detail:
      "A mock manga-reader built using data scraped from multiple online manga reader sources. Scraping done using BeautifulSoup library.",
    project_image: "/images/project-images/mangareader.png",
    start_date: "Apr 2022",
    end_date: "Apr 2022",
    tech_stack: ["Typescript", "React", "Flask", "Python"],
  },
  {
    project_name: "Moave",
    project_detail:
      "A movie-centred social media platform for like-minded individuals to connect over their taste of movies.",
    project_image: "/images/project-images/moave.png",
    start_date: "Aug 2021",
    end_date: "Nov 2021",
    website_link: "https://moave-frontend.herokuapp.com/",
    codebase_link: "https://github.com/soaza/moave",
    tech_stack: [
      "Typescript",
      "React",
      "Redux",
      "NodeJS",
      "ExpressJS",
      "PostgreSQL",
      "Flask",
    ],
  },
  {
    project_name: "NUS Pawfriends Official Website",
    project_detail:
      "Pawfriends is a website built for NUS Pawfriends. Utilised Ant Design UI as the main UI framework, with images hosted on Amazon S3, with ExpressJS and NodeJS as the back-end and PostgresSQL to store data. Also built a Content Management System for non-coders to edit data.",
    project_image: "/images/project-images/pawfriends.png",
    start_date: "May 2021",
    end_date: "July 2021",
    website_link: "https://nuspawfriends.com",
    codebase_link: "https://github.com/soaza/pawfriends",
    tech_stack: ["Typescript", "React", "NodeJS", "ExpressJS", "PostgreSQL"],
  },
];
