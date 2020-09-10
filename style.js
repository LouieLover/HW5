var a = moment().format();

$("#today").append(a);

var timeStamp = moment().startOf("day").fromNow();
console.log(timeStamp);

var textArea = $("textarea");
console.log(textArea)

function hourStyle() {
    for (i = 0; i < textArea.length; i++);
}