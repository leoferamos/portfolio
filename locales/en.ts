import { Translation } from '../lib/i18n/types';

export const en: Translation = {
  hero: {
    greeting: "Hi, I'm",
    name: "Leonardo Ramos.",
    iAm: "I'm a",
    typing: {
      softwareEngineer: "Software Engineer",
      devopsEnthusiast: "DevOps Enthusiast", 
      cloudExplorer: "Cloud Explorer"
    },
    description: "I'm currently focused on expanding my experience with modern technologies, transforming ideas into elegant solutions."
  },
  navigation: {
    home: "Home",
    skills: "Skills",
    certifications: "Certifications",
    projects: "Projects",
    contact: "Contact"
  },
  skills: {
    title: "Tech Stack",
    techStack: "Tech Stack"
  },
  certifications: {
    title: "Certifications",
    verified: "Verified",
    verify: "Verify"
  },
  projects: {
    title: "Featured Projects",
    viewProject: "View Project",
    liveDemo: "Live Demo",
    viewCode: "View Code",
    projects: {
      aromaSense: {
        title: "Aroma Sense",
        description: "Fragrance e-commerce built with Gin (Golang). Includes product catalog, user authentication, shopping cart, and order management, delivering a fast and smooth online shopping experience."
      },
      goSocial: {
        title: "Go Social Network",
        description: "Social network developed in Go (Golang), without the use of frameworks. Inspired by popular platforms, with authentication, posts, interactions, and a user system, using only the language's standard libraries."
      },
      cicdPipeline: {
        title: "CI/CD Pipeline with Observability",
        description: "Complete CI/CD pipeline with observability, using Kubernetes (EKS), GitHub Actions, Docker, Shell, Grafana and Prometheus. Automated Flask application deployment to AWS Cloud with real-time monitoring."
      },
      terraformAws: {
        title: "Terraform AWS EC2 Docker",
        description: "Infrastructure as Code (IaC) project using Terraform to provision EC2 server on AWS and deploy containerized Spring Boot application with Docker."
      }
    }
  },
  contact: {
    title: "Let's Connect",
    description: "I'm always interested in discussing opportunities, software projects, or just connecting with fellow developers.",
    emailMe: "Email Me"
  },
  footer: {
    copyright: "Leonardo Ramos 2025"
  },
  social: {
    github: "GitHub",
    linkedin: "LinkedIn", 
    email: "Email",
    leetcode: "LeetCode"
  }
};