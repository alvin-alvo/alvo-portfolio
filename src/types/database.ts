export interface Profile {
  name: string;
  alias: string;
  taglines: string[];
  bio: string;
}

export interface Stat {
  label: string;
  value: string;
}

export interface Skills {
  cyber: string[];
  dev: string[];
}

export interface Project {
  title: string;
  role: string;
  description: string;
  tech: string[];
}

export interface AlvoDatabase {
  profile: Profile;
  stats: Stat[];
  skills: Skills;
  projects: Project[];
}
