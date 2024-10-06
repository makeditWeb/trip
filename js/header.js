// header
document.addEventListener('DOMContentLoaded', (event) => {
    const mypageName = document.getElementById('mypageName');
    const dropdownQuick = document.getElementById('dropdownQuick');
    const menuIcon = document.querySelector('.menu_icon');
    const mobileMenu = document.getElementById('mobileMenu');
    const closeIcon = document.querySelector('.close_icon'); // close 버튼 요소 선택

    // MyPage 드롭다운 제어
    if (mypageName) {
        mypageName.addEventListener('click', () => {
            if (dropdownQuick.style.display === "none" || dropdownQuick.style.display === "") {
                dropdownQuick.style.display = "flex";
            } else {
                dropdownQuick.style.display = "none";
            }
        });
    }

    // 드롭다운 외부 클릭 시 닫기
    document.addEventListener('click', (event) => {
        if (!mypageName.contains(event.target) && !dropdownQuick.contains(event.target)) {
            dropdownQuick.style.display = "none";
        }
    });

    // 모바일 메뉴 아이콘 클릭 시 메뉴 토글
    menuIcon.addEventListener('click', () => {
        // active 클래스 토글로 메뉴바 열고 닫기
        if (mobileMenu.classList.contains('active')) {
            mobileMenu.classList.remove('active');
            mobileMenu.style.left = '-100%'; // 모바일 메뉴가 왼쪽으로 사라지게 변경
        } else {
            mobileMenu.classList.add('active');
            mobileMenu.style.left = '0';
        }
    });

    // 모바일 메뉴 외부 클릭 시 메뉴 닫기
    document.addEventListener('click', (event) => {
        if (!menuIcon.contains(event.target) && !mobileMenu.contains(event.target)) {
            mobileMenu.classList.remove('active');
            mobileMenu.style.left = '-100%'; // 모바일 메뉴가 왼쪽으로 사라지게 변경
        }
    });

    // close 버튼 클릭 시 메뉴 닫기
    closeIcon.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        mobileMenu.style.left = '-100%'; // 모바일 메뉴가 왼쪽으로 사라지게 변경
    });

    // select2 초기화
    $(document).ready(function () {
        $('.select_language').select2({
            minimumResultsForSearch: Infinity
        });
        $('.select_money').select2({
            minimumResultsForSearch: Infinity
        });

        $('.countrySelect').select2({
            minimumResultsForSearch: Infinity
        });

        $('.citySelect').select2({
            minimumResultsForSearch: Infinity
        });

        $('.filterSelect').select2({
            minimumResultsForSearch: Infinity
        });
    });
});
