import React from "react";
import { GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient blur */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
      <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />

      <div className="container mx-auto px-6 py-24 relative z-10">
        <div className="text-center">
          <div className="mb-8 inline-block">
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.O4aFOvu3koO1SqoSxTnbawHaEK%26pid%3DApi&f=1&ipt=40a5e0f0e7c9cb48303f5f5568cbc16eee44dfb254fc2bd0dc157ba3d20a7a8f&ipo=images"
              alt="Profile"
              className="rounded-full border-4 border-white/10 shadow-xl"
            />
          </div>

          <h1 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
              <span className="text-gray-400 text-5xl">i'm</span> Jay
            </span>
          </h1>

          <h2 className="text-2xl text-gray-300 mb-6">Full Stack Developer</h2>

          <p className="text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed">
            Passionate developer with expertise in creating modern web
            applications. Specializing in React, Node.js, and cloud technologies
            to build scalable solutions.
          </p>

          <div className="flex justify-center gap-6 mb-12">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <GithubIcon className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <LinkedinIcon className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <MailIcon className="w-6 h-6" />
            </a>
          </div>

          <div className="flex justify-center gap-4">
            <a
              href="#contact"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium hover:opacity-90 transition-opacity"
            >
              Contact Me
            </a>
            <a
              href="#projects"
              className="px-6 py-3 rounded-full border border-white/10 text-white font-medium hover:bg-white/5 transition-colors"
            >
              View Projects
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
