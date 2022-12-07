let keyInput = document.getElementById("keyInput");
let password = document.getElementById("password");
let password2 = document.getElementById("password-2");
let span1 = document.getElementById("span1");
let span2 = document.getElementById("span2");
let span3 = document.getElementById("span3");

keyInput.addEventListener("keyup", myFunction);
password.addEventListener("keyup", myFunction2);
password2.addEventListener("keyup", myFunction3);


function myFunction(e) {
    console.log(e.target.value)
    if (keyInput.value.trim().length < 3) {
        span1.style.display = "block";
    }
    else {
        span1.style.display = "none";
    }
}

function myFunction2() {
    if (password.value.trim().length < 5) {
        span2.style.display = "block";
    }
    else {
        span2.style.display = "none";
    }
}
function myFunction3() {
    if (password2.value.trim().length < 3) {
        span3.style.display = "block";
    }
    else {
        span3.style.display = "none";
    }
}
