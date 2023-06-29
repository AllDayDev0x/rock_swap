import React, { useState, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
// Import Swiper styles
import "swiper/swiper.min.css";
function LimitSection({ setBuyCase }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [swiper, setSwiper] = useState();

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % 2);
    swiper.slideToLoop(currentIndex);
  };
  const handlePreviousClick = () => {
    setCurrentIndex((currentIndex - 1) % 2);
    swiper.slideToLoop(currentIndex);
  };
  return (
    <>
      <section class="limit___section position-relative">
        <div class="container">
          <img
            src="/assets/images/legendary1.png"
            class="lagendary___img d-lg-block d-none"
            alt="image"
          />
          
          <div class="text-center position-relative d-lg-block d-none">
            <h1 class="fw-500 rent__h1" style={{ fontSize: 50}}>
              For Sale <span class="text-red limit__edi">LIMIT EDITION</span>
            </h1>
          </div>
          <div class="d-lg-block d-none">
            <div class="row my-5" style={{justifyContent:"space-evenly"}}>
              <div class="limit__card">
                <div class="limit__img">
                  <img src="/assets/images/limit-card1.png" alt="image" />
                </div>
                <div class="limit__dtls text-center py-2 mt-2">
                  <div className="card__boxbolt">
                    <img src="/assets/images/bolt_yellowbig.png" className="bolt_space" alt="images" />
                    <p class="text-white mt-3">200 Kh/s</p>
                  </div>
                  <h4 class="text-yellow">18000 USDT</h4>
                </div>
                <div class="limit__btn d-flex justify-content-center mb-3">
                  <button
                    data-bs-toggle="modal"
                    data-bs-target="#myModal"
                    onClick={() => setBuyCase(200)}>
                    BUY
                  </button>
                </div>
              </div>
              <div class="limit__card">
                <div class="limit__img">
                  <img src="/assets/images/limit-card2.png" alt="image" />
                </div>
                <div class="limit__dtls text-center py-2 mt-2">
                  <div className="card__boxbolt">
                    <img src="/assets/images/bolt_yellowbig.png" className="bolt_space" alt="images" />
                    <p class="text-white mt-3">500 Kh/s</p>
                  </div>
                  <h4 class="text-yellow">40000 USDT</h4>
                </div>
                <div class="limit__btn d-flex justify-content-center mb-3">
                  <button
                    data-bs-toggle="modal"
                    data-bs-target="#myModal"
                    onClick={() => setBuyCase(500)}>
                    BUY
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="row gap-5 justify-content-center my-5 d-lg-none d-block">
            <div class="swiper swiper3 py-3 overflow-visible">
              <img src="/assets/images/legendary2.png" class="lagendary___img d-lg-none d-block" alt="image"/>
              <div class="swiper-wrapper">
                <div class="limit__edition__mb d-lg-none d-block">
                  <p className="limit_p_bottom pfont">LIMIT EDITION</p>
                </div>
                <Swiper
                  navigation={true}
                  slidesPerView={1}
                  loop={1}
                  onSwiper={(swiper) => {
                    setSwiper(swiper);
                  }}>
                  <SwiperSlide key={0}>
                    <div class="swiper-slide" style={{height: 350}}>
                      <div class="limit__card mx-auto">
                        <div class="limit__img">
                          <img
                            src="/assets/images/limit-card1.png"
                            alt="image"
                          />
                        </div>
                        <div class="limit__dtls text-center py-2 mt-2">
                          <div className="card__boxbolt">
                            <img
                              src="/assets/images/bolt_yellowbig.png"
                              className="bolt_space bolt_sizebig"
                              alt="images"
                            />
                            <p class="text-white mt-3">200 Kh/s</p>
                          </div>
                          <h4 class="text-yellow">18000 USDT</h4>
                        </div>
                        <div class="limit__btn d-flex justify-content-center mb-3">
                          <button
                            data-bs-toggle="modal"
                            data-bs-target="#myModal"
                            onClick={() => setBuyCase(200)}>
                            BUY
                          </button>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide key={0}>
                    <div class="swiper-slide" style={{height: 350}}>
                      <div class="limit__card mx-auto">
                        <div class="limit__img">
                          <img
                            src="/assets/images/limit-card2.png"
                            alt="image"
                          />
                        </div>
                        <div class="limit__dtls text-center py-2 mt-2">
                          <div className="card__boxbolt">
                            <img
                              src="/assets/images/bolt_yellowbig.png"
                              className="bolt_space bolt_sizebig"
                              alt="images"
                            />
                            <p class="text-white mt-3">500 Kh/s</p>
                          </div>
                          <h4 class="text-yellow">40000 USDT</h4>
                        </div>
                        <div class="limit__btn d-flex justify-content-center mb-3">
                          <button
                            data-bs-toggle="modal"
                            data-bs-target="#myModal"
                            onClick={() => setBuyCase(500)}>
                            BUY
                          </button>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
              
              <div
                class="swiper-button-prev prev-button-2"
                onClick={handlePreviousClick}>
                <img src="/assets/images/arrow-left_red.png" alt="image" />
              </div>
              <div
                class="swiper-button-next next-button-2"
                onClick={handleNextClick}>
                <img src="/assets/images/arrow-right_red.png" alt="image" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default LimitSection;
