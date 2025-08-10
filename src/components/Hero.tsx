import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="py-5 text-center bg-light">
      <div className="container">
        <div className="row py-lg-5">
          <div className="col-lg-8 col-md-10 mx-auto">
            <h1 className="fw-light display-4">その「困った」、コードで照らします。</h1>
            <p className="lead text-muted mt-4">
              小学校教員としての10年以上の経験と、独学で身につけたプログラミングスキル。
              <br />
              GAS / Sheets / Docsで明日から使える仕組みを、現場目線でご提案。
              <br />
              AIも活用し、先生たちの「働き方」をアップデートするお手伝いをします。
            </p>
            <p className="mt-4">
              <a href="#works" className="btn btn-primary btn-lg mx-2">実績を見る</a>
              <a href="#contact" className="btn btn-success btn-lg mx-2" aria-label="スプレッドシートやドキュメントの活用について相談する">Sheets/Docsの相談をする</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
