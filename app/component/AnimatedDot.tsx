"use client";
import { useEffect, useRef } from "react";

const AnimatedDot = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dots: {
      x: number;
      y: number;
      vx: number;
      vy: number;
    }[] = [];

    const numDots = 17;
    const maxSpeed = 2.5;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    for (let i = 0; i < numDots; i++) {
      dots.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
      });
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };
    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      dots.forEach((dot) => {
        const dx = dot.x - mouse.current.x;
        const dy = dot.y - mouse.current.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const influenceRadius = 100;

        if (distance < influenceRadius && distance > 0) {
          const force = (influenceRadius - distance) / influenceRadius;
          const angle = Math.atan2(dy, dx);
          dot.vx += Math.cos(angle) * force * 1.2;
          dot.vy += Math.sin(angle) * force * 1.2;

          // تحديد السرعة القصوى
          const speed = Math.sqrt(dot.vx * dot.vx + dot.vy * dot.vy);
          if (speed > maxSpeed) {
            const ratio = maxSpeed / speed;
            dot.vx *= ratio;
            dot.vy *= ratio;
          }
        }

        dot.x += dot.vx;
        dot.y += dot.vy;

        // Bounce on edges
        if (dot.x < 0 || dot.x > canvas.width) dot.vx *= -1;
        if (dot.y < 0 || dot.y > canvas.height) dot.vy *= -1;

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, 4, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(224, 72, 38, 0.85)";
        ctx.shadowColor = "#e04826";
        ctx.shadowBlur = 25;
        ctx.fill();
        ctx.closePath();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full z-0 pointer-events-none"
    />
  );
};

export default AnimatedDot;
