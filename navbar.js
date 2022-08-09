function signOut(){
    localStorage.setItem("paymentstatus",false);
    localStorage.setItem("loginStatus", false);
    window.location.href="index.html";
  }