import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { useI18n } from '../lib/i18n';

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
}

export function ProjectCard({ title, description, techStack, githubUrl, liveUrl }: ProjectCardProps) {
  const { t } = useI18n();
  
  return (
    <motion.div
      whileHover={{ 
        scale: 1.02,
        y: -5
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className="h-full"
    >
      <Card className="h-full hover:shadow-xl transition-all duration-300 hover:border-primary/20">
        <CardHeader>
        <CardTitle className="flex items-center justify-between">
          {title}
          <div className="flex space-x-2">
            <Button variant="ghost" size="icon" asChild title={t.projects.viewCode}>
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
              </a>
            </Button>
            {liveUrl && (
              <Button variant="ghost" size="icon" asChild title={t.projects.liveDemo}>
                <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            )}
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <CardDescription>{description}</CardDescription>
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <Badge key={tech} variant="secondary">{tech}</Badge>
          ))}
        </div>
      </CardContent>
    </Card>
    </motion.div>
  );
}