export type Language = 'en' | 'pt';

export interface Translation {
  hero: {
    greeting: string;
    name: string;
    iAm: string;
    typing: {
      softwareEngineer: string;
      devopsEnthusiast: string;
      cloudExplorer: string;
    };
    description: string;
  };
  navigation: {
    home: string;
    skills: string;
    certifications: string;
    projects: string;
    contact: string;
  };
  skills: {
    title: string;
    techStack: string;
  };
  certifications: {
    title: string;
    verified: string;
    verify: string;
  };
  projects: {
    title: string;
    viewProject: string;
    liveDemo: string;
    viewCode: string;
    projects: {
      aromaSense: {
        title: string;
        description: string;
      };
      goSocial: {
        title: string;
        description: string;
      };
      cicdPipeline: {
        title: string;
        description: string;
      };
      terraformAws: {
        title: string;
        description: string;
      };
    };
  };
  contact: {
    title: string;
    description: string;
    emailMe: string;
  };
  footer: {
    copyright: string;
  };
  social: {
    github: string;
    linkedin: string;
    email: string;
    leetcode: string;
  };
}