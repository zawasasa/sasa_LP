import React from 'react';

const Works = () => {
  return (
    <section id="works" className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto text-center">
            <h2 className="fw-bold mb-4">Works & Achievements</h2>
            <p className="lead text-muted mb-5">
              現場の課題を技術で解決した実績をご紹介します
            </p>
          </div>
        </div>

        {/* 小さなGAS（ユーティリティ） */}
        <h3 className="fw-bold mb-3"><i className="bi bi-lightning-charge me-2"></i>小さなGAS（ユーティリティ）</h3>
        <p className="text-muted mb-4">日々の“ちょい困った”を素早く解決する小粒でも効くスクリプト集</p>
        <div className="row mb-5">
          <div className="col-lg-4 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-header bg-secondary text-white">
                <h5 className="card-title mb-0"><i className="bi bi-ui-checks-grid me-2"></i>フォーム→台帳 自動整形</h5>
              </div>
              <div className="card-body">
                <p className="card-text">Googleフォームの回答を台帳フォーマットへ自動整形し、採番・重複チェックまで実施。</p>
                <ul className="list-unstyled small mb-0">
                  <li><strong>技術:</strong> GAS, スプレッドシート</li>
                  <li><strong>効果:</strong> 手作業ゼロ/入力ミス削減</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-4 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-header bg-secondary text-white">
                <h5 className="card-title mb-0"><i className="bi bi-clipboard2-check me-2"></i>配布物チェック自動集計</h5>
              </div>
              <div className="card-body">
                <p className="card-text">学年横断の提出/回収状況を集計し、未提出者リストを自動生成。</p>
                <ul className="list-unstyled small mb-0">
                  <li><strong>技術:</strong> GAS, 条件付き書式</li>
                  <li><strong>効果:</strong> 集計時間 80%削減</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-4 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-header bg-secondary text-white">
                <h5 className="card-title mb-0"><i className="bi bi-bell me-2"></i>朝の健康観察 集計/通知</h5>
              </div>
              <div className="card-body">
                <p className="card-text">欠席/遅刻等を集計し、管理職・学年にSlack/メールで自動通知。</p>
                <ul className="list-unstyled small mb-0">
                  <li><strong>技術:</strong> GAS, Apps Scriptトリガー</li>
                  <li><strong>効果:</strong> 連絡の抜け漏れ防止</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* 現場ワークフロー改善アプリ */}
        <h3 className="fw-bold mb-3"><i className="bi bi-diagram-3 me-2"></i>現場ワークフロー改善アプリ</h3>
        <p className="text-muted mb-4">教員の“毎日”を確実にラクにする、実務直結の小中規模アプリ</p>
        <div className="row mb-5">
          

          {/* 学習振り返りアプリ v2（GAS×Dify×AIフィードバック） */}
          <div className="col-lg-4 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-header text-white" style={{backgroundColor:'#6f42c1'}}>
                <h5 className="card-title mb-0"><i className="bi bi-chat-left-quote me-2"></i>学習振り返りアプリ</h5>
              </div>
              <div className="card-body">
                <p className="card-text">GASとスプレッドシートで、児童生徒が手軽に記録・振り返りができるWebアプリを構築。AIによる自動フィードバックも可能です。</p>
                <ul className="list-unstyled small mb-0">
                  <li><strong>技術:</strong> GAS, Sheets, Dify, AI</li>
                  <li><strong>効果:</strong> 自己調整学習の質的向上</li>
                </ul>
              </div>
              <div className="card-footer">
                <a href="https://note.com/hiroki_sasazawa/n/nf42de9823c44" className="btn btn-outline-secondary btn-sm" target="_blank" rel="noopener noreferrer" aria-label="学習振り返りアプリの事例を見る (noteへ)">
                  記事を読む <i className="bi bi-box-arrow-up-right ms-1"></i>
                </a>
              </div>
            </div>
          </div>
          
          

          {/* 社会科ワークシート自動生成（Cursorエージェント） */}
          <div className="col-lg-4 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-header bg-dark text-white">
                <h5 className="card-title mb-0"><i className="bi bi-magic me-2"></i>社会科WS 自動生成（Cursor）</h5>
              </div>
              <div className="card-body">
                <p className="card-text">Cursorのエージェントモードで、社会科の調べ学習ワークシートを自動生成。ワーク・解答・指導案まで一括管理。</p>
                <ul className="list-unstyled small mb-0">
                  <li><strong>技術:</strong> Cursor Agent, HTML/CSS, 印刷最適化</li>
                  <li><strong>効果:</strong> 作成時間の大幅短縮／品質の標準化</li>
                </ul>
              </div>
              <div className="card-footer">
                <a href="https://note.com/hiroki_sasazawa/n/n1dc9f3bec197" className="btn btn-outline-dark btn-sm" target="_blank" rel="noopener noreferrer">記事を読む</a>
              </div>
            </div>
          </div>

          {/* 学習振り返りアプリ v2（GAS×Dify×AIフィードバック） */}
          <div className="col-lg-4 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-header text-white" style={{backgroundColor:'#6f42c1'}}>
                <h5 className="card-title mb-0"><i className="bi bi-chat-left-quote me-2"></i>学習振り返りアプリ v2</h5>
              </div>
              <div className="card-body">
                <p className="card-text">GASとDifyを連携し、振り返り入力にAIが即時フィードバック。感情タグやファイル添付にも対応。</p>
                <ul className="list-unstyled small mb-0">
                  <li><strong>技術:</strong> GAS, Dify, Web Apps</li>
                  <li><strong>効果:</strong> 自己調整学習の質向上／入力の継続率向上</li>
                </ul>
              </div>
              <div className="card-footer">
                <a href="https://note.com/hiroki_sasazawa/n/nf42de9823c44" className="btn btn-outline-secondary btn-sm" target="_blank" rel="noopener noreferrer">記事を読む</a>
              </div>
            </div>
          </div>
        </div>

        {/* 大きな仕組み・可視化 */}
        <h3 className="fw-bold mb-3"><i className="bi bi-bar-chart-line me-2"></i>大きな仕組み・可視化</h3>
        <p className="text-muted mb-4">校内全体で使える“仕組み”として設計し、効果が持続するプロダクト</p>
        <div className="row">
          <div className="col-lg-4 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-header bg-primary text-white">
                <h5 className="card-title mb-0">
                  <i className="bi bi-clipboard-check me-2"></i>提出物管理アプリ
                </h5>
              </div>
              <div className="card-body">
                <p className="card-text">
                  GoogleスプレッドシートとGASで構築した提出物管理システム。
                  教員の負担を大幅に軽減し、業務効率化を実現。
                </p>
                <ul className="list-unstyled">
                  <li><strong>技術:</strong> GAS, スプレッドシート</li>
                  <li><strong>効果:</strong> 管理時間50%削減</li>
                  <li><strong>提供:</strong> 無料ダウンロード</li>
                </ul>
              </div>
              <div className="card-footer">
                <a href="https://note.com/hiroki_sasazawa/n/na8c067780963" className="btn btn-outline-primary btn-sm" target="_blank" rel="noopener noreferrer">
                  記事を読む <i className="bi bi-box-arrow-up-right ms-1"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-header bg-success text-white">
                <h5 className="card-title mb-0">
                  <i className="bi bi-graph-up me-2"></i>新体力テスト見える化
                </h5>
              </div>
              <div className="card-body">
                <p className="card-text">
                  新体力テストの記録を「見える化」するアプリ。
                  データ分析により生徒の成長を可視化し、指導改善に貢献。
                </p>
                <ul className="list-unstyled">
                  <li><strong>技術:</strong> GAS, データ可視化</li>
                  <li><strong>効果:</strong> 分析時間80%短縮</li>
                  <li><strong>特徴:</strong> 個別指導支援</li>
                </ul>
              </div>
              <div className="card-footer">
                <a href="https://note.com/hiroki_sasazawa" className="btn btn-outline-success btn-sm" target="_blank" rel="noopener noreferrer">
                  noteで詳細を見る
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-header bg-warning text-dark">
                <h5 className="card-title mb-0">
                  <i className="bi bi-clock me-2"></i>タスクシュートアプリ
                </h5>
              </div>
              <div className="card-body">
                <p className="card-text">
                  仕事の成果を「見える化」するタスク管理アプリ。
                  夏休みのダラダラ仕事を15分で解決する革新的ツール。
                </p>
                <ul className="list-unstyled">
                  <li><strong>技術:</strong> GAS, 時間管理</li>
                  <li><strong>効果:</strong> 生産性向上</li>
                  <li><strong>特徴:</strong> 成果の定量化</li>
                </ul>
              </div>
              <div className="card-footer">
                <a href="https://note.com/hiroki_sasazawa" className="btn btn-outline-warning btn-sm" target="_blank" rel="noopener noreferrer">
                  noteで詳細を見る
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* マガジン紹介 */}
        <div className="row mt-5">
          <div className="col-lg-8 mx-auto">
            <div className="card bg-light">
              <div className="card-body text-center">
                <h4 className="fw-bold mb-3">
                  <i className="bi bi-collection me-2"></i>noteマガジン
                </h4>
                <h5 className="text-primary">「学校現場で使える！GASでつくるWEBアプリ」</h5>
                <p className="mb-3">
                  7本の記事で構成されたマガジンでは、実際に現場で使えるWEBアプリの開発方法を
                  詳しく解説。テンプレートのダウンロードも可能です。
                </p>
                <a href="https://note.com/hiroki_sasazawa" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                  マガジンを読む
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* その他の実績 */}
        <div className="row mt-5">
          <div className="col-lg-8 mx-auto">
            <h4 className="fw-bold text-center mb-4">その他の取り組み</h4>
            <div className="row">
              <div className="col-md-6 mb-3">
                <div className="d-flex align-items-start">
                  <div className="flex-shrink-0 bg-primary text-white rounded-circle d-flex align-items-center justify-content-center" style={{width: '40px', height: '40px'}}>
                    <i className="bi bi-robot"></i>
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <h6 className="fw-bold">AI活用研究</h6>
                    <p className="mb-0 small">Gemini CLI × Obsidian × Cursor を活用した情報資産化の実践</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <div className="d-flex align-items-start">
                  <div className="flex-shrink-0 bg-success text-white rounded-circle d-flex align-items-center justify-content-center" style={{width: '40px', height: '40px'}}>
                    <i className="bi bi-people"></i>
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <h6 className="fw-bold">組織開発研究</h6>
                    <p className="mb-0 small">教職大学院での学校組織開発に関する論文執筆・研究</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <div className="d-flex align-items-start">
                  <div className="flex-shrink-0 bg-warning text-dark rounded-circle d-flex align-items-center justify-content-center" style={{width: '40px', height: '40px'}}>
                    <i className="bi bi-lightbulb"></i>
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <h6 className="fw-bold">働き方改革</h6>
                    <p className="mb-0 small">職員室での効率化推進・初任者支援の実践</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <div className="d-flex align-items-start">
                  <div className="flex-shrink-0 bg-info text-white rounded-circle d-flex align-items-center justify-content-center" style={{width: '40px', height: '40px'}}>
                    <i className="bi bi-book"></i>
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <h6 className="fw-bold">自己調整学習</h6>
                    <p className="mb-0 small">自由進度学習の実践と研究・noteでの発信</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 最新記事（note）ショートカット）— 未確定タイトルは非表示 */}
        <div className="row mt-4">
          <div className="col-lg-8 mx-auto">
            <div className="alert alert-secondary" role="alert">
              <div className="d-flex align-items-center mb-2">
                <i className="bi bi-link-45deg fs-4 me-2"></i>
                <strong>最近の発信（note）</strong>
              </div>
              <ul className="mb-0">
                <li><a href="https://note.com/hiroki_sasazawa/n/na8c067780963" target="_blank" rel="noopener noreferrer">提出物管理アプリをGoogleスプレッドシートとGASで自作したので試してみてね/無料ダウンロード</a></li>
                <li><a href="https://note.com/hiroki_sasazawa/n/n1dc9f3bec197" target="_blank" rel="noopener noreferrer">小学校教師がCursorで社会科調べ学習のワークシートを作ってみた話</a></li>
                <li><a href="https://note.com/hiroki_sasazawa/n/nf42de9823c44" target="_blank" rel="noopener noreferrer">学習振り返りアプリ v2（GAS×Dify×AIフィードバック）</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
