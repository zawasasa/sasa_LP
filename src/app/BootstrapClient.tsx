"use client";

import { useEffect } from "react";

export default function BootstrapClient() {
  useEffect(() => {
    // Enable scrollspy on the main body for navbar highlights
    const activate = () => {
      if (typeof window === 'undefined' || typeof document === 'undefined') return;
      const el = document.body;
      const bs = (window as unknown as { bootstrap?: any }).bootstrap;
      if (!bs || !el) return;
      try {
        const inst = bs.ScrollSpy.getInstance(el);
        inst?.dispose?.();
      } catch {}
      new bs.ScrollSpy(el, { target: '#navbarNav', offset: 90 });
    };
    const t = setTimeout(activate, 300);
    return () => clearTimeout(t);
  }, []);
  return null;
}


