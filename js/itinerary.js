function reloadScript() {
    const scriptElement = document.querySelector('script[src="/js/modal.js"]');
    if (scriptElement) {
        scriptElement.remove();
    }
    const newScriptElement = document.createElement('script');
    newScriptElement.src = '/js/modal.js';
    document.body.appendChild(newScriptElement);
}

$(document).ready(function() {
    // switchTab
    function switchTab(nextTab) {
        $('ul.tabs li').each(function() {
            if ($(this).data('tab') <= nextTab) {
                $(this).addClass('current');
            } else {
                $(this).removeClass('current');
            }
        });
        $('.tab-content').removeClass('current');
        $(`#${nextTab}`).addClass('current');
    }
    $('#next_btn_1').click(function() { switchTab('tab-20'); });
    $('#next_btn_2').click(function() { switchTab('tab-30'); });
    $('#prev_btn_1').click(function() { switchTab('tab-10'); });
    $('#prev_btn_2').click(function() { switchTab('tab-20'); });

    // 목적지 추가
    let destinationCount = 1;
    $('#destination_add_btn').click(function() {
        destinationCount++;
        let newDestination = $('#destination_template').clone(true);
        newDestination.attr('id', 'destination_' + destinationCount);
        newDestination.show();
        newDestination.insertBefore('.iti_btn_box');
        newDestination.find(".icon_datepicker").removeClass('hasDatepicker').datepicker();
        newDestination.find(".que_tit .btn").addClass('view_more');

        reloadScript();
    });

});




