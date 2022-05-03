export interface IWork {
  company_name: string;
  company_image: string;
  role: string;
  date_joined: string;
  date_left: string;
  details: string[];
  tech_stack?: string[];
}

export interface IProject {
  project_name: string;
  project_detail: string;
  project_image: string;
  start_date: string;
  end_date: string;
  website_link?: string;
  codebase_link?: string;
  tech_stack: string[];
}

export interface IIcons {
  imgLink: string;
  name: string;
}

export interface IBlog {
  blog_title: string;
  blog_link: string;
  blog_date: string;
  blog_readtime: number;
}
