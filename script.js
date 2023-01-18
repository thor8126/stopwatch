// here seconds is for seconds
// and m_seconds is for miliseconds
// check is a variable to check if timer is already running or not


var seconds = 00;  // set seconds to 00
var m_seconds = 00;  // set miliseconds to 00
var check;   // later we will check if check is undefined or not

var secondsHeading = document.getElementById("seconds");    // get seconds id ffrom span with id seconds
var m_secondsHeading = document.getElementById("m_seconds");    // get m_seconds id ffrom span with id m_seconds


// timer function with 10ms check 
function timer(){
    m_seconds++;
    m_secondsHeading.innerHTML = m_seconds;
    if(m_seconds >= 100){
        seconds++;
        // add 0 if seconds is less than 10
        if (seconds < 10) {
            secondsHeading.innerHTML = "0" + seconds;
        }else{
            secondsHeading.innerHTML = seconds;
        }
        m_seconds = 00;
    }else if(seconds >= 60){
        seconds = 00;
    }
}


// start function to start timer with 10ms check
function startTimer(){
    // check if check is already running
    if (check == undefined) {
        check = setInterval(timer, 10);
    }
}

// stop function to stop timer
function stopTimer(){

    clearInterval(check);
    check = undefined;
}

// reset function to reset timer to 00:00
function resetTimer(){
    seconds = "00";
    m_seconds = "00";
    secondsHeading.innerHTML = seconds;
    m_secondsHeading.innerHTML = m_seconds;
    stopTimer();
}


