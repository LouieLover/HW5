var today = moment().format();
var now = moment().format();
var workDay = [
    { time: "1am", event: "past" },
    { time: "2am", event: "past" },
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

    function addIdToSaveBtn() {
        let saveBtnId = document.getElementsByClassName("saveBtn");
        let length = saveBtnId.length;
        for (i = 0; i < length; i++) {
            saveBtnId[i].id = "saveBtn-Id-" + (i + 1);
        }

        function addIdToInput() {
            var inputId = document.getElementsByClassName("toDo-input");
            var length = inputId.length;
            for (i = 0; i < length; i++) {
                inputId[i].id = "input-field-" + (i + 1);
            }
        };
        addIdToInput();

        var now = moment().format()
        "1am"
        "2am"
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

    }

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
            var saveBtn1am = $("#saveBtn-Id-1");
            var saveBtnId2am = $("#saveBtn-Id-2");
            var saveBtnId3am = $("#saveBtn-Id-3");
            var saveBtnId4am = $("#saveBtn-Id-4");
            var saveBtnId5am = $("#saveBtn-Id-5");
            var saveBtnId6am = $("#saveBtn-Id-6");
            var saveBtnId7am = $("#saveBtn-Id-7");
            var saveBtnId8am = $("#saveBtn-Id-8");
            var saveBtnId9am = $("#saveBtn-Id-9");
            var saveBtnId10am = $("#saveBtn-Id-10");
            var saveBtnId11am = $("#saveBtn-Id-11");
            var saveBtnId12am = $("#saveBtn-Id-12");
            var saveBtn1pm = $("#saveBtn-Id-13");
            var saveBtnId2pm = $("#saveBtn-Id-14");
            var saveBtnId3pm = $("#saveBtn-Id-15");
            var saveBtnId4pm = $("#saveBtn-Id-16");
            var saveBtnId5pm = $("#saveBtn-Id-17");
            var saveBtnId6pm = $("#saveBtn-Id-18");
            var saveBtnId7pm = $("#saveBtn-Id-19");
            var saveBtnId8pm = $("#saveBtn-Id-20");
            var saveBtnId9pm = $("#saveBtn-Id-21");
            var saveBtnId10pm = $("#saveBtn-Id-22");
            var saveBtnId11pm = $("#saveBtn-Id-23");
            var saveBtnId12pm = $("#saveBtn-Id-24");


            var toDoInput1pm = $("#input-field-1");
            var toDoInput2pm = $("#input-field-2");
            var toDoInput3pm = $("#input-field-3");
            var toDoInput4pm = $("#input-field-4");
            var toDoInput5pm = $("#input-field-5");
            var toDoInput6pm = $("#input-field-6");
            var toDoInput7pm = $("#input-field-7");
            var toDoInput8pm = $("#input-field-8");
            var toDoInput9pm = $("#input-field-9");
            var toDoInput10pm = $("#input-field-10");
            var toDoInput11pm = $("#input-field-11");
            var toDoInput12pm = $("#input-field-12");
            var toDoInput1am = $("#input-field-13");
            var toDoInput2am = $("#input-field-14");
            var toDoInput3am = $("#input-field-15");
            var toDoInput4am = $("#input-field-16");
            var toDoInput5am = $("#input-field-17");
            var toDoInput6am = $("#input-field-18");
            var toDoInput7am = $("#input-field-19");
            var toDoInput8am = $("#input-field-20");
            var toDoInput9am = $("#input-field-21");
            var toDoInput10am = $("#input-field-22");
            var toDoInput11am = $("#input-field-23");
            var toDoInput12am = $("#input-field-24");

            var storedInput;
        };

    }

    $("1am").on("click", function() {

        event.document();
        var toDoInput1am = $("#input-field-13").val();
        localStorage.setItem("toDo1", (toDoInput1am));
        console.log("click")
    });


    $("2am").on("click", function() {

        event.document();
        var toDoInput1am = $("#input-field-14").val();
        localStorage.setItem("toDo1", (toDoInput1am));
    });


    $("#3AM").on("click", function() {

        event.document();
        var toDoInput1am = $("#input-field-13").val();
        localStorage.setItem("toDo1", (toDoInput1am));
    });


    $("#4AM").on("click", function() {

        event.document();
        var toDoInput1am = $("#input-field-13").val();
        localStorage.setItem("toDo1", (toDoInput1am));
    });


    $("#5AM").on("click", function() {

        event.document();
        var toDoInput1am = $("#input-field-13").val();
        localStorage.setItem("toDo1", (toDoInput1am));
    });


    $("#6AM").on("click", function() {

        event.document();
        var toDoInput1am = $("#input-field-13").val();
        localStorage.setItem("toDo1", (toDoInput1am));
    });


    $("#7AM").on("click", function() {

        event.document();
        var toDoInput1am = $("#input-field-13").val();
        localStorage.setItem("toDo1", (toDoInput1am));
    });


    $("#8AM").on("click", function() {

        event.document();
        var toDoInput1am = $("#input-field-13").val();
        localStorage.setItem("toDo1", (toDoInput1am));
    });


    $("#9AM").on("click", function() {

        event.document();
        var toDoInput1am = $("#input-field-13").val();
        localStorage.setItem("toDo1", (toDoInput1am));
    });


    $("#10AM").on("click", function() {

        event.document();
        var toDoInput1am = $("#input-field-13").val();
        localStorage.setItem("toDo1", (toDoInput1am));
    });


    $("#11AM").on("click", function() {

        event.document();
        var toDoInput1am = $("#input-field-13").val();
        localStorage.setItem("toDo1", (toDoInput1am));
    });


    $("#12AM").on("click", function() {

        event.document();
        var toDoInput1am = $("#input-field-13").val();
        localStorage.setItem("toDo1", (toDoInput1am));
    });


    $("#1PM").on("click", function() {

        event.document();
        var toDoInput1am = $("#input-field-13").val();
        localStorage.setItem("toDo1", (toDoInput1am));
    });


    $("#2PM").on("click", function() {

        event.document();
        var toDoInput1am = $("#input-field-13").val();
        localStorage.setItem("toDo1", (toDoInput1am));
    });


    $("#3PM").on("click", function() {

        event.document();
        var toDoInput1am = $("#input-field-13").val();
        localStorage.setItem("toDo1", (toDoInput1am));
    });

    $("#4PM").on("click", function() {

        event.document();
        var toDoInput1am = $("#input-field-13").val();
        localStorage.setItem("toDo1", (toDoInput1am));
    });


    $("#5PM").on("click", function() {

        event.document();
        var toDoInput1am = $("#input-field-13").val();
        localStorage.setItem("toDo1", (toDoInput1am));
    });


    $("#6PM").on("click", function() {

        event.document();
        var toDoInput1am = $("#input-field-13").val();
        localStorage.setItem("toDo1", (toDoInput1am));
    });


    $("#7PM").on("click", function() {

        event.document();
        var toDoInput1am = $("#input-field-13").val();
        localStorage.setItem("toDo1", (toDoInput1am));
    });


    $("#8PM").on("click", function() {

        event.document();
        var toDoInput1am = $("#input-field-13").val();
        localStorage.setItem("toDo1", (toDoInput1am));
    });


    $("#9PM").on("click", function() {

        event.document();
        var toDoInput1am = $("#input-field-13").val();
        localStorage.setItem("toDo1", (toDoInput1am));
    });


    $("#10PM").on("click", function() {

        event.document();
        var toDoInput1am = $("#input-field-13").val();
        localStorage.setItem("toDo1", (toDoInput1am));
    });


    $("#11PM").on("click", function() {

        event.document();
        var toDoInput1am = $("#input-field-13").val();
        localStorage.setItem("toDo1", (toDoInput1am));
    });


    $("#12PM").on("click", function() {

        event.document();
        var toDoInput1am = $("#input-field-13").val();
        localStorage.setItem("toDo1", (toDoInput1am));
    });

    var userInput = $(this).siblings("textarea.description").val()
    localStorage.setItem(timeCol, userInput);
});

$("#saveBtn-Id-1" + (now - "1am")).addClass("past");