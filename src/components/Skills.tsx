import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="py-5 bg-light">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto text-center">
            <h2 className="fw-bold mb-4">Skills & Expertise</h2>
            <p className="lead text-muted mb-5">
              教育現場の実践経験 × 最新技術の活用で、現実的なソリューションを提供
            </p>
          </div>
        </div>
        
        <div className="row">
          {/* 技術スキル */}
          <div className="col-lg-6 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h4 className="card-title text-primary fw-bold">
                  <i className="bi bi-code-slash me-2"></i>技術スキル
                </h4>
                <div className="row">
                  <div className="col-md-6">
                    <h6 className="fw-bold mt-3">プログラミング</h6>
                    <ul className="list-unstyled">
                      <li>• Google Apps Script (GAS)</li>
                      <li>• JavaScript</li>
                      <li>• HTML/CSS</li>
                      <li>• スプレッドシート連携</li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <h6 className="fw-bold mt-3">AI・ツール活用</h6>
                    <ul className="list-unstyled">
                      <li>• Gemini CLI</li>
                      <li>• ChatGPT活用</li>
                      <li>• Obsidian</li>
                      <li>• Cursor</li>
                    </ul>
                  </div>
                </div>
                <h6 className="fw-bold mt-3">開発実績</h6>
                <ul className="list-unstyled">
                  <li>• 業務効率化WEBアプリ開発</li>
                  <li>• データ可視化システム</li>
                  <li>• 自動化ツール作成</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* 教育専門性 */}
          <div className="col-lg-6 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h4 className="card-title text-success fw-bold">
                  <i className="bi bi-mortarboard me-2"></i>教育専門性
                </h4>
                <div className="row">
                  <div className="col-md-6">
                    <h6 className="fw-bold mt-3">教科・指導</h6>
                    <ul className="list-unstyled">
                      <li>• 社会科専門</li>
                      <li>• 自己調整学習</li>
                      <li>• 自由進度学習</li>
                      <li>• ICT活用授業</li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <h6 className="fw-bold mt-3">校務・運営</h6>
                    <ul className="list-unstyled">
                      <li>• 生徒指導</li>
                      <li>• 校内研修企画</li>
                      <li>• 校務文書作成</li>
                      <li>• 学年運営</li>
                    </ul>
                  </div>
                </div>
                <h6 className="fw-bold mt-3">研究・学術</h6>
                <ul className="list-unstyled">
                  <li>• 学校組織開発研究</li>
                  <li>• 教職大学院論文執筆</li>
                  <li>• 働き方改革推進</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* 強みの統合 */}
        <div className="row mt-4">
          <div className="col-lg-10 mx-auto">
            <div className="card bg-primary text-white">
              <div className="card-body text-center">
                <h4 className="card-title fw-bold">🔥 独自の価値提案</h4>
                <p className="card-text fs-5 mb-0">
                  現場を知る教員 × プログラミングスキル × 組織開発の知見 = 
                  <strong>実践的で持続可能なDXソリューション</strong>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 対応可能領域 */}
        <div className="row mt-5">
          <div className="col-lg-8 mx-auto text-center">
            <h4 className="fw-bold mb-4">対応可能な領域</h4>
            <div className="row">
              <div className="col-md-4 mb-3">
                <div className="p-3 bg-white rounded shadow-sm">
                  <h6 className="fw-bold text-primary">業務効率化</h6>
                  <small>校務DX・自動化・働き方改革</small>
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <div className="p-3 bg-white rounded shadow-sm">
                  <h6 className="fw-bold text-primary">研修・講演</h6>
                  <small>ICT活用・AI導入・組織開発</small>
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <div className="p-3 bg-white rounded shadow-sm">
                  <h6 className="fw-bold text-primary">コンサル</h6>
                  <small>教育DX・システム導入支援</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
