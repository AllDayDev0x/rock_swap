import React, { useState, useEffect, useRef } from "react";
import { useWeb3React } from "@web3-react/core";
import { injected, walletconnect, coinbasewallet } from "../connectors";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";

const ConnectWalletModal = ({}) => {
  const { account, activate, deactivate, error } = useWeb3React();
  const [isConnecting, setIsConnecting] = useState(false);
  const [modalshow, setModalshow] = useState(true);
  const closeButton = useRef(null);

  const [walletAddress, setWalletAddress] = useState(null);
  const [email, setEmail] = useState(null);
  const [payMethod, setPayMethod] = useState(null);

  const handleChange_walletAddress = (event) => {
    setWalletAddress(event.target.value);
    // console.log('value is:', event.target.value);
  };
  const handleChange_email = (event) => {
    setEmail(event.target.value);
    // console.log('value is:', event.target.value);
  };
  // useEffect(() => {
  //     injected
  //     .isAuthorized()
  //     .then((isAuthorized) => {
  //       if(isAuthorized) {
  //         console.log("~~~~~wallet is alrady connected.")
  //         activate(injected, async (error) => {
  //           console.log(error);
  //         });
  //       }
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     })
  // }, [])
  const onclickMetaMaskConnect = async () => {
    setIsConnecting(true);

    try {
      await activate(injected);
    } catch (err) {
      console.error(err);
    }

    setIsConnecting(false);
  };
  const isMetamaskInstalled = () => {
    if (typeof window.ethereum !== "undefined") {
      return true;
    }

    return false;
  };

  // const onDisconnect = () => {
  //   deactivate( injected );
  // }

  // const disconnectWallet = async () => {
  //   deactivate();
  //   refreshState();
  // };

  const onclickWalletconnect = async () => {
    setIsConnecting(true);

    try {
      console.log("wallet connect");

      await activate(walletconnect);
    } catch (err) {
      console.error(err);
    }

    setIsConnecting(false);
  };

  const onclickCoinBaseConnect = async () => {
    setIsConnecting(true);

    try {
      console.log("wallet connect");

      await activate(coinbasewallet);
    } catch (err) {
      console.error(err);
    }

    setIsConnecting(false);
  };
  if (account) {
    // alert(account)
    closeButton.current.click();
  }
  return (
    <div class="modal" id="ConnectWalletModal">
      <div class="modal-dialog modal-dialog-centered">
        <div
          class="modal-content modal_class"
          style={{
            "background-color": "#1e1e1e",
            "background-size": "cover",
            "border-radius": "30px",
          }}>
          <span class="container">
            <div style={{textAlign:"right"}}>
              <button
                ref={closeButton}
                type="button"
                class="close_btn_buymodal"
                data-bs-dismiss="modal"
                aria-label="Close"><span><img src="/assets/images/close.png" alt="image" style={{width:"15px"}}/></span>
              </button>
            </div>
            <div style={{textAlign:"center", marginTop:"7%"}}>
              <h1 className="text-brightyellow name_h1_CW_modal">Connect to Wallet</h1>
            </div>
            <div style={{display:"flex", justifyContent:"center", marginTop:"5%", marginBottom:"5%"}}> 
              <button className="connect__btn" onClick={onclickMetaMaskConnect}>
                <div className="item_position_CW_modal">
                  <span className="name_p_CW_modal">MetaMask</span>
                  <span><img src="/assets/images/metamask.png" alt="image" style={{borderRadius:"9999px", width:"70px"}}/></span>
                </div>
              </button>
            </div>
            <div style={{display:"flex", justifyContent:"center", marginTop:"5%", marginBottom:"5%"}}> 
              <button className="connect__btn" onClick={onclickWalletconnect}>
                <div className="item_position_CW_modal">
                  <span className="name_p_CW_modal">WalletConnect</span>
                  <span><img src="/assets/images/walletconnect.png" alt="image" style={{borderRadius:"9999px", width:"70px"}}/></span>
                </div>
              </button>
            </div>
            <div style={{display:"flex", justifyContent:"center", marginTop:"5%", marginBottom:"5%"}}> 
              <button className="connect__btn" onClick={onclickCoinBaseConnect}>
                <div className="item_position_CW_modal">
                  <span className="name_p_CW_modal">CoinBase</span>
                  <span><img src="/assets/images/coinbase.png" alt="image" style={{borderRadius:"9999px", width:"70px"}}/></span>
                </div>
              </button>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ConnectWalletModal;
