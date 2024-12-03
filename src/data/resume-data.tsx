import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Mustafa Eray Keskin",
  initials: "MEK",
  location: "Ankara, Turkey",
  locationLink: "https://www.google.com/maps/place/Ankara",
  about:
    "Detail-oriented Full Stack Engineer dedicated to building high-quality products.",
  summary:
    "Full Stack Developer specializing in scalable web applications with TypeScript, React, and Node.js. Passionate about implementing AI solutions and modern technologies to create impactful digital products with exceptional user experiences.",
  // avatarUrl: "https://avatars.githubusercontent.com/u/63066081?v=4",
  personalWebsiteUrl: "https://www.eraykeskin.dev",
  contact: {
    email: "eraykeskinmac@gmail.com",
    tel: "+905357915877",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/eraykeskinmac",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/eraykeskinmac/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/eraykeskinmac",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Atatürk University",
      degree:
        "Associate's Degree in Computer Programming,  Faculty of Open and Distance Education",
      start: "2024",
      end: "Present",
    },
  ],
  work: [
    {
      company: "OPLOG",
      link: "https://oplog.io",
      badges: ["Ankara, Turkey", "Remote"],
      title: "Software Developer",
      logo: ConsultlyLogo,
      start: "2022",
      end: null,
      description:
        "Specializing in internal tool development and process automation while leading OPLOG's digital presence transformation. Successfully managed and executed the complete migration of oplog.io from HubSpot to a modern tech stack (Typescript, Next.js, Prismic CMS, TailwindCSS), resulting in significant SEO improvements and performance optimization. Led key projects including AI-powered customer support analysis, call center integration with automated transcription, and enterprise-wide personnel management systems. Developed various enterprise solutions using React, TypeScript, and modern AI technologies while maintaining focus on scalability and user experience.",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js/Remix",
    "Node.js",
    "GraphQL",
    "PostgreSQL",
    "Prisma",
  ],
  projects: [
    {
      title: "Page Form",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "PostgreSQL",
        "Prisma",
      ],
      description:
        "A dynamic form builder with drag-and-drop interface and Prisma-backed management.",
      logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "https://page-form-iota.vercel.app/",
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
        "Personal website and blog. Built with Next.js and Notion API",
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
        "Minimalist calendars, habit trackers, and planners generator",
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
      description: "Howdy is a place for joining communities you care about",
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
