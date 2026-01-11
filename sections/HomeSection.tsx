'use client';

import { motion } from 'framer-motion';
import { ChevronDown, Mouse, Github, Linkedin, Twitter } from 'lucide-react';
import { useState, useCallback } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';

// Dynamically import heavy components
const Typewriter = dynamic(
  () => import('typewriter-effect'),
  { 
    ssr: false,
    loading: () => <div className="h-16" />
  }
);

// Constants
const ANIMATION_DELAYS = {
  PHOTO: 0.2,
  NAME: 0.4,
  LEFT_CONTENT: 0.6,
  RIGHT_CONTENT: 0.8,
  SCROLL_BUTTON: 2.5
} as const;

const IMAGE_SIZES = {
  MOBILE: 192,
  TABLET: 224,
  DESKTOP: 256
} as const;

const SOCIAL_LINKS = {
  GITHUB: 'https://github.com/jorrythegreat',
  LINKEDIN: 'https://linkedin.com/in/yourusername',
  TWITTER: 'https://twitter.com/yourusername',
} as const;

const SOCIAL_ICONS = [
  { Icon: Github, href: SOCIAL_LINKS.GITHUB, label: 'GitHub' },
  { Icon: Linkedin, href: SOCIAL_LINKS.LINKEDIN, label: 'LinkedIn' },
  { Icon: Twitter, href: SOCIAL_LINKS.TWITTER, label: 'Twitter' },
];

const ROLES = [
  'Full Stack Developer',
  'React Developer',
  'Next.js Developer',
  
];

// Utility function for smooth scrolling
const scrollToSection = (sectionId: string, offset = 80): void => {
  if (typeof window === 'undefined') return;

  const element = document.getElementById(sectionId);
  if (!element) return;

  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
};

// Sub-components
const ProfileImage = () => {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="relative group">
      <div className="relative w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden border-2 border-white/20 clean-glass">
        {!imageError ? (
          <>
            <Image
              src="/img/profile.jpg"
              alt="Joshua Carlos Gonzales"
              fill
              className={`object-cover transition-opacity duration-300 ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              priority
              sizes={`
                (max-width: 768px) ${IMAGE_SIZES.MOBILE}px,
                (max-width: 1024px) ${IMAGE_SIZES.TABLET}px,
                ${IMAGE_SIZES.DESKTOP}px
              `}
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageError(true)}
            />
            {!imageLoaded && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              </div>
            )}
          </>
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-700 flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">JC</div>
              <p className="text-gray-300 font-mono text-sm">Developer</p>
            </div>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="absolute inset-0 rounded-full border border-white/10 group-hover:border-white/20 transition-all duration-300 -m-1" />
    </div>
  );
};

const RoleTypewriter = () => (
  <div className="text-lg md:text-xl lg:text-2xl h-10 font-mono text-gray-300 text-center">
    <Typewriter
      options={{
        strings: ROLES,
        autoStart: true,
        loop: true,
        deleteSpeed: 30,
        delay: 70,
        wrapperClassName: 'typewriter-role',
        cursorClassName: 'typewriter-cursor-role'
      }}
    />
  </div>
);

const SocialLinks = () => (
  <div className="flex gap-5">
    {SOCIAL_ICONS.map(({ Icon, href, label }) => (
      <motion.a
        key={label}
        whileHover={{ scale: 1.1, y: -3 }}
        whileTap={{ scale: 0.95 }}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 rounded-full clean-glass flex items-center justify-center text-white hover:text-gray-300 transition-colors"
        aria-label={`Visit my ${label}`}
      >
        <Icon className="w-4 h-4" />
      </motion.a>
    ))}
  </div>
);


export default function HomeSection() {
  const handleViewWork = useCallback(() => {
    scrollToSection('projects', 80);
  }, []);

  return (
    <section
      id="home"
      className="pt-16 pb-12 px-4 min-h-[80vh] flex items-center relative"
      aria-label="Home Section"
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
          {/* Left Column - Everything centered */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: ANIMATION_DELAYS.LEFT_CONTENT }}
            className="lg:w-2/5 flex flex-col items-center"
          >
            {/* Profile Image - Centered */}
            <div className="mb-8">
              <ProfileImage />
            </div>

            {/* Name - Centered */}
            <div className="mb-6 text-center">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 text-white">
                Hi, I'm 
              </h1>
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                Joshua Carlos Gonzales
              </div>
            </div>

            {/* Role Typewriter - Centered */}
            <div className="w-full flex justify-center">
              <RoleTypewriter />
            </div>
          </motion.div>

          {/* Right Column - Description, Buttons, Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: ANIMATION_DELAYS.RIGHT_CONTENT }}
            className="lg:w-4/6 flex flex-col justify-start lg:mt-25"
          >
            {/* Description */}
            <p className="text-lg md:text-xl text-gray-200 mb-9 leading-relaxed">
              Crafting clean, efficient digital experiences with modern technologies.
              Specializing in web applications, and scalable solutions.
              Passionate about creating intuitive user interfaces and robust backend systems.
            </p>

            {/* Additional Description */}
            <p className="text-base text-gray-400 mb-10 leading-relaxed">
              With expertise in React, Next.js, Node.js, and modern web technologies,
              I transform complex problems into simple, beautiful, and intuitive designs.
              Let's build something amazing together!
            </p>

            {/* Action Buttons and Social Links - Side by side */}
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 mb-8">
              {/* Left side - Buttons */}
              <div className="flex flex-wrap gap-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleViewWork}
                  className="clean-button flex items-center gap-2 px-6 py-3"
                  aria-label="View my projects"
                >
                  View My Work
                </motion.button>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#contact"
                  className="px-6 py-3 border border-white/20 text-white rounded font-medium hover:bg-white/10 transition-colors duration-300 flex items-center gap-2 clean-link"
                  aria-label="Get in touch"
                >
                  Get In Touch
                </motion.a>
              </div>

              {/* Right side - Social Links with title */}
              <div className="lg:ml-8 lg:pl-8 lg:border-l lg:border-white/20">
                <h3 className="text-white font-medium mb-4">Connect with me</h3>
                <SocialLinks />
              </div>
            </div>
          </motion.div>
        </div>
      </div>


      <style jsx>{`
        .typewriter-role {
          display: inline-block;
        }
        .typewriter-cursor-role {
          color: #9ca3af;
          animation: blink 1s infinite;
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </section>
  );
}