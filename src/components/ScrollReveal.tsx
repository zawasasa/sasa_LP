"use client";

import { useEffect, useRef, useState, ReactNode, CSSProperties } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: string;
  duration?: number;
  scale?: number;
  threshold?: number;
  style?: CSSProperties;
  as?: "div" | "span" | "section" | "h1" | "h2" | "h3" | "p";
}

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  distance = "60px",
  duration = 1,
  scale,
  threshold = 0.15,
  style = {},
  as: Tag = "div",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  const getInitialTransform = () => {
    const transforms: string[] = [];
    switch (direction) {
      case "up":
        transforms.push(`translateY(${distance})`);
        break;
      case "down":
        transforms.push(`translateY(-${distance})`);
        break;
      case "left":
        transforms.push(`translateX(${distance})`);
        break;
      case "right":
        transforms.push(`translateX(-${distance})`);
        break;
    }
    if (scale !== undefined) {
      transforms.push(`scale(${scale})`);
    }
    return transforms.join(" ") || "none";
  };

  const combinedStyle: CSSProperties = {
    ...style,
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "none" : getInitialTransform(),
    transition: `opacity ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
    willChange: isVisible ? "auto" : "opacity, transform",
  };

  return (
    <Tag
      ref={ref as React.Ref<any>}
      className={className}
      style={combinedStyle}
    >
      {children}
    </Tag>
  );
}
