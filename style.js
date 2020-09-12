var today = moment().format();
var now = moment().format();
var workDay = [
    { time: "1 AM", event: "past" },
    { time: "2 AM", event: "past" },
    { time: "3 AM", event: "past" },
    { time: "4 AM", event: "past" },
    { time: "5 AM", event: "past" },
    { time: "6 AM", event: "past" },
    { time: "7 AM", event: "past" },
    { time: "8 AM", event: "past" },
    { time: "9 AM", event: "past" },
    { time: "10 AM", event: "past" },
    { time: "11 AM", event: "past" },
    { time: "12 AM", event: "past" },
    { time: "", event: "present" },
    { time: "1 PM", event: "future" },
    { time: "2 PM", event: "future" },
    { time: "3 PM", event: "future" },
    { time: "4 PM", event: "future" },
    { time: "5 PM", event: "future" },
    { time: "6 PM", event: "future" },
    { time: "7 PM", event: "future" },
    { time: "8 PM", event: "future" },
    { time: "9 PM", event: "future" },
    { time: "10 PM", event: "future" },
    { time: "11 PM", event: "future" },
    { time: "12 PM", event: "future" },
];

var inputCol
var timeCol
var row
var saveBtn

$(document).ready(function() {
    console.log(workDay)
    var today = moment().format('dddd.MMMM Do, YYY h:mm a');

    var now = moment().format()
    "1AM"
    "2AM"
    "3AM"
    "4AM"
    "5AM"
    "6AM"
    "7AM"
    "8AM"
    "9AM"
    "10AM"
    "11AM"
    "12AM"
    "1PM"
    "2PM"
    "3PM"
    "4PM"
    "5PM"
    "6PM"
    "7PM"
    "8PM"
    "9PM"
    "10PM"
    "11PM"
    "12PM"

});

function workDay() {
    let workDay = $("today").text(momentVar);
    return workDay;
}

for (i = 0; i < workDay.length; i++) {
    let row = $("<div>").addClass("row");
    let timeCol = $("<text-area>").text(workDay[i]).addClass("now");
    let inputCol = $("<input>").attr("placeholder", "Enter here").addClass("toDo-input time-block");
    saveBtn = $("<button>").addClass("btn btn-primary saveBtn").text("save");
    $(row).append(timeCol).append(inputCol).append(saveBtn);
    $("#calendar").append(row);
};

{
    function myFunction() {
        var saveBtn = $("#saveBtnId")
        var toDoInput = document.getElementById$("#input-field")
        let val = $("now")

        addToSaveBtn();
        let saveBtn1am = $("#saveBtn-Id-1");
        let saveBtnId2am = $("#saveBtn-Id-2");
        let saveBtnId3am = $("#saveBtn-Id-3");
        let saveBtnId4am = $("#saveBtn-Id-4");
        let saveBtnId5am = $("#saveBtn-Id-5");
        let saveBtnId6am = $("#saveBtn-Id-6");
        let saveBtnId7am = $("#saveBtn-Id-7");
        let saveBtnId8am = $("#saveBtn-Id-8");
        let saveBtnId9am = $("#saveBtn-Id-9");
        let saveBtnId10am = $("#saveBtn-Id-10");
        let saveBtnId11am = $("#saveBtn-Id-11");
        let saveBtnId12am = $("#saveBtn-Id-12");
        let saveBtn1pm = $("#saveBtn-Id-13");
        let saveBtnId2pm = $("#saveBtn-Id-14");
        let saveBtnId3pm = $("#saveBtn-Id-15");
        let saveBtnId4pm = $("#saveBtn-Id-16");
        let saveBtnId5pm = $("#saveBtn-Id-17");
        let saveBtnId6pm = $("#saveBtn-Id-18");
        let saveBtnId7pm = $("#saveBtn-Id-19");
        let saveBtnId8pm = $("#saveBtn-Id-20");
        let saveBtnId9pm = $("#saveBtn-Id-21");
        let saveBtnId10pm = $("#saveBtn-Id-22");
        let saveBtnId11pm = $("#saveBtn-Id-23");
        let saveBtnId12pm = $("#saveBtn-Id-24");


        let toDoInput1pm = $("#input-field-1");
        let toDoInput2pm = $("#input-field-2");
        let toDoInput3pm = $("#input-field-3");
        let toDoInput4pm = $("#input-field-4");
        let toDoInput5pm = $("#input-field-5");
        let toDoInput6pm = $("#input-field-6");
        let toDoInput7pm = $("#input-field-7");
        let toDoInput8pm = $("#input-field-8");
        let toDoInput9pm = $("#input-field-9");
        let toDoInput10pm = $("#input-field-10");
        let toDoInput11pm = $("#input-field-11");
        let toDoInput12pm = $("#input-field-12");
        let toDoInput1am = $("#input-field-13");
        let toDoInput2am = $("#input-field-14");
        let toDoInput3am = $("#input-field-15");
        let toDoInput4am = $("#input-field-16");
        let toDoInput5am = $("#input-field-17");
        let toDoInput6am = $("#input-field-18");
        let toDoInput7am = $("#input-field-19");
        let toDoInput8am = $("#input-field-20");
        let toDoInput9am = $("#input-field-21");
        let toDoInput10am = $("#input-field-22");
        let toDoInput11am = $("#input-field-23");
        let toDoInput12am = $("#input-field-24");

        let storedInput;
    };

}

