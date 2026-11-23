import React, { useEffect, useRef, useState } from 'react';

export const TechGridBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);

    const handleMediaChange = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleMediaChange);
    return () => mediaQuery.removeEventListener('change', handleMediaChange);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    // Mouse parallax tracking
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      // Normalized from -1 to 1
      targetMouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      targetMouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Grid configuration
    const GRID_SIZE = 40; // 40px grid cells

    // Pulse traveling along grid lines
    interface GridPulse {
      x: number;
      y: number;
      dx: number;
      dy: number;
      speed: number;
      length: number;
      alpha: number;
      life: number;
      maxLife: number;
    }

    // Floating particles
    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      alpha: number;
      baseAlpha: number;
      isRed: boolean;
    }

    // Glowing intersection nodes
    interface GlowingNode {
      col: number;
      row: number;
      phase: number;
      speed: number;
      maxAlpha: number;
    }

    let pulses: GridPulse[] = [];
    let particles: Particle[] = [];
    let nodes: GlowingNode[] = [];

    // Slow moving soft spotlight
    let spotLightTime = 0;

    const initEntities = (w: number, h: number) => {
      const isMobile = w < 640;
      const isTablet = w >= 640 && w < 1024;

      const particleCount = isMobile ? 12 : isTablet ? 25 : 45;
      const pulseCount = isMobile ? 1 : isTablet ? 3 : 5;
      const nodeCount = isMobile ? 5 : isTablet ? 10 : 18;

      // Init floating particles
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        const isRed = Math.random() < 0.15; // 15% red, 85% muted white/gray
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.15,
          vy: (Math.random() - 0.5) * 0.15,
          radius: Math.random() * 1.2 + 0.6,
          alpha: Math.random() * 0.25 + 0.1,
          baseAlpha: Math.random() * 0.25 + 0.1,
          isRed,
        });
      }

      // Init grid pulses
      const cols = Math.floor(w / GRID_SIZE);
      const rows = Math.floor(h / GRID_SIZE);

      pulses = [];
      for (let i = 0; i < pulseCount; i++) {
        const isHorizontal = Math.random() > 0.5;
        const col = Math.floor(Math.random() * cols);
        const row = Math.floor(Math.random() * rows);
        const dir = Math.random() > 0.5 ? 1 : -1;

        pulses.push({
          x: col * GRID_SIZE,
          y: row * GRID_SIZE,
          dx: isHorizontal ? dir : 0,
          dy: isHorizontal ? 0 : dir,
          speed: (Math.random() * 0.4 + 0.35),
          length: Math.random() * 20 + 15,
          alpha: Math.random() * 0.4 + 0.35,
          life: Math.random() * 300,
          maxLife: 400 + Math.random() * 300,
        });
      }

      // Init glowing nodes
      nodes = [];
      for (let i = 0; i < nodeCount; i++) {
        nodes.push({
          col: Math.floor(Math.random() * cols),
          row: Math.floor(Math.random() * rows),
          phase: Math.random() * Math.PI * 2,
          speed: Math.random() * 0.015 + 0.008,
          maxAlpha: Math.random() * 0.35 + 0.2,
        });
      }
    };

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(dpr, dpr);
      initEntities(width, height);

      if (reducedMotion) {
        drawStaticGrid();
      }
    };

    const drawStaticGrid = () => {
      ctx.fillStyle = '#050505';
      ctx.fillRect(0, 0, width, height);

      // Subtle grid
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.035)';
      ctx.lineWidth = 1;

      ctx.beginPath();
      for (let x = 0; x <= width; x += GRID_SIZE) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
      }
      for (let y = 0; y <= height; y += GRID_SIZE) {
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
      }
      ctx.stroke();

      // Static subtle nodes
      for (let i = 0; i < 10; i++) {
        const x = (i * 7 * GRID_SIZE) % width;
        const y = (i * 5 * GRID_SIZE) % height;
        ctx.fillStyle = 'rgba(226, 29, 47, 0.25)';
        ctx.beginPath();
        ctx.arc(x, y, 1.5, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const render = () => {
      if (reducedMotion) return;

      // Parallax easing
      mouseX += (targetMouseX - mouseX) * 0.04;
      mouseY += (targetMouseY - mouseY) * 0.04;

      const offsetX = mouseX * 8;
      const offsetY = mouseY * 8;

      // 1. Clear with base near-black (#050505)
      ctx.fillStyle = '#050505';
      ctx.fillRect(0, 0, width, height);

      // 2. Soft red light passing slowly through a small area of the grid
      spotLightTime += 0.003;
      const spotX = width * 0.5 + Math.cos(spotLightTime * 0.8) * (width * 0.3) + offsetX * 2;
      const spotY = height * 0.45 + Math.sin(spotLightTime * 0.6) * (height * 0.25) + offsetY * 2;
      const spotRadius = Math.max(width * 0.35, 300);

      const spotGradient = ctx.createRadialGradient(spotX, spotY, 0, spotX, spotY, spotRadius);
      spotGradient.addColorStop(0, 'rgba(226, 29, 47, 0.045)');
      spotGradient.addColorStop(0.5, 'rgba(226, 29, 47, 0.015)');
      spotGradient.addColorStop(1, 'rgba(5, 5, 5, 0)');

      ctx.fillStyle = spotGradient;
      ctx.fillRect(0, 0, width, height);

      // 3. Technical Grid (8% dark-gray contrast, 1px lines)
      ctx.save();
      ctx.translate(offsetX * 0.5, offsetY * 0.5);

      ctx.strokeStyle = 'rgba(255, 255, 255, 0.032)';
      ctx.lineWidth = 1;

      ctx.beginPath();
      // Draw vertical grid lines with subtle bounds margin for parallax
      const startX = -GRID_SIZE;
      const endX = width + GRID_SIZE;
      const startY = -GRID_SIZE;
      const endY = height + GRID_SIZE;

      for (let x = startX; x <= endX; x += GRID_SIZE) {
        ctx.moveTo(x, startY);
        ctx.lineTo(x, endY);
      }
      for (let y = startY; y <= endY; y += GRID_SIZE) {
        ctx.moveTo(startX, y);
        ctx.lineTo(endX, y);
      }
      ctx.stroke();

      // Draw faint crosshair markers at some grid intersections
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.06)';
      ctx.lineWidth = 1;
      const crosshairStep = GRID_SIZE * 4;
      for (let x = 0; x < width; x += crosshairStep) {
        for (let y = 0; y < height; y += crosshairStep) {
          ctx.beginPath();
          ctx.moveTo(x - 3, y);
          ctx.lineTo(x + 3, y);
          ctx.moveTo(x, y - 3);
          ctx.lineTo(x, y + 3);
          ctx.stroke();
        }
      }

      // 4. Subtle red glowing nodes appearing and disappearing at intersections
      for (const node of nodes) {
        node.phase += node.speed;
        const currentAlpha = Math.sin(node.phase) * 0.5 + 0.5; // 0 to 1
        if (currentAlpha > 0.05) {
          const nx = node.col * GRID_SIZE;
          const ny = node.row * GRID_SIZE;
          const alphaVal = currentAlpha * node.maxAlpha;

          // Outer faint halo
          ctx.fillStyle = `rgba(226, 29, 47, ${alphaVal * 0.35})`;
          ctx.beginPath();
          ctx.arc(nx, ny, 4, 0, Math.PI * 2);
          ctx.fill();

          // Inner sharp node
          ctx.fillStyle = `rgba(226, 29, 47, ${alphaVal})`;
          ctx.beginPath();
          ctx.arc(nx, ny, 1.5, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // 5. Small red points occasionally travelling along grid lines
      for (const p of pulses) {
        p.life += 1;
        p.x += p.dx * p.speed;
        p.y += p.dy * p.speed;

        // Pulse fade in & out based on life cycle
        let currentAlpha = p.alpha;
        if (p.life < 40) {
          currentAlpha = (p.life / 40) * p.alpha;
        } else if (p.life > p.maxLife - 60) {
          currentAlpha = Math.max(0, ((p.maxLife - p.life) / 60) * p.alpha);
        }

        if (currentAlpha > 0.01) {
          // Draw head dot
          ctx.fillStyle = `rgba(226, 29, 47, ${currentAlpha})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, 1.8, 0, Math.PI * 2);
          ctx.fill();

          // Draw small trail
          const trailX = p.x - p.dx * p.length;
          const trailY = p.y - p.dy * p.length;

          const lineGrad = ctx.createLinearGradient(trailX, trailY, p.x, p.y);
          lineGrad.addColorStop(0, 'rgba(226, 29, 47, 0)');
          lineGrad.addColorStop(1, `rgba(226, 29, 47, ${currentAlpha * 0.7})`);

          ctx.strokeStyle = lineGrad;
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.moveTo(trailX, trailY);
          ctx.lineTo(p.x, p.y);
          ctx.stroke();
        }

        // Reset pulse when expired or out of bounds
        if (p.life >= p.maxLife || p.x < -100 || p.x > width + 100 || p.y < -100 || p.y > height + 100) {
          const isHorizontal = Math.random() > 0.5;
          const cols = Math.floor(width / GRID_SIZE);
          const rows = Math.floor(height / GRID_SIZE);
          const col = Math.floor(Math.random() * cols);
          const row = Math.floor(Math.random() * rows);
          const dir = Math.random() > 0.5 ? 1 : -1;

          p.x = col * GRID_SIZE;
          p.y = row * GRID_SIZE;
          p.dx = isHorizontal ? dir : 0;
          p.dy = isHorizontal ? 0 : dir;
          p.speed = Math.random() * 0.4 + 0.35;
          p.length = Math.random() * 20 + 15;
          p.alpha = Math.random() * 0.4 + 0.35;
          p.life = 0;
          p.maxLife = 400 + Math.random() * 300;
        }
      }

      ctx.restore();

      // 6. Slow movement of tiny particles drifting across the grid
      for (const pt of particles) {
        pt.x += pt.vx;
        pt.y += pt.vy;

        // Wrap around bounds
        if (pt.x < 0) pt.x = width;
        if (pt.x > width) pt.x = 0;
        if (pt.y < 0) pt.y = height;
        if (pt.y > height) pt.y = 0;

        ctx.fillStyle = pt.isRed
          ? `rgba(226, 29, 47, ${pt.alpha})`
          : `rgba(220, 220, 220, ${pt.alpha * 0.7})`;

        ctx.beginPath();
        ctx.arc(pt.x + offsetX * 0.8, pt.y + offsetY * 0.8, pt.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    window.addEventListener('resize', resize, { passive: true });
    resize();

    if (!reducedMotion) {
      animationFrameId = requestAnimationFrame(render);
    } else {
      drawStaticGrid();
    }

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [reducedMotion]);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
      style={{ backgroundColor: '#050505' }}
    >
      <canvas
        ref={canvasRef}
        className="block w-full h-full"
      />
      {/* Soft vignette overlay to ensure content readability at screen edges */}
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none opacity-40 [background:radial-gradient(ellipse_at_center,transparent_40%,rgba(5,5,5,0.7)_100%)]" />
    </div>
  );
};
