import React from "react";
import ScrollReveal from "./ScrollReveal";

interface WorkItem {
  title: string;
  desc: string;
  tags: string[];
  color: string;
  href?: string;
}

const CATEGORIES: {
  label: string;
  description: string;
  items: WorkItem[];
}[] = [
  {
    label: "Utility Scripts",
    description:
      "日々の\"ちょい困った\"を素早く解決する小粒でも効くスクリプト集",
    items: [
      {
        title: "フォーム → 台帳 自動整形",
        desc: "Googleフォームの回答を台帳フォーマットへ自動整形し、採番・重複チェックまで実施。",
        tags: ["GAS", "Sheets"],
        color: "dark",
      },
      {
        title: "配布物チェック自動集計",
        desc: "学年横断の提出/回収状況を集計し、未提出者リストを自動生成。集計時間80%削減。",
        tags: ["GAS", "条件付き書式"],
        color: "dark",
      },
      {
        title: "朝の健康観察 集計/通知",
        desc: "欠席/遅刻等を集計し、管理職・学年にSlack/メールで自動通知。連絡の抜け漏れ防止。",
        tags: ["GAS", "トリガー"],
        color: "dark",
      },
    ],
  },
  {
    label: "Workflow Apps",
    description: "教員の\"毎日\"を確実にラクにする、実務直結のアプリ",
    items: [
      {
        title: "学習振り返りアプリ",
        desc: "GASとスプレッドシートで、児童生徒が手軽に記録・振り返りができるWebアプリ。AIによる自動フィードバックも可能。",
        tags: ["GAS", "Sheets", "Dify", "AI"],
        color: "purple",
        href: "https://note.com/hiroki_sasazawa/n/nf42de9823c44",
      },
      {
        title: "社会科WS自動生成（Cursor）",
        desc: "Cursorのエージェントモードで、調べ学習ワークシートを自動生成。ワーク・解答・指導案まで一括管理。",
        tags: ["Cursor Agent", "HTML/CSS"],
        color: "dark",
        href: "https://note.com/hiroki_sasazawa/n/n1dc9f3bec197",
      },
      {
        title: "学習振り返りアプリ v2",
        desc: "GASとDifyを連携し、振り返り入力にAIが即時フィードバック。感情タグやファイル添付にも対応。",
        tags: ["GAS", "Dify", "Web Apps"],
        color: "purple",
        href: "https://note.com/hiroki_sasazawa/n/nf42de9823c44",
      },
    ],
  },
  {
    label: "Systems & Visualization",
    description:
      "校内全体で使える\"仕組み\"として設計し、効果が持続するプロダクト",
    items: [
      {
        title: "提出物管理アプリ",
        desc: "GoogleスプレッドシートとGASで構築した提出物管理システム。教員の負担を大幅に軽減。管理時間50%削減。",
        tags: ["GAS", "Sheets"],
        color: "blue",
      },
      {
        title: "新体力テスト見える化",
        desc: "新体力テストの記録を「見える化」するアプリ。データ分析により生徒の成長を可視化。分析時間80%短縮。",
        tags: ["GAS", "データ可視化"],
        color: "green",
      },
      {
        title: "タスクシュートアプリ",
        desc: "仕事の成果を「見える化」するタスク管理アプリ。夏休みのダラダラ仕事を15分で解決する革新的ツール。",
        tags: ["GAS", "時間管理"],
        color: "orange",
      },
    ],
  },
];

