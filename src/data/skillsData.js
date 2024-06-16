import { AiFillHtml5, AiFillGithub } from "react-icons/ai";

import { FaCss3Alt, FaNodeJs } from "react-icons/fa";

import {
  DiBootstrap,
  DiReact,
  DiMongodb,
  DiMysql,
  DiPostgresql,
  DiFirebase,
  DiScrum,
  DiTrello,
} from "react-icons/di";
import {
  SiAdonisjs,
  SiExpress,
  SiNumpy,
  SiMicrosoftexcel,
  SiApacheairflow,
  SiApachespark,
  SiApachehadoop,
  SiApachekafka,
  SiDatabricks,
  SiScikitlearn,
  SiPandas,
  SiJupyter,
  SiChartdotjs,
  SiKubernetes,
  SiDocker,
  SiAzuredevops,
  SiAmazonaws,
  SiGooglecloud,
  SiGithubactions,
  SiLinux,
  SiGnubash,
  SiFigma,
  SiTypescript,
  SiJavascript,
  SiMicrosoftazure,
  SiIbmwatson,
  SiHeroku,
  SiVercel,
  SiDigitalocean,
  SiNestjs,
  SiNextdotjs,
  SiPython,
  SiGit,
  SiGrafana,
  SiPrometheus,
  SiPrisma,
  SiPrettier,
  SiEslint,
  SiJest,
} from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";

import { FaShieldDog } from "react-icons/fa6";

