var date = moment().toDate()
moment(testDate).format('MM/DD/YYYY');
moment()
var duration = moment.duration(end.diff(startTime));
var hours = duration.asHours();

function updateBackground() {
    var
        hr = (new Date()).getHours(),
        body = document.body,
        bStyle = body.style,
        hello = document.querySelector(".hello");
    if (hr < 10) {
        bStyle.backgroundColor = "yellow";
        bStyle.color = "black";
        hello.innerText = "Have a good morning";
    } else if (hr < 20) {
        bStyle.backgroundColor = "green";
        bStyle.color = "white";
        hello.innerText = "Have a good day!";
    } else {
        bStyle.backgroundColor = "black";
        bStyle.color = "white";
        hello.innerText = "Have a good night!";
    }
}

setInterval(updateBackground, 1000 * 60);
updateBackground();


var time = new Date().getTime();
$(document.body).bind("mousemove keypress", function(e) {
    time = new Date().getTime();
});

function refresh() {
    if (new Date().getTime() - time >= 60000)
        window.location.reload(true);
    else
        setTimeout(refresh, 10000);
}

setTimeout(refresh, 10000);