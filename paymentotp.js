document.querySelector("form").addEventListener("submit", checktransactionOTP);

function checktransactionOTP() {
  event.preventDefault();
  var inputtransactionotp = document.querySelector("#transactionOTP").value;
  if (inputtransactionotp == "1234") {
    localStorage.setItem("paymentstatus", true);
    alert("Payment Sucessfull");
    window.location.href = "cricPlus.html";
  } else {
    alert("Payment Failed");
    window.location.replace("PaymentGatway.html");
  }
}