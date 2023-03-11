function showClock(){
    let date = new Date();
    let hr = formatHour(date.getHours());
    let min = formatMin(date.getMinutes());
    let sec = formatMin(date.getSeconds());
    document.getElementById('hour').innerHTML = `${hr}:${min}:${sec}`;

    const months = ['Jan', 'Feb','Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const days = ['Sun','Mon', 'Tue', 'Wed', 'Thu', 'Fry', 'Sat'];
    let week = days[date.getDay()];
    let day = date.get();
    let month = months[date.getMonth()];
    let dateText = `${week}, ${day}, ${month}`;
    document.getElementById('date').innerHTML = dateText;
    document.getElementById('container').classList.toggle('animate');

}
function formatHour(hour){
    if(hour >= 13 && hour <= 23){
        hour = '0' + hour - 12;
    }
    return hour;
}
function formatMin(hour){
    if(hour < 10){
        hour = '0' + hour;
    }
    return hour;
}
setInterval(showClock, 1000);