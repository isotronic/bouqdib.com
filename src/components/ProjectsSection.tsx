import * as React from "react";
import { FaGithub, FaRegFolder } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";

import AnimatedSection from "./AnimatedSection";

interface Project {
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
}

const projects: Project[] = [
  {
    title: "Portfolio website",
    description:
      "This is my portfolio website, built with React and Tailwind CSS. You're looking at it right now, so feel free to explore.",
    tags: ["TypeScript", "React", "Tailwind CSS"],
    githubUrl: "https://github.com/isotronic/josephbouqdib.com",
  },
  {
    title: "Full-stack blog",
    description:
      "A blog application built with React and Bootstrap, and a backend API running on Node.js with Express and MongoDB.",
    tags: ["React", "Bootstrap", "Express", "MongoDB"],
    githubUrl: "https://github.com/isotronic/react-blog",
  },
  {
    title: "Food Finder App",
    description: "This is a web app that helps users find nearby restaurants based on their preferences and location.",
    tags: ["TypeScript", "React", "Firebase"],
    githubUrl: "https://github.com/isotronic/food-finder-app",
  },
  {
    title: "HTTP/1.1 Server",
    description:
      "A very simple http server written in Python that can serve concurrent connections, save/read a string to/from a file, read headers, echo the body, handle gzip compression.",
    tags: ["Python", "Socket", "Threading"],
    githubUrl: "https://github.com/isotronic/http-server-python",
  },
  {
    title: "Python Shell",
    description:
      "A POSIX-compliant shell that can interpret shell commands, run external programs and has some built-in commands like cd, pwd, echo and type.",
    tags: ["Python"],
    githubUrl: "https://github.com/isotronic/shell-python/",
  },
  {
    title: "Billboard to Spotify Playlist Generator",
    description:
      "This Python script fetches the Billboard Hot 100 chart for a specified date and creates a private Spotify playlist containing the top 100 songs from that date.",
    tags: ["Python", "BeautifulSoup", "Spotipy"],
    githubUrl: "https://github.com/isotronic/top100-music-time-machine",
  },
  {
    title: "Movie Rating and Review",
    description:
      "This Flask web application allows users to rate, review, and manage their favourite movies. Users can also add new movies, which are automatically fetched from The Movie Database (TMDb) using their API.",
    tags: ["Python", "Flask", "Bootstrap", "SQLite"],
    githubUrl: "https://github.com/isotronic/top-10-movies-website",
  },
  {
    title: "Amazon Reviews Fetcher",
    description:
      "This script fetches Amazon reviews for a list of Amazon Standard Identification Numbers (ASINs) using the Oxylabs API and saves them into CSV files.",
    tags: ["Python"],
    githubUrl: "https://github.com/isotronic/data-analysis",
  },
  {
    title: "Eva Schindele",
    description: "Website for Dr. Eva Schindele, a distinguished social scientist and journalist.",
    tags: ["WordPress", "Elementor"],
    liveUrl: "https://eva-schindele.de",
  },
  {
    title: "Bublitz",
    description: "Website for Bublitz gGmbH, an artist and curator initiative that blends art and cultural history.",
    tags: ["WordPress", "SiteOrigin"],
    liveUrl: "https://bublitz.org/en/",
  },
  {
    title: "Norddeutsches Bauleitkontor",
    description:
      "Website for Norddeutsches Bauleitkontor GmbH, a firm specializing in planning, construction management, and supervision.",
    tags: ["WordPress", "Elementor"],
    liveUrl: "https://bauleitkontor.de",
  },
];

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, tags, githubUrl, liveUrl }) => {
  return (
    <div className="rounded-lg bg-slate-800 p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="text-4xl text-green-500">
          <FaRegFolder />
        </div>
        <div className="flex space-x-4 text-xl text-green-500">
          {githubUrl && (
            <a href={githubUrl} target="_blank" rel="noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
          )}
          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noreferrer" aria-label="Live site">
              <FaExternalLinkAlt />
            </a>
          )}
        </div>
      </div>
      <h3 className="mt-4 text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-slate-400">{description}</p>
      <div className="mt-4 flex flex-wrap space-x-2 text-slate-200">
        {tags.map((tag) => (
          <span key={tag} className="text-sm">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

const ProjectsSection: React.FC = () => {
  return (
    <AnimatedSection id="projects" className="mx-auto mt-60 max-w-6xl px-12 py-12 lg:px-0">
      <h2 className="text-center text-3xl font-semibold">Projects</h2>
      <p className="mt-4 text-center text-slate-400">This is a selection of projects I have worked on.</p>
      <div className="mt-12 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </AnimatedSection>
  );
};

export default ProjectsSection;
