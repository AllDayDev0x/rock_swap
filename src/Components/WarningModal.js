function WarningModal({}) {
  return (
    <>
      <div class="modal" id="warningModal">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content modal_class  warning_modal">
            <span
              class="container faq__title"
              style={{
                backgroundColor: "white",
                width: "280px",
                height: "380px",
                borderRadius: "10px",
              }}>
              <div
                style={{ padding: "25px", fontSize: "25px" }}
                className="text-red faq__title mt-lg-5">
                <img src="/assets/images/warning.png" alt="image" />
              </div>
              <div style={{ fontSize: "20px" }}>Connect to the Wallet</div>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default WarningModal;
