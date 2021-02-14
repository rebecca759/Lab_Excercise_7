// UI Variables 
const timerDemo = document.getElementById("timerDemo");
//timer 
function startTime() {
    //retrieve date
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();

    //get the AM/PM value
    let am_pm = h > 12 ? 'PM' : 'AM';

    //Convert the hour to 12 format
    h = h % 12 || 12;

    //add zero
    m = addZero(m);
    s = addZero(s);
    //Assign to the UI[p]
    timerDemo.innerHTML = `${h} : ${addZero(m)} : ${addZero(s)} ${am_pm}`;
    //run the timer recursively
    setTimeout(startTime, 500);

}

function addZero(i) {
    //add zero in front of numbers < 10
    if (i < 10) {
        i = '0' + i;
    } 
    return i;
}