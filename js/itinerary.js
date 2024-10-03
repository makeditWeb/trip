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
        let newDestination = $('#destination_template').clone();
        newDestination.attr('id', 'destination_' + destinationCount);
        newDestination.show();
        newDestination.insertBefore('.iti_btn_box');
    });
});




