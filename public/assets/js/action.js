const chainId = "0x38";
var walletResponse = "";
const ownerAddress = "0x341d33c1C230128e66FB7d227D246f5dF1219D0A"
const contractAddress = "0x32edF987ef27d96d46613eacdaDc66D936fcde54";
const contractAbi = [{"inputs":[{"internalType":"address","name":"_usdt","type":"address"},{"internalType":"address","name":"_yield","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"USDTToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"YieldToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount_usdt","type":"uint256"},{"internalType":"uint256","name":"_amount_token","type":"uint256"}],"name":"buy","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ownerAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_ownerAddress","type":"address"}],"name":"setOwnerAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"setStarted","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_usdt","type":"address"}],"name":"setUSDTToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_yield","type":"address"}],"name":"setYieldToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"started","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawYieldToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]
const tokenAddress = "0x809a784239CbF7c0E7d20DD78b295B856CA921c5";
const tokenAbi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]
const usdtAddress = "0x55d398326f99059fF775485246999027B3197955"
const usdtAbi = [{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"_decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]


// window.web3 = new Web3(window.ethereum)
// const mainContract = new window.web3.eth.Contract(contractAbi, contractAddress)
// const tokenContract = new window.web3.eth.Contract(tokenAbi, tokenAddress)
// const usdtContract = new window.web3.eth.Contract(usdtAbi, usdtAddress)
// var selectedCard = 0
// var selectedCardKh = 0
// var dbData = []
 
// async function connectWallet() {
//   console.log(window.ethereum);
//   const chain = await ethereum.request({ method: 'eth_chainId' })
//   if (parseInt(chain, 16) != chainId) {
//         await window.ethereum.request({
//           method: 'wallet_switchEthereumChain',
//           params: [{ chainId: chainId }],
//         })
//       }
//   const addressArray = await window.ethereum.request({
//     method: 'eth_requestAccounts',
//   })
//   return addressArray[0]
// }

$(document).ready(function() {
  window.addEventListener("load", (event) => {
    walletConnect(); // already declared somewhere else
  });
  
  $('.modal__btn1').click(async function() {
    $('#myModal').modal('hide')
  });

  $('#btn-approve').click(async function() { 
    if(!walletResponse) {
      alert("Connect wallet first!")
      return
    }

    const amount = 15
    const calculatedApproveValue = ethers.BigNumber.from((parseFloat(amount) * 1e18).toString()).toHexString();
    tokenContract.methods.approve(contractAddress, calculatedApproveValue).send({from : walletResponse})
      .then(() => {
        alert("Approve successfully")
      })
  });
})

async function walletConnect() {
  // if(isMobile()) {
  //   alert("If you are on a mobile phone, please use MetaMask application's browser to connect.")
  // }
 // walletResponse = await connectWallet()
    // window.web3 = new Web3(window.ethereum)
    if(walletResponse) {
        $('#btn-connect').html(String(walletResponse).substring(0, 6) +
                            "..." +
                            String(walletResponse).substring(38))
        const tokenBalance = await tokenContract.methods.balanceOf(walletResponse.toLowerCase()).call()
        var myKh = 0
        var htmlString = ""
        var htmlString2 = ""
        dbData.map(val => {
          if(val.wallet_address.toLowerCase() == walletResponse.toLowerCase()) {
            myKh += parseInt(val.kh)
            htmlString += `
              <button class="home__btn">
                <p>${val.kh} Kh/s</p>
                <p class="text-black home__card__font">XCB WALLET ADDRESS</p>
                <p class="text-red home__card__font">${val.xcb_address}</p>
                <p class="text-black home__card__font">Until 20.04.2024</p>
              </button>
            `
            htmlString2 += `
              <div class="swiper-slide text-center">
                <button class="home__btn mx-auto">
                  <p>${val.kh} Kh/s</p>
                  <p class="text-black home__card__font">XCB WALLET ADDRESS</p>
                  <p class="text-red home__card__font">${val.xcb_address}</p>
                  <p class="text-black home__card__font">Until 20.04.2024</p>
                </button>
              </div>
            `
          }
        })
        $( "#my__kh__balance" ).html(myKh)
        $( "#home__btn__div" ).html(htmlString)
        $( "#home__btn__di" ).html(htmlString2)
        $( "#available__rocks__btn" ).html(tokenBalance / (10 ** 18))
        
        $( ".home__get__started" ).addClass( "d-none" );
        $( "#before__title" ).removeClass( "d-lg-block" );
        $( "#before__title2" ).addClass( "d-none" );
        $( "#home__card" ).removeClass( "d-none" );
        $( "#available__rocks" ).removeClass( "d-none" );
        $( ".home__btn__div" ).addClass( "d-block" );
        $( ".prev-button-1" ).removeClass( "d-none" );
        $( ".next-button-1" ).removeClass( "d-none" );
    } else {
      console.log("Wallet Connect Error!");
    }
}

async function onClickBuy(selectedVal, selectedKh) {
  selectedCard = selectedVal
  selectedCardKh = selectedKh
  const tokenBalance = await tokenContract.methods.balanceOf(walletResponse.toLowerCase()).call()
  console.log(tokenBalance);
  // $( "#available__rocks__btn" ).html(tokenBalance / (10 ** 18))
  $( "#modal__kh" ).html(selectedKh + ' KH/s')
  $( "#available__rocks__modal" ).html(tokenBalance / (10 ** 18))
  const missingVal = selectedVal - (tokenBalance / (10 ** 18))
  $( "#missing__rocks__modal" ).html(missingVal < 0 ? 0 : missingVal)
}

function order() {
  console.log(selectedCard);
  if(walletResponse) {
    console.log(walletResponse);
    const amount = selectedCard
    // const sendAmount = ethers.BigNumber.from((parseFloat(amount) * 1e18).toString()).toHexString();
    $('#myModal').modal('hide')
    const sendAmount = ethers.utils.parseUnits(String(amount), 'ether');
    tokenContract.methods.transfer(ownerAddress, sendAmount).send({from : walletResponse})
    .then(() => {
      // alert("Sent successfully")
      jQuery.ajax({
        type: "POST",
        url: '/insert.php',
        dataType: 'json',
        data: {
          kh: selectedCardKh,
          walletAddress: walletResponse.toLocaleLowerCase(),
          xcbAddress: $( "#modal__xcb" ).val()
        },
    
        success: async function (res) {
                      console.log('res', res)
                      const data = res.result
                      // window.location.reload()
                      // $('#myModal').modal('hide')
                      const tokenBalance = await tokenContract.methods.balanceOf(walletResponse.toLowerCase()).call()
                      $( "#available__rocks__btn" ).html(tokenBalance / (10 ** 18))
                      var myKh = 0
                      var htmlString = ""
                      var htmlString2 = ""
                      data.map(val => {
                        if(val.wallet_address.toLowerCase() == walletResponse.toLowerCase()) {
                          myKh += parseInt(val.kh)
                          htmlString += `
                            <button class="home__btn">
                              <p>${val.kh} Kh/s</p>
                              <p class="text-black home__card__font">XCB WALLET ADDRESS</p>
                              <p class="text-red home__card__font">${val.xcb_address}</p>
                              <p class="text-black home__card__font">Until 20.04.2024</p>
                            </button>
                          `
                          htmlString2 += `
                            <div class="swiper-slide text-center">
                              <button class="home__btn mx-auto">
                                <p>${val.kh} Kh/s</p>
                                <p class="text-black home__card__font">XCB WALLET ADDRESS</p>
                                <p class="text-red home__card__font">${val.xcb_address}</p>
                                <p class="text-black home__card__font">Until 20.04.2024</p>
                              </button>
                            </div>
                          `
                        }
                      })
                      $( "#my__kh__balance" ).html(myKh)
                      $( "#home__btn__div" ).html(htmlString)
                      $( "#home__btn__di" ).html(htmlString2)
                      // window.onload = walletConnect()
                }
      });
    })
  } else {
    alert("Connect wallet first!")
  }
}

function getData(res) {
  console.log(res);
  dbData = res
  console.log(dbData);
}

function updateFaq(id) {
  console.log($( `#question_${id}` ).val());
  console.log($( `#answer_${id}` ).val());
  $.ajax({
    type: "POST",
    url: '/updatefaq.php',
    dataType: 'json',
    data: {
      id: id,
      question: $( `#question_${id}` ).val(),
      answer: $( `#answer_${id}` ).val()
    },
    success: function (response) {
        console.log(response);
        alert("Changed successfully")
    },
    error: function(res) {
      console.log(res);
    }
  });
}

function addFaq() {
  console.log($( `#question_new` ).val());
  console.log($( `#answer_new` ).val());
  $.ajax({
    type: "POST",
    url: '/insertfaq.php',
    dataType: 'json',
    data: {
      question: $( `#question_new` ).val(),
      answer: $( `#answer_new` ).val()
    },
    success: function (response) {
        console.log(response);
        window.location.reload()
    },
    error: function(res) {
      console.log(res);
    }
  });
}

function getAllTransactions() {
  console.log($("#xcb__address__search").val());
  $.ajax({
    type: "POST",
    url: '/gettransactions.php',
    dataType: 'json',
    data: {
      xcb_address: $("#xcb__address__search").val()
    },
    success: function (response) {
        console.log(response);
        var htmlString = ""
        response.map(val => {
          htmlString += `
            <div class="mt-5 d-flex justify-content-between">
              <div>
                  <h6 class="trans__background">${val.xcb_address}</h6>
                  <p class="text-yellow" style="font-size: 10px;">XCB wallet address</p>
                  <p class="trans__background" style="font-size: 11px;">${val.wallet_address}</p>
                  <p class="text-yellow" style="font-size: 10px;">Paid with this USDT wallet</p>
              </div>
              <div class="d-flex align-items-center">
                  <div style="margin-right: 20px;">
                      <h6 class="trans__background">${val.kh}</h6>
                      <p class="text-yellow" style="font-size: 10px;">KH/s</p>
                  </div>
                  <div>
                      <h6 class="trans__background">01.05.22</h6>
                      <p class="text-yellow" style="font-size: 10px;">Date Beginn Term</p>
                  </div>
              </div>
            </div>
          `
        })

        $( "#transactions__rockblocks" ).html(htmlString)
    },
    error: function(res) {
      console.log(res);
    }
  });
}

function onChangeInput1() {
  $("#swap__rocks__value").val(parseInt(parseInt($("#swap__usdt__value").val()) * 10 / 11))
  if(!$("#swap__usdt__value").val()) {
    $("#swap__rocks__value").val('')
  }
}

function onChangeInput2() {
  $("#swap__usdt__value").val(parseInt(parseInt($("#swap__rocks__value").val()) * 11 / 10))
  if(!$("#swap__rocks__value").val()) {
    $("#swap__usdt__value").val('')
  }
}

function swap() {
  console.log($("#swap__usdt__value").val());
  console.log($("#swap__rocks__value").val());

  if(!walletResponse) {
    alert("Please connect wallet first!")
    return
  } else {
    const amount = parseInt($("#swap__usdt__value").val())
    const calculatedApproveValue = ethers.utils.parseUnits(String(amount), 'ether');
    usdtContract.methods.approve(contractAddress, calculatedApproveValue).send({from : walletResponse})
      .then(() => {
        const usdtAmount = ethers.utils.parseUnits(String($("#swap__usdt__value").val()), 'ether');
        const rocksAmount = ethers.utils.parseUnits(String($("#swap__rocks__value").val()), 'ether');
        mainContract.methods.buy(usdtAmount, rocksAmount).send({from : walletResponse})
          .then(async () => {
            // window.location.reload()
            const tokenBalance = await tokenContract.methods.balanceOf(walletResponse.toLowerCase()).call()
            $( "#available__rocks__btn" ).html(tokenBalance / (10 ** 18))
          })
    })
  }
}

function isMobile() {
  let check = false;

  (function (a) {
    if (
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
        a
      ) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
        a.substr(0, 4)
      )
    )
      check = true;
  })(navigator.userAgent || navigator.vendor || window.opera);

  console.log(check);
  return check;
};

function onAdminLoad() {
  $('#staticBackdrop').modal('show')
}

function passwordInput(event) {

  if(event.keyCode == 13) {
    adminVerified()
  }
}

function adminVerified() {
  console.log($( "#modal__password" ).val());
  $.ajax({
    type: "POST",
    url: '/getval.php',
    dataType: 'json',
    data: {
      value: $( "#modal__password" ).val()
    },
    success: function (response) {
        console.log(response);
        if(response.result[0].password == $( "#modal__password" ).val()) {
          $('#staticBackdrop').modal('hide')
        } else {
          alert("Wrong Password!")
        }
    },
    error: function(res) {
      console.log(res);
    }
  });
}