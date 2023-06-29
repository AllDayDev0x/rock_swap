import React, { useState, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
// Import Swiper styles
import "swiper/swiper.min.css";

function CardsSection({ setBuyCase }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [swiper, setSwiper] = useState();

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % 3);
    swiper.slideToLoop(currentIndex);
  };
  const handlePreviousClick = () => {
    setCurrentIndex((currentIndex - 1) % 3);
    swiper.slideToLoop(currentIndex);
  };
  return (
    <>
      <section class="cards___section position-relative">
        <div class="container">
          <div style={{textAlign: "-webkit-center"}}>
            <h1 class="fw-500 rent__h1 d-lg-block d-none">
              For<span class="text-red"> Sale </span>each Plan is Valid for 1
              Year
            </h1>
            <img
              src="/assets/images/RARE1.png"
              class="rare___img d-lg-block d-none rare_small"
              alt="image"
            />
            <h1 class="fw-500 rent__h1 sale_h1 d-lg-none d-block">
              For<span class="text-red"> Sale </span>each Plan is Valid for 1
              Year
            </h1>
            <img
            src="/assets/images/RARE2.png"
            class="rare___img d-lg-none d-block rare_small"
            alt="image"
            />
          </div>    
          <div class="row p-xl-3 mt-lg-5 mt-4 justify-content-center d-lg-block d-none">
            <div>
              <div class=" col-12 d-flex gap-xxl-5 card__1__section gap-md-4 position-relative mx-1" style={{justifyContent:"space-around"}}>
                <div class="card__box card__black" id="card__1">
                  <div class="card__img">
                    <img src="/assets/images/card1.png" alt="images" />
                  </div>
                  <div class="card__dtl">
                    <div className="card__boxbolt">
                      <img src="/assets/images/bolt_red.png" className="bolt_space bolt_size" alt="images" />
                      <p class="text-white mt-3">25 Kh/s</p>
                    </div>
                    <h4 class="text-yellow">2500 USDT</h4>
                    <button
                      class="buy__btn1"
                      id=""
                      data-bs-toggle="modal"
                      data-bs-target="#myModal"
                      style={{ marginTop: "10px" }}
                      onClick={() => setBuyCase(25)}>
                      BUY
                    </button>
                  </div>
                </div>
                <div class="card__box card__red" id="card__1">
                  <div class="card__img">
                    <img src="/assets/images/card2.png" alt="images" />
                  </div>
                  <div class="card__dtl">
                    <div className="card__boxbolt">
                      <img src="/assets/images/bolt_yellow.png" className="bolt_space bolt_size" alt="images" />
                      <p class="text-white mt-3">50 Kh/s</p>
                    </div>
                    <h4 class="text-yellow">5000 USDT</h4>
                    <button
                      class="buy__btn12"
                      id=""
                      data-bs-toggle="modal"
                      data-bs-target="#myModal"
                      style={{ marginTop: "10px" }}
                      onClick={() => setBuyCase(50)}>
                      BUY
                    </button>
                  </div>
                </div>
                <div class="card__box card__yellow__home" id="card__1">
                  <div class="card__img">
                    <img src="/assets/images/card3.png" alt="images" />
                  </div>
                  <div class="card__dtl">
                    <div className="card__boxbolt">
                      <img src="/assets/images/bolt_red.png" className="bolt_space bolt_size" alt="images" />
                      <p class="text-black mt-3">75 Kh/s</p>
                    </div>
                    <h4 class="text-red">7500 USDT</h4>
                    <button
                      class="buy__btn1"
                      id=""
                      data-bs-toggle="modal"
                      data-bs-target="#myModal"
                      style={{ marginTop: "10px" }}
                      onClick={() => setBuyCase(75)}>
                      BUY
                    </button>
                  </div>
                </div>
              </div>
              <div class=" mt-5 col-12 d-flex gap-xxl-5 card__2__section position-relative gap-md-4 mx-1" style={{justifyContent:"space-around"}}>
                <div class="card__box card__yellow" id="card__1">
                  <div class="card__img">
                    <img src="/assets/images/card5.png" alt="images" />
                  </div>
                  <div class="card__dtl">
                    <div className="card__boxbolt">
                      <img src="/assets/images/bolt_red.png" className="bolt_space bolt_size" alt="images" />
                      <p class="text-black mt-3">100 Kh/s</p>
                    </div>
                    <h4 class="text-red">10000 USDT</h4>
                    <button
                      class="buy__btn1"
                      id=""
                      data-bs-toggle="modal"
                      data-bs-target="#myModal"
                      style={{ marginTop: "10px" }}
                      onClick={() => setBuyCase(100)}>
                      BUY
                    </button>
                  </div>
                </div>
                <div class="card__box card__black" id="card__1">
                  <div class="card__img">
                    <img src="/assets/images/card6.png" alt="images" />
                  </div>
                  <div class="card__dtl">
                    <div className="card__boxbolt">
                      <img src="/assets/images/bolt_red.png" className="bolt_space bolt_size" alt="images" />
                      <p class="text-white mt-3">125 Kh/s</p>
                    </div>
                    <h4 class="text-yellow">12500 USDT</h4>
                    <button
                      class="buy__btn1"
                      id=""
                      data-bs-toggle="modal"
                      data-bs-target="#myModal"
                      style={{ marginTop: "10px" }}
                      onClick={() => setBuyCase(125)}>
                      BUY
                    </button>
                  </div>
                </div>
                <div class="card__box card__red" id="card__1">
                  <div class="card__img">
                    <img src="/assets/images/card7.png" alt="images" />
                  </div>
                  <div class="card__dtl">
                    <div className="card__boxbolt">
                      <img src="/assets/images/bolt_yellow.png" className="bolt_space bolt_size" alt="images" />
                      <p class="text-white mt-3">150 Kh/s</p>
                    </div>
                    <h4 class="text-yellow">15000 USDT</h4>
                    <button
                      class="buy__btn12"
                      id=""
                      data-bs-toggle="modal"
                      data-bs-target="#myModal"
                      style={{ marginTop: "10px" }}
                      onClick={() => setBuyCase(150)}>
                      BUY
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row p-xl-3 mt-lg-5 mt-4 justify-content-center d-lg-none d-block">
            <Swiper
              navigation={true}
              slidesPerView={1}
              loop={1}
              onSwiper={(swiper) => {
                setSwiper(swiper);
              }}>
              <SwiperSlide key={0}>
                <div class="swiper-slide " style={{ display: "flex" }}>
                  <div class=" col-12 d-flex gap-xxl-5 card__1__section gap-md-4 position-relative mx-1 small" style={{justifyContent: "space-evenly"}}>
                    <div class="card__box card__black" id="card__1">
                      <div class="card__img">
                        <img src="/assets/images/card1.png" alt="images" />
                      </div>
                      <div class="card__dtl">
                        <div className="card__boxbolt">
                          <img
                            src="/assets/images/bolt_yellow.png"
                            className="bolt_space bolt_size"
                            alt="images"
                          />
                          <p class="text-white mt-3">25 Kh/s</p>
                        </div>
                        <h4 class="text-yellow">2500 USDT</h4>
                        <button
                          class="buy__btn1"
                          id=""
                          data-bs-toggle="modal"
                          data-bs-target="#myModal"
                          style={{ marginTop: "10px" }}
                          onClick={() => setBuyCase(25)}>
                          BUY
                        </button>
                      </div>
                    </div>
                    <div class="card__box card__red" id="card__1">
                      <div class="card__img">
                        <img src="/assets/images/card2.png" alt="images" />
                      </div>
                      <div class="card__dtl">
                        <div className="card__boxbolt">
                          <img
                            src="/assets/images/bolt_yellow.png"
                            className="bolt_space bolt_size"
                            alt="images"
                          />
                          <p class="text-white mt-3">50 Kh/s</p>
                        </div>
                        <h4 class="text-yellow">5000 USDT</h4>
                        <button
                          class="buy__btn12"
                          id=""
                          data-bs-toggle="modal"
                          data-bs-target="#myModal"
                          style={{ marginTop: "10px" }}
                          onClick={() => setBuyCase(50)}>
                          BUY
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide key={1}>
                <div class="swiper-slide " style={{ display: "flex" }}>
                  <div class=" col-12 d-flex gap-xxl-5 card__1__section gap-md-4 position-relative mx-1 small small1" style={{justifyContent: "space-evenly"}}>
                    <div class="card__box card__yellow__home" id="card__1">
                      <div class="card__img">
                        <img src="/assets/images/card3.png" alt="images" />
                      </div>
                      <div class="card__dtl">
                        <div className="card__boxbolt">
                          <img src="/assets/images/bolt_red.png" className="bolt_space bolt_size" alt="images" />
                          <p class="text-black mt-3">75 Kh/s</p>
                        </div>
                        <h4 class="text-red">7500 USDT</h4>
                        <button
                          class="buy__btn1"
                          id=""
                          data-bs-toggle="modal"
                          data-bs-target="#myModal"
                          style={{ marginTop: "10px" }}
                          onClick={() => setBuyCase(75)}>
                          BUY
                        </button>
                      </div>
                    </div>
                    <div class="card__box card__yellow__home" id="card__1">
                      <div class="card__img">
                        <img src="/assets/images/card5.png" alt="images" />
                      </div>
                      <div class="card__dtl">
                        <div className="card__boxbolt">
                          <img src="/assets/images/bolt_red.png" className="bolt_space bolt_size" alt="images" />
                          <p class="text-black mt-3">100 Kh/s</p>
                        </div>
                        <h4 class="text-red">10000 USDT</h4>
                        <button
                          class="buy__btn1"
                          id=""
                          data-bs-toggle="modal"
                          data-bs-target="#myModal"
                          style={{ marginTop: "10px" }}
                          onClick={() => setBuyCase(100)}>
                          BUY
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide key={0}>
                <div class="swiper-slide " style={{ display: "flex" }}>
                  <div class=" col-12 d-flex gap-xxl-5 card__1__section gap-md-4 position-relative mx-1 small small1" style={{justifyContent: "space-evenly"}}>
                    <div class="card__box card__black" id="card__1">
                      <div class="card__img">
                        <img src="/assets/images/card6.png" alt="images" />
                      </div>
                      <div class="card__dtl">
                        <div className="card__boxbolt">
                          <img
                            src="/assets/images/bolt_red.png"
                            className="bolt_space bolt_size"
                            alt="images"
                          />
                          <p class="text-white mt-3">125 Kh/s</p>
                        </div>
                        <h4 class="text-yellow">12500 USDT</h4>
                        <button
                          class="buy__btn1"
                          id=""
                          data-bs-toggle="modal"
                          data-bs-target="#myModal"
                          style={{ marginTop: "10px" }}
                          onClick={() => setBuyCase(125)}>
                          BUY
                        </button>
                      </div>
                    </div>
                    <div class="card__box card__red" id="card__1">
                      <div class="card__img">
                        <img src="/assets/images/card7.png" alt="images" />
                      </div>
                      <div class="card__dtl">
                        <div className="card__boxbolt">
                          <img
                            src="/assets/images/bolt_yellow.png"
                            className="bolt_space bolt_size"
                            alt="images"
                          />
                          <p class="text-white mt-3">150 Kh/s</p>
                        </div>
                        <h4 class="text-yellow">15000 USDT</h4>
                        <button
                          class="buy__btn12"
                          id=""
                          data-bs-toggle="modal"
                          data-bs-target="#myModal"
                          style={{ marginTop: "10px" }}
                          onClick={() => setBuyCase(150)}>
                          BUY
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="d-lg-none d-block rare_title_position" style={{textAlign:"center"}}>
            <h1 class="text-red picies__8">
              Includes electricity and service for 1 year
            </h1>
          </div>
          <div class="electricity__edition__mb d-lg-block d-none">
              <p className="limit_p_bottom pfont electricity_p">
                Includes electricity and service for 1 year
              </p>
          </div>
          <div>
            <div
              class="swiper-button-prev prev-button-2 d-lg-none d-block"
              onClick={handlePreviousClick} style={{marginTop: "-7px"}}>
              <img src="/assets/images/arrow-left_red.png" alt="image" />
            </div>
            <div
              class="swiper-button-next next-button-2 d-lg-none d-block"
              onClick={handleNextClick} style={{marginTop: "-7px"}}>
              <img src="/assets/images/arrow-right_red.png" alt="image" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CardsSection;
