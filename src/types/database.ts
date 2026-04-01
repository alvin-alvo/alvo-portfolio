export interface Profile {
  name: string;
  alias: string;
  taglines: string[];
  bio: string;
  contact: {
    email: string;
    phone: string;
    location: string;
  };
  socials: {
    github: string;
    linkedin: string;
  };
  languages: string[];
}

export interface Stat {
  label: string;
  value: string;
}

export interface Skills {
  cyber: string[];
  dev: string[];
  design: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  type: string;
  duration: string;
  description: string;
}

export interface Leadership {
  id: string;
  organization: string;
  role: string;
  description: string;
}

export interface Achievement {
  title: string;
  description: string;
}

export interface Education {
  institution: string;
  degree: string;
  duration: string;
  score: string;
}

export interface AlvoDatabase {
  profile: Profile;
  stats: Stat[];
  skills: Skills;
  experience: Experience[];
  projects: Project[];
  leadership: Leadership[];
  achievements: Achievement[];
  education: Education[];
  certifications: string[];
}
