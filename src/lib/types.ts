export interface Value {
  emoji: string;
  title: string;
  description: string;
}

export interface Motto {
  text: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  status: "ongoing" | "completed" | "planning";
  tags: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface ContentItem {
  title: string;
  description: string;
  url: string;
  icon: string;
}

export interface WabisabiValue {
  title: string;
  description: string;
}
