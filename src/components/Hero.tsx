"use client";

import React, { useEffect, useState } from "react";

const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="hero" className="hero">
      {/* Background — Replace gradient with your image via CSS or inline style */}
      <div
        className="hero__bg"
        style={{
          /* To use a real image, uncomment the next line and set the URL: */
          /* backgroundImage: `url('${process.env.NEXT_PUBLIC_BASE_PATH || ''}/hero-bg.jpg')`, */
        }}
      />

      <div className="hero__content">
        <p
          className="note-badge"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "none" : "translateY(20px)",
            transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s",
          }}
        >
          Education × Technology
        </p>

        <h1
          className="hero__title"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "none" : "translateY(40px)",
            transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.4s",
          }}
        >
          その「困った」、
          <br />
          コードで照らします。
        </h1>

        <p
          className="hero__subtitle"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "none" : "translateY(30px)",
            transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.7s",
          }}
        >
          小学校教員としての10年以上の経験と、独学で身につけたプログラミングスキル。
          <br />
          GAS / Sheets / Docs で明日から使える仕組みを、現場目線でご提案。
        </p>

        <div
          className="hero__cta-group"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "none" : "translateY(20px)",
            transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1) 1s",
          }}
        >
          <a href="#works" className="btn-primary-lp">
            実績を見る
          </a>
          <a href="#contact" className="btn-secondary-lp">
            相談する
          </a>
        </div>
      </div>

      <div
        className="hero__scroll"
        style={{
          opacity: loaded ? 1 : 0,
          transition: "opacity 1s 1.5s",
        }}
      >
        <span>Scroll</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  );
};

export default Hero;
