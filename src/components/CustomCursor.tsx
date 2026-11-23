import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'motion/react';

export const CustomCursor: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Raw mouse coordinates
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smooth springs for outer ring follower
  const springConfig = { damping: 24, stiffness: 260, mass: 0.15 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Only enable on desktop pointer devices with fine control
    const mediaQuery = window.matchMedia('(pointer: fine)');
    if (!mediaQuery.matches) return;

    const onMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === 'BUTTON' ||
          target.tagName === 'A' ||
          target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.closest('button') ||
          target.closest('a') ||
          target.closest('.interactive-hover') ||
          target.getAttribute('role') === 'button')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const onMouseDown = () => setIsClicked(true);
    const onMouseUp = () => setIsClicked(false);
    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Precision Inner Dot (follows exact cursor coordinate instantly) */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 rounded-full bg-[#E21D2F] pointer-events-none shadow-[0_0_10px_#E21D2F] will-change-transform"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isClicked ? 0.6 : isHovered ? 1.5 : 1,
          backgroundColor: isHovered ? '#ff3b4e' : '#E21D2F',
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 400 }}
      />

      {/* Smooth Trailing Outer Ring (perfect round circle with spring physics) */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-[#E21D2F]/50 pointer-events-none will-change-transform aspect-square"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isClicked ? 0.8 : isHovered ? 1.6 : 1,
          borderColor: isHovered ? 'rgba(226, 29, 47, 0.9)' : 'rgba(226, 29, 47, 0.35)',
          backgroundColor: isHovered ? 'rgba(226, 29, 47, 0.08)' : 'rgba(226, 29, 47, 0)',
        }}
        transition={{ type: 'spring', damping: 22, stiffness: 280 }}
      />

      {/* Subtle Glowing Aura */}
      <motion.div
        className="fixed top-0 left-0 w-20 h-20 rounded-full bg-[#E21D2F]/10 blur-xl pointer-events-none will-change-transform"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHovered ? 1.4 : 0.9,
          opacity: isHovered ? 0.6 : 0.25,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 180 }}
      />
    </div>
  );
};

