'use client';

import { useEffect, useState, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  type: 'small' | 'medium' | 'large' | 'giant';
  twinkleSpeed: number;
}

interface Meteor {
  id: number;
  x: number;
  y: number;
  speed: number;
  length: number;
  direction: number;
  brightness: number;
}

interface Constellation {
  id: number;
  points: Array<{x: number, y: number}>;
  lines: Array<{from: number; to: number}>;
  brightness: number;
}

export default function ConstellationBackground() {
  const [stars, setStars] = useState<Star[]>([]);
  const [meteors, setMeteors] = useState<Meteor[]>([]);
  const [constellations, setConstellations] = useState<Constellation[]>([]);
  const animationRef = useRef<number>(0);
  const nextId = useRef(0);

  // Initialize celestial bodies
  useEffect(() => {
    // Generate random stars
    const newStars: Star[] = Array.from({ length: 150 }, () => {
      const size = Math.random();
      let type: 'small' | 'medium' | 'large' | 'giant' = 'small';
      if (size > 0.85) type = 'giant';
      else if (size > 0.7) type = 'large';
      else if (size > 0.3) type = 'medium';
      
      return {
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: type === 'giant' ? 3 : type === 'large' ? 2 : type === 'medium' ? 1.2 : 0.8,
        opacity: type === 'giant' ? 0.9 + Math.random() * 0.1 :
                type === 'large' ? 0.7 + Math.random() * 0.2 :
                type === 'medium' ? 0.5 + Math.random() * 0.2 :
                0.3 + Math.random() * 0.2,
        type,
        twinkleSpeed: 0.3 + Math.random() * 1
      };
    });
    
    // Generate different constellation patterns with VALID indexes
    const constellationsData: Constellation[] = [
      // Pattern 1: Square (4 points, 4 lines)
      {
        id: nextId.current++,
        points: [
          {x: 20, y: 20}, {x: 20, y: 40}, {x: 40, y: 40}, {x: 40, y: 20}
        ],
        lines: [
          {from: 0, to: 1}, {from: 1, to: 2}, {from: 2, to: 3}, {from: 3, to: 0}
        ],
        brightness: 0.25
      },
      // Pattern 2: Triangle (3 points, 3 lines)
      {
        id: nextId.current++,
        points: [
          {x: 60, y: 20}, {x: 50, y: 40}, {x: 70, y: 40}
        ],
        lines: [
          {from: 0, to: 1}, {from: 1, to: 2}, {from: 2, to: 0}
        ],
        brightness: 0.22
      },
      // Pattern 3: Hexagon (6 points, 6 lines)
      {
        id: nextId.current++,
        points: [
          {x: 30, y: 70}, {x: 40, y: 65}, {x: 50, y: 70},
          {x: 50, y: 80}, {x: 40, y: 85}, {x: 30, y: 80}
        ],
        lines: [
          {from: 0, to: 1}, {from: 1, to: 2}, {from: 2, to: 3},
          {from: 3, to: 4}, {from: 4, to: 5}, {from: 5, to: 0}
        ],
        brightness: 0.28
      },
      // Pattern 4: Arrow (5 points, 4 lines)
      {
        id: nextId.current++,
        points: [
          {x: 70, y: 70}, {x: 80, y: 70}, {x: 85, y: 75},
          {x: 80, y: 80}, {x: 70, y: 80}
        ],
        lines: [
          {from: 0, to: 1}, {from: 1, to: 2}, {from: 2, to: 3}, {from: 3, to: 4}
        ],
        brightness: 0.24
      },
      // Pattern 5: Simple line (3 points, 2 lines)
      {
        id: nextId.current++,
        points: [
          {x: 10, y: 50}, {x: 20, y: 55}, {x: 30, y: 50}
        ],
        lines: [
          {from: 0, to: 1}, {from: 1, to: 2}
        ],
        brightness: 0.2
      }
    ];
    
    // Generate initial meteors
    const initialMeteors: Meteor[] = Array.from({ length: 4 }, (_, i) => ({
      id: nextId.current++,
      x: Math.random() * 100,
      y: Math.random() * 100,
      speed: 0.2 + Math.random() * 0.3,
      length: 20 + Math.random() * 25,
      direction: 30 + Math.random() * 30,
      brightness: 0.7 + Math.random() * 0.3
    }));
    
    setStars(newStars);
    setConstellations(constellationsData);
    setMeteors(initialMeteors);
  }, []);

  // Animation loop
  useEffect(() => {
    const animate = () => {
      const now = Date.now();
      
      // Twinkle stars
      setStars(prev => prev.map(star => {
        const twinkle = Math.sin(now * 0.001 * star.twinkleSpeed) * 0.2 + 0.8;
        const newOpacity = Math.max(
          star.type === 'giant' ? 0.7 : star.type === 'large' ? 0.5 : 0.3,
          Math.min(1, star.opacity * twinkle)
        );
        return {
          ...star,
          opacity: newOpacity
        };
      }));
      
      // Move meteors
      setMeteors(prev => prev.map(meteor => ({
        ...meteor,
        x: meteor.x + meteor.speed * Math.cos(meteor.direction * Math.PI / 180),
        y: meteor.y + meteor.speed * Math.sin(meteor.direction * Math.PI / 180)
      })).filter(meteor => 
        meteor.x > -20 && meteor.x < 120 && meteor.y > -20 && meteor.y < 120
      ));
      
      // Add new meteors occasionally
      if (Math.random() > 0.97 && meteors.length < 6) {
        const newMeteor: Meteor = {
          id: nextId.current++,
          x: Math.random() * 100,
          y: Math.random() * 100,
          speed: 0.2 + Math.random() * 0.3,
          length: 20 + Math.random() * 25,
          direction: 30 + Math.random() * 30,
          brightness: 0.7 + Math.random() * 0.3
        };
        setMeteors(prev => [...prev, newMeteor]);
      }
      
      // Pulse constellations
      setConstellations(prev => prev.map(constellation => ({
        ...constellation,
        brightness: 0.2 + Math.sin(now * 0.001 + constellation.id) * 0.05
      })));
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animationRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [meteors.length]);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-950 to-black" />
      
      {/* Subtle glow effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-[0.02] blur-3xl bg-blue-500/10" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full opacity-[0.015] blur-3xl bg-purple-500/10" />
      </div>
      
      {/* Stars */}
      <div className="absolute inset-0">
        {stars.map((star, index) => (
          <div
            key={index}
            className="absolute rounded-full transition-opacity duration-700"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              background: 'white',
              opacity: star.opacity,
              transform: 'translate(-50%, -50%)',
              boxShadow: star.type === 'giant' 
                ? '0 0 8px rgba(255, 255, 255, 0.7)' 
                : star.type === 'large'
                ? '0 0 6px rgba(255, 255, 255, 0.5)'
                : star.type === 'medium'
                ? '0 0 3px rgba(255, 255, 255, 0.3)'
                : 'none'
            }}
          />
        ))}
      </div>
      
      {/* Constellation Lines - WITH SAFETY CHECK */}
      {constellations.map(constellation => (
        <div key={constellation.id} className="absolute inset-0">
          {/* Draw lines - Only if both points exist */}
          {constellation.lines
            .filter(line => 
              line.from < constellation.points.length && 
              line.to < constellation.points.length
            )
            .map((line, idx) => {
              const from = constellation.points[line.from];
              const to = constellation.points[line.to];
              
              // Safety check
              if (!from || !to) return null;
              
              const dx = to.x - from.x;
              const dy = to.y - from.y;
              const length = Math.sqrt(dx * dx + dy * dy);
              const angle = Math.atan2(dy, dx) * 180 / Math.PI;
              
              return (
                <div
                  key={idx}
                  className="absolute transition-opacity duration-700"
                  style={{
                    left: `${from.x}%`,
                    top: `${from.y}%`,
                    width: `${length}vw`,
                    height: '1px',
                    background: `linear-gradient(90deg, 
                      rgba(96, 165, 250, ${constellation.brightness * 0.8}), 
                      rgba(147, 197, 253, ${constellation.brightness * 1.2}) 50%,
                      rgba(96, 165, 250, ${constellation.brightness * 0.8})
                    )`,
                    transform: `rotate(${angle}deg)`,
                    transformOrigin: '0 0',
                    opacity: 0.8
                  }}
                />
              );
            })}
          
          {/* Constellation Points */}
          {constellation.points.map((point, idx) => (
            <div
              key={idx}
              className="absolute rounded-full transition-opacity duration-700"
              style={{
                left: `${point.x}%`,
                top: `${point.y}%`,
                width: '4px',
                height: '4px',
                background: 'radial-gradient(circle, #60a5fa, #93c5fd, white)',
                transform: 'translate(-50%, -50%)',
                opacity: constellation.brightness * 1.5,
                boxShadow: '0 0 4px rgba(96, 165, 250, 0.5)'
              }}
            />
          ))}
        </div>
      ))}
      
      {/* Meteors */}
      {meteors.map(meteor => (
        <div
          key={meteor.id}
          className="absolute"
          style={{
            left: `${meteor.x}%`,
            top: `${meteor.y}%`,
            transform: `translate(-50%, -50%) rotate(${meteor.direction}deg)`
          }}
        >
          {/* Meteor head */}
          <div
            className="absolute w-2 h-2 rounded-full bg-white"
            style={{
              opacity: meteor.brightness,
              boxShadow: '0 0 6px rgba(255, 255, 255, 0.8)'
            }}
          />
          
          {/* Meteor trail */}
          <div
            className="absolute"
            style={{
              left: '0',
              top: '50%',
              width: `${meteor.length}px`,
              height: '1px',
              background: `linear-gradient(90deg, 
                rgba(255, 255, 255, ${meteor.brightness * 0.7}), 
                rgba(96, 165, 250, ${meteor.brightness * 0.4}) 50%, 
                transparent
              )`,
              transform: 'translateY(-50%)'
            }}
          />
        </div>
      ))}
      
      {/* Shooting stars */}
      <div className="absolute inset-0">
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className="absolute"
            style={{
              left: `${10 + index * 30}%`,
              top: `${20 + index * 20}%`,
              width: '1px',
              height: '1px',
              background: '#ffffff',
              opacity: 0,
              animation: `shootingStar ${5 + index}s linear infinite`,
              animationDelay: `${index * 2}s`
            }}
          >
            <div
              className="absolute"
              style={{
                left: '0',
                top: '0',
                width: '40px',
                height: '1px',
                background: 'linear-gradient(90deg, transparent, #ffffff, #60a5fa, transparent)',
                transform: `rotate(${45 + index * 15}deg)`,
                transformOrigin: '0 0'
              }}
            />
          </div>
        ))}
      </div>
      
      {/* CSS Animations */}
      <style jsx>{`
        @keyframes shootingStar {
          0% {
            transform: translate(0, 0);
            opacity: 0;
          }
          10% {
            opacity: 0.8;
          }
          90% {
            opacity: 0.8;
          }
          100% {
            transform: translate(100px, 100px);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}