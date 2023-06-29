function Footer() {
    
    return (
      <>
        <section class="footer__section">
            <footer>
                <div class="container">
                    <div class="row footer__row flex-lg-column flex-column-reverse  py-5 position-relative">
                        <div class="col-lg-2 d-lg-block d-none" style={{textAlign: "center"}}>
                            <img src="/assets/images/FOLLOW.png" class="hideimg" alt="image" style={{marginLeft:"-1rem", width: 175}}/>
                            <div class="d-flex gap-lg-4 gap-3 footer_up ">
                                <img src="/assets/images/star-redsmall.png" class="footer_icon_img" alt="image" style={{margin: "auto"}}/>
                            </div>
                        </div>
                        <div class="col-lg-2 d-lg-none d-block" style={{marginTop: "2rem"}}>                            
                                <img src="/assets/images/star-yellowsmall.png" class="footer_icon_img2" alt="image" style={{marginLeft: "3rem"}} /> 
                                <a href="https://twitter.com/rockblocks_dev?s=21" target="_blank"><img src="/assets/images/twitter.png" class="footer_icon_img3 footer_icon_img_mb2" alt="twitter"/></a>                   
                        </div>
                        <div class="col-lg-8" style={{textAlign: "center", marginTop:"3rem"}}>
                            <div class="d-flex justify-content-center">
                                <h1 class="h1__footer" style={{textAlign: "center!important"}}>
                                    <span class="text-white">Join Y<span class="text-yellow"><img src="/assets/images/happy.png" className="hideimg" alt="happy"/><span class="text-white"><span className="hideimg1 showimg">o</span>ur </span></span>
                                    <span className="text-yellow">community</span>
                                    </span>
                                </h1>
                            </div>
                            <div class="d-flex justify-content-center" style={{marginTop: "20px"}}>
                                <input type="text" class="trans__background__footer input__footer" id="inputID" placeholder="E-mail"/>
                            </div>
                            <div class="d-flex justify-content-center" style={{marginTop: "5px"}}>
                                <textarea class="trans__background__footer input__footer" id="inputID" rows="3" placeholder="Text"/>
                            </div>
                            <div class="d-flex justify-content-center" style={{marginTop: "40px"}}>   
                                <button class="btn send__btn text-black input__footer" id="btn-connect">                   
                                    <div style={{display:"flex", alignItems:"center"}}>
                                        <p style={{width:"25%"}}></p>
                                        <p style={{marginBlock:"auto", width:"50%"}}>Send us</p>
                                        <div  style={{width:"25%", display:"flex", justifyContent:"end"}}>
                                            <span className="btn-badge ">
                                                <img src="/assets/images/arow-top.png" alt="arrow" />
                                            </span>
                                        </div>
                                    </div>
                                </button>
                            </div>
                        </div>
                        <div class="col-lg-2 d-lg-block d-none" style={{textAlign: "center"}}>
                            <div class="d-flex gap-lg-4 gap-3 footer_down" style={{marginTop: "0rem!important"}}>
                                <img src="/assets/images/star-yellowsmall.png" class="footer_icon_img" alt="image" style={{margin: "auto"}}/>
                            </div>
                            <a href="https://twitter.com/rockblocks_dev?s=21" target="_blank"><img src="/assets/images/twitter.png" class="hideimg" alt="twitter"/></a> 
                        </div>
                        <div class="col-lg-2 d-lg-none d-block" style={{marginBottom: "2rem"}}>                            
                                <img src="/assets/images/FOLLOW.png" class="" alt="image" style={{marginTop: "-6rem", width: 175}}/>
                                <img src="/assets/images/star-redsmall.png" class="footer_icon_img2 footer_icon_img_mb" alt="image" />                        
                        </div>
                    </div>
                </div>
            </footer>
        </section>
      </>
    );
  }
  
  export default Footer;
  