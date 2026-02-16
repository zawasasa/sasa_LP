import React from "react";
import ScrollReveal from "./ScrollReveal";

const GoogleWorkspace = () => {
  return (
    <section id="google-workspace" className="lp-section lp-section--alt">
      <div className="lp-container">
        {/* Section Header */}
        <ScrollReveal>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <p className="text-overline">Google Workspace</p>
            <h2 className="heading-large">
              現場の &ldquo;ちょっと困った&rdquo; を、
              <br />
              普段使いのツールで即解決。
            </h2>
          </div>
        </ScrollReveal>

        {/* Workspace Cards */}
        <div className="workspace-cards">
          {/* Google Sheets */}
          <ScrollReveal delay={0} direction="left" distance="40px">
            <div className="workspace-card workspace-card--sheets">
              <div className="workspace-card__icon">&#x1F4CA;</div>
              <h3 className="workspace-card__title">Google Sheets</h3>
              <p className="workspace-card__desc">
                データ整形・集計から、GAS と連携した高度な自動化まで対応します。
              </p>
              <ul className="workspace-card__features">
                <li>データ整形・集計、結合・正規化</li>
                <li>Google フォームと連携した管理台帳作成</li>
                <li>条件付き書式による自動チェック・強調</li>
                <li>GAS連携によるWebアプリ化・外部連携</li>
              </ul>
              <div style={{ marginTop: 24 }}>
                <a
                  href="https://note.com/hiroki_sasazawa/n/nf42de9823c44"
                  className="btn-ghost"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  活用事例を見る
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Google Docs */}
          <ScrollReveal delay={0.15} direction="right" distance="40px">
            <div className="workspace-card workspace-card--docs">
              <div className="workspace-card__icon">&#x1F4DD;</div>
              <h3 className="workspace-card__title">Google Docs</h3>
              <p className="workspace-card__desc">
                文書テンプレートの自動生成や差込印刷など、ドキュメント作成の手間を大幅に削減します。
              </p>
              <ul className="workspace-card__features">
                <li>テンプレートからの文書自動生成</li>
                <li>スプレッドシートのデータを一括差込</li>
                <li>複数ドキュメントのPDF一括出力</li>
                <li>GASによる印刷範囲の最適化</li>
              </ul>
              <div style={{ marginTop: 24 }}>
                <a
                  href="https://note.com/hiroki_sasazawa/n/n75b05df104d8"
                  className="btn-ghost"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  活用事例を見る
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default GoogleWorkspace;
