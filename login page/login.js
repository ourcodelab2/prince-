let eyeicon = document.getElementById("eyeicon");
let password = document.getElementById("password");

eyeicon.onclick = function(){
    if (password.type == "password"){
        password.type = "text";
        eyeicon.className = "fa-regular fa-eye-slash";
    }else {
        password.type = "password"
        eyeicon.className = "fa-regular fa-eye";
    }
}
