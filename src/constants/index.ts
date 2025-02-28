import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from '../types';

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  redstar,
  orixesTech,
  lalagroup,
  codeCue,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  hajjharamain,
  wilmart,
  domains,
  tripplanerpk,
} from '../assets';

export const navLinks: TNavLink[] = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services: TService[] = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'JavaScript/TypeScript Developer',
    icon: mobile,
  },
  {
    title: 'MERN Developer',
    icon: backend,
  },
  {
    title: 'Firebase Database',
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: 'Web Developer',
    companyName: 'CodeCue Solution',
    icon: codeCue, // Replace with the appropriate icon reference
    iconBg: '#f4f4f4', // You can adjust the background color if needed
    date: 'January 2023 - August 2023',
    points: [
      'Developed and maintained websites and web applications, ensuring optimal performance and user experience.',
      'Designed and implemented intuitive user interfaces that prioritized usability and accessibility.',
      'Collaborated with cross-functional teams, including designers and project managers, to deliver high-quality solutions.',
      'Ensured responsive design and cross-browser compatibility across various platforms and devices.',
      'Participated in code reviews, offering valuable feedback and suggestions to improve code quality.',
    ],
  },
  {
    title: 'React.js Developer',
    companyName: 'Orixes Tech',
    icon: orixesTech, // Replace with the appropriate icon reference
    iconBg: '#E6DEDD', // Adjust the background color if needed
    date: 'May 2023 - December 2023',
    points: [
      'Developed and maintained React.js applications with a focus on performance and scalability.',
      'Worked remotely, collaborating with backend teams to integrate APIs seamlessly into React projects.',
      'Collaborated with designers and backend developers to build cohesive, high-quality web applications.',
      'Contributed to code reviews, ensuring best practices and providing constructive feedback to improve team collaboration.',
      'Optimized front-end performance and ensured smooth user experiences across different devices and browsers.',
    ],
  },
  {
    title: 'React.js/Next.js Developer',
    companyName: 'Lala Group of Companies',
    icon: lalagroup,
    iconBg: '#fff',
    date: 'August 21, 2023 - November 15, 2024',
    points: [
      'Developed and maintained React.js and Next.js applications with a focus on high performance and scalability.',
      'Collaborating with backend teams to integrate APIs and optimize front-end interactions.',
      'Designed and implemented responsive and dynamic user interfaces, ensuring compatibility across various devices and browsers.',
      'Collaborated with cross-functional teams, including designers and backend developers, to deliver seamless and efficient web applications.',
    ],
  },
  {
    title: 'Full Stack (React with Firebase) Developer',
    companyName: 'Redstar Technologies',
    icon: redstar, // Replace with the appropriate icon reference
    iconBg: '#E6DEDD', // Adjust the background color if needed
    date: 'November 18, 2023 - Present',
    points: [
      'Developing and maintaining full-stack web applications using React.js, Firebase, TypeScript, Next.js, and Tailwind CSS.',
      'Collaborating with backend teams to integrate Firebase services, including authentication, Firestore, and Cloud Functions.',
      'Building and optimizing reusable components and libraries using TypeScript and React.',
      'Ensuring cross-browser compatibility and mobile responsiveness across various devices.',
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects: TProject[] = [
  {
    name: 'Wilmart',
    description:
      'E-commerce website for selling pharmacy products, providing an easy and convenient way for users to browse and purchase pharmaceutical items online.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'javascript',
        color: 'purple-text-gradient',
      },
      {
        name: 'php',
        color: 'green-text-gradient',
      },
      {
        name: 'bootstrap',
        color: 'pink-text-gradient',
      },
    ],
    image: wilmart,  // Replace with the appropriate image reference
    sourceCodeLink: 'https://www.wilmart.pk/',  // Replace with the actual source code link
  },
  {
    name: 'Hajj Haramain',
    description:
      'Online booking platform that allows users to book their Hajj pilgrimage, view available packages, and get details on travel arrangements, accommodations, and other services related to Hajj.',
    tags: [
      {
        name: 'typescript',
        color: 'blue-text-gradient',
      },
      {
        name: 'nextjs',
        color: 'green-text-gradient',
      },
      {
        name: 'php',
        color: 'pink-text-gradient',
      },
      {
        name: 'bootstrap',
        color: 'purple-text-gradient',
      },
     
    ],
    image: hajjharamain, // Add your image variable here
    sourceCodeLink: 'https://hajjharamain.com/', // Update with the actual source code link
  },
  {
    name: '3ns Domains',
    description:
      'A platform for buying Web3 domains, Air-trained domains, and managing personalized links, including a Linktree-like feature, to create a unique digital identity.',
    tags: [
      {
        name: 'typescript',
        color: 'blue-text-gradient',
      },
      {
        name: 'nextjs',
        color: 'green-text-gradient',
      },
      {
        name: 'firebase',
        color: 'orange-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'purple-text-gradient',
      },
    ],
    image: domains, // Add your image variable here
    sourceCodeLink: 'https://3ns.domains/', // Provide the live link
  },
  {
    name: 'Tripplanner PK',
    description:
      'A global online booking platform that allows users to book tours, visas, transport, and other travel services worldwide, offering an easy and convenient way to plan and book trips.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'javascript',
        color: 'purple-text-gradient',
      },
      {
        name: 'php',
        color: 'green-text-gradient',
      },
      {
        name: 'bootstrap',
        color: 'pink-text-gradient',
      },
    ],
    image: tripplanerpk, // Add your image variable here
    sourceCodeLink: 'https://www.tripplannerpk.com/', // Provide the live link
  }
  
];

export { services, technologies, experiences, testimonials, projects };
