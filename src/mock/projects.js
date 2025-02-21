import { BACKEND_SKILLS, FRONTEND_SKILLS } from './tech-skills';
import Image1 from '../assets/images/bodyfit.png';
import Image2 from '../assets/images/news.png';
import Image3 from '../assets/images/blog.png';
import Image4 from '../assets/images/chatify.png';

export const PROJECT_CATEGORY = {
  ALL: 'all',
  FULL_STACK: 'full-stack',
  FRONTEND_PROJECT: 'frontend-project',
};

export const TABS = [
  {
    label: 'All',
    value: PROJECT_CATEGORY.ALL,
    icon: 'fluent:tab-desktop-20-regular',
  },
  {
    label: 'Full Stack',
    value: PROJECT_CATEGORY.FULL_STACK,
    icon: 'bx:code-block',
  },
  {
    label: 'Frontend Project',
    value: PROJECT_CATEGORY.FRONTEND_PROJECT,
    icon: 'fluent-mdl2:open-source',
  },
];

const getSkillByLabel = (skills, techLabel) => skills.find(({ label }) => label === techLabel);

export const PROJECTS = [
  {
    imgSrc: Image1.src,
    title: 'BodyFit APP',
    techIcons: [
      getSkillByLabel(FRONTEND_SKILLS, 'HTML'),
      getSkillByLabel(FRONTEND_SKILLS, 'CSS'),
      getSkillByLabel(FRONTEND_SKILLS, 'React.js'),
      getSkillByLabel(FRONTEND_SKILLS, 'Tailwind CSS'),
      getSkillByLabel(BACKEND_SKILLS, 'Node.js'),
    ],
    description:
      'BodyFit App is a fitness guide that provides users with a collection of exercises along with instructional videos to help them perform workouts correctly. It is build with React Js, Tailwind Css.',
    repoLink: 'https://github.com/itsPranjul/May_Project/tree/main/BodyFit',
    sourceLink: 'http://bodyfitbypranjul.netlify.app/',
    category: [PROJECT_CATEGORY.FRONTEND_PROJECT],
  },
  {
    imgSrc: Image2.src,
    title: 'AcoNews - News App',
    techIcons: [
      getSkillByLabel(FRONTEND_SKILLS, 'React.js'),
      getSkillByLabel(FRONTEND_SKILLS, 'CSS'),
      getSkillByLabel(FRONTEND_SKILLS, 'Javascript'),
      getSkillByLabel(FRONTEND_SKILLS, 'Bootstrap'),
    ],
    description:
      'This is a React-based news application that provides users with a categorized news feed and search functionality. It is build with React Js, Bootstrap, Google NewsApi',
    repoLink: 'https://github.com/itsPranjul/news-app?tab=readme-ov-file',
    sourceLink: 'https://news-app-fe41e.web.app/',
    category: [PROJECT_CATEGORY.FRONTEND_PROJECT],
  },

  {
    imgSrc: Image3.src,
    title: 'Blog Application',
    techIcons: [
      getSkillByLabel(FRONTEND_SKILLS, 'React.js'),
      getSkillByLabel(FRONTEND_SKILLS, 'Tailwind CSS'),
      getSkillByLabel(BACKEND_SKILLS, 'Express (Node.js Framework)'),
      getSkillByLabel(BACKEND_SKILLS, 'Node.js'),
      getSkillByLabel(BACKEND_SKILLS, 'Mongodb')
    ],
    description: 'A technical blog platform dedicated to Computer Science topics, providing articles, tutorials, and insights for CS enthusiasts. It is build with React Js, Tailwind Css, Node.js, Express.js and Mongodb',
    repoLink: 'https://github.com/itsPranjul/Mern-blogg',
    sourceLink: 'https://blog-app-xlmf.onrender.com/',
    category: [PROJECT_CATEGORY.FULL_STACK],
  },

  {
    imgSrc: Image4.src,
    title: 'Chatify - Chat Application',
    techIcons: [
      getSkillByLabel(FRONTEND_SKILLS, 'React.js'),
      getSkillByLabel(FRONTEND_SKILLS, 'Tailwind CSS'),
      getSkillByLabel(BACKEND_SKILLS, 'Express (Node.js Framework)'),
      getSkillByLabel(BACKEND_SKILLS, 'Node.js'),
      getSkillByLabel(BACKEND_SKILLS, 'Socket.io'),
    ],
    description: 'This is a real-time chatting application that allows users to communicate seamlessly. The application is built using the MERN stack (MongoDB, Express.js, React.js, Node.js) along with WebSockets (Socket.io) for real-time messaging.',
    repoLink: 'https://github.com/itsPranjul/Chatify',
    sourceLink: 'https://github.com/itsPranjul/Chatify',
    category: [PROJECT_CATEGORY.FULL_STACK],
  }
];
