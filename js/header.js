function openMenu() {
	document.getElementById("myNav").style.width = "100%";
	$(".overlay").on('transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd', function() {
		$("#menu-pic").attr('src','images/close.svg');
		$("#menu-pic").css("z-index",2);
		$("#menu-pic").attr('onclick', "closeMenu()");
		$("body").css("overflow", "hidden");
		$("html").css("overflow", "hidden");
	});
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeMenu() {
	document.getElementById("myNav").style.width = "0%";
	$(".overlay").on('transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd', function() {
		$("#menu-pic").attr('src','images/menu.svg');
		$("#menu-pic").css("z-index",0);
		$("#menu-pic").attr('onclick', "openMenu()");
		$("body").css("overflow-y", "scroll");

	});
}
