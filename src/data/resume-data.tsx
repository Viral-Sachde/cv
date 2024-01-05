import ConsultlyLogo from "../images/logos/consultly.svg";
import AmbitLogo from "../images/logos/ambit.png";
import BarepapersLogo from "../images/logos/barepapers.svg";
import BimLogo from "../images/logos/bim.png";
import CDGOLogo from "../images/logos/cdgo.png";
import ClevertechLogo from "../images/logos/clevertech.png";
import EvercastLogo from "../images/logos/evercast.svg";
import Howdy from "../images/logos/howdy.png";
import JarockiMeLogo from "../images/logos/jarocki.svg";
import JojoMobileLogo from "../images/logos/jojomobile.png";
import MonitoLogo from "../images/logos/monito.svg";
import MobileVikingsLogo from "../images/logos/mv.png";
import NSNLogo from "../images/logos/nsn.svg";
import ParabolLogo from "../images/logos/parabol.svg";
import TastyCloudLogo from "../images/logos/tastycloud.png";
import YearProgressLogo from "../images/logos/yearprogress.svg";
import Minimal from "../images/logos/minimal.svg";
import Av from "../images/logos/photo.jpg";
import { GitHubIcon } from "../components/icons/GitHubIcon";
import { LinkedInIcon } from "../components/icons/LinkedInIcon";
import { XIcon } from "../components/icons/XIcon";


export const RESUME_DATA = {
  name: "Viral Sachde",
  initials: "VS",
  location: "Vadodara, Gujarat, India",
  locationLink: "https://www.google.com/maps/place/Vadodara,+Gujarat/",
  about:
    "Full Stack Engineer focused on building products with extra attention to details",
  summary:
    "As a Full Stack Engineer, I have successfully taken multiple products from 0 to 1. I lead teams effectively, ensuring an environment where people can do their best work. Currently, I work mostly with TypeScript, React, Node.js, and MongoDB. I am outgoing, dedicated and open-minded. I get across to people and adjust to changes with ease. I am an optimistic guy who will do my best to maintain a level of quality in my work.",
  avatarUrl: Av",
  personalWebsiteUrl: "https://viralsachde.pythonanywhere.com/",
  contact: {
    email: "vsachde74@.com",
    tel: "+91 9484991399",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/Viral-Sachde/",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://in.linkedin.com/in/viral-sachde-18664b24b",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "School of Technology, GSFC University",
      degree: "Bachelor's Degree in Computer Science & Engineering",
      start: "2021",
      end: "2025",
    },
  ],
  work: [
    {
      company: "Anant Soft Computing",
      link: "https://anantsoftcomputing.com",
      badges: [],
      title: "Django Full Stack Developer",
      logo: ParabolLogo,
      start: "Jan 2023",
      end: "Mar 2023",
      description:
        "As a Django Developer, I worked on the development of ASC'swebsite during my month-long internship at Anant SoftComputing, gaining valuable experience in utilizing Djangocomponents and efficient project management. This reinforcedmy passion for building innovative web applications. Technologies: Django, Bootstrap, Tailwind, Django-CMS, MySQL",
    },
    {
      company: "Ananta - The College Fest",
      link: "",
      badges: [],
      title: "Associate Sponsership Head",
      logo: ClevertechLogo,
      start: "Dec 2022",
      end: "Sep 2023",
      description:
        "I was the Associate Sponsorship Head for Ananta, our college'sflagship event. Recently, I have been working on a specialbusiness proposal and have been in touch with variouspotential sponsors.",
    },
    {
      company: "CodeClub GSFCU",
      link: "",
      badges: [],
      title: "Graphics Designer",
      logo: NSNLogo,
      start: "Dec 2021",
      end: "Dec 2022",
      description: "I was part of the code club at my college, where I was on thegraphics team. I have created many posts and posters forInstagram, as well as stories. I have also created special postersfor the comedy factory for Deep Vaidya and Om Bhatt, who wereguests at our college. Technologies: Adobe Photoshop, Figma, Adobe illustrator",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js/Remix",
    "Node.js",
    "Django",
    "Tailwind & Bootstrap",
    "Figma",
    "Adobe Photoshops",
    "HTML & CSS",
    "Team Player",
  ],
  projects: [
    {
      title: "Consultly",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Vite",
        "GraphQL",
        "WebRTC",
      ],
      description: "A platform to build and grow your online business",
      logo: ConsultlyLogo,
      link: {
        label: "consultly.com",
        href: "https://consultly.com/",
      },
    },
    {
      title: "Monito",
      techStack: ["Side Project", "TypeScript", "Next.js", "Browser Extension"],
      description:
        "Browser extension that records everything happening in a web application",
      logo: MonitoLogo,
      link: {
        label: "monito.dev",
        href: "https://monito.dev/",
      },
    },
    {
      title: "Jarocki.me",
      techStack: ["Side Project", "Next.js", "MDX"],
      description:
        "My personal website and blog. Built with Next.js and Notion API",
      logo: JarockiMeLogo,
      link: {
        label: "github.com",
        href: "https://jarocki.me/",
      },
    },
    {
      title: "Minimal",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Minimalist calendars, habit trackers and planners generator",
      logo: Minimal,
      link: {
        label: "useminimal.com",
        href: "https://useminimal.com/",
      },
    },
    {
      title: "Barepapers",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Generates beautiful wallpapers using random shapes and gradients",
      logo: BarepapersLogo,
      link: {
        label: "barepapers.com",
        href: "https://barepapers.com/",
      },
    },
    {
      title: "Year progress",
      techStack: ["Side Project", "TypeScript", "Next.js"],
      description: "Tracks current year progress and displays a countdown",
      logo: YearProgressLogo,
      link: {
        label: "getyearprogress.com",
        href: "https://getyearprogress.com/",
      },
    },
    {
      title: "Parabol",
      techStack: [
        "Full Stack Developer",
        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "The Agile meeting co-pilot that delivers better meetings with less effort",
      logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "https://parabol.co/",
      },
    },
    {
      title: "Evercast",
      techStack: [
        "Lead Frontend Developer",

        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "Creative collaboration platform that combines video conferencing and HD media streaming",
      logo: EvercastLogo,
      link: {
        label: "evercast.us",
        href: "https://www.evercast.us/",
      },
    },
    {
      title: "Mobile Vikings",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application for leading virtual mobile operator in Poland",
      logo: MobileVikingsLogo,
      link: {
        label: "mobilevikings.pl",
        href: "https://mobilevikings.pl/",
      },
    },
    {
      title: "Howdy",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Howdy is a place for you to join communities you care about",
      logo: Howdy,
      link: {
        label: "play.google.com",
        href: "https://howdy.co/",
      },
    },
    {
      title: "Tastycloud",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application for managing and displaying restaurant menus in kiosk mode",
      logo: TastyCloudLogo,
      link: {
        label: "tastycloud.fr",
        href: "https://www.tastycloud.fr/",
      },
    },
    {
      title: "Ambit",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application that helps with sharing your contact details",
      logo: AmbitLogo,
    },
    {
      title: "Bim",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application that helps with booking a table in a restaurants",
      logo: BimLogo,
    },
    {
      title: "Canal Digital GO",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Video streaming mobile application for Canal Digital subscribers",
      logo: CDGOLogo,
    },
  ],
} as const;
