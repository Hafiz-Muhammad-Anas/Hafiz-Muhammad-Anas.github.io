

$(".card1").hide();
$(".card2").hide();
$("#coninfo").hide();

$( "#cont" ).click(function() {
	$(".card1").toggle();
});


$( "#abt" ).click(function() {
	$(".card2").toggle();
});

$( ".cardB" ).click(function() {
	$("#coninfo").toggle();
});

$(document).mouseup(function (e)
                    {
  var container = $(".card1" ); // YOUR CONTAINER SELECTOR

  if (!container.is(e.target) // if the target of the click isn't the container...
      && container.has(e.target).length === 0) // ... nor a descendant of the container
  {
    container.fadeOut("fast");
  }
});

$(document).mouseup(function (e)
                    {
  var container = $(".card2" ); // YOUR CONTAINER SELECTOR

  if (!container.is(e.target) // if the target of the click isn't the container...
      && container.has(e.target).length === 0) // ... nor a descendant of the container
  {
    container.fadeOut("fast");
  }
});

$(document).mouseup(function (e)
                    {
  var container = $("#coninfo" ); // YOUR CONTAINER SELECTOR

  if (!container.is(e.target) // if the target of the click isn't the container...
      && container.has(e.target).length === 0) // ... nor a descendant of the container
  {
    container.fadeOut("fast");
  }
});




function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(showTime, 1000);
    
}

showTime();