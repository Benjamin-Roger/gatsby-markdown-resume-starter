const REPOSITORY = '';
const FIRST_NAME = 'John';
const LAST_NAME = 'Smith';
const GITHUB_USERNAME = 'John-Smith';
const TWITTER_USERNAME = 'John';
const WHATSAPP_HANDLE = '123456789';
const LINKEDIN_USERNAME = 'j-smith';
const PHONE_NUMBER = '+1 234-567-890';
const ADDRESS = 'Paris, FRANCE';
const EMAIL = 'john.smith@me.com';
const SITE_URL = 'https://resume.johnsmith.com';
const FOOTER_URL = SITE_URL;
const GITHUB_REPO =
  'https://github.com/Benjamin-Roger/gatsby-markdown-resume-starter';
const SEO_DESCRIPTION = `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.`;

const MENU = [
  { content: 'Contact', href: 'about' },
  { content: 'Experiences', href: 'experience' },
  { content: 'Education', href: 'education' },
  { content: 'Skills', href: 'skills' },
  { content: 'Certifications', href: 'certifications' },
  { content: 'Missions and projects', href: 'portfolio' },
];

const COUNTRIES = [
  {
    id: 'uk',
    longName: 'United Kingdom',
    icon: 'uk.svg',
  },
  {
    id: 'fr',
    longName: 'France',
    icon: 'fr.svg',
  },
  {
    id: 'us',
    longName: 'United States of America',
    icon: 'us.svg',
  },
];

const BUSINESS_SKILLS = [
  {
    name: 'English',
    percentage: '100',
  },
  {
    name: 'Spanish',
    percentage: '100',
  },
  {
    name: 'Business Analysis',
    percentage: '95',
  },
  {
    name: 'IT Strategy',
    percentage: '90',
  },
];

const SECTOR_SKILLS = [
  {
    name: 'Finance',
    percentage: '75',
  },
  {
    name: 'Logistics',
    percentage: '75',
  },
  {
    name: 'Public administration',
    percentage: '75',
  },
];

const TECHNICAL_SKILLS = [
  {
    name: 'Javascript',
    iconClass: 'fa-js-square',
    percentage: 80,
  },
  {
    name: 'PHP',
    iconClass: ' fa-php',
    percentage: 80,
  },
  {
    name: 'Python',
    iconClass: ' fa-python',
    percentage: 70,
  },
  {
    name: 'React',
    iconClass: 'fa-react',
    percentage: 80,
  },
  {
    name: 'SASS',
    iconClass: 'fa-sass',
    percentage: 95,
  },
  {
    name: 'Wordpress',
    iconClass: 'fa-wordpress',
    percentage: 95,
  },
];

const TOOLS_AND_FRAMEWORKS = [
  {
    category: 'Front-end',
    technologies: ['React', 'Sass'],
  },
  {
    category: 'Back-end',
    technologies: ['Node.js/Express.js', 'Flask'],
  },
  {
    category: 'CMS',
    technologies: ['Wordpress', 'Prismic', 'Netlify-CMS'],
  },
  {
    category: 'Webserver',
    technologies: ['Apache'],
  },
  {
    category: 'Jamstack',
    technologies: ['Vercel', 'Netlify', 'Gatsby', 'Next.js'],
  },
];

const SKILLS = ['Finance', 'Logistics', 'Private Sector'];

const PORTFOLIO = {
  introParagraphs: [
    `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.`,
    `At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.`,
  ],
  categories: ['Consulting', 'Web development'],
};

const CERTIFICATIONS = [
  {
    name: 'SCRUM PSM-1 - 2020',
    url: 'https://www.scrum.org/',
  },
  {
    name: 'Certification Advanced Google Analytics - 2020',
    url: 'https://analytics.google.com/analytics/academy/',
  },
];

module.exports = {
  siteTitle: `${FIRST_NAME} ${LAST_NAME}`, // <title>
  manifestName: `${FIRST_NAME} ${LAST_NAME} | Online Resume`,
  manifestShortName: 'Resume', // max 12 characters
  manifestStartUrl: '/',
  manifestBackgroundColor: '#663399',
  manifestThemeColor: '#663399',
  manifestDisplay: 'standalone',
  manifestIcon: 'src/assets/images/favicon.png',
  pathPrefix: `/${REPOSITORY}`,
  menu: MENU,
  firstName: FIRST_NAME,
  lastName: LAST_NAME,
  fullName: `${FIRST_NAME} ${LAST_NAME}`,
  seoDescription: SEO_DESCRIPTION,
  // skills
  skills: SKILLS,
  businessSkills: BUSINESS_SKILLS,
  sectorSkills: SECTOR_SKILLS,
  technicalSkills: TECHNICAL_SKILLS,
  // tools & frameworks
  toolsFrameworks: TOOLS_AND_FRAMEWORKS,
  // certifications
  certifications: CERTIFICATIONS,
  // portfolio
  portfolio: PORTFOLIO,
  // social
  socialLinks: [
    {
      icon: 'fa-github-alt',
      name: 'Github',
      url: `https://github.com/${GITHUB_USERNAME}`,
    },
    {
      icon: 'fa-linkedin-in',
      name: 'Linkedin',
      url: `https://linkedin.com/in/${LINKEDIN_USERNAME}`,
    },
    {
      icon: 'fa-twitter',
      name: 'Twitter',
      url: `https://twitter.com/${TWITTER_USERNAME}`,
    },
    {
      icon: 'fa-whatsapp',
      name: 'Whatsapp',
      url: `https://wa.me/${WHATSAPP_HANDLE}`,
    },
  ],
  email: EMAIL,
  phone: PHONE_NUMBER,
  address: ADDRESS,
  siteUrl: SITE_URL,
  footerUrl: FOOTER_URL,
  resumeDownload: {
    url: '',
    title: 'Download my CV',
  },
  gitHubRepo: {
    url: GITHUB_REPO,
    title: 'See this resume code on Github',
  },
  credits: [
    `Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>`,
  ],
  GAtrackingID: 'your Google Analytics tracking Id here',
  countriesArray: COUNTRIES,
};
