window.addEventListener("load",giveMail)
var arr=JSON.parse(localStorage.getItem("mailList"))||[];
function giveMail(){
    arr.map( function(elem){
        var mail = document.getElementById("otp_mail");
        mail.innerText=elem.mail;
        var otp =document.getElementById("otp_show");
        otp.innerText=elem.otp;
    })
}
// for shifting of cursor from one box to another
var inputs = document.querySelectorAll('#req_otp > input');
for (let i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener('keydown', function(event) {
    if (event.key === "Backspace") {
      if (inputs[i].value == '') {
        if (i != 0) {
          inputs[i - 1].focus();
        }
      } else {
        inputs[i].value = '';
      }

    } else if (event.key === "ArrowLeft" && i !== 0) {
      inputs[i - 1].focus();
    } else if (event.key === "ArrowRight" && i !== inputs.length - 1) {
      inputs[i + 1].focus();
    } else if (event.key != "ArrowLeft" && event.key != "ArrowRight" && event.key!="Enter") {
      inputs[i].value = ''; 
    } else if (event.key =="Enter"){
      inputs[i].focus();
        check();
      }

  });
  //changing box if there is input of otp
  inputs[i].addEventListener('input', function() {
    if (i === inputs.length - 1 && inputs[i].value !== '') {
      return true;
    } else if (inputs[i].value !== '') {
      inputs[i + 1].focus();
    }
  });
}
// for checking the otp

document.querySelector("form").addEventListener("submit",check)
function check(){
    event.preventDefault();
    var inputs = document.querySelectorAll('#req_otp > input');
    let inputOtp="";
    for (let i = 0; i < inputs.length; i++){
        inputOtp+=inputs[i].value;
    }
    let realOtp =document.getElementById("otp_show").innerText;
    if(realOtp==inputOtp){
        window.location.href="navbar.html"
        localStorage.setItem("loginStatus",true);
        return true;
    }else{
      localStorage.setItem("loginStatus",false);
        alert("wrong OTP or OTP is missing");
    }
}
document.querySelector("#resend").addEventListener("click",SendOtpAgain)
var resendArr=JSON.parse(localStorage.getItem("otpList"))||[];
function SendOtpAgain(){
    var resendotp=generateOTP();
    var otp =document.getElementById("otp_show");
        otp.innerText=resendotp;
    resendArr.push(resendotp);
    localStorage.setItem("otpList",JSON.stringify(resendArr));
}
function generateOTP(){
    var digits='0123456789'
    var OTP='';
    for(var i=0;i<6;i++){
        OTP+=digits[Math.floor(Math.random()*10)];
    }
    return OTP;
}
