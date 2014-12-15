//= require_tree .

$(document).ready(function() {
	var now = new Date();
	var month = now.getMonth() + 1;
	var nowDate = now.getFullYear().toString() + month.toString() + now.getDate().toString();
	
	$(".date-inner").append("Dimibap × " + nowDate);
	  $.ajax({
	    type: "GET",
	    url: "http://cpsoft.kr/cpsoft/dimigo/food.php?d=" + nowDate + "&output=xml",
	    dataType: "xml",
	    success: parseXml
	  });
		
		function parseXml(xml)
		{
			var spinner = new Spinner().spin();
			var target = document.getElementById('meal');
			target.appendChild(spinner.el);
			
		  $(xml).find("breakfast").each(function()
		  {
				$(".breakfast-inner").append($(this).text());
		  });
			
		  $(xml).find("lunch").each(function()
		  {
				$(".lunch-inner").append($(this).text());
				
		  });
			
		  $(xml).find("dinner").each(function()
		  {
				$(".dinner-inner").append($(this).text());
				
		  });
			
		  $(xml).find("snack").each(function()
		  {
				$(".snack-inner").append($(this).text());
		  });
			
			spinner.stop();
		}
});