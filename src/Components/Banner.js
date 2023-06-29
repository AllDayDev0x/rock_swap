import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { useWeb3React } from "@web3-react/core";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
// Import Swiper styles
import "swiper/swiper.min.css";
import { contract_address, goerliNetworkChainId, mainNetworkChainId } from "../constants";

SwiperCore.use([Navigation]);

const MORALIS_API_KEY =
  "2kHumt68e3WgGgwT82mkFVMMmlpfnf3Mzi7KWXWnyHrO8lJqpV5aZeAiFts3yYzM";
const chain = "bsc"; // or 'bsc', 'polygon', etc.

function Banner() {
  const { account, activate, deactivate, error } = useWeb3React();

  // Define the current index of the active slide
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nfts, setNfts] = useState([]);
  const [totalKh, setTotalKh] = useState(0);

  useEffect(() => {
    if (account) {
      getNFTs(account, chain);
    }
  }, [account]);
  useEffect(() => {
    console.log("update nfts: ", nfts);
    let count = 0;
    nfts.map((nft) => {
      let temp = nft.name;
      if (temp == "255" ? (temp = "25") : (temp = temp))
        count += parseInt(temp, 10);
    });
    setTotalKh(count);
  }, [nfts]);
  const getNFTs = async (walletAddress, chain) => {
    try {
      const url = `https://deep-index.moralis.io/api/v2/${walletAddress}/nft?chain=${chain}`;
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "X-API-KEY": MORALIS_API_KEY,
        },
      });
      console.log("response--------------", response);
      const result = await response.json();
      console.log("result---------", result.result);
      const tempResult = [];
      result.result.map((item) => {
        const stringValue = item.token_address.toString();
        console.log("stringValue--------", stringValue);
        if (item.token_address == contract_address[mainNetworkChainId]) {
          console.log("same result");
          tempResult.push(JSON.parse(item.metadata));
        } else {
          console.log(
            "item.token_address",
            item.token_address,
            contract_address[mainNetworkChainId]
          );
        }
      });
      console.log("tempREsult: ", tempResult);
      setNfts(tempResult);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  // Define the function to move to the previous slide

  const onDisconnect = async () => {
    deactivate();
  };

  const [swiper, setSwiper] = useState();

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % 3);
    swiper.slideToLoop(currentIndex);
  };
  const handlePreviousClick = () => {
    setCurrentIndex((currentIndex - 1) % 3);
    swiper.slideToLoop(currentIndex);
  };

  const [swiper1, setSwiper1] = useState();

  const handleNextClick1 = () => {
    setCurrentIndex((currentIndex + 1) % nfts.length);
    swiper1.slideTo(currentIndex);
  };
  const handlePreviousClick1 = () => {
    setCurrentIndex((currentIndex - 1) % nfts.length);
    swiper1.slideTo(currentIndex);
  };

  const handleButtonClick = useCallback((swiper, direction) => {
    if (swiper.slidesPerView > 2) {
      swiper.slideTo(swiper.activeIndex + (direction === "next" ? 1 : -1));
    }
  }, []);
  const CustomNextButton = () => "Next";
  const CustomPrevButton = () => "Prev";
  return (
    <>
      <section className="banner__section1">
        <div className="container" style={{height: "100%"}}>
          <div className="w-100 d-flex align-items-center justify-content-between py-lg-5 py-3">
            <div className="d-flex">
              <h2
                className="logo_text1 title_rightspace"
                style={{
                  "text-shadow": "2px 0px 2px red",
                  color: "#F5C700",
                  "margin-bottom": "0px",
                }}>
                ROCKBLOCKS
              </h2>
              <Link to="/faq" style={{textDecoration: 'none'}}>
                <h2
                className="logo_text1"
                style={{
                  "text-shadow": "2px 0px 2px red",
                  color: "#F5C700",
                  "margin-bottom": "0px",
                }}>
                  FAQ
                </h2>
              </Link>
            </div>
            <div className="d-flex gap-3 align-items-center">
              <button className="btn sign__btn text-black" id="btn-connect">
                <div
                  className="card__boxbolt"
                  style={{marginLeft: "10px"}}>
                  {!account ? (
                    <div class="card__boxbolt" data-bs-toggle="modal" data-bs-target="#ConnectWalletModal">
                      <p
                        className="oneline"
                        style={{ marginBottom: "0px" }}
                        >
                        Connect <span>to Wallet</span>
                      </p>
                      <span
                        className="btn-badge hideimg"
                        style={{ marginLeft: "5px" }}>
                        <img src="/assets/images/arow-top.png" alt="arrow" />
                      </span>
                    </div>
                  ) : (
                    <>
                      <p
                        className="oneline"
                        style={{ marginBottom: "-5px" }}
                        onClick={onDisconnect}>
                        {account.substr(0, 10)}
                        <span>{"....."}</span>
                        {account.slice(-4)}
                      </p>
                      <span
                        className="btn-badge hideimg"
                        style={{ marginLeft: "5px" }}>
                        <img src="/assets/images/arow-top.png" alt="arrow" />
                      </span>
                    </>
                  )}
                </div>
              </button>
            </div>
          </div>
          {
            !account &&
            <div className="text-yellow caption__title">
              <h1 class="index__title1">ROCKBLOCKS</h1>
              <h1 class="mt-3 index__title2"> The Early Bull Catches the Blocks</h1>
            </div>
          }
          <div className="banner__content1 position-relative">
            <img
              src="/assets/images/star-redsmall.png"
              className="d-lg-block d-none  red___smallstar"
              alt="star"
            />
            { account && totalKh > 0 && (
              <div
                className="card__box card__yellow__home"
                id="card__3"
                style={{ margin: "auto" }}>
                <div className="card__dtl">
                  <h3 className="text-red" style={{ marginBottom: "0px" }}>
                    {totalKh} KH/S
                  </h3>
                </div>
              </div>
            )}
            <img
              src="/assets/images/star-red.png"
              className="d-lg-block d-none  red___bigstar"
              alt="star"
            />
            <img
              src="/assets/images/star-yellowsmall.png"
              className="yellow___star"
              alt="star"
            />

            {
              account && 
              <div className="container">
                <div
                  className="row  justify-content-center d-lg-block d-none swiperShow">
                  <Swiper
                    navigation={{
                      nextEl: ".swiper-button-next",
                      prevEl: ".swiper-button-prev",
                    }}
                    loop={false}
                    slidesPerView={nfts.length < 5 ? nfts.length : 5}
                    onSwiper={(swiper) => {
                      setSwiper1(swiper);
                      // swiper.params.navigation.nextEl = undefined;
                      // swiper.params.navigation.prevEl = undefined;
                      // swiper.navigation.update();
                      swiper.navigation.nextEl = CustomNextButton;
                      swiper.navigation.prevEl = CustomPrevButton;
                      swiper.navigation.init();
                    }}
                    onSlideChange={(swiper) => {
                      handleButtonClick(swiper, "next");
                      handleButtonClick(swiper, "prev");
                    }}
                    spaceBetween={parseInt("10px", 10)}>
                    {nfts &&
                      nfts.map((item, index) => {
                        return (
                          <>
                            <SwiperSlide key={index}>
                              <div className="col-12 d-flex position-relative justify-content-center small">
                                <div
                                  className="card__box card__black"
                                  id="card__1">
                                  <div className="card__img">
                                    <img src={item.image} alt="images" />
                                    {/* <img src="/assets/images/card0.png" alt="images" /> */}
                                  </div>
                                  <div className="card__dtl">
                                    <div className="card__boxbolt card__bolt__top">
                                      <img
                                        src="/assets/images/bolt_yellow.png"
                                        alt="images"
                                      />
                                      <p className="text-white mt-3">
                                        {item.name == 255 ? 25 : item.name} Kh/s
                                      </p>
                                    </div>
                                    <h4 className="text-yellow">666 USDT</h4>
                                  </div>
                                </div>
                              </div>
                            </SwiperSlide>
                          </>
                        );
                      })}
                  </Swiper>
                  {nfts.length > 0 && (
                    <>
                      <div
                        className=""
                        onClick={handlePreviousClick1}
                        style={{ position: "absolute", left: "40%", cursor: "pointer" }}>
                        <img src="/assets/images/arrow-left.png" alt="image" />
                      </div>
                      <div
                        className=""
                        style={{ position: "absolute", left: "53%", cursor: "pointer", cursor: "pointer" }}
                        onClick={handleNextClick1}>
                        <img src="/assets/images/arrow-right.png" alt="image" />
                      </div>
                    </>
                  )}
                </div>
                <div>
                  <div className="row p-xl-3 mt-lg-5 mt-4 justify-content-center d-lg-none d-block">
                    <Swiper
                      navigation={true}
                      loop={true}
                      slidesPerView={2}
                      onSwiper={(swiper) => {
                        setSwiper(swiper);
                      }}>
                      {nfts.length > 0 &&
                        nfts.map((item, index) => {
                          return (
                            <SwiperSlide key={0}>
                              <div className="row p-xl-3 mt-lg-5 mt-4 justify-content-center d-lg-none d-block">
                                <div className="swiper2 overflow-hidden col-12 d-flex gap-xxl-5 gap-md-4 position-relative justify-content-center">
                                  <div className="swiper-wrapper"></div>
                                  <div
                                    className="swiper-slide"
                                    style={{ display: "flex" }}>
                                    <div className=" col-12 d-flex gap-xxl-5 card__1__section gap-md-4 position-relative justify-content-center mx-1 small_banner">
                                      <div
                                        className="card__box card__black"
                                        id="card__1">
                                        <div className="card__img">
                                          <img src={item.image} alt="images" />
                                        </div>
                                        <div className="card__dtl">
                                          <div className="card__boxbolt card__bolt__top">
                                            <img
                                              src="/assets/images/bolt_yellow.png"
                                              alt="images"
                                            />
                                            <p className="text-white mt-3">
                                              {item.name == 255 ? 25 : item.name}
                                            </p>
                                          </div>
                                          <h4 className="text-yellow">
                                            666 USDT
                                          </h4>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </SwiperSlide>
                          );
                        })}
                    </Swiper>
                    {nfts.length > 0 && (
                      <>
                        <div
                          className="swiper-button-prev prev-button-2"
                          style={{ width: "auto", left: "30%"}}
                          onClick={handlePreviousClick}>
                          <img src="/assets/images/arrow-left.png" alt="image" />
                        </div>
                        <div
                          className="swiper-button-next next-button-2"
                          style={{ width: "auto", right: "30%"}}
                          onClick={handleNextClick}>
                          <img src="/assets/images/arrow-right.png" alt="image" />
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            }
          </div>
        </div>
      </section>
    </>
  );
}

export default Banner;
