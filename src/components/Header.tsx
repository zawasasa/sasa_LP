"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow-sm" data-bs-spy="scroll" data-bs-target="#navbarNav">
        <div className="container">
          <Link href="/" className="navbar-brand d-flex align-items-center fw-bold">
            <Image
              src="/sasa_logo_toka.png?v=2"
              alt="@zawasasa logo"
              width={32}
              height={32}
              className="rounded-circle me-2"
              priority
            />
            <span>@zawasasa</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link href="#profile" className="nav-link">Profile</Link>
              </li>
              <li className="nav-item">
                <Link href="#skills" className="nav-link">Skills</Link>
              </li>
              <li className="nav-item">
                <Link href="#works" className="nav-link">Works</Link>
              </li>
              <li className="nav-item">
                <Link href="#contact" className="nav-link btn btn-primary text-white ms-lg-2" aria-label="お問い合わせフォームに移動">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
