$(document).ready(function(){
  var colorKey = ""
  var hourDisplay = ""
  const d = new Date();
let hour = d.getHours();
  for(var i = 9; i < 19; i++){
  if (i < 12) {
    hourDisplay = i + "am"
  }
  else if (i === 12){
    hourDisplay = i + "pm"
  }
  else {
    hourDisplay = i - 12 + "pm"
  }

    if(i < hour){
      colorKey = "past"
    }
    else if(i === hour) {
      colorKey = "present"
    }
    else {
      colorKey = "future"
    }

    var rowDiv = $("<div>").addClass("row time-block").attr("id",i)
    var hourDiv = $("<div>").addClass("col-2 col-md-1 hour text-center py-3").text(hourDisplay)
    var textDiv = $("<textarea>").addClass("col-8 col-md-10 description " + colorKey).attr("rows", "3").val(localStorage.getItem(i))
    var icon = $("<i>").addClass("fas fa-save")
    var btn = $("<button>").addClass("btn saveBtn col-2 col-md-1").attr("id", i)
    .on("click", function(){
      var hourKey = $(this).attr("id")
      var activity = $(this).siblings(".description").val()
      localStorage.setItem(hourKey,activity)
    })
    $(".container-fluid").append(rowDiv.append(hourDiv, textDiv, btn.append(icon)))

  }

  const daysOfWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
  const todaysDate = `${daysOfWeek[d.getDay()]} ${d.toLocaleDateString()}`
  $("#currentDay").append(todaysDate)
 
});
