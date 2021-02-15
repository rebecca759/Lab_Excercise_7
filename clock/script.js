var hour_hand = document.getElementById('hr-hand');
var min_hand = document.getElementById('min-hand');
var sec_hand = document.getElementById('sec-hand');

function clock() {

    var day = new Date();
    var hour = day.getHours() % 12; //0 - 23
    var minute = day.getMinutes();
    var second = day.getSeconds();

    var hourDeg = (hour * 30) + (0.5 * minute); // every hour, 30 deg. 30 / 60
    var minDeg = (minute * 6) + (0.1 * second); //every minute, 6 deg. 6/60
    var secondDeg = second * 6; //360 / 60

    hour_hand.style.transform = 'rotate(' + hourDeg + 'deg';
    min_hand.style.transform = 'rotate(' + minDeg + 'deg';
    sec_hand.style.transform = 'rotate(' + secondDeg + 'deg';

    setTimeout(clock,1000);
}

clock() 