---
layout: countdown
permalink: /countdown
---

<html>
	<head>
		<meta charset="utf-8"> 
		<title>倒计时</title>
	  <link rel="stylesheet" href="https://cdn.staticfile.org/twitter-bootstrap/3.3.7/css/bootstrap.min.css">  
	  <script src="https://cdn.staticfile.org/jquery/2.1.1/jquery.min.js"></script>
	  <script src="https://cdn.staticfile.org/twitter-bootstrap/3.3.7/js/bootstrap.min.js"></script>
	  <script src="{{ base.url | prepend: site.url }}/assets/js/countdown.js"></script>
	  <script src="{{ base.url | prepend: site.url }}/assets/js/jquery-dateformat.min.js"></script>
	</head>

	<body>
		<p><em id="days" style="font-size: 24px;"></em>天前是<em id="old_time" style="font-size: 24px;"></em></p>
	</body>
</html>
