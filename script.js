
$(document).ready(function()  {
    // display current day/time using moment js
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));
    // saves schedule text and time to local storage
    $(".saveBtn").on("click", function() {

        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, text);
    })


// schedule text and time pulled from local storage (one for each created hour)
$("#hour8 .description").val(localStorage.getItem("hour8"));
$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$("#hour17 .description").val(localStorage.getItem("hour17"));
$("#hour18 .description").val(localStorage.getItem("hour18"));
$("#hour19 .description").val(localStorage.getItem("hour19"));
$("#hour20 .description").val(localStorage.getItem("hour20"));


function hours() {
    // finds current hour
    var currentHour = moment().hour();
    // determines what class to apply depending on current hour 
    $(".time-block").each(function() {
        var blockHour = parseInt($(this).attr("id").split("hour")[1]);

        if (blockHour < currentHour) {
            $(this).addClass("past");
            $(this).removeClass("present");
            $(this).removeClass("future");
        }

        else if (blockHour === currentHour) {
            $(this).removeClass("past");
            $(this).addClass("present");
            $(this).removeClass("future");
        }

        else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    })
}
    hours();

})
