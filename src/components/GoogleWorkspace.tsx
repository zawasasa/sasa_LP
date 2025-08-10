import React from 'react';

const GoogleWorkspace = () => {
  return (
    <section id="google-workspace" className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto text-center">
            <h2 className="fw-bold mb-3">Google Workspace 活用</h2>
            <p className="lead text-muted mb-5">
              現場の “ちょっと困った” を、普段使いのツールで即解決
            </p>
          </div>
        </div>
        
        <div className="row">
          {/* Google Sheets */}
          <div className="col-lg-6 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h4 className="card-title text-success fw-bold">
                  <i className="bi bi-file-earmark-spreadsheet me-2"></i>Google Sheets
                </h4>
                <p className="card-text">
                  データ整形・集計から、GAS(Google Apps Script)と連携した高度な自動化まで対応します。
                </p>
                <h6 className="fw-bold mt-4">できること</h6>
                <ul className="list-unstyled">
                  <li><i className="bi bi-check-circle-fill text-success me-2"></i>データ整形・集計、結合・正規化</li>
                  <li><i className="bi bi-check-circle-fill text-success me-2"></i>Googleフォームと連携した管理台帳作成</li>
                  <li><i className="bi bi-check-circle-fill text-success me-2"></i>条件付き書式による自動チェック・強調</li>
                  <li><i className="bi bi-check-circle-fill text-success me-2"></i>GAS連携によるWebアプリ化・外部連携</li>
                </ul>
                <div className="mt-4">
                  <a 
                    href="https://note.com/hiroki_sasazawa/n/nf42de9823c44" 
                    className="btn btn-outline-success btn-sm"
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="スプレッドシート活用事例を見る (noteへ)"
                  >
                    活用事例を見る <i className="bi bi-box-arrow-up-right ms-1"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Google Docs */}
          <div className="col-lg-6 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h4 className="card-title text-primary fw-bold">
                  <i className="bi bi-file-earmark-text me-2"></i>Google Docs
                </h4>
                <p className="card-text">
                  文書テンプレートの自動生成や差込印刷など、ドキュメント作成の手間を大幅に削減します。
                </p>
                <h6 className="fw-bold mt-4">できること</h6>
                <ul className="list-unstyled">
                  <li><i className="bi bi-check-circle-fill text-primary me-2"></i>テンプレートからの文書自動生成</li>
                  <li><i className="bi bi-check-circle-fill text-primary me-2"></i>スプレッドシートのデータを一括差込</li>
                  <li><i className="bi bi-check-circle-fill text-primary me-2"></i>複数ドキュメントのPDF一括出力</li>
                  <li><i className="bi bi-check-circle-fill text-primary me-2"></i>GASによる印刷範囲の最適化</li>
                </ul>
                <div className="mt-4">
                  <a 
                    href="https://note.com/hiroki_sasazawa/n/n75b05df104d8" 
                    className="btn btn-outline-primary btn-sm"
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Googleドキュメント活用事例を見る (noteへ)"
                  >
                    活用事例を見る <i className="bi bi-box-arrow-up-right ms-1"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleWorkspace;
