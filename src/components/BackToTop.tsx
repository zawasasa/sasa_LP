"use client";

import { useEffect, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      aria-label="ページ先頭へ戻る"
      className="btn btn-primary position-fixed"
      style={{ right: 16, bottom: 16, zIndex: 1030 }}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <i className="bi bi-arrow-up" />
    </button>
  );
}


