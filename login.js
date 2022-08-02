document.querySelector("form").addEventListener("submit",addMail)
var mailArr =JSON.parse(localStorage.getItem("mailList"))||[];
function addMail(){
    event.preventDefault();
    var mail_Otp={mail:document.getElementById("email").value,otp:generateOTP()}

    mailArr.push(mail_Otp);
    if(email==""){
        alert("Please fill email to continue")
    }else{
        localStorage.setItem("mailList",JSON.stringify(mailArr));
        window.location.href="otp.html"
    }
}
function generateOTP(){
    var digits='0123456789'
    var OTP='';
    for(var i=0;i<6;i++){
        OTP+=digits[Math.floor(Math.random()*10)];
    }
    return OTP;
}
