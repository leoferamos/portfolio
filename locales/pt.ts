import { Translation } from '../lib/i18n/types';

export const pt: Translation = {
  hero: {
    greeting: "Oi, eu sou",
    name: "Leonardo Ramos.",
    iAm: "Sou um",
    typing: {
      softwareEngineer: "Engenheiro de Software",
      devopsEnthusiast: "Entusiasta DevOps",
      cloudExplorer: "Explorador Cloud"
    },
    description: "Atualmente focado em expandir minha experiência com tecnologias modernas, transformando ideias em soluções elegantes."
  },
  navigation: {
    home: "Início",
    skills: "Habilidades",
    certifications: "Certificações",
    projects: "Projetos",
    contact: "Contato"
  },
  skills: {
    title: "Tech Stack",
    techStack: "Tech Stack"
  },
  certifications: {
    title: "Certificações",
    verified: "Verificado",
    verify: "Verificar"
  },
  projects: {
    title: "Projetos em Destaque",
    viewProject: "Ver Projeto",
    liveDemo: "Demo Online",
    viewCode: "Ver Código",
    projects: {
      aromaSense: {
        title: "Aroma Sense",
        description: "E-commerce de fragrâncias construído com Gin (Golang). Inclui catálogo de produtos, autenticação de usuários, carrinho de compras e gerenciamento de pedidos, oferecendo uma experiência de compra online rápida e fluida."
      },
      goSocial: {
        title: "Rede Social em Go",
        description: "Rede social desenvolvida em Go (Golang), sem o uso de frameworks. Inspirada em plataformas populares, com autenticação, posts, interações e sistema de usuários, usando apenas as bibliotecas padrão da linguagem."
      },
      cicdPipeline: {
        title: "Pipeline CI/CD com Observabilidade",
        description: "Pipeline CI/CD completo com observabilidade, usando Kubernetes (EKS), GitHub Actions, Docker, Shell, Grafana e Prometheus. Deploy automatizado de aplicação Flask para AWS Cloud com monitoramento em tempo real."
      },
      terraformAws: {
        title: "Terraform AWS EC2 Docker",
        description: "Projeto de Infraestrutura como Código (IaC) utilizando Terraform para provisionar servidor EC2 na AWS e realizar deploy de aplicação Spring Boot containerizada com Docker."
      }
    }
  },
  contact: {
    title: "Vamos Conversar",
    description: "Sempre interessado em discutir oportunidades, projetos de software, ou simplesmente conectar com outros desenvolvedores.",
    emailMe: "Me Envie um Email"
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