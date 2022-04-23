// Set current date (by MomentJS)
var now = moment().format("dddd, MMM Do");
$("#currentDay").text(now);

// Create & append time block with section hour, description & button (by JS)
var mainContainer = document.querySelector(".container");

var hour = ["9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"]

for (var i = 0; i < hour.length ; i++ ) {
    var wrapContainer = document.createElement("div");
    var hourContainer = document.createElement("div");
    var todoContainer = document.createElement("textarea");
    var saveBtn = document.createElement("button");
    var textClass = checkTime(hour[i].split(":")[0]); 
    hourContainer.innerText = hour[i];
    saveBtn.innerText = ("Save");
    wrapContainer.setAttribute("class", "row time-block");
    hourContainer.setAttribute("class", "hour col-1");
    todoContainer.setAttribute("class", textClass);
    saveBtn.setAttribute("class", "btn saveBtn col-1");
    wrapContainer.append(hourContainer, todoContainer,saveBtn);
    mainContainer.append(wrapContainer);
}

// Check if the current time is past, present or future & give them different class
function checkTime (rowHour) {
  var currentHour = new Date().getHours();
  if (currentHour == rowHour) {
      return "present description col-10";
  }
  else if (currentHour < rowHour) {
      return "future description col-10"
  }
  else {
      return "past description col-10"
  }
}




