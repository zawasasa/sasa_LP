import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className="py-5 bg-dark text-white">
      <div className="container">
        {/* Contact Section */}
        <div className="row">
          <div className="col-lg-8 mx-auto text-center">
            <h2 className="fw-bold mb-4">Contact</h2>
            <p className="lead mb-5">
              お気軽にお声かけください。教育現場の課題解決について、一緒に考えさせていただきます。
            </p>
          </div>
        </div>

        <div className="row">
          {/* お問い合わせ内容 */}
          <div className="col-lg-8 mx-auto">
            <div className="row text-center mb-5">
              <div className="col-md-4 mb-4">
                <div className="bg-primary p-4 rounded">
                  <i className="bi bi-chat-dots fs-1 mb-3"></i>
                  <h5 className="fw-bold">相談・お問い合わせ</h5>
                  <p className="mb-0 small">ICT導入や業務効率化について、お気軽にご相談ください</p>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="bg-success p-4 rounded">
                  <i className="bi bi-mic fs-1 mb-3"></i>
                  <h5 className="fw-bold">講演・研修依頼</h5>
                  <p className="mb-0 small">教育DX、働き方改革等のテーマでお話しします</p>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="bg-warning text-dark p-4 rounded">
                  <i className="bi bi-pencil fs-1 mb-3"></i>
                  <h5 className="fw-bold">執筆・寄稿</h5>
                  <p className="mb-0 small">教育×ICTに関する記事執筆・寄稿承ります</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mb-5">
          <a href="#contact" className="btn btn-success btn-lg" aria-label="スプレッドシートやドキュメントの活用について相談する">
            <i className="bi bi-google me-2"></i>スプレッドシート/ドキュメントの相談をする
          </a>
        </div>

        {/* SNS Links */}
        <div className="row">
          <div className="col-lg-6 mx-auto text-center">
            <h4 className="fw-bold mb-4">Follow Me</h4>
            <div className="d-flex justify-content-center gap-3 mb-4">
              <a href="https://note.com/hiroki_sasazawa" 
                 className="btn btn-outline-light btn-lg" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 aria-label="noteのプロフィールへ移動（新しいタブ）">
                <i className="bi bi-journal-text me-2"></i>note
              </a>
              <a href="https://x.com/zawasasa" 
                 className="btn btn-outline-light btn-lg" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 aria-label="X(旧Twitter)のプロフィールへ移動（新しいタブ）">
                <i className="bi bi-twitter-x me-2"></i>X (Twitter)
              </a>
            </div>
            <p className="text-muted">
              最新の取り組みや教育DXに関する情報を発信しています
            </p>
          </div>
        </div>

        {/* Contact Methods */}
        <div className="row mt-5">
          <div className="col-lg-8 mx-auto">
            <div className="bg-secondary p-4 rounded text-center">
              <h5 className="fw-bold mb-3">お問い合わせ方法</h5>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <h6 className="fw-bold">
                    <i className="bi bi-journal-text me-2"></i>note DM
                  </h6>
                  <p className="mb-0 small">noteのメッセージ機能からお気軽にどうぞ</p>
                </div>
                <div className="col-md-6 mb-3">
                  <h6 className="fw-bold">
                    <i className="bi bi-twitter-x me-2"></i>X DM
                  </h6>
                  <p className="mb-0 small">XのDMでもお受けしています</p>
                </div>
              </div>
              <div className="mt-3">
                <small className="text-muted">
                  ※ 小学校教員のため、副業に関わる有償業務は承れませんが、
                  教育現場の改善に繋がる活動については積極的にお手伝いします
                </small>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="row mt-5">
          <div className="col-12">
            <hr className="border-secondary" />
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
              <p className="mb-0 text-muted">© 2024 @zawasasa. All rights reserved.</p>
              <p className="mb-0 text-muted small">
                現場を知る教員だからこそ提供できる、実践的なDXソリューション
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
