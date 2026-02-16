import React from "react";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const Profile = () => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  return (
    <section id="profile" className="lp-section lp-section--alt">
      <div className="lp-container">
        {/* Section Header */}
        <ScrollReveal>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <p className="text-overline">About</p>
            <h2 className="heading-large">
              現場を知る教員だからこそ、
              <br />
              本当に必要なソリューションを。
            </h2>
          </div>
        </ScrollReveal>

        {/* Profile Grid */}
        <div className="profile-grid">
          {/* Avatar */}
          <ScrollReveal direction="none" scale={0.85} duration={1.2}>
            <div className="profile-avatar">
              <Image
                src={`${basePath}/sasa_logo_toka.png?v=2`}
                alt="@zawasasa"
                width={220}
                height={220}
                priority
              />
            </div>
          </ScrollReveal>

          {/* Info */}
          <div>
            <ScrollReveal delay={0.15}>
              <p className="text-overline" style={{ marginBottom: 8 }}>
                @zawasasa
              </p>
              <h3 className="heading-section" style={{ marginBottom: 16 }}>
                ささ
              </h3>
              <p className="text-body-large" style={{ color: "var(--color-text-secondary)", marginBottom: 0 }}>
                小学校教員として10年以上の現場経験を持ちながら、独学でプログラミングを習得。
                「現場の困りごと」を技術で解決することをライフワークとしています。
              </p>
            </ScrollReveal>

            <div className="profile-info-grid">
              <ScrollReveal delay={0.2}>
                <div>
                  <p className="profile-info-item__label">経歴・資格</p>
                  <div className="profile-info-item__content">
                    小学校教諭（社会科専門）
                    <br />
                    教職大学院修了
                    <br />
                    学校組織開発の研究・論文執筆
                    <br />
                    校内研修・生徒指導経験豊富
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <div>
                  <p className="profile-info-item__label">プライベート</p>
                  <div className="profile-info-item__content">
                    二児の父
                    <br />
                    薪活・芝活・DIY愛好家
                    <br />
                    Voicy愛聴者
                    <br />
                    昼寝のプロ
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>

        {/* Mission Statement with Background Image */}
        <ScrollReveal delay={0.1} style={{ marginTop: 80 }}>
          <div
            className="bg-image-section"
            style={{
              minHeight: "50vh",
              borderRadius: 24,
              overflow: "hidden",
            }}
          >
            <div
              className="bg-image-section__image"
              style={{
                /* Replace with: backgroundImage: "url('/your-mission-bg.jpg')" */
                background:
                  "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
                backgroundAttachment: "scroll",
              }}
            />
            <div className="bg-image-section__overlay" />
            <div className="bg-image-section__content">
              <ScrollReveal>
                <p className="text-overline" style={{ color: "var(--color-accent)" }}>
                  Mission
                </p>
                <h3 className="heading-large" style={{ marginBottom: 20 }}>
                  閉塞感を感じる学校現場で、
                  <br />
                  少しでもワクワクする働き方を。
                </h3>
                <p
                  className="text-body-large"
                  style={{
                    color: "var(--color-text-secondary)",
                    maxWidth: 600,
                    margin: "0 auto",
                  }}
                >
                  ICTやAIを活用した業務効率化・働き方改革を推進。
                  現場の先生方、特に多忙な若手教員の負担軽減に貢献したいと考えています。
                </p>
              </ScrollReveal>
            </div>
          </div>
        </ScrollReveal>

        {/* Stats */}
        <div className="stats-row">
          <ScrollReveal delay={0}>
            <div>
              <div className="stat-item__number">10+</div>
              <div className="stat-item__label">年の教員経験</div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div>
              <div className="stat-item__number">7+</div>
              <div className="stat-item__label">noteマガジン記事</div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div>
              <div className="stat-item__number">80%</div>
              <div className="stat-item__label">業務時間削減</div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <div>
              <div className="stat-item__number">GAS</div>
              <div className="stat-item__label">× AI で自動化</div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Profile;
