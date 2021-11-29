//timeblock vars
var nineAm = $("#9am");
var tenAm = $("#10am");
var elevenAm = $("#11am");
var twelvePm = $("#12pm");
var onePm = $("#1pm");
var twoPm = $("#2pm");
var threePm = $("#3pm");
var fourPm = $("#4pm");
var fivePm = $("#5pm");
var sixPm = $("#6pm");

// moment.js vars and formatting
var currentHour = moment().format('h:mm:ss a');
var currentDate = moment().format('dddd') + " " + moment.format("DD MM YYYY");

var hourBlock = moment().hours();
var hourPass;
var userInput;

// date and hour displayed on homepage

var interval = setInterval(function(){
    var momentNow = moment();
    $("#currentDay").html(momentNow.format("YYYY MM DD") + " " + momentNow.format("dddd").substring(0,3).toUpperCase());
    $("#currentDay").html(currentDate + " " + momentNow.format("hh:mm:ss A"));
}, 100);

//show on page
function initPage() {
    var init9 = JSON.parse(localStorage.getItem("09:00am"));
    nineAm.val(init9);

    var init10 = JSON.parse(localStorage.getItem("10:00am"));
    tenAm.val(init10);

    var init11 = JSON.parse(localStorage.getItem("11:00am"));
    elevenAm.val(init11);

    var init12 = JSON.parse(localStorage.getItem("12:00pm"));
    twelvePm.val(init12);

    var init1 = JSON.parse(localStorage.getItem("01:00pm"));
    onePm.val(init1);

    var init2 = JSON.parse(localStorage.getItem("02:00pm"));
    twoPm.val(init2);

    var init3 = JSON.parse(localStorage.getItem("03:00pm"));
    threePm.val(init3);

    var init4 = JSON.parse(localStorage.getItem("04:00pm"));
    fourPm.val(init4);

    var init5 = JSON.parse(localStorage.getItem("05:00pm"));
    fivePm.val(init5);

    var init6 = JSON.parse(localStorage.getItem("06:00pm"));
    sixPm.val(init6);
};

