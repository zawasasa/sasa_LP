import React from 'react';
import Image from 'next/image';

const Profile = () => {
  return (
    <section id="profile" className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto text-center">
            <h2 className="fw-bold mb-4">Profile</h2>
            <p className="lead text-muted mb-5">
              現場を知る教員だからこそ、本当に必要なソリューションを提供できます
            </p>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-4 text-center mb-4 mb-lg-0">
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/sasa_logo_toka.png?v=2`}
              alt="@zawasasa avatar"
              width={200}
              height={200}
              className="rounded-circle border"
              priority
            />
          </div>
          <div className="col-lg-8">
            <h3 className="fw-bold mb-3">ささ（@zawasasa）</h3>
            <p className="mb-3">
              小学校教員として10年以上の現場経験を持ちながら、独学でプログラミングを習得。
              「現場の困りごと」を技術で解決することをライフワークとしています。
            </p>
            
            <div className="row">
              <div className="col-md-6">
                <h5 className="fw-bold text-primary">🎓 経歴・資格</h5>
                <ul className="list-unstyled">
                  <li>• 小学校教諭（社会科専門）</li>
                  <li>• 教職大学院修了</li>
                  <li>• 学校組織開発の研究・論文執筆</li>
                  <li>• 校内研修・生徒指導経験豊富</li>
                </ul>
              </div>
              <div className="col-md-6">
                <h5 className="fw-bold text-primary">🏠 プライベート</h5>
                <ul className="list-unstyled">
                  <li>• 二児の父</li>
                  <li>• 薪活・芝活・DIY愛好家</li>
                  <li>• Voicy愛聴者</li>
                  <li>• 昼寝のプロ</li>
                </ul>
              </div>
            </div>

            <div className="mt-4">
              <h5 className="fw-bold text-primary">💡 ミッション</h5>
              <p className="mb-0">
                「閉塞感を感じる学校現場で少しでもワクワクする働き方を模索する」をテーマに、
                ICTやAIを活用した業務効率化・働き方改革を推進。現場の先生方、特に多忙な若手教員の
                負担軽減に貢献したいと考えています。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
