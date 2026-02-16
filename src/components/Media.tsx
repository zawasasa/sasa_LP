import React from "react";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const MEDIA_ITEMS = [
    {
        type: "TV",
        date: "2025.05.06",
        title: "テレビ東京『WBS（ワールドビジネスサテライト）』出演",
        description:
            "「AIで教育現場を変える」特集にて、NotebookLMを活用した授業準備や教材作成の効率化実例を紹介。",
        link: "https://txbiz.tv-tokyo.co.jp/wbs", // リンクがあれば更新
        image: "/media_wbs.jpg", // 画像があれば
    },
    {
        type: "Magazine",
        date: "2025.09",
        title: "明治図書『授業力&学級経営力』9月号",
        description:
            "特集「AI『使いこなし』図鑑」にて、「Google×AI でアプリ開発 GAS完全ガイド」を寄稿。",
        link: "https://www.meijitosho.co.jp/detail/21186",
        image: "/media_meiji.jpg", // 画像があれば
    },
];

const Media = () => {
    return (
        <section id="media" className="lp-section">
            <div className="lp-container">
                <ScrollReveal>
                    <div style={{ textAlign: "center", marginBottom: 64 }}>
                        <p className="text-overline">Media & Publication</p>
                        <h2 className="heading-large">メディア掲載・執筆</h2>
                    </div>
                </ScrollReveal>

                <div className="media-grid">
                    {MEDIA_ITEMS.map((item, index) => (
                        <ScrollReveal key={index} delay={index * 0.1}>
                            <div className="media-card">
                                <div className="media-card__header">
                                    <span className="media-card__type">{item.type}</span>
                                    <span className="media-card__date">{item.date}</span>
                                </div>
                                <h3 className="media-card__title">{item.title}</h3>
                                <p className="media-card__desc">{item.description}</p>
                                {item.link && (
                                    <div className="media-card__footer">
                                        <a
                                            href={item.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-link"
                                        >
                                            詳細を見る &rarr;
                                        </a>
                                    </div>
                                )}
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>

            <style jsx>{`
        .media-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 24px;
        }
        .media-card {
          background: var(--color-bg-card);
          border-radius: 16px;
          padding: 24px;
          border: 1px solid var(--color-border);
          transition: transform 0.3s ease, border-color 0.3s ease;
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        .media-card:hover {
          transform: translateY(-4px);
          border-color: var(--color-accent);
        }
        .media-card__header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
          font-size: 0.875rem;
          color: var(--color-text-secondary);
        }
        .media-card__type {
          background: rgba(var(--color-accent-rgb), 0.1);
          color: var(--color-accent);
          padding: 4px 12px;
          border-radius: 999px;
          font-weight: 500;
        }
        .media-card__title {
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 12px;
          line-height: 1.4;
        }
        .media-card__desc {
          color: var(--color-text-secondary);
          font-size: 0.95rem;
          line-height: 1.6;
          flex-grow: 1; /* Pushes footer down */
        }
        .media-card__footer {
          margin-top: 20px;
          text-align: right;
        }
        .text-link {
          color: var(--color-accent);
          text-decoration: none;
          font-weight: 500;
          transition: opacity 0.2s;
        }
        .text-link:hover {
          opacity: 0.8;
          text-decoration: underline;
        }
      `}</style>
        </section>
    );
};

export default Media;
