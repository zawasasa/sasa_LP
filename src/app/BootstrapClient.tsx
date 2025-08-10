"use client";

import { useEffect } from "react";

export default function BootstrapClient() {
  useEffect(() => {
    // Bootstrap JS (includes Popper) for navbar toggler, collapse, etc.
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
    // Enable scrollspy on the main body for navbar highlights
    const activate = () => {
      const el = document.body;
      // @ts-ignore
      if (window.bootstrap && el) {
        // Cleanup existing if any
        try {
          // @ts-ignore
          const inst = window.bootstrap.ScrollSpy.getInstance(el);
          inst?.dispose?.();
        } catch {}
        // @ts-ignore
        new window.bootstrap.ScrollSpy(el, {
          target: '#navbarNav',
          offset: 90,
        });
      }
    };
    const t = setTimeout(activate, 300);
    return () => clearTimeout(t);
  }, []);
  return null;
}


