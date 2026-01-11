'use client';

import { motion } from 'framer-motion';
import { Heart, ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Footer() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isClient) {
    return (
      <footer className="relative border-t border-green-500/20">
        <div className="container mx-auto px-6 py-8 relative">
          <div className="text-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} • All rights reserved
            </p>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="relative border-t border-green-500/20">
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      <div className="container mx-auto px-6 py-8 relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-green-400 mb-2">Alex Developer</h3>
            <p className="text-gray-400">Creating digital experiences that inspire</p>
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center text-green-400 hover:bg-green-500/20 transition-colors"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        </div>

        <div className="mt-8 pt-8 border-t border-green-500/10 text-center">
          <p className="text-gray-400">
            Made with <Heart className="inline w-4 h-4 text-red-500 animate-pulse" /> by Alex Developer • © {new Date().getFullYear()} • All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}