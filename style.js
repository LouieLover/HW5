$(document).ready(function() {
    function getDate() {
        $("#today").text(moment().format('MMMM Do YYYY, h:mm:ss a'));
    };
    var hour = moment().hours();
    var today = moment().format();
    var now = moment().format();
    var workDay = [
        { time: "1am", event: "past" },
        { time: "2am", event: "past" },
        { time: "3am", event: "past" },
        { time: "4am", event: "past" },
        { time: "5am", event: "past" },
        { time: "6am", event: "past" },
        { time: "7am", event: "past" },
        { time: "8am", event: "past" },
        { time: "9am", event: "past" },
        { time: "10am", event: "past" },
        { time: "11am", event: "past" },
        { time: "12am", event: "past" },
        { time: "1pm", event: "future" },
        { time: "2pm", event: "future" },
        { time: "3pm", event: "future" },
        { time: "4pm", event: "future" },
        { time: "5pm", event: "future" },
        { time: "6pm", event: "future" },
        { time: "7pm", event: "future" },
        { time: "8pm", event: "future" },
        { time: "9pm", event: "future" },
        { time: "10pm", event: "future" },
        { time: "11pm", event: "future" },
        { time: "12pm", event: "future" },
    ];

    function colorSchedule() {
        $("input").each(function() {
            var row = $(this).attr("id");
            var timeCol = parseInt(rowHour);
            if (timeCol === hour) {
                $(this).addClass("present");
            } else if (rowNumber < hour) {
                $(this).addClass("past");
            } else {
                $(this).addClass("future");
            };
        });
    };


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


        for (i = 0; i < workDay.length; i++) {
            var row = $("<div>").addClass("row");
            var timeCol = $("<text-area>").text(workDay[i]).addClass("now");
            var inputCol = $("<input>").attr("placeholder", "Enter here").addClass("toDo-input time-block");
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

        $("#1am").on("click", function() {

            $("#saveBtn-Id-1")
            var toDoInput1am = $("#input-field-13").val();
            localStorage.setItem("1am", (toDoInput1am));
            var savedInput1 = (localStorage.getItem("toDo1"));



        });



        $("2am").on("click", function() {
            $("#saveBtn-Id-2")
            event.document();
            var toDoInput1am = $("#input-field-14").val();
            localStorage.setItem("2am", (toDoInput2am));
        });


        $("#3AM").on("click", function() {
            $("#saveBtn-Id-3")
            event.document();
            var toDoInput1am = $("#input-field-15").val();
            localStorage.setItem("3am", (toDoInput3am));
        });


        $("#4AM").on("click", function() {
            $("#saveBtn-Id-4")
            event.document();
            var toDoInput1am = $("#input-field-16").val();
            localStorage.setItem("4am", (toDoInput4am));
        });


        $("#5AM").on("click", function() {
            $("#saveBtn-Id-5")
            event.document();
            var toDoInput1am = $("#input-field-17").val();
            localStorage.setItem("5am", (toDoInput5am));
        });


        $("#6AM").on("click", function() {
            $("#saveBtn-Id-6")
            event.document();
            var toDoInput1am = $("#input-field-18").val();
            localStorage.setItem("6am", (toDoInput6am));
        });


        $("#7AM").on("click", function() {
            $("#saveBtn-Id-7")
            event.document();
            var toDoInput1am = $("#input-field-19").val();
            localStorage.setItem("7am", (toDoInput7am));
        });


        $("#8AM").on("click", function() {
            $("#saveBtn-Id-8")
            event.document();
            var toDoInput1am = $("#input-field-20").val();
            localStorage.setItem("8am", (toDoInput8am));
        });


        $("#9AM").on("click", function() {
            $("#saveBtn-Id-9")
            event.document();
            var toDoInput1am = $("#input-field-21").val();
            localStorage.setItem("9am", (toDoInput9am));
        });


        $("#10AM").on("click", function() {
            $("#saveBtn-Id-10")
            event.document();
            var toDoInput1am = $("#input-field-22").val();
            localStorage.setItem("10am", (toDoInput10am));
        });


        $("#11AM").on("click", function() {
            $("#saveBtn-Id-11")
            event.document();
            var toDoInput1am = $("#input-field-23").val();
            localStorage.setItem("11am", (toDoInput11am));
        });


        $("#12AM").on("click", function() {
            $("#saveBtn-Id-12")
            event.document();
            var toDoInput1am = $("#input-field-24").val();
            localStorage.setItem("12am", (toDoInput12am));
        });


        $("#1PM").on("click", function() {
            $("#saveBtn-Id-13")
            event.document();
            var toDoInput1am = $("#input-field-1").val();
            localStorage.setItem("1pm", (toDoInput1pm));
        });


        $("#2PM").on("click", function() {
            $("#saveBtn-Id-14")
            event.document();
            var toDoInput1am = $("#input-field-2").val();
            localStorage.setItem("2pm", (toDoInput2pm));
        });


        $("#3PM").on("click", function() {
            $("#saveBtn-Id-15")
            event.document();
            var toDoInput1am = $("#input-field-3").val();
            localStorage.setItem("3pm", (toDoInput3pm));
        });

        $("#4PM").on("click", function() {
            $("#saveBtn-Id-16")
            event.document();
            var toDoInput1am = $("#input-field-4").val();
            localStorage.setItem("4pm", (toDoInput4pm));
        });


        $("#5PM").on("click", function() {
            $("#saveBtn-Id-17")
            event.document();
            var toDoInput1am = $("#input-field-5").val();
            localStorage.setItem("5pm", (toDoInput5pm));
        });


        $("#6PM").on("click", function() {
            $("#saveBtn-Id-18")
            event.document();
            var toDoInput1am = $("#input-field-6").val();
            localStorage.setItem("6pm", (toDoInput6pm));
        });


        $("#7PM").on("click", function() {
            $("#saveBtn-Id-19")
            event.document();
            var toDoInput1am = $("#input-field-7").val();
            localStorage.setItem("7pm", (toDoInput7pm));
        });


        $("#8PM").on("click", function() {
            $("#saveBtn-Id-20")
            event.document();
            var toDoInput1am = $("#input-field-8").val();
            localStorage.setItem("8pm", (toDoInput8pm));
        });


        $("#9PM").on("click", function() {
            $("#saveBtn-Id-21")
            event.document();
            var toDoInput1am = $("#input-field-9").val();
            localStorage.setItem("9pm", (toDoInput9pm));
        });


        $("#10PM").on("click", function() {
            $("#saveBtn-Id-22")
            event.document();
            var toDoInput1am = $("#input-field-10").val();
            localStorage.setItem("10pm", (toDoInput10pm));
        });


        $("#11PM").on("click", function() {
            $("#saveBtn-Id-23")
            event.document();
            var toDoInput1am = $("#input-field-11").val();
            localStorage.setItem("11pm", (toDoInput11pm));
        });


        $("#12PM").on("click", function() {
            $("#saveBtn-Id-24")
            event.document();
            var toDoInput1am = $("#input-field-12").val();
            localStorage.setItem("12pm", (toDoInput12pm));
        });

        var userInput = $(this).siblings("textarea.description").val()
        localStorage.setItem(timeCol, userInput);
    });
});