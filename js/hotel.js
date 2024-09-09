$(function() {

    // 맞춤 추천 디테일 정보
    $('.detail_btn').click(function() {
        if($('.cont_detail').css('display') == 'none'){
            $('.cont_detail').show();
        } else {
            $('.cont_detail').hide();
        }
    });

    // 객실당 인원 수
    $('.ipt_detail_btn').click(function() {
        if($('.ipt_detail').css('display') == 'none'){
            $('.ipt_detail').show();
        } else {
            $('.ipt_detail').hide();
        }
    });

    // tooltip
    $('.tooltip_btn').click(function() {
        if($('.tooltip_cont').css('display') == 'none'){
            $('.tooltip_cont').show();
        } else {
            $('.tooltip_cont').hide();
        }
    });

    $('.timeSelect').select2({
        minimumResultsForSearch: Infinity
    });
    
});


