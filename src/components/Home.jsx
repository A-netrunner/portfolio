import React, { useState, useEffect } from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Home = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const words = [
    "I am Web Dev",
    "I create amazing websites",
    "I build responsive designs",
    "I love modern technologies",
    "I craft digital experiences"
  ];
  
  const typingSpeed = isDeleting ? 50 : 100;
  const pauseTime = 2000;

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    
    const timer = setTimeout(() => {
      if (!isDeleting && displayedText === currentWord) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && displayedText === "") {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      } else {
        setDisplayedText(prev => 
          isDeleting 
            ? prev.slice(0, -1)
            : currentWord.slice(0, prev.length + 1)
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentWordIndex, words, typingSpeed]);

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient blur */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
      <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />

      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
          {/* Left side - Content */}
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left order-2 lg:order-1">
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span className="text-gray-400 block text-2xl sm:text-3xl lg:text-4xl xl:text-5xl mb-2">Hi, I'm</span>
                <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 text-transparent bg-clip-text">
                  Jay
                </span>
              </h1>

              <div className="h-12 sm:h-16 flex items-center justify-center lg:justify-start">
                <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-gray-300 font-medium">
                  {displayedText}
                  <span className="animate-pulse text-purple-400">|</span>
                </h2>
              </div>

              <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                Passionate developer with expertise in creating modern web
                applications. Specializing in React, Node.js, and cloud technologies
                to build scalable and beautiful user experiences.
              </p>
            </div>

            {/* Social links with enhanced hover effects */}
            <div className="flex gap-4 sm:gap-6 justify-center lg:justify-start">
              <a
                href="https://github.com/A-netrunner"
                className="group p-3 rounded-full border border-gray-700 text-gray-400 hover:border-purple-500 hover:text-purple-400 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/25"
              >
                <Github className="w-5 h-5 sm:w-6 sm:h-6 group-hover:rotate-12 transition-transform duration-300" />
              </a>
              <a
                href="https://www.linkedin.com/in/vijay-kumar-c-3a2a34347?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                className="group p-3 rounded-full border border-gray-700 text-gray-400 hover:border-blue-500 hover:text-blue-400 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25"
              >
                <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 group-hover:rotate-12 transition-transform duration-300" />
              </a>
              <a
                href="mailto:vijaymail131tech@gmail.com"
                className="group p-3 rounded-full border border-gray-700 text-gray-400 hover:border-pink-500 hover:text-pink-400 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-pink-500/25"
              >
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 group-hover:rotate-12 transition-transform duration-300" />
              </a>
            </div>

            {/* Buttons with different hover effects */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="group relative px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
              >
                <span className="relative z-10">Contact Me</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              <a
                href="#projects"
                className="group relative px-6 sm:px-8 py-3 sm:py-4 rounded-full border-2 border-white/10 text-white font-medium overflow-hidden transition-all duration-300 hover:scale-105 hover:border-purple-400"
              >
                <span className="relative z-10 group-hover:text-black transition-colors duration-300">View Projects</span>
                <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </a>
            </div>
          </div>

          {/* Right side - Profile Image */}
          <div className="flex justify-center order-1 lg:order-2">
            <div className="relative group">
              <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity duration-300 animate-pulse" />
              <div className="relative">
                <img
                  src="https://avatars.githubusercontent.com/u/122930406?v=4&size=300"
                  alt="Jay - Front End Developer"
                  className="w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 rounded-full border-4 border-white/10 shadow-2xl object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;