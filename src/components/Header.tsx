"use client";

import React, { useState } from "react";
import Image from "next/image";

const NAV_ITEMS = [
  { href: "#profile", label: "Profile" },
  { href: "#skills", label: "Skills" },
  { href: "#google-workspace", label: "Workspace" },
  { href: "#works", label: "Works" },
  { href: "#contact", label: "Contact" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  const handleNavClick = () => setMenuOpen(false);

  return (
    <>
      <header className="lp-header">
        <div className="lp-header__inner">
          <a href="#hero" className="lp-header__brand">
            <Image
              src={`${basePath}/sasa_logo_toka.png?v=2`}
              alt="@zawasasa"
              width={28}
              height={28}
              priority
            />
            <span>@zawasasa</span>
          </a>

          <nav className="lp-header__nav">
            {NAV_ITEMS.map((item) => (
              <a key={item.href} href={item.href} className="lp-header__link">
                {item.label}
              </a>
            ))}
          </nav>

          <button
            className="lp-header__toggle"
            onClick={() => setMenuOpen(true)}
            aria-label="メニューを開く"
          >
            &#9776;
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <div
        className={`mobile-nav-overlay ${menuOpen ? "mobile-nav-overlay--open" : ""}`}
      >
        <button
          className="mobile-nav-overlay__close"
          onClick={() => setMenuOpen(false)}
          aria-label="メニューを閉じる"
        >
          &#10005;
        </button>
        {NAV_ITEMS.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="mobile-nav-overlay__link"
            onClick={handleNavClick}
          >
            {item.label}
          </a>
        ))}
      </div>
    </>
  );
};

export default Header;
