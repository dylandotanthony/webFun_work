function setnewimage(){
    document.getElementById("succc1").src ="./assets/succulents-2.jpg";
}

function setoldimage(){
    document.getElementById("succc1").src ="./assets/succulents-1.jpg";
}


function bye() {
    var d = document.getElementById("alert1");
    if (d.style.display === "none") {
    d.style.display = "block";
    } else {
    d.style.display = "none";
    }
}