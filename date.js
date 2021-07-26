
//getTime function used to get Hours, Minutes & Seconds
function getTime() {

    //New Date function is called
    const date = new Date()
    var hour = date.getHours()
    var miniute = date.getMinutes()
    var seconds = date.getSeconds()

    var meridiam

    //Set the meridiam of current time
    if (hour > 12 && (hour <= 23 && miniute <= 59)) {
        meridiam = "PM"
    } else{
        meridiam = "AM"
    }

    //Display Hours in 12-Hrs format
    hour = hour % 12
    hour == 0? 12 : hour
    
    return hour + " : " + miniute + " : " + seconds + " " + meridiam
}

//Changing Seconds every 1000 ms 
setInterval(function () {
    var clock = document.querySelector(".clock")
    clock.innerHTML = getTime()
}, 1000)