export const skillsData = [
  {
    title: "Programming Languages",
    delay: 0.6,
    skills: [
      {
        icon: SiPython,
        alt: "Python",
        title: "Python",
        width: 50,
      },
      {
        icon: SiJavascript,
        alt: "JavaScript",
        title: "JavaScript",
        width: 50,
      },
      {
        icon: SiTypescript,
        alt: "TypeScript",
        title: "TypeScript",
        width: 50,
      },
    ],
  },
  {
    title: "Frontend",
    delay: 0.7,
    skills: [
      {
        icon: AiFillHtml5,
        alt: "HTML5",
        title: "HTML5",
        width: 50,
      },
      {
        icon: FaCss3Alt,
        alt: "CSS3",
        title: "CSS3",
        width: 50,
      },
      {
        icon: DiBootstrap,
        alt: "Bootstrap",
        title: "Bootstrap",
        width: 50,
      },
      {
        icon: DiReact,
        alt: "ReactJS",
        title: "ReactJS",
        width: 50,
      },
      {
        icon: SiFigma,
        alt: "Figma",
        title: "Figma",
        width: 50,
      },
      {
        icon: RiTailwindCssFill,
        alt: "Tailwind CSS",
        title: "Tailwind CSS",
        width: 50,
      },
      {
        icon: SiNextdotjs,
        alt: "NextJS",
        title: "NextJS",
        width: 50,
      },
    ],
  },
  {
    title: "Backend",
    delay: 0.8,
    skills: [
      {
        icon: FaNodeJs,
        alt: "NodeJs",
        title: "NodeJs",
        width: 50,
      },
      {
        icon: SiExpress,
        alt: "Express",
        title: "Express",
        width: 50,
      },
      {
        icon: SiAdonisjs,
        alt: "Adonis",
        title: "Adonis",
        width: 50,
      },
      {
        icon: SiNestjs,
        alt: "NestJS",
        title: "NestJS",
        width: 50,
      },
    ],
  },
  {
    title: "Databases",
    delay: 0.8,
    skills: [
      {
        icon: DiPostgresql,
        alt: "Postgresql",
        title: "Postgresql",
        width: 50,
      },
      {
        icon: DiFirebase,
        alt: "Google Firebase",
        title: "Google Firebase",
        width: 50,
      },
      {
        icon: DiMongodb,
        alt: "Mongodb",
        title: "Mongodb",
        width: 50,
      },
      {
        icon: DiMysql,
        alt: "MySQL",
        title: "MySQL",
        width: 50,
      },
      { icon: SiPrisma, alt: "PrismaORM", title: "PrismaORM", width: 50 },
    ],
  },
  {
    title: "Data Science",
    delay: 0.8,
    skills: [
      {
        icon: SiScikitlearn,
        alt: "Scikit-Learn",
        title: "Scikit-Learn",
        width: 50,
      },
      {
        icon: SiPandas,
        alt: "Pandas",
        title: "Pandas",
        width: 50,
      },
      {
        icon: SiJupyter,
        alt: "Jupyter Notebooks",
        title: "Jupyter Notebooks",
        width: 50,
      },
      {
        icon: SiNumpy,
        alt: "NumPy",
        title: "NumPy",
        width: 50,
      },
      {
        icon: SiChartdotjs,
        alt: "Seaborn",
        title: "Seaborn",
        width: 50,
      },
      {
        icon: SiMicrosoftexcel,
        alt: "Excel",
        title: "Excel",
        width: 50,
      },
    ],
  },

  {
    title: "Data Engineering",
    delay: 0.8,
    skills: [
      {
        icon: SiApachehadoop,
        alt: "Hadoop",
        title: "Hadoop",
        width: 50,
      },
      {
        icon: SiApachespark,
        alt: "Apache Spark",
        title: "Apache Spark",
        width: 50,
      },
      {
        icon: SiApachekafka,
        alt: "Apache Kafka",
        title: "Apache Kafka",
        width: 50,
      },
      {
        icon: SiApacheairflow,
        alt: "Apache Airflow",
        title: "Apache Airflow",
        width: 50,
      },
      {
        icon: SiDatabricks,
        alt: "Databricks",
        title: "Databricks",
        width: 50,
      },
    ],
  },
  {
    title: "Version Control | CI/CD | Automation",
    delay: 0.8,
    skills: [
      {
        icon: AiFillGithub,
        alt: "GitHub",
        title: "GitHub",
        width: 50,
      },
      {
        icon: SiGithubactions,
        alt: "GitHub Actions",
        title: "GitHub Actions",
        width: 50,
      },
      {
        icon: SiGit,
        alt: "Git",
        title: "Git",
        width: 50,
      },
      {
        icon: FaShieldDog,
        alt: "Husky",
        title: "Husky",
        width: 50,
      },
    ],
  },
  {
    title: "Unix OS",
    delay: 0.8,
    skills: [
      {
        icon: SiGnubash,
        alt: "Bash",
        title: "Bash",
        width: 50,
      },
      {
        icon: SiLinux,
        alt: "Linux",
        title: "Linux",
        width: 50,
      },
    ],
  },
  {
    title: "DevOps",
    delay: 0.8,
    skills: [
      {
        icon: SiDocker,
        alt: "Docker",
        title: "Docker",
        width: 50,
      },
      {
        icon: SiKubernetes,
        alt: "Kubernetes",
        title: "Kubernetes",
        width: 50,
      },
      {
        icon: SiAzuredevops,
        alt: "Azure DevOps",
        title: "Azure DevOps",
        width: 50,
      },
    ],
  },
  {
    title: "Cloud",
    delay: 0.8,
    skills: [
      {
        icon: SiMicrosoftazure,
        alt: "Azure",
        title: "Azure",
        width: 50,
      },
      {
        icon: SiAmazonaws,
        alt: "AWS",
        title: "AWS",
        width: 50,
      },
      {
        icon: SiGooglecloud,
        alt: "Google Cloud",
        title: "Google Cloud",
        width: 50,
      },
      {
        icon: SiHeroku,
        alt: "Heroku",
        title: "Heroku",
        width: 50,
      },
      {
        icon: SiDigitalocean,
        alt: "Digital Ocean",
        title: "Digital Ocean",
        width: 50,
      },
      {
        icon: SiIbmwatson,
        alt: "IBM Watson",
        title: "IBM Watson",
        width: 50,
      },
      { icon: SiVercel, alt: "Vercel", title: "Vercel", width: 50, height: 50 },
    ],
  },
  {
    title: "Agile",
    delay: 0.8,
    skills: [
      { icon: DiScrum, alt: "Scrum", title: "Scrum", width: 50 },
      { icon: DiTrello, alt: "Trello", title: "Trello", width: 50 },
    ],
  },
  {
    title: "Observation Tools",
    delay: 0.8,
    skills: [
      { icon: SiGrafana, alt: "Grafana", title: "Grafana", width: 50 },
      { icon: SiPrometheus, alt: "Prometheus", title: "Prometheus", width: 50 },
    ],
  },
  {
    title: "Testing",
    delay: 0.8,
    skills: [{ icon: SiJest, alt: "Jest", title: "Jest", width: 50 }],
  },
  {
    title: "Other",
    delay: 0.8,
    skills: [
      { icon: SiEslint, alt: "ESLint", title: "ESLint", width: 50 },
      { icon: SiPrettier, alt: "Prettier", title: "Prettier", width: 50 },
    ],
  },
];
