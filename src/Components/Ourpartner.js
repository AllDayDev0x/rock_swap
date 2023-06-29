import React, {useRef} from "react";
import ReactPlayer from "react-player";
import { Autoplay } from "swiper";

function Ourpartner() {

  const videoRef = useRef(null);
  
  const handleVideoClick = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };

  return (
    <>
      <section class="our__partner__section position-relative">
        <div class="container" style={{ margin: "auto" }}>
          <div class="row my-lg-3 mb-lg-5 mb-3 our__parnter__h1 text-center" style={{display:"flex", justifyContent:"center"}}>
            <h1 class="display-5 titlename_h1 video_title_h1">How to get a Core Coin Wallet</h1>
          </div>
          <div class="row text-center d-flex justify-content-center" style={{"margin":"auto"}}>
            <div>
              <video width="90%" ref={videoRef} onClick={handleVideoClick} poster="/assets/images/video.png">
                <source src="/assets/images/video.MOV" />
              </video>
            </div>
          </div>
        </div>
      </section>
      <section class="our__partner__section position-relative">
        <div class="container">
          <div class="row my-lg-3 mb-lg-5 mb-3 our__parnter__h1 text-center">
            <h1 class="display-5 titlename_h1">Our partners</h1>
          </div>
          <div class="row partner__row justify-content-center">
            <div class="partner__logo__box">
              <img src="/assets/images/opeal-logo.png" alt="opeal logo" />
            </div>
            <div class="partner__logo__box">
              <img
                src="/assets/images/starlink-logo.png"
                style={{ transform: "translateX(22%)" }}
                alt="opeal logo"
              />
            </div>
          </div>
          <div>
            <img
              src="/assets/images/double-star.png"
              className="img__double__star"
              alt="image"
            />
            <img
              src="/assets/images/group-2-star.png"
              className="img__double__star2 d-lg-none d-block"
              alt="image"
            />
          </div>
        </div>
      </section>
      <section class="banned__img mt-lg-0 mt-4">
        <div class="w-100">
          <img
            src="/assets/images/ban.png"
            class="img-fluid w-100 d-lg-block d-none"
            alt="image"
          />
          <img
            src="/assets/images/banned-mobile.png"
            class="img-fluid w-100 d-lg-none d-block"
            alt="image"
          />
          <div className="d-lg-block d-none">
            <h1 class="text-center display-3 we__use__h1 text-capitalize text-red " style={{margin:"auto"}}>
              WE USE <span class="text-black">100%</span> RENEWABLE ENERGY
            </h1>
          </div>
          <div className="d-lg-none d-block">
            <h1 class="text-center display-3 we__use__h1 text-capitalize text-red " style={{margin:"auto"}}>
              WE USE <span class="text-black">100%</span>
            </h1>
            <h1 class="text-center display-3 we__use__h1 text-capitalize text-red" style={{margin:"auto"}}>
              RENEWABLE ENERGY
            </h1>
          </div>
        </div>
      </section>
    </>
  );
}

export default Ourpartner;
