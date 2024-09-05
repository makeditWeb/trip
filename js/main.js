// sign up tab

$(document).ready(function() {
    function validateTab1() {
        var isValid = true;

        if ($('#name').val() === '' || $('#password').val() === '' || $('#confirm_password').val() === '' || $('#email').val() === '' || !$('#check01').is(':checked') || !$('#check02').is(':checked')) {
            isValid = false;
        }

        if (isValid) {
            $('#next_btn_1').css('background', 'var(--main-color)').prop('disabled', false);
        } else {
            $('#next_btn_1').css('background', 'var(--main-gray)').prop('disabled', true);
        }

        return isValid;
    }

    function validateTab2() {
        var isValid = true;
        if ($('#current_living').val() === '' || $('#passport_country').val() === '' || $('#birth_year').val() === '') {
            isValid = false;
        }
        if (isValid) {
            $('#next_btn_2').css('background', 'var(--main-color)').prop('disabled', false);
        } else {
            $('#next_btn_2').css('background', 'var(--main-gray)').prop('disabled', true);
        }
        return isValid;
    }

    function updateButtonState() {
        validateTab1();
        validateTab2();
    }

    $('input, select').on('change keyup', function() {
        updateButtonState();
    });

    $('#email_submit').click(function() {
        $('#email_check').show();
    });

    $('#next_btn_1').click(function() {
        if (validateTab1()) {
            if ($('#password').val() !== $('#confirm_password').val()) {
                alert('Password and Confirm Password do not match.');
            } else {
                $('ul.tabs li[data-tab="tab-2"]').click();
            }
        } else {
            alert('Please complete all required fields and agree to the terms.');
        }
    });

    $('#next_btn_2').click(function() {
        if (validateTab2()) {
            $('ul.tabs li[data-tab="tab-3"]').click();
        } else {
            alert('Please complete all required fields.');
        }
    });

    $('#prev_btn_2').click(function() {
        $('ul.tabs li[data-tab="tab-1"]').click();
    });

    $('ul.tabs li').click(function() {
        var tab_id = $(this).attr('data-tab');
        if ((tab_id === 'tab-1') || (tab_id === 'tab-2' && validateTab1()) || (tab_id === 'tab-3' && validateTab2())) {
            $('ul.tabs li').removeClass('current');
            $('.tab-content').removeClass('current');
            $(this).addClass('current');
            $("#" + tab_id).addClass('current');
        }
    });

    updateButtonState();
});





document.querySelectorAll('.recommend_btn').forEach(function(btn) {
    btn.addEventListener('click', function(event) {
        event.stopPropagation(); // 클릭 이벤트가 부모로 전파되지 않게 막음
        event.preventDefault();  // 기본 링크 이동을 막음

        var heartImage = this.querySelector('.heart_image');
        var currentSrc = heartImage.src.split('/').pop(); // 현재 src의 파일명만 추출

        if (currentSrc === 'heart_b.png') {
            heartImage.src = '/image/sub/heart.png';
        } else {
            heartImage.src = '/image/sub/heart_b.png';
        }
    });
});
