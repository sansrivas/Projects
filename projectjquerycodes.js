$(function(){
	
	$("input").on("keyup", function(e){
      console.log(this);
	  if (e.keyCode === 13)  {
	  var newItem = $(this).val();
	  if (newItem !== "") {
		$("ul").append($("<li>").text(newItem));
	    $(this).val("");
		$("button#randomize".show);
		}
	 });	
	  
	  $("button#randomize").on("click", function(){
	  var itemList = $("li");
	  var randomIndex = Math.floor(Math.random() * (itemList.length - 1));
	  var randomItem = itemList[randomItem];
	  $("div#selected-random").text($(randomItem).text());
	  
	  });
	  
});