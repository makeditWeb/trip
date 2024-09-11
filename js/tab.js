$(document).ready(function(){
	
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})

	$('ul.tabs-2 li').click(function(){
		var tab_id_2 = $(this).attr('data-tab');

		$('ul.tabs-2 li').removeClass('current');
		$('.tab-content-2').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id_2).addClass('current');
	})

	$('ul.tabs-3 li').click(function(){
		var tab_id_3 = $(this).attr('data-tab');

		$('ul.tabs-3 li').removeClass('current');
		$('.tab-content-3').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id_3).addClass('current');
	})

})