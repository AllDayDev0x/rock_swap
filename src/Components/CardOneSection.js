function CardOneSection({ setBuyCase }) {
  return (
    <>
      <section className="cards___section position-relative">
        <div className="container">
          <img
            src="/assets/images/EASY.png"
            class="easy___img d-lg-block rare_small"
            alt="image"
          />
          <div>
            <h1 class="fw-500 rent__h1 d-lg-block d-none">
              For<span class="text-red"> Rent One Month</span>
            </h1>
            <h1 class="fw-500 rent__h1 rent___h1 d-lg-none d-block">
              For<span class="text-red"> Rent One Month</span>
            </h1>
          </div>
          <div class="row p-xl-3 mt-lg-5 mt-4 justify-content-center d-lg-block d-none">
            <div class=" col-12 d-flex gap-xxl-5 card__1__section gap-md-4 position-relative justify-content-center mx-1">
              <div class="rent__card">
                <div class="limit__img">
                  <img src="/assets/images/card0.png" alt="image" />
                </div>
                <div class="limit__dtls text-center py-2 mt-2">
                  <div className="card__boxbolt" style={{marginTop:"-1rem", marginBottom:"1rem"}}>
                    <img src="/assets/images/bolt_yellowbig.png" className="bolt_space" alt="images" />
                    <p class="text-white mt-3">25 Kh/s</p>
                  </div>
                  <h4 class="text-yellow">666 USDT</h4>
                </div>
                <div class="rent__btn d-flex justify-content-center mb-3">
                  <button
                    data-bs-toggle="modal"
                    data-bs-target="#myModal"
                    style={{ marginTop: "10px" }}
                    onClick={() => setBuyCase(255)}>
                    BUY
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="row p-xl-3 mt-lg-5 mt-4 justify-content-center d-lg-none d-block">
            <div class="swiper2 overflow-hidden col-12 d-flex gap-xxl-5 card__1__section gap-md-4 position-relative justify-content-center">
              <div class="swiper-wrapper">
                <div class="swiper-slide" style={{height: 350}}>
                  <div class="rent__card mx-auto">
                    <div class="limit__img">
                      <img src="/assets/images/card0.png" alt="image" />
                    </div>
                    <div class="limit__dtls text-center py-2 mt-2">
                      <div className="card__boxbolt" style={{marginTop:"-1rem", marginBottom:"1rem"}}>
                        <img src="/assets/images/bolt_yellowbig.png" className="bolt_space bolt_sizebig" alt="images" />
                        <p class="text-white mt-3">25 Kh/s</p>
                      </div>
                      <h4 class="text-yellow">666 USDT</h4>
                    </div>
                    <div class="rent__btn d-flex justify-content-center mb-3">
                      <button
                        data-bs-toggle="modal"
                        data-bs-target="#myModal"
                        style={{ marginTop: "10px" }}
                        onClick={() => setBuyCase(255)}>
                        BUY
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CardOneSection;
