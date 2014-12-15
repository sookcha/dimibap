//= require_tree .

$( document ).ready(function() {
	  $.ajax({
	    type: "GET",
	    url: "http://cpsoft.kr/cpsoft/dimigo/food.php?d=20141215&output=xml",
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
		    console.log("아침 : " + $(this).text());
				$(".breakfast").append($(this).text());
		  });
			
		  $(xml).find("lunch").each(function()
		  {
		    console.log("점심 : " + $(this).text());
				$(".lunch").append($(this).text());
				
		  });
			
		  $(xml).find("dinner").each(function()
		  {
		    console.log("저녁 : " + $(this).text());
				$(".dinner").append($(this).text());
				
		  });
			
		  $(xml).find("snack").each(function()
		  {
		    console.log("간식 : " + $(this).text());
				$(".snack").append($(this).text());
				
		  });
			
			spinner.stop();
		}
});