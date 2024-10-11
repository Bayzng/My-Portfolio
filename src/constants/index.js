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
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web 2 Developer",
    icon: web,
  },
  {
    title: "Fullstack Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Web 3 Developer",
    icon: creator,
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
    name: "TypeScript",
    icon: typescript,
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
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Web 2 Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web 3 Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "I specialize in developing on blockchain platforms like Ethereum, Binance Smart Chain, and Polkadot. My expertise includes creating, deploying, and optimizing smart contracts that power decentralized applications (DApps) and facilitate trustless transactions.",
      "I am well-versed in creating smart contracts that enable decentralized finance applications, reshaping traditional financial services such as lending, borrowing, and trading",
      "My proficiency extends to the creation and implementation of non-fungible tokens (NFTs), revolutionizing digital ownership and provenance.",
      "I contribute to the evolution of governance structures through the development of DAOs.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "In frontend development I possess expertise in crafting visually appealing and responsive user interfaces using HTML, CSS, and JavaScript. ",
      "My backend skills encompass a range of server-side technologies, including Node.js, I design and implement scalable and secure server architectures, ensuring the smooth functioning of applications.",
      "I am adept at working with databases such as MySQL, PostgreSQL, MongoDB, or Firebase.",
      "I design and implement RESTful APIs, enabling seamless communication between the frontend and backend.",
      "I am well-versed in version control systems like Git, facilitating collaborative development with team members.",
      
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful for product, but Adebayo proved me wrong.",
    name: "Aminat Tijani",
    designation: "CFO",
    company: "Acme Co",
    image: "https://www.svgrepo.com/show/384682/account-avatar-profile-user-10.svg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Adebayo does.",
    name: "A. Zeezah",
    designation: "COO",
    company: "DEF Corp",
    image: "https://www.svgrepo.com/show/384680/account-avatar-profile-user-4.svg",
  },
  {
    testimonial:
      "After Adebayo optimized our website, our traffic increased by 50%. We can't thank him enough!",
    name: "Tj Rayhaan",
    
    image: "https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg",
  },
];

const projects = [
  {
    name: "GameSpotter",
    description:
      "A food app is a software application designed to help users discover, order, or prepare food. It typically provides various features and functionalities related to food.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Bayzng",
  },
  {
    name: "Dec. ArtMarketplace",
    description:
      "I am a creative developer in creating a well-organized and visually appealing portfolio, website and application development latest programming languages",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Bayzng",
  },
  {
    name: "Exps. Tracker",
    description:
      "An expense tracker is a tool or application that helps individuals or businesses keep to track of their expenses and manage their finances effectively.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "nextjs",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Bayzng",
  },
];

export { services, technologies, experiences, testimonials, projects };
