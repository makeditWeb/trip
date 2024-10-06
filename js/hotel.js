$(function () {
    // 맞춤 추천 디테일 정보, 객실당 인원 수, 툴팁 토글 기능
    function toggleDisplay(element) {
        if ($(element).css('display') === 'none') {
            $(element).show();
        } else {
            $(element).hide();
        }
    }

    $('.detail_btn').click(() => toggleDisplay('.cont_detail'));
    $('.ipt_detail_btn').click(() => toggleDisplay('.ipt_detail'));
    $('.tooltip_btn').click(() => toggleDisplay('.tooltip_cont'));

    // select2 초기화
    $('.timeSelect').select2({
        minimumResultsForSearch: Infinity
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const roomDetailCard = document.querySelector('.room_detail_card'); // .room_detail_card 요소
    const totalBox = document.querySelector('.total_box'); // 총 가격 및 예약하기 섹션
    const accordionToggle = document.querySelector('.accordion-toggle'); // 열기 버튼
    const closeButton = roomDetailCard.querySelector('.close'); // X 버튼
    const accordionButton = accordionToggle.querySelector('.accordion-btn'); // chevron-up 버튼

    // X 버튼 클릭 시 .room_detail_card 숨기기
    closeButton.addEventListener('click', () => {
        roomDetailCard.classList.add('hidden'); // .room_detail_card 숨기기 (높이 0, 투명도 0)
        accordionToggle.style.display = 'block'; // chevron-up 버튼 보이기
        totalBox.style.display = 'block'; // 총 가격 및 예약 버튼은 계속 보이도록 설정
    });

    // chevron-up 버튼 클릭 시 .room_detail_card 보이기
    accordionButton.addEventListener('click', () => {
        roomDetailCard.classList.remove('hidden'); // .room_detail_card 다시 보이기
        accordionToggle.style.display = 'none'; // chevron-up 버튼 숨기기
        totalBox.style.display = 'block'; // 총 가격 및 예약 버튼은 계속 보이도록 설정
    });
});
