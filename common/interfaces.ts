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
  tech_stack: TTechStack[];
}

type TTechStack =
  | "React"
  | "Electron"
  | "Tailwind"
  | "Supabase"
  | "NextJS"
  | "SQLite"
  | "MaterialUI"
  | "Redux"
  | "GraphQL"
  | "Django"
  | "Flask"
  | "MySQL"
  | "PostgreSQL"
  | "Typescript"
  | "Python"
  | "NodeJS"
  | "ExpressJS";

export interface IIcons {
  imgLink: string;
  name: TTechStack;
}

export interface IBlog {
  blog_title: string;
  blog_link: string;
  blog_date: string;
  blog_readtime: number;
}

export interface ISpotifyRecentlyPlayedTrack {
  track: Track;
  played_at: string;
  context: Context;
}

export interface Context {
  external_urls: ExternalUrls;
  href: string;
  type: string;
  uri: string;
}

export interface ExternalUrls {
  spotify: string;
}

export interface Track {
  album: Album;
  artists: Artist[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: ExternalIDS;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  is_local: boolean;
  name: string;
  popularity: number;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
}

export interface Album {
  album_group: string;
  album_type: string;
  artists: Artist[];
  available_markets: string[];
  external_urls: ExternalUrls;
  href: string;
  id: string;
  images: Image[];
  name: string;
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
  type: string;
  uri: string;
}

export interface Artist {
  external_urls: ExternalUrls;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}

export interface Image {
  height: number;
  url: string;
  width: number;
}

export interface ExternalIDS {
  isrc: string;
}
