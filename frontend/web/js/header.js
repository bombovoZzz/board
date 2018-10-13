$(document).ready(function () {
	
	// автоопределение высоты блока header	
	$(function () {
		var header = $('#header-js'),
		    heightWrap = header.children().height();

		header.css('height', heightWrap);

		$(window).resize(function () {

			heightWrap = header.children().height();
			header.css('height', heightWrap);

		});

	});


});