import { motion } from 'framer-motion';
import { 
  Github, 
  Mail, 
  ExternalLink
} from 'lucide-react';
import { Header } from './components/Header';
import { SocialSidebar } from './components/SocialSidebar';
import { TypingEffect } from './components/TypingEffect';

import { TechBadge } from './components/TechBadge';
import { ProjectCard } from './components/ProjectCard';
import { Button } from './components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { LanguageSelector } from './components/LanguageSelector';
import { useI18n } from './lib/i18n';

export function AppContent() {
  const { t } = useI18n();

  const skills = {
    techStack: [
      { 
        name: 'Go', 
        logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg',
        realColor: '#00ADD8'
      },
      { 
        name: 'Python', 
        logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
        realColor: '#3776AB'
      },
      { 
        name: 'Java', 
        logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg',
        realColor: '#ED8B00'
      },
      { 
        name: 'React', 
        logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
        realColor: '#61DAFB'
      },
      { 
        name: 'Spring', 
        logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg',
        realColor: '#6DB33F'
      },
      { 
        name: 'Gin', 
        logoUrl: 'https://raw.githubusercontent.com/gin-gonic/logo/master/color.png',
        realColor: '#00ADD8'
      },
      { 
        name: 'FastAPI', 
        logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg',
        realColor: '#009688'
      },
      { 
        name: 'Docker', 
        logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg',
        realColor: '#2496ED'
      },
      { 
        name: 'PostgreSQL', 
        logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
        realColor: '#336791'
      },
      { 
        name: 'MySQL', 
        logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg',
        realColor: '#4479A1'
      },
      { 
        name: 'MongoDB', 
        logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg',
        realColor: '#47A248'
      },
      { 
        name: 'Git', 
        logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
        realColor: '#F05032'
      },
      { 
        name: 'AI/ML', 
        logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg',
        realColor: '#EE4C2C'
      },
      { 
        name: 'Blockchain', 
        logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/solidity/solidity-original.svg',
        realColor: '#363636'
      },
      { 
        name: 'AWS', 
        logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg',
        realColor: '#FF9900'
      },
      { 
        name: 'Linux', 
        logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg',
        realColor: '#FCC624'
      },
      { 
        name: 'Kubernetes', 
        logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg',
        realColor: '#326CE5'
      },
      { 
        name: 'Terraform', 
        logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/terraform/terraform-original.svg',
        realColor: '#623CE4'
      },
      { 
        name: 'Redis', 
        logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg',
        realColor: '#DC382D'
      },
      { 
        name: 'RabbitMQ', 
        logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rabbitmq/rabbitmq-original.svg',
        realColor: '#FF6600'
      },
      { 
        name: 'Postman', 
        logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg',
        realColor: '#FF6C37'
      },
      { 
        name: 'GraphQL', 
        logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg',
        realColor: '#E10098'
      },
      { 
        name: 'Grafana', 
        logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/grafana/grafana-original.svg',
        realColor: '#F46800'
      },
      { 
        name: 'Prometheus', 
        logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prometheus/prometheus-original.svg',
        realColor: '#E6522C'
      }
    ]
  };

  const projects = [
    {
      title: t.projects.projects.aromaSense.title,
      description: t.projects.projects.aromaSense.description,
      techStack: ["Go", "Gin", "PostgreSQL", "Docker", "JWT", "HTML/CSS"],
      githubUrl: "https://github.com/leoferamos/aroma-sense"
    },
    {
      title: t.projects.projects.goSocial.title,
      description: t.projects.projects.goSocial.description,
      techStack: ["Go", "HTML/CSS", "Docker", "MySQL", "Authentication"],
      githubUrl: "https://github.com/leoferamos/go-social"
    },
    {
      title: t.projects.projects.cicdPipeline.title,
      description: t.projects.projects.cicdPipeline.description,
      techStack: ["Kubernetes", "GitHub Actions", "Docker", "AWS", "Grafana", "Prometheus"],
      githubUrl: "https://github.com/leoferamos/ci-cd-pipeline-observability"
    },
    {
      title: t.projects.projects.terraformAws.title,
      description: t.projects.projects.terraformAws.description,
      techStack: ["Terraform", "AWS", "Docker", "Spring Boot", "EC2", "Java"],
      githubUrl: "https://github.com/leoferamos/terraform-aws-ec2-docker"
    }
  ];

  const certifications = [
    {
      title: "AWS Certified Cloud Practitioner",
      code: "CLF-C02",
      issuer: "Amazon Web Services",
      verifyUrl: "https://www.credly.com/badges/a3cc9024-e024-4fbf-9aef-02ef2a2ce1fe"
    },
    {
      title: "GitHub Foundations Certification", 
      code: "GFC",
      issuer: "GitHub",
      verifyUrl: "https://www.credly.com/earner/earned/share/ae40ad4d-db84-4803-8e4d-ba9cebdbee8e"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <SocialSidebar />
      
      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center px-4 pt-16 relative overflow-hidden">
        {/* Adaptive gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-[#14091a] dark:to-[#0a0510]"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p 
              className="text-base text-muted-foreground mb-4 tracking-wide"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {t.hero.greeting}
            </motion.p>
            
            <motion.h1 
              className="text-5xl md:text-7xl lg:text-8xl mb-6 tracking-tight leading-none font-extrabold"
              style={{ fontFamily: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {t.hero.name}
            </motion.h1>
            
            <motion.div 
              className="text-xl md:text-2xl text-muted-foreground mb-6 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {t.hero.iAm} <TypingEffect />
            </motion.div>
            
            <motion.p 
              className="text-base text-muted-foreground leading-relaxed max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {t.hero.description}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl mb-12 text-center">{t.skills.title}</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
              {skills.techStack.map((skill, index) => (
                <TechBadge key={skill.name} {...skill} delay={index} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl mb-12 text-center">{t.certifications.title}</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-card via-card to-muted/30 hover:shadow-xl transition-all duration-300">
                    {/* Gradient background overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Content */}
                    <CardHeader className="relative pb-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-4">
                          {/* Icon with gradient background */}
                          <div className={`
                            relative p-3 rounded-xl transition-all duration-300 group-hover:scale-110
                            ${cert.issuer === 'Amazon Web Services' 
                              ? 'bg-gradient-to-br from-orange-500/20 to-yellow-500/20 group-hover:from-orange-500/30 group-hover:to-yellow-500/30' 
                              : 'bg-gradient-to-br from-gray-700/20 to-gray-900/20 group-hover:from-gray-700/30 group-hover:to-gray-900/30'
                            }
                          `}>
                            {cert.issuer === 'Amazon Web Services' ? (
                              <div className="w-8 h-8 flex items-center justify-center group-hover:scale-105 transition-transform">
                                <img 
                                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" 
                                  alt="AWS Logo" 
                                  className="max-w-full max-h-full object-contain" 
                                />
                              </div>
                            ) : (
                              <Github className="h-8 w-8 text-gray-600 group-hover:text-gray-500 transition-colors" />
                            )}
                            
                            {/* Glow effect */}
                            <div className={`
                              absolute inset-0 rounded-xl blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300
                              ${cert.issuer === 'Amazon Web Services' ? 'bg-orange-500/30' : 'bg-gray-600/30'}
                            `} />
                          </div>
                          
                          <div className="flex-1">
                            <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                              {cert.title}
                            </CardTitle>
                            <CardDescription className="text-sm text-muted-foreground mt-1">
                              {cert.issuer}
                            </CardDescription>
                          </div>
                        </div>
                        
                        {/* Status indicator */}
                        <div className="flex items-center space-x-1">
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                          <span className="text-xs text-green-600 dark:text-green-400">{t.certifications.verified}</span>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="relative pt-0">
                      <div className="flex items-center justify-between">
                        <Badge 
                          variant="outline" 
                          className={`
                            transition-all duration-300 border-2 group-hover:scale-105
                            ${cert.issuer === 'Amazon Web Services' 
                              ? 'border-orange-500/30 text-orange-600 dark:text-orange-400 bg-orange-500/5 group-hover:border-orange-500/50 group-hover:bg-orange-500/10' 
                              : 'border-gray-500/30 text-gray-600 dark:text-gray-400 bg-gray-500/5 group-hover:border-gray-500/50 group-hover:bg-gray-500/10'
                            }
                          `}
                        >
                          {cert.code}
                        </Badge>
                        
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          asChild
                          className="group-hover:bg-primary/10 group-hover:text-primary transition-all duration-300"
                        >
                          <a href={cert.verifyUrl} target="_blank" rel="noopener noreferrer">
                            {t.certifications.verify} <ExternalLink className="h-3 w-3 ml-1 group-hover:translate-x-0.5 transition-transform" />
                          </a>
                        </Button>
                      </div>
                      
                      {/* Decorative bottom line */}
                      <div className={`
                        mt-4 h-1 rounded-full transition-all duration-500 group-hover:scale-x-100 scale-x-0 origin-left
                        ${cert.issuer === 'Amazon Web Services' 
                          ? 'bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-600' 
                          : 'bg-gradient-to-r from-gray-600 via-gray-500 to-gray-700'
                        }
                      `} />
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl mb-12 text-center">{t.projects.title}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <motion.div
                  key={`${project.title}-${t.projects.title}`}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  viewport={{ once: true }}
                >
                  <ProjectCard {...project} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl mb-8">{t.contact.title}</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              {t.contact.description}
            </p>
            
            <div className="flex justify-center">
              <Button size="lg" asChild>
                <a href="mailto:fernandesramosleonardo@gmail.com">
                  <Mail className="h-5 w-5 mr-2" />
                  {t.contact.emailMe}
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>{t.footer.copyright}</p>
        </div>
      </footer>

      {/* Language Selector - Fixed Bottom Right */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ 
          delay: 1.5,
          type: "spring", 
          stiffness: 400, 
          damping: 17 
        }}
        whileHover={{ scale: 1.1 }}
      >
        <div className="bg-background/80 backdrop-blur-md border border-border/50 rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-300">
          <LanguageSelector />
        </div>
      </motion.div>
    </div>
  );
}