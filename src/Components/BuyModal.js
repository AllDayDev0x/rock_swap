import { useState } from "react";
import { useEffect, useRef } from "react";
import { useWeb3React } from "@web3-react/core";
import { NotificationManager } from "react-notifications";

import WarningModal from "./WarningModal";
import SuccessModal from "./SuccessModal";
import api from "../utils/api";

import emailjs from "emailjs-com";
const pay_method = [
  { id: "1", name: "Stripe" },
  { id: "2", name: "BTC" },
  { id: "3", name: "USDT" },
  { id: "4", name: "AVAX" },
  { id: "5", name: "BNB" },
  { id: "6", name: "ETH" },
  { id: "7", name: "SOL" },
  { id: "8", name: "DOGE" },
  { id: "9", name: "TRX" },
  { id: "10", name: "XMR" },
  { id: "11", name: "USDC" },
  { id: "12", name: "MATIC" },
];

function BuyModal({ buyCase }) {
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    subject: "",
    text: "",
  });

  const [walletAddress, setWalletAddress] = useState(null);
  const [email, setEmail] = useState(null);
  const [payMethod, setPayMethod] = useState(null);

  const wariningButton = useRef(null);
  const successButton = useRef(null);
  const closeButton = useRef(null);
  const { account, activate, deactivate, error } = useWeb3React();
  const [stateBuyCase, setStateBuyCase] = useState();

  useEffect(() => {
    let temp = buyCase;
    if (buyCase == 255) {
      temp = 25;
    }
    setStateBuyCase(temp);
  }, [buyCase]);
  const { from, to, subject, text } = formData;

  const handleChange_walletAddress = (event) => {
    setWalletAddress(event.target.value);
    // console.log('value is:', event.target.value);
  };
  const handleChange_email = (event) => {
    setEmail(event.target.value);
    // console.log('value is:', event.target.value);
  };
  const onClickBuyButton = async () => {
    if (!account) {
      NotificationManager.warning("Connect to your wallet.", "Warning");
      return 0;
    }

    if (walletAddress && email && payMethod) {
      const sendData = {
        wallet: account,
        email: email,
        xcbAddress: walletAddress,
        serverType: buyCase,
        coinId: payMethod,
      };

      const res = await api.post("/miningserver", JSON.stringify(sendData));
      console.log("pay_method[payMethod].name", pay_method[payMethod].name);
      let templateParams = {
        from: email,
        to: "",
        walletAddress: account,
        xcbAddress: walletAddress,
        serverType: buyCase + "Kh/s",
        payMethod: pay_method[payMethod - 1].name,
      };

      if (res.data.wallet) {
        NotificationManager.success(
          "You have listed the item successfully!",
          "Success"
        );
        emailjs
          // .send('<your_service_id>', '<your_template_id>', templateParams, '<your_user_id>')
          // .send('service_t38djji', 'template_dra1fcn', templateParams, '0Lx_Ob4doGIFMxyvq')
          .send('service_e0flmyl', 'template_iolpv46', templateParams, 'K_97JYfMkI2KSorMv')
          // .send(
          //   "service_t38djji",
          //   "template_dra1fcn",
          //   templateParams,
          //   "0Lx_Ob4doGIFMxyvq"
          // )
          .then(
            (response) => {
              console.log("response.text", response);
            },
            (error) => {
              console.log(error.text);
            }
          );
      }
      console.log("res", res.data);
    }
  };
  return (
    <>
      <div className="modal" id="myModal">
        <div className="modal-dialog modal-dialog-centered">
          <div
            className="modal-content modal_class"
            style={{
              "background-color": "#1e1e1e",
              "background-size": "cover",
              "border-radius": "30px",
            }}>
            <span className="container faq__title">
              <div style={{textAlign:"right"}}>
                <button
                  ref={closeButton}
                  type="button"
                  class="close_btn_buymodal"
                  data-bs-dismiss="modal"
                  aria-label="Close"><span><img src="/assets/images/close.png" alt="image" style={{width:"15px"}}/></span>
                </button>
              </div>
              <div className="d-lg-block d-none">
                <h1
                  className="display-5 text-yellow faq__title mt-lg-5 title_h1_buymodal">
                  You want now
                  <span>
                    <img src="/assets/images/Star_modal.png" alt="image" style={{marginLeft:"-1rem", marginRight:"2rem"}}/>
                  </span>
                  <span
                    className="text-red"
                    style={{
                      marginLeft: "-230px",
                      marginRight: "50px",
                      color: "red",
                      fontSize: "revert",
                    }}>
                    {stateBuyCase}KH/s
                  </span>
                  then give us all details
                </h1>
              </div>
              <div className="d-lg-none d-block" >
                <div className="title_h1_position_buymodal">
                  <h1
                    className="display-5 text-yellow mt-lg-5 title_h1_buymodal">
                    You want now    
                  </h1>
                  <h1
                    className="display-5 text-yellow mt-lg-5 title_h1_buymodal">
                    then give us all details
                  </h1>
                </div>
                <div className="" style={{textAlign:"right"}}>
                    <span style={{marginRight:"13%"}}>
                      <img src="/assets/images/Star_modal.png" alt="image" style={{width:"35%"}}/>
                        <span className="text-red title_value_buymodal">
                        {stateBuyCase}KH/s
                      </span>
                    </span> 
                    
                </div>
              </div>
              <h3 className="text-yellow mt-5 title_buymodal">YOUR XCB Wallet Address</h3>
              <div className="d-flex justify-content-center">
                <input
                  type="text"
                  className="trans__background_buymodal inputsize_buymodal1"
                  id="modal__xcb"
                  style={{width: "60%"}}
                  placeholder="cb36f90511369410bc204f631d11bb2f24870a0e4a7a"
                  onChange={handleChange_walletAddress}
                  value={walletAddress}
                />
              </div>
              <p className="text-yellow title_buymodal_p">
                Enter here your correct XCB wallet address for which you buy the
                KH/s
              </p>

              <h3 className="text-yellow mt-5 title_buymodal">Your e-mail address</h3>
              <div className="d-flex justify-content-center">
                <input
                  type="text"
                  className="trans__background_buymodal inputsize_buymodal2"
                  id="modal__xcb"
                  style={{width: "33%"}}
                  placeholder="rockblocks.dev@gmail.com"
                  onChange={handleChange_email}
                  value={email}
                />
              </div>

              <div
                className=" col-12 d-flex gap-xxl-5 card__1__section gap-md-4 position-relative justify-content-center icon1"
                style={{ "margin-top": "40px" }}>
                {
                  buyCase == 255 ?
                  <div className="icon">
                    <div className="stripe">
                      {payMethod == 1 ? (
                        <button
                          className="btn__coin"
                          style={{
                            borderStyle: "solid",
                            borderColor: "rgb(70, 70, 70)",
                          }}
                          onClick={() => setPayMethod(1)}>
                          <img src="/assets/images/icon1.png" alt="image" />
                        </button>
                      ) : (
                        <button
                          className="btn__coin"
                          onClick={() => setPayMethod(1)}>
                          <img src="/assets/images/icon1.png" alt="image" />
                        </button>
                      )}
                    </div>
                  </div>
                  :
                  <>
                <div className="icon">
                  <div>
                    {payMethod == 2 ? (
                      <button
                        className="btn__coin"
                        style={{
                          borderStyle: "solid",
                          borderColor: "rgb(70, 70, 70)",
                        }}
                        onClick={() => setPayMethod(2)}>
                        <img src="/assets/images/icon2.png" alt="image" />
                      </button>
                    ) : (
                      <button
                        className="btn__coin"
                        onClick={() => setPayMethod(2)}>
                        <img src="/assets/images/icon2.png" alt="image" />
                      </button>
                    )}
                  </div>
                  <div>
                    {payMethod == 3 ? (
                      <button
                        className="btn__coin"
                        style={{
                          borderStyle: "solid",
                          borderColor: "rgb(70, 70, 70)",
                        }}
                        onClick={() => setPayMethod(3)}>
                        <img src="/assets/images/icon3.png" alt="image" />
                      </button>
                    ) : (
                      <button
                        className="btn__coin"
                        onClick={() => setPayMethod(3)}>
                        <img src="/assets/images/icon3.png" alt="image" />
                      </button>
                    )}
                  </div>
                  <div>
                    {payMethod == 4 ? (
                      <button
                        className="btn__coin"
                        style={{
                          borderStyle: "solid",
                          borderColor: "rgb(70, 70, 70)",
                        }}
                        onClick={() => setPayMethod(4)}>
                        <img src="/assets/images/icon4.png" alt="image" />
                      </button>
                    ) : (
                      <button
                        className="btn__coin"
                        onClick={() => setPayMethod(4)}>
                        <img src="/assets/images/icon4.png" alt="image" />
                      </button>
                    )}
                  </div>
                  <div>
                    {payMethod == 5 ? (
                      <button
                        className="btn__coin"
                        style={{
                          borderStyle: "solid",
                          borderColor: "rgb(70, 70, 70)",
                        }}
                        onClick={() => setPayMethod(5)}>
                        <img src="/assets/images/icon5.png" alt="image" />
                      </button>
                    ) : (
                      <button
                        className="btn__coin"
                        onClick={() => setPayMethod(5)}>
                        <img src="/assets/images/icon5.png" alt="image" />
                      </button>
                    )}
                  </div>
                </div>
                <div className="icon">
                  <div>
                    {payMethod == 6 ? (
                      <button
                        className="btn__coin"
                        style={{
                          borderStyle: "solid",
                          borderColor: "rgb(70, 70, 70)",
                        }}
                        onClick={() => setPayMethod(6)}>
                        <img src="/assets/images/icon6.png" alt="image" />
                      </button>
                    ) : (
                      <button
                        className="btn__coin"
                        onClick={() => setPayMethod(6)}>
                        <img src="/assets/images/icon6.png" alt="image" />
                      </button>
                    )}
                  </div>
                  <div>
                    {payMethod == 7 ? (
                      <button
                        className="btn__coin"
                        style={{
                          borderStyle: "solid",
                          borderColor: "rgb(70, 70, 70)",
                        }}
                        onClick={() => setPayMethod(7)}>
                        <img src="/assets/images/icon7.png" alt="image" />
                      </button>
                    ) : (
                      <button
                        className="btn__coin"
                        onClick={() => setPayMethod(7)}>
                        <img src="/assets/images/icon7.png" alt="image" />
                      </button>
                    )}
                  </div>
                  <div>
                    {payMethod == 8 ? (
                      <button
                        className="btn__coin"
                        style={{
                          borderStyle: "solid",
                          borderColor: "rgb(70, 70, 70)",
                        }}
                        onClick={() => setPayMethod(8)}>
                        <img src="/assets/images/icon8.png" alt="image" />
                      </button>
                    ) : (
                      <button
                        className="btn__coin"
                        onClick={() => setPayMethod(8)}>
                        <img src="/assets/images/icon8.png" alt="image" />
                      </button>
                    )}
                  </div>
                  <div>
                    {payMethod == 9 ? (
                      <button
                        className="btn__coin"
                        style={{
                          borderStyle: "solid",
                          borderColor: "rgb(70, 70, 70)",
                        }}
                        onClick={() => setPayMethod(9)}>
                        <img src="/assets/images/icon9.png" alt="image" />
                      </button>
                    ) : (
                      <button
                        className="btn__coin"
                        onClick={() => setPayMethod(9)}>
                        <img src="/assets/images/icon9.png" alt="image" />
                      </button>
                    )}
                  </div>
                </div>
                <div className="icon">
                  <div>
                    {payMethod == 10 ? (
                      <button
                        className="btn__coin"
                        style={{
                          borderStyle: "solid",
                          borderColor: "rgb(70, 70, 70)",
                        }}
                        onClick={() => setPayMethod(10)}>
                        <img src="/assets/images/icon10.png" alt="image" />
                      </button>
                    ) : (
                      <button
                        className="btn__coin"
                        onClick={() => setPayMethod(10)}>
                        <img src="/assets/images/icon10.png" alt="image" />
                      </button>
                    )}
                  </div>
                  <div>
                    {payMethod == 11 ? (
                      <button
                        className="btn__coin"
                        style={{
                          borderStyle: "solid",
                          borderColor: "rgb(70, 70, 70)",
                        }}
                        onClick={() => setPayMethod(11)}>
                        <img src="/assets/images/icon11.png" alt="image" />
                      </button>
                    ) : (
                      <button
                        className="btn__coin"
                        onClick={() => setPayMethod(11)}>
                        <img src="/assets/images/icon11.png" alt="image" />
                      </button>
                    )}
                  </div>
                  <div>
                    {payMethod == 12 ? (
                      <button
                        className="btn__coin"
                        style={{
                          borderStyle: "solid",
                          borderColor: "rgb(70, 70, 70)",
                        }}
                        onClick={() => setPayMethod(12)}>
                        <img src="/assets/images/icon12.png" alt="image" />
                      </button>
                    ) : (
                      <button
                        className="btn__coin"
                        onClick={() => setPayMethod(12)}>
                        <img src="/assets/images/icon12.png" alt="image" />
                      </button>
                    )}
                  </div>
                </div>
                </>
                }
              </div>

              <p className="text-yellow choice_buymodal">
                Click on the Coin you want to pay your KH/s{" "}
              </p>

              <div className="mt-5 modal_button_class">
                <button className="modal__btn2" onClick={onClickBuyButton}>
                  <div className="">
                    <p
                      style={{
                        display: "flex",
                        "justify-content": "center",
                        "align-items": "center",
                        "margin-bottom": "0px",
                        "marginLeft": "1rem",
                        "color":"#000000",
                      }}>
                      PAY KH/s
                      <span className="btn-badge" style={{ "margin-left": "10px" }}>
                        <img src="/assets/images/arow-top.png" alt="arrow" />
                      </span>
                    </p>
                  </div>
                </button>
              </div>

              <div class="mt-5 d-flex justify-content-center">
                <p class="text-yellow description_buymodal" >
                  When you have entered all the information, click PAY. You will
                  receive an email in a few days when the KH/s are available. In
                  this email is link for a Discord customer service Chanel
                  rockblocks_dev#4882 . In this chat you will learn all further
                  steps. Please make sure that it is exactly this chat,
                  everything else is a scam.
                </p>
              </div>
            </span>
            <button
              ref={wariningButton}
              class="buy__btn1"
              id=""
              data-bs-toggle="modal"
              hidden
              data-bs-target="#warningModal"
              style={{ marginTop: "10px" }}>
              WarningModal
            </button>
            <button
              ref={successButton}
              class="buy__btn1"
              id=""
              data-bs-toggle="modal"
              hidden
              data-bs-target="#successModal"
              style={{ marginTop: "10px" }}>
              Success
            </button>
            <SuccessModal />
            <WarningModal />
          </div>
        </div>
      </div>
    </>
  );
}

export default BuyModal;
