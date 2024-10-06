document.addEventListener('DOMContentLoaded', () => {
    const COLOR_TRACK = "#CBD5E1";
    const COLOR_RANGE = "#0EA5E9";

    // Get the sliders and tooltips
    const fromSlider = document.querySelector('#fromSlider');
    const toSlider = document.querySelector('#toSlider');
    const fromTooltip = document.querySelector('#fromSliderTooltip');
    const toTooltip = document.querySelector('#toSliderTooltip');

    function controlFromSlider(fromSlider, toSlider, fromTooltip, toTooltip) {
        const [from, to] = getParsed(fromSlider, toSlider);
        fillSlider(fromSlider, toSlider, COLOR_TRACK, COLOR_RANGE, toSlider);
        if (from > to) {
            fromSlider.value = to;
        }
        setTooltip(fromSlider, fromTooltip);
    }

    function controlToSlider(fromSlider, toSlider, fromTooltip, toTooltip) {
        const [from, to] = getParsed(fromSlider, toSlider);
        fillSlider(fromSlider, toSlider, COLOR_TRACK, COLOR_RANGE, toSlider);
        setToggleAccessible(toSlider);
        if (from <= to) {
            toSlider.value = to;
        } else {
            toSlider.value = from;
        }
        setTooltip(toSlider, toTooltip);
    }

    function getParsed(currentFrom, currentTo) {
        const from = parseInt(currentFrom.value, 10);
        const to = parseInt(currentTo.value, 10);
        return [from, to];
    }

    function fillSlider(from, to, sliderColor, rangeColor, controlSlider) {
        const rangeDistance = to.max - to.min;
        const fromPosition = from.value - to.min;
        const toPosition = to.value - to.min;
        controlSlider.style.background = `linear-gradient(
          to right,
          ${sliderColor} 0%,
          ${sliderColor} ${(fromPosition) / (rangeDistance) * 100}%,
          ${rangeColor} ${((fromPosition) / (rangeDistance)) * 100}%,
          ${rangeColor} ${(toPosition) / (rangeDistance) * 100}%, 
          ${sliderColor} ${(toPosition) / (rangeDistance) * 100}%, 
          ${sliderColor} 100%)`;
    }

    function setToggleAccessible(currentTarget) {
        const toSlider = document.querySelector('#toSlider');
        if (Number(currentTarget.value) <= 0) {
            toSlider.style.zIndex = 2;
        } else {
            toSlider.style.zIndex = 0;
        }
    }

    function setTooltip(slider, tooltip) {
        const value = slider.value;
        tooltip.textContent = `$${value}`;
    }

    // Events
    fromSlider.oninput = () => controlFromSlider(fromSlider, toSlider, fromTooltip, toTooltip);
    toSlider.oninput = () => controlToSlider(fromSlider, toSlider, fromTooltip, toTooltip);

    // Initial load
    fillSlider(fromSlider, toSlider, COLOR_TRACK, COLOR_RANGE, toSlider);
    setToggleAccessible(toSlider);
    setTooltip(fromSlider, fromTooltip);
    setTooltip(toSlider, toTooltip);



    const filterToggleBtn = document.getElementById('filterToggleBtn'); // 필터 토글 버튼
    const filterAside = document.getElementById('filterAside'); // aside 요소
    const filterCloseBtn = document.getElementById('filterCloseBtn'); // 필터 닫기 버튼

    // 필터 버튼 클릭 시 aside 보이기/숨기기
    filterToggleBtn.addEventListener('click', () => {
        filterAside.classList.toggle('active'); // active 클래스 추가/제거
    });

    // X 버튼 클릭 시 aside 숨기기
    filterCloseBtn.addEventListener('click', () => {
        filterAside.classList.remove('active'); // active 클래스 제거
    });

    // 모바일 환경에서만 필터 버튼 보이기 설정
    function showFilterButtonOnMobile() {
        if (window.innerWidth <= 768) {
            filterToggleBtn.style.display = 'block';
        } else {
            filterToggleBtn.style.display = 'none';
        }
    }

    // 페이지 로드 시 및 창 크기 변경 시 버튼 보이기 설정
    showFilterButtonOnMobile();
    window.addEventListener('resize', showFilterButtonOnMobile);
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

