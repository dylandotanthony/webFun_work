console.log("page loaded...");

function login(element) {
    if(element.innerText == "login") {
        element.innerText = "logout";
    } else {
        element.innerText = "login";
    }
}

function message() {
    alert("Ninja was liked!")
}

function hide(element) {
    element.remove();
}
