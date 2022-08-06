var header = document.getElementById("mylist");
var btns = header.getElementsByClassName("btn");
console.log(btns)
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}

function my_profile(){
  document.querySelector("#Manage-subs").style.display="none";
  document.querySelector("#my-profile").style.display="inline";
  document.querySelector("#Redeem-coupons").style.display="none";
}
function managesubs(){
  document.querySelector("#Manage-subs").style.display="inline";
  document.querySelector("#my-profile").style.display="none";
  document.querySelector("#Redeem-coupons").style.display="none";
}
function redeemcoupon(){
  document.querySelector("#Manage-subs").style.display="none";
  document.querySelector("#my-profile").style.display="none";
  document.querySelector("#Redeem-coupons").style.display="inline";
}

function signOut(){
  localStorage.setItem("paymentstatus",false);
  window.location.href="index.html";
}