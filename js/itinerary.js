$(document).ready(function () {
    // 화면 너비에 따라 모바일인지 여부를 판단
    const isMobile = window.innerWidth <= 768;

    // switchTab 함수: 지정한 탭으로 전환
    function switchTab(nextTab) {
        // 모든 탭 숨기기
        $('ul.tabs li').each(function () {
            $(this).removeClass('current');
            if (isMobile) {
                $(this).hide(); // 모바일 환경에서는 모든 탭을 숨기기
            }
        });

        // 선택된 탭 보이기
        const $nextTab = $(`ul.tabs li[data-tab="${nextTab}"]`);
        $nextTab.addClass('current');

        // 모바일 환경일 경우 선택된 탭만 보이도록 설정
        if (isMobile) {
            $nextTab.show(); // 다음 탭 li 요소를 보이도록 설정
        }

        // 모든 탭 컨텐츠 숨기고 선택된 탭의 컨텐츠만 보이게 설정
        $('.tab-content').removeClass('current');
        $(`#${nextTab}`).addClass('current');
    }

    // 다음, 이전 버튼 이벤트 핸들러
    $('#next_btn_1').click(function () { switchTab('tab-20'); });
    $('#next_btn_2').click(function () { switchTab('tab-30'); });
    $('#prev_btn_1').click(function () { switchTab('tab-10'); });
    $('#prev_btn_2').click(function () { switchTab('tab-20'); });

    // 목적지 추가 버튼
    let destinationCount = 1;
    $('#destination_add_btn').click(function () {
        destinationCount++;
        let newDestination = $('#destination_template').clone();
        newDestination.attr('id', 'destination_' + destinationCount);
        newDestination.show();
        newDestination.insertBefore('.iti_btn_box');
    });

    // 초기화: 모바일 환경일 때 첫 번째 탭만 보이도록 설정
    if (isMobile) {
        $('ul.tabs li').hide(); // 모든 탭 숨기기
        $('ul.tabs li.current').show(); // 현재 선택된 탭만 보이기
    }
});
