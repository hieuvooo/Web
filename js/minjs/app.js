$(".toggle-switch label").click(function() {
	$(".cd-intro-block").toggleClass("light-mode"), $(".cd-intro-block h1").toggleClass("light-mode"), $(".letter").toggleClass("light-mode"), $(".cd-intro-block .cd-btn").toggleClass("light-mode"), $(".cd-intro-block nav").toggleClass("light-mode"), $(".cd-items-wrapper").toggleClass("light-mode"), $(".cd-slider-navigation a").toggleClass("light-mode"), $(".toggle-container").toggleClass("light-mode")}), $(window).mousemove(function() {
	$(".next").is(":hover") || $(".prev").is(":hover") ? $(".nav_hover").css({
		opacity: .7
	}) : $(".nav_hover").css({
		opacity: .4
	})
}), $("[data-action='show-items']").click(function() {
	$(".arrow-bottom").fadeOut("normal")
}), $("#footer1").click(function() {
	$("#item2_content").addClass("is-visible"), setTimeout(function() {
		$("#item1_content").removeClass("is-visible")
	}, 500)
}), $("#footer2").click(function() {
	$("#item3_content").addClass("is-visible"), setTimeout(function() {
		$("#item2_content").removeClass("is-visible")
	}, 500)
}), $("#footer3").click(function() {
	$("#item4_content").addClass("is-visible"), setTimeout(function() {
		$("#item3_content").removeClass("is-visible")
	}, 500)
}), $("#footer4").click(function() {
	$("#item5_content").addClass("is-visible"), setTimeout(function() {
		$("#item4_content").removeClass("is-visible")
	}, 500)
}), $("#footer5").click(function() {
	$("#item6_content").addClass("is-visible"), setTimeout(function() {
		$("#item5_content").removeClass("is-visible")
	}, 500)
}), $("#footer6").click(function() {
	$("#item7_content").addClass("is-visible"), setTimeout(function() {
		$("#item6_content").removeClass("is-visible")
	}, 500)
}); $("#footer7").click(function() {
	$("#item8_content").addClass("is-visible"), setTimeout(function() {
		$("#item7_content").removeClass("is-visible")
	}, 500)
}); $("#footer8").click(function() {
	$("#item9_content").addClass("is-visible"), setTimeout(function() {
		$("#item8_content").removeClass("is-visible")
	}, 500)
}); $("#footer9").click(function() {
	$("#item10_content").addClass("is-visible"), setTimeout(function() {
		$("#item9_content").removeClass("is-visible")
	}, 500)
}); $("#footer10").click(function() {
	$("#item11_content").addClass("is-visible"), setTimeout(function() {
		$("#item10_content").removeClass("is-visible")
	}, 500)
});