const Works = () => {
  return (
    <section id="works" className="lp-section lp-section--dark">
      <div className="lp-container lp-container--wide">
        {/* Section Header */}
        <ScrollReveal>
          <div style={{ textAlign: "center", marginBottom: 80 }}>
            <p className="text-overline">Works &amp; Achievements</p>
            <h2 className="heading-large">
              現場の課題を、
              <br />
              技術で解決した実績。
            </h2>
          </div>
        </ScrollReveal>

        {/* Background Image — full width showcase */}
        <ScrollReveal direction="none" scale={0.95} duration={1.2}>
          <div
            className="bg-image-section"
            style={{
              minHeight: "45vh",
              borderRadius: 24,
              overflow: "hidden",
              marginBottom: 80,
            }}
          >
            <div
              className="bg-image-section__image"
              style={{
                /* Replace with: backgroundImage: "url('/your-works-bg.jpg')" */
                background:
                  "linear-gradient(135deg, #0f0f23 0%, #1a0a2e 40%, #2d1b69 70%, #0f3460 100%)",
                backgroundAttachment: "scroll",
              }}
            />
            <div
              className="bg-image-section__overlay"
              style={{ background: "rgba(0,0,0,0.3)" }}
            />
            <div className="bg-image-section__content">
              <p className="heading-section">
                GAS × AI で、教育現場を変える。
              </p>
              <p
                className="text-body-large"
                style={{
                  color: "var(--color-text-secondary)",
                  marginTop: 12,
                }}
              >
                noteマガジン「学校現場で使える！GASでつくるWEBアプリ」7本の記事で詳しく解説
              </p>
              <div style={{ marginTop: 24 }}>
                <a
                  href="https://note.com/hiroki_sasazawa"
                  className="btn-primary-lp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  マガジンを読む
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Categories */}
        {CATEGORIES.map((cat) => (
          <div key={cat.label} className="work-category">
            <ScrollReveal>
              <p className="work-category__label">{cat.label}</p>
              <h3 className="heading-sub" style={{ marginBottom: 8 }}>
                {cat.description}
              </h3>
            </ScrollReveal>

            <div className="work-grid" style={{ marginTop: 24 }}>
              {cat.items.map((item, i) => (
                <ScrollReveal key={item.title} delay={i * 0.1}>
                  <div className="work-card">
                    <div
                      className={`work-card__header work-card__header--${item.color}`}
                    >
                      {item.tags.join(" / ")}
                    </div>
                    <div className="work-card__body">
                      <h4 className="work-card__title">{item.title}</h4>
                      <p className="work-card__desc">{item.desc}</p>
                      <div className="work-card__meta">
                        {item.tags.map((tag) => (
                          <span key={tag} className="work-card__tag">
                            {tag}
                          </span>
                        ))}
                      </div>
                      {item.href && (
                        <a
                          href={item.href}
                          className="work-card__link"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          記事を読む &#8250;
                        </a>
                      )}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        ))}

        {/* Other Initiatives */}
        <ScrollReveal>
          <hr className="lp-divider" style={{ marginBottom: 64 }} />
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <h4 className="heading-sub">その他の取り組み</h4>
          </div>
        </ScrollReveal>

        <div className="feature-grid">
          {[
            {
              icon: "AI",
              title: "AI活用研究",
              text: "Gemini CLI × Obsidian × Cursor を活用した情報資産化の実践",
            },
            {
              icon: "\u{1F465}",
              title: "組織開発研究",
              text: "教職大学院での学校組織開発に関する論文執筆・研究",
            },
            {
              icon: "\u{1F4A1}",
              title: "働き方改革",
              text: "職員室での効率化推進・初任者支援の実践",
            },
            {
              icon: "\u{1F4D6}",
              title: "自己調整学習",
              text: "自由進度学習の実践と研究・noteでの発信",
            },
          ].map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.08}>
              <div className="feature-card">
                <span className="feature-card__icon">{item.icon}</span>
                <h4 className="feature-card__title">{item.title}</h4>
                <p className="feature-card__text">{item.text}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Recent Articles */}
        <ScrollReveal style={{ marginTop: 64 }}>
          <div
            style={{
              background: "var(--color-bg-card)",
              borderRadius: 16,
              padding: "32px 36px",
            }}
          >
            <p className="heading-sub" style={{ marginBottom: 16 }}>
              最近の発信（note）
            </p>
            <ul
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 12,
              }}
            >
              <li>
                <a
                  href="https://note.com/hiroki_sasazawa/n/n1dc9f3bec197"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                >
                  小学校教師がCursorで社会科調べ学習のワークシートを作ってみた話
                </a>
              </li>
              <li>
                <a
                  href="https://note.com/hiroki_sasazawa/n/nf42de9823c44"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                >
                  学習振り返りアプリ v2（GAS × Dify × AIフィードバック）
                </a>
              </li>
            </ul>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Works;
