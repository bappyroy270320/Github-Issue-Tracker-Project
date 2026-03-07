document.getElementById("login-btn").addEventListener("click", function(){
    const adminInput = document.getElementById("input-admin");
    const userName = adminInput.value;
    console.log(userName);

    const inputPin = document.getElementById("input-pin");
    const pin = inputPin.value;
    console.log(pin);


    if(userName=="admin" && pin=="admin123"){
        alert("Login Success");

        
        window.location.assign("home.html");
    }else{
        alert("Login Failed");
        return;
    }
});