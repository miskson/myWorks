function init() {
    // setting up time for countdown
    var countdownDate = new Date("Jul 30, 2021 18:32:00").getTime();
    var countdown = true;
    //update timer each second
    var coundtdownUpdate = setInterval(function () {
        //current time
        var now = new Date().getTime();

       //counting down time gap between now and countdownDate
        var timeGap = countdownDate - now;

        //counting time for days, hours, minutes and seconds
        var days = Math.floor(timeGap / (1000 * 60 * 60 * 24));
        var hours = Math.floor((timeGap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((timeGap % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeGap % (1000 * 60)) / 1000);

        //display result on page
        document.getElementById('timer__count').innerHTML = days + 'D: ' + hours + 'H: ' + minutes + 'M: ' + seconds + 'S';

        if (timeGap < 0) {
            clearInterval(coundtdownUpdate);
            document.getElementById('timer__count').innerHTML = 'Time is up! Next discount coming soon.';
            countdown = false;
        }
    }, 1000);
}
window.onload = init();

document.getElementById("firstButton").onclick = buttonHandler;
document.getElementById("secondButton").onclick = buttonHandler;
document.getElementById("thirdButton").onclick = buttonHandler;

function buttonHandler(e){
    price = document.getElementsByClassName('price');
    if(e.target.id == "firstButton"){
        openPopup("BakingSoda 6 pack for " + price[0].innerHTML);
    }
    if(e.target.id == "secondButton"){
        openPopup("BakingSoda 30 pack for " + price[1].innerHTML);
    }
    if(e.target.id == "thirdButton"){
        openPopup("BakingSoda 90 pack for " + price[2].innerHTML);
    }
}

function openPopup(message){
    var popup = document.getElementById("popup");
    var popupName = document.getElementById("productName");
    popup.style.visibility = "visible";
    popupName.innerHTML = message;
}

function closePopup(){
    var popup = document.getElementById("popup");
    popup.style.visibility = "hidden";
}
