$(function() {
	
	// Auto-selection when clicked
	$(".search").click(function() {
  		$(this).select();
		$(".search").css('color', 'black');
	});
	
	// Text turns gray again when not typing
	$(".search").blur(function() {
		$(".search").css('color', '#7A7A7A');
	});
	
	// Expand search bar
	$(".search").focus(function() {
		$(this).animate({ width: "300px" }, 250);
	});
	
	$(".search").blur(function() {
		$(this).animate({ width: "150px" }, 200);
	});
	
	// Search... dissapears when field is clicked
	$('.search').focus(function() {
	  if ($(this).val() === 'Search...') {
	    return $(this).val('');
	  }
	});
	
	// Search... reappears when field is not in focus anymore
    $('.search').blur(function() {
      if ($(this).val() === '') {
        return $(this).val('Search...');
      }
	});
	
});
