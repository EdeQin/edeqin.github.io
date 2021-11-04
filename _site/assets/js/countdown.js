$(function(){
	var end_date = "2021-12-14 03:00:00"

	function minusDays(theDate, days) {
	    return new Date(theDate.getTime() - days*24*60*60*1000);
	}

	var intervalId = window.setInterval(function(){
		var now = new Date()
		var end = new Date(end_date)
		var date = new Date()
		var left_time = ((end.getTime()-now.getTime())/60/60/24/1000).toFixed(2)
	  $("#days").html(left_time)
	  $("#old_time").html($.format.date(minusDays(new Date(), left_time),"yyyy-MM-dd HH:mm:ss"))
	}, 1000);

	// $("#days").html($.format.date("2021-12-14 03:00:00", "yyyy-MM-dd HH:mm:ss"))



})