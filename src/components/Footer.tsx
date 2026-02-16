import React from "react";
import ScrollReveal from "./ScrollReveal";

const Footer = () => {
  return (
    <footer id="contact" className="lp-footer lp-section">
      <div className="lp-container">
        {/* Header */}
        <ScrollReveal>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <p className="text-overline">Contact</p>
            <h2 className="heading-large">
              お気軽にお声かけください。
            </h2>
            <p
              className="text-body-large"
              style={{
                color: "var(--color-text-secondary)",
                maxWidth: 540,
                margin: "16px auto 0",
              }}
            >
              教育現場の課題解決について、一緒に考えさせていただきます。
            </p>
          </div>
        </ScrollReveal>

        {/* Contact Cards */}
        <div className="footer-contact-cards">
          <ScrollReveal delay={0}>
            <div className="footer-contact-card">
              <span className="footer-contact-card__icon">&#x1F4AC;</span>
              <h4 className="footer-contact-card__title">
                相談・お問い合わせ
              </h4>
              <p className="footer-contact-card__desc">
                ICT導入や業務効率化について、お気軽にご相談ください
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="footer-contact-card">
              <span className="footer-contact-card__icon">&#x1F3A4;</span>
              <h4 className="footer-contact-card__title">講演・研修依頼</h4>
              <p className="footer-contact-card__desc">
                教育DX、働き方改革等のテーマでお話しします
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="footer-contact-card">
              <span className="footer-contact-card__icon">
                &#x270F;&#xFE0F;
              </span>
              <h4 className="footer-contact-card__title">執筆・寄稿</h4>
              <p className="footer-contact-card__desc">
                教育 × ICTに関する記事執筆・寄稿承ります
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Social Links */}
        <ScrollReveal>
          <div style={{ textAlign: "center" }}>
            <h4 className="heading-sub" style={{ marginBottom: 24 }}>
              Follow Me
            </h4>
            <div className="footer-social">
              <a
                href="https://note.com/hiroki_sasazawa"
                className="footer-social__link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="noteのプロフィールへ移動"
              >
                &#x1F4D3; note
              </a>
              <a
                href="https://x.com/zawasasa"
                className="footer-social__link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X(旧Twitter)のプロフィールへ移動"
              >
                &#x1D54F; X (Twitter)
              </a>
            </div>
            <p className="text-caption" style={{ marginTop: 16 }}>
              最新の取り組みや教育DXに関する情報を発信しています
            </p>
          </div>
        </ScrollReveal>

        {/* Contact Methods */}
        <ScrollReveal style={{ marginTop: 48 }}>
          <div
            style={{
              background: "var(--color-bg-card)",
              borderRadius: 16,
              padding: "32px 36px",
              textAlign: "center",
            }}
          >
            <h5 className="heading-sub" style={{ marginBottom: 24 }}>
              お問い合わせ方法
            </h5>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: 48,
                flexWrap: "wrap",
              }}
            >
              <div>
                <p style={{ fontWeight: 600, marginBottom: 4 }}>note DM</p>
                <p className="text-caption">
                  noteのメッセージ機能からお気軽にどうぞ
                </p>
              </div>
              <div>
                <p style={{ fontWeight: 600, marginBottom: 4 }}>X DM</p>
                <p className="text-caption">
                  XのDMでもお受けしています
                </p>
              </div>
            </div>
            <p
              className="text-caption"
              style={{ marginTop: 20, fontSize: "0.8rem" }}
            >
              ※
              小学校教員のため、副業に関わる有償業務は承れませんが、
              教育現場の改善に繋がる活動については積極的にお手伝いします
            </p>
          </div>
        </ScrollReveal>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p className="footer-bottom__text">
            &copy; 2024 @zawasasa. All rights reserved.
          </p>
          <p className="footer-bottom__text">
            現場を知る教員だからこそ提供できる、実践的なDXソリューション
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
