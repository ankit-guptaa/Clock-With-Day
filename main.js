var day = ["SUNDAY","MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY"];
var hour = document.getElementById("hour");
var min = document.getElementById("min");
var sec = document.getElementById("sec");
var mili = document.getElementById("mili");


function clock() {
    var time = new Date();
    hour.innerHTML = time.getHours();
    min.innerHTML = time.getMinutes();
    sec.innerHTML = time.getSeconds();
    mili.innerHTML = time.getMilliseconds();

    var hours = hour.innerHTML;
    if(hours == 12){
        hour.innerHTML = '12';
    }else if(hours > 12){
        hour.innerHTML = hours - 12;
    }else{
        hour.innerHTML = hours;
    }
    var am_pm = document.getElementById("am-pm");
    if(hours > 12){
        am_pm.innerHTML = 'PM';
    }else{
        am_pm.innerHTML = 'AM';
    }
}
setInterval(function(){
    // alert("hell")
    clock();
},1)
time = new Date();
var dayText = document.getElementById("dayText");
v = day[time.getDay()];
// alert(v)
dayText.innerHTML = "Today Is <font color='red'>"+v+"</font>";