$("#saveBtn-Id-1").on("click", function() {

    event.document();
    let toDoInput1am = $("#input-field-13").val();
    localStorage.setItem("toDo1", (toDoInput1am));
    console.log("click")
});


$("#saveBtn-Id-2").on("click", function() {

    event.document();
    let toDoInput1am = $("#input-field-14").val();
    localStorage.setItem("toDo1", (toDoInput1am));
});


$("#3AM").on("click", function() {

    event.document();
    let toDoInput1am = $("#input-field-13").val();
    localStorage.setItem("toDo1", (toDoInput1am));
});


$("#4AM").on("click", function() {

    event.document();
    let toDoInput1am = $("#input-field-13").val();
    localStorage.setItem("toDo1", (toDoInput1am));
});


$("#5AM").on("click", function() {

    event.document();
    let toDoInput1am = $("#input-field-13").val();
    localStorage.setItem("toDo1", (toDoInput1am));
});


$("#6AM").on("click", function() {

    event.document();
    let toDoInput1am = $("#input-field-13").val();
    localStorage.setItem("toDo1", (toDoInput1am));
});


$("#7AM").on("click", function() {

    event.document();
    let toDoInput1am = $("#input-field-13").val();
    localStorage.setItem("toDo1", (toDoInput1am));
});


$("#8AM").on("click", function() {

    event.document();
    let toDoInput1am = $("#input-field-13").val();
    localStorage.setItem("toDo1", (toDoInput1am));
});


$("#9AM").on("click", function() {

    event.document();
    let toDoInput1am = $("#input-field-13").val();
    localStorage.setItem("toDo1", (toDoInput1am));
});


$("#10AM").on("click", function() {

    event.document();
    let toDoInput1am = $("#input-field-13").val();
    localStorage.setItem("toDo1", (toDoInput1am));
});


$("#11AM").on("click", function() {

    event.document();
    let toDoInput1am = $("#input-field-13").val();
    localStorage.setItem("toDo1", (toDoInput1am));
});


$("#12AM").on("click", function() {

    event.document();
    let toDoInput1am = $("#input-field-13").val();
    localStorage.setItem("toDo1", (toDoInput1am));
});


$("#1PM").on("click", function() {

    event.document();
    let toDoInput1am = $("#input-field-13").val();
    localStorage.setItem("toDo1", (toDoInput1am));
});


$("#2PM").on("click", function() {

    event.document();
    let toDoInput1am = $("#input-field-13").val();
    localStorage.setItem("toDo1", (toDoInput1am));
});


$("#3PM").on("click", function() {

    event.document();
    let toDoInput1am = $("#input-field-13").val();
    localStorage.setItem("toDo1", (toDoInput1am));
});

$("#4PM").on("click", function() {

    event.document();
    let toDoInput1am = $("#input-field-13").val();
    localStorage.setItem("toDo1", (toDoInput1am));
});


$("#5PM").on("click", function() {

    event.document();
    let toDoInput1am = $("#input-field-13").val();
    localStorage.setItem("toDo1", (toDoInput1am));
});


$("#6PM").on("click", function() {

    event.document();
    let toDoInput1am = $("#input-field-13").val();
    localStorage.setItem("toDo1", (toDoInput1am));
});


$("#7PM").on("click", function() {

    event.document();
    let toDoInput1am = $("#input-field-13").val();
    localStorage.setItem("toDo1", (toDoInput1am));
});


$("#8PM").on("click", function() {

    event.document();
    let toDoInput1am = $("#input-field-13").val();
    localStorage.setItem("toDo1", (toDoInput1am));
});


$("#9PM").on("click", function() {

    event.document();
    let toDoInput1am = $("#input-field-13").val();
    localStorage.setItem("toDo1", (toDoInput1am));
});


$("#10PM").on("click", function() {

    event.document();
    let toDoInput1am = $("#input-field-13").val();
    localStorage.setItem("toDo1", (toDoInput1am));
});


$("#11PM").on("click", function() {

    event.document();
    let toDoInput1am = $("#input-field-13").val();
    localStorage.setItem("toDo1", (toDoInput1am));
});


$("#12PM").on("click", function() {

    event.document();
    let toDoInput1am = $("#input-field-13").val();
    localStorage.setItem("toDo1", (toDoInput1am));
});

var userInput = $(this).siblings("textarea.description").val()
localStorage.setItem(timeCol, userInput);


if (now > "9AM") {
    $("#input-field-20").addClass("past");
} else if (now >= 8 && now < 9) {
    $("#input-field-20").addClass("present");
} else if (now < 8) {
    $("#input-field-20").addClass("future");
}