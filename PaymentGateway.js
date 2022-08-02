//DUMMMY PAYMENT CARD DATA HARDCODING
var paymentDatabase = [
  {
    cardNumber: "123412341234",
    cardExpiry: "12/34",
    cardCVV: "123",
  },
  {
    cardNumber: 111122223333,
    cardExpiry: "11/22",
    cardCVV: 111,
  },
  {
    cardNumber: 123456789123,
    cardExpiry: "12/23",
    cardCVV: 321,
  },
];

//EXTRACTING DATES FOR THE PLAN DURATION
{
  date = new Date();
  year = date.getFullYear();
  month = date.getMonth() + 1;
  day = date.getDate();
  document.getElementById("todaysdate").innerHTML =
    day + "/" + month + "/" + year;
  document.getElementById("planexpirydate").innerHTML =
    day + "/" + month + "/" + (year + 10);
}

//PAYMENT LOGIC PROGRAMMING STARTED
localStorage.setItem("paymentDatabase", paymentDatabase);
document.querySelector("form").addEventListener("submit", getCredentials);
var failedPayment = 0;
function getCredentials(event) {
  event.preventDefault();
  if (failedPayment >= 5) {
    confirm("Payment failed due to wrong credentaials.");
    window.location.href = "index.html";
  }

  var cardHolder = document.querySelector("#cardHolder").value;
  var cardNumber = document.querySelector("#cardNumber").value;
  var cardExpiry = document.querySelector("#cardExpiry").value;
  var cardCVV = document.querySelector("#cardCVV").value;
  var cardObject = {
    cardHolder: cardHolder,
    cardNumber: cardNumber,
    cardExpiry: cardExpiry,
    cardCVV: cardCVV,
  };
  if(cardHolder == "" || cardExpiry =="" || cardCVV ==""|| cardNumber==""){
    confirm("Please fil all the Details."); return;
  }
  var boxstatus = document.getElementById("agreetnc");
  console.log(boxstatus);
  if (!boxstatus.checked) {
    confirm("Please accept Terms & Conditions.");
    return; 
  }
  console.log(cardObject);
  localStorage.setItem("cardinfo", JSON.stringify(cardObject));

  checkCredentials(cardObject);
}

function checkCredentials(cardObject) {
  var cardMatch = paymentDatabase.filter(function (element) {
    return (
      element.cardNumber == cardObject.cardNumber &&
      element.cardExpiry == cardObject.cardExpiry &&
      element.cardCVV == cardObject.cardCVV
    );
  });

  if (cardMatch != 0) {
    window.location.href = "otp.html";
  } else {
    confirm("You have entered WRONG Payment Details");
    failedPayment++;
  }
}
