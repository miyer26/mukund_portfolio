import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from 'react';

import Image from "next/image";
import { FaGithub } from 'react-icons/fa';

interface Project {
  image: string;
  title: string;
  description: string;
  githubRepo: string;
  demoUrl?: string; // Optional property
}

interface ProjectCardProps {
  project: Project;
}


export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="flex border rounded-lg p-5 bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
      {/* Image container with fixed width */}
      <div className="w-1/5 h-48 flex-none relative rounded-lg overflow-hidden">
        <Image src={project.image} alt={project.title} layout="fill" objectFit="cover" />
      </div>

      {/* Content container with padding */}
      <div className="flex-grow ml-4">
        <h2 className="text-xl font-bold mb-2">{project.title}</h2>
        <p className="text-gray-600 mb-4 text-base leading-relaxed">{project.description}</p>
        <div className="flex items-center">
          {/* GitHub Icon */}
          <a href={project.githubRepo} target="_blank" rel="noopener noreferrer" className="hoverable-icon mr-4">
            <FaGithub className="text-black" size={28} />
          </a>

          {/* Demo Button - conditionally rendered if project.demoUrl is truthy */}
          {project.demoUrl && (
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="text-white bg-blue-500 hover:bg-blue-600 rounded-lg px-4 py-2">
              Demo
            </a>
          )}
        </div>
      </div>
    </div >
  );
};

const Navbar = () => {
  return (
    <header className="bg-gray-900 text-white w-full py-4 absolute top-0">
      <div className="mx-auto flex items-center justify-end h-5 px-10">
        {<nav>
          <ul className="flex gap-10">
            <li><a href="/" className="hover:text-blue-500">Home</a></li>
            <li><a href="/projects" className="hover:text-blue-500">Projects</a></li>
            <li><a href="/skills" className="hover:text-blue-500">Skills</a></li>
          </ul>
        </nav>}
      </div>
    </header>

  );
};

const Footer = () => {
  return (
    < footer className="bg-gray-900 text-white py-4 w-full" >
      <div className="justify-end text-center p-1">
        <p>&copy; {new Date().getFullYear()} Mukund Iyer. All rights reserved.</p>
      </div>
    </footer >
  )
}

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

interface RootLayoutProps {
  children: React.ReactNode;
  showTitle: boolean;
}

export default function RootLayout({ children, showTitle }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        {/* Your head section content */}
      </head>
      <body className={`flex flex-col min-h-screen${inter.className}`}>
        <main className="flex-grow">
          <Navbar />
          <div className="container mx-auto flex flex-col p-4">
            {showTitle && <h1 className="text-3xl font-bold my-8 text-center"></h1>}
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}


