document.querySelector("form").addEventListener("submit", checktransactionOTP);

function checktransactionOTP() {
  event.preventDefault();
  var inputtransactionotp = document.querySelector("#transactionOTP").value;
  if (inputtransactionotp == "1234") {
    localStorage.setItem("paymentstatus", true);
    alert("Payment Sucessfull");
    window.location.href = "men.html";
  } else {
    alert("Payment Failed");
    window.location.replace("PaymentGatway.html");
  }
}
<form action="">
<label for="">Enter Otp</label>
<input type="number" id="transactionOTP" max="9999" min="1000" />
<input type="submit" name="" id="" />
</form>