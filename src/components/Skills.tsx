import React from "react";
import ScrollReveal from "./ScrollReveal";

const Skills = () => {
  return (
    <section id="skills" className="lp-section lp-section--dark">
      <div className="lp-container">
        {/* Section Header */}
        <ScrollReveal>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <p className="text-overline">Skills &amp; Expertise</p>
            <h2 className="heading-large">
              教育現場の実践経験。
              <br />
              最新技術の活用力。
            </h2>
          </div>
        </ScrollReveal>

        {/* Background Image Area */}
        <ScrollReveal direction="none" scale={0.92} duration={1.2}>
          <div
            className="bg-image-section"
            style={{
              minHeight: "60vh",
              borderRadius: 24,
              overflow: "hidden",
              marginBottom: 64,
            }}
          >
            <div
              className="bg-image-section__image"
              style={{
                /* Replace with: backgroundImage: "url('/your-skills-bg.jpg')" */
                background:
                  "linear-gradient(160deg, #0c0c1d 0%, #1a1a2e 40%, #2d1b69 100%)",
                backgroundAttachment: "scroll",
              }}
            />
            <div className="bg-image-section__overlay" style={{ background: "rgba(0,0,0,0.4)" }} />
            <div
              className="bg-image-section__content"
              style={{ maxWidth: "var(--max-width-wide)" }}
            >
              <ScrollReveal>
                <h3 className="heading-section" style={{ marginBottom: 16 }}>
                  現場を知る教員 × プログラミングスキル × 組織開発の知見
                </h3>
                <p
                  className="text-body-large"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  実践的で持続可能なDXソリューション
                </p>
              </ScrollReveal>
            </div>
          </div>
        </ScrollReveal>

        {/* Feature Cards */}
        <div className="feature-grid">
          {/* Tech Skills */}
          <ScrollReveal delay={0}>
            <div className="feature-card">
              <span className="feature-card__icon" role="img" aria-label="Code">
                &#60;/&#62;
              </span>
              <h4 className="feature-card__title">プログラミング</h4>
              <p className="feature-card__text">
                Google Apps Script (GAS)・JavaScript・HTML/CSS。
                スプレッドシート連携から本格的なWebアプリまで。
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="feature-card">
              <span className="feature-card__icon" role="img" aria-label="AI">
                AI
              </span>
              <h4 className="feature-card__title">AI・ツール活用</h4>
              <p className="feature-card__text">
                Gemini CLI・ChatGPT・Cursor・Obsidian。
                最新AIを教育現場に実装する知見。
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="feature-card">
              <span className="feature-card__icon" role="img" aria-label="Education">
                &#x1F393;
              </span>
              <h4 className="feature-card__title">教科・指導</h4>
              <p className="feature-card__text">
                社会科専門・自己調整学習・自由進度学習・ICT活用授業。
                10年以上の実践知。
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="feature-card">
              <span className="feature-card__icon" role="img" aria-label="Organization">
                &#x1F3DB;
              </span>
              <h4 className="feature-card__title">校務・組織開発</h4>
              <p className="feature-card__text">
                生徒指導・校内研修企画・校務文書作成・学年運営。
                教職大学院での組織開発研究。
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Available Areas */}
        <ScrollReveal style={{ marginTop: 80 }}>
          <div style={{ textAlign: "center" }}>
            <h4 className="heading-sub" style={{ marginBottom: 32 }}>
              対応可能な領域
            </h4>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: 16,
                flexWrap: "wrap",
              }}
            >
              {["業務効率化・校務DX", "研修・講演", "教育DXコンサル"].map(
                (label) => (
                  <span
                    key={label}
                    style={{
                      padding: "10px 24px",
                      borderRadius: 980,
                      border: "1px solid rgba(255,255,255,0.12)",
                      fontSize: "0.9rem",
                      color: "var(--color-text-secondary)",
                    }}
                  >
                    {label}
                  </span>
                )
              )}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Skills;
