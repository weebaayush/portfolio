import { useRef, useState } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';
import { cn } from '../../utils/cn';

export const SpotlightCard = ({ children, className }) => {
  const containerRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // 3D Tilt Values
  const x = useSpring(0, { stiffness: 100, damping: 30 });
  const y = useSpring(0, { stiffness: 100, damping: 30 });

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    
    // Spotlight position
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });

    // 3D Tilt calculation
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const rotateX = ((mouseY - height / 2) / height) * -5; // Max 5 degrees
    const rotateY = ((mouseX - width / 2) / width) * 5; // Max 5 degrees
    
    x.set(rotateX);
    y.set(rotateY);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: x,
        rotateY: y,
        transformStyle: "preserve-3d",
      }}
      className={cn(
        "glow-card group relative",
        className
      )}
    >
      {/* Spotlight Effect */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.08), transparent 80%)`,
        }}
      />
      
      {/* 3D Content Wrapper */}
      <div style={{ transform: "translateZ(20px)" }} className="h-full">
        {children}
      </div>
    </motion.div>
  );
